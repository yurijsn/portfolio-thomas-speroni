import { useEffect, useState, useRef } from 'react';
import { CLIENTE, COPY } from '../config/site';

// ── Hero — animação letra por letra + headline fade-in ────────────────────────
// THOMAS SPERONI: cada caractere aparece com delay acumulado de 80ms
// Quebra de linha só ocorre entre palavras (cada palavra em span nowrap)
// Nav centralizada aparece com o headline

const NOME = CLIENTE.nome.toUpperCase(); // "THOMAS SPERONI"
const PALAVRAS = NOME.split(' ');        // ["THOMAS", "SPERONI"]
const CHARS = NOME.split('');
const CHAR_DELAY = 80; // ms por caractere

export default function Hero() {
  const [visibleChars, setVisibleChars] = useState(0);
  const [headlineVisible, setHeadlineVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    CHARS.forEach((_, i) => {
      setTimeout(() => {
        setVisibleChars((prev) => prev + 1);
      }, i * CHAR_DELAY);
    });

    const headlineDelay = CHARS.length * CHAR_DELAY + 300;
    setTimeout(() => setHeadlineVisible(true), headlineDelay);
    setTimeout(() => setCtaVisible(true), headlineDelay + 400);
  }, []);

  // Reconstrói os chars agrupados por palavra para garantir nowrap por palavra
  let charIndex = 0;
  const palavrasComChars = PALAVRAS.map((palavra) => {
    const letras = palavra.split('').map((char, i) => {
      const idx = charIndex + i;
      return { char, idx };
    });
    charIndex += palavra.length + 1; // +1 pelo espaço
    return letras;
  });

  return (
    <section
      aria-label="Apresentação"
      style={{
        paddingTop: 'var(--space-2xl)',
        paddingBottom: 'var(--space-xl)',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="container">

        {/* Nome — cada palavra em nowrap, quebra só entre palavras */}
        <h1
          aria-label={CLIENTE.nome}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-hero)',
            fontWeight: 400,
            lineHeight: 'var(--leading-hero)',
            letterSpacing: 'var(--tracking-hero)',
            color: 'var(--color-text)',
            marginBottom: 'var(--space-md)',
            userSelect: 'none',
            textAlign: 'center',
          }}
        >
          {palavrasComChars.map((letras, wi) => (
            <span
              key={wi}
              style={{
                display: 'inline-block',
                whiteSpace: 'nowrap',
                // Espaço entre palavras
                marginRight: wi < palavrasComChars.length - 1 ? '0.28em' : 0,
              }}
            >
              {letras.map(({ char, idx }) => (
                <span
                  key={idx}
                  aria-hidden="true"
                  style={{
                    display: 'inline-block',
                    opacity: idx < visibleChars ? 1 : 0,
                    transform: idx < visibleChars ? 'translateY(0)' : 'translateY(0.15em)',
                    transition: 'opacity 400ms ease-out, transform 400ms ease-out',
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        {/* Nav centralizada — aparece com o headline */}
        <nav
          aria-label="Menu de navegação principal"
          style={{
            marginBottom: 'var(--space-lg)',
            opacity: headlineVisible ? 1 : 0,
            transform: headlineVisible ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 500ms ease-out, transform 500ms ease-out',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 'var(--space-md)',
            }}
          >
            {COPY.footer.nav.filter((item) => item.label !== 'Home').map((item, i) => (
              <li key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    style={{
                      color: 'var(--color-rule)',
                      fontSize: 'var(--text-label)',
                      pointerEvents: 'none',
                      userSelect: 'none',
                    }}
                  >
                    ·
                  </span>
                )}
                <a
                  href={item.href}
                  style={{
                    fontFamily: 'var(--font-display-sc)',
                    fontSize: 'var(--text-label)',
                    letterSpacing: 'var(--tracking-label)',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-light)',
                    textDecoration: 'none',
                    transition: 'color 200ms ease-out',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-text)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-light)'; }}
                  onFocus={(e) => { e.currentTarget.style.color = 'var(--color-text)'; }}
                  onBlur={(e) => { e.currentTarget.style.color = 'var(--color-text-light)'; }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Linha divisória */}
        <hr
          className="rule"
          style={{
            marginBottom: 'var(--space-lg)',
            opacity: headlineVisible ? 1 : 0,
            transition: 'opacity 600ms ease-out',
          }}
        />

        {/* Headline */}
        <div
          style={{
            maxWidth: '60ch',
            opacity: headlineVisible ? 1 : 0,
            transform: headlineVisible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 600ms ease-out, transform 600ms ease-out',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'var(--text-headline)',
              fontWeight: 400,
              lineHeight: 'var(--leading-quote)',
              color: 'var(--color-text-light)',
              marginBottom: 'var(--space-lg)',
            }}
          >
            {COPY.hero.headline}
          </p>
        </div>

        {/* CTA */}
        <div
          style={{
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 500ms ease-out, transform 500ms ease-out',
          }}
        >
          <a
            href={CLIENTE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            aria-label="Marcar uma conversa com Thomas Speroni pelo WhatsApp"
          >
            {COPY.hero.cta}
          </a>
        </div>

        {/* Título + CRP */}
        <div
          style={{
            marginTop: 'var(--space-xl)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-sm)',
            flexWrap: 'wrap',
            opacity: ctaVisible ? 1 : 0,
            transition: 'opacity 700ms ease-out 200ms',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display-sc)',
              fontSize: 'var(--text-body)',
              letterSpacing: 'var(--tracking-label)',
              color: 'var(--color-text)',
              textTransform: 'uppercase',
            }}
          >
            {CLIENTE.titulo}
          </span>
          <span
            style={{
              width: '1px',
              height: '0.875rem',
              backgroundColor: 'var(--color-rule)',
              display: 'inline-block',
            }}
            aria-hidden="true"
          />
          <span className="badge-crp" aria-label={`Registro profissional: ${CLIENTE.crp}`}>
            {CLIENTE.crp}
          </span>
        </div>

      </div>
    </section>
  );
}
