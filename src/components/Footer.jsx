import { CLIENTE, COPY } from '../config/site';

// ── Footer ────────────────────────────────────────────────────────────────────
// Minimalista — nome, CRP, nav, WhatsApp, copyright
// Fundo: --color-bg-dark (editorial, alinhado com Citação e Contato)

export default function Footer() {
  const { nav, copyright } = COPY.footer;

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-bg-dark)',
        paddingTop: 'var(--space-lg)',
        paddingBottom: 'var(--space-lg)',
        borderTop: '1px solid rgba(240,235,225,0.08)',
      }}
      aria-label="Rodapé do site de Thomas Speroni"
    >
      <div className="container">

        {/* Linha superior — Nome + nav */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            flexWrap: 'wrap',
            gap: 'var(--space-md)',
            marginBottom: 'var(--space-md)',
          }}
        >
          {/* Identidade */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-headline)',
                fontWeight: 400,
                color: 'var(--color-text-inverse)',
                letterSpacing: 'var(--tracking-display)',
              }}
            >
              {CLIENTE.nome}
            </span>
            <span
              className="badge-crp"
              style={{
                color: 'rgba(240,235,225,0.4)',
                borderColor: 'rgba(240,235,225,0.2)',
              }}
              aria-label={`Registro no Conselho Regional de Psicologia: ${CLIENTE.crp}`}
            >
              {CLIENTE.crp}
            </span>
          </div>

          {/* Navegação */}
          <nav aria-label="Menu de navegação do rodapé">
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                gap: 'var(--space-md)',
                flexWrap: 'wrap',
              }}
            >
              {nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="link-editorial--inverse"
                    style={{
                      fontFamily: 'var(--font-display-sc)',
                      fontSize: 'var(--text-label)',
                      letterSpacing: 'var(--tracking-label)',
                      color: 'rgba(240,235,225,0.5)',
                      textDecoration: 'none',
                      position: 'relative',
                      transition: 'color 250ms ease-out',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-text-inverse)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(240,235,225,0.5)';
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.color = 'var(--color-text-inverse)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.color = 'rgba(240,235,225,0.5)';
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Linha divisória */}
        <hr
          style={{
            border: 'none',
            borderTop: '1px solid rgba(240,235,225,0.08)',
            marginBottom: 'var(--space-md)',
          }}
          aria-hidden="true"
        />

        {/* Linha inferior — contatos + copyright */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-sm)',
          }}
        >
          {/* Contatos */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)', alignItems: 'center' }}>
            {[
              { href: CLIENTE.whatsappUrl, label: CLIENTE.whatsappDisplay, external: true, ariaLabel: `WhatsApp: ${CLIENTE.whatsappDisplay}` },
              { href: `mailto:${CLIENTE.email}`, label: CLIENTE.email, external: false, ariaLabel: `E-mail: ${CLIENTE.email}` },
              { href: CLIENTE.linkedin, label: 'LinkedIn', external: true, ariaLabel: 'LinkedIn de Thomas Speroni' },
              { href: CLIENTE.lattes, label: 'Currículo Lattes', external: true, ariaLabel: 'Currículo Lattes de Thomas Speroni' },
              { href: CLIENTE.orcid, label: 'ORCID', external: true, ariaLabel: 'Perfil ORCID de Thomas Speroni' },
            ].map((item, i, arr) => (
              <>
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 300,
                    color: 'rgba(240,235,225,0.55)',
                    textDecoration: 'none',
                    transition: 'color 250ms ease-out',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(240,235,225,0.9)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(240,235,225,0.55)'; }}
                  onFocus={(e) => { e.currentTarget.style.color = 'rgba(240,235,225,0.9)'; }}
                  onBlur={(e) => { e.currentTarget.style.color = 'rgba(240,235,225,0.55)'; }}
                  aria-label={item.ariaLabel}
                >
                  {item.label}
                </a>
                {i < arr.length - 1 && (
                  <span key={`sep-${i}`} aria-hidden="true" style={{ color: 'rgba(240,235,225,0.2)', fontSize: 'var(--text-body)' }}>·</span>
                )}
              </>
            ))}
          </div>

          {/* Copyright */}
          <small
            style={{
              fontFamily: 'var(--font-display-sc)',
              fontSize: 'var(--text-label)',
              letterSpacing: 'var(--tracking-label)',
              color: 'rgba(240,235,225,0.3)',
              display: 'block',
            }}
          >
            {copyright}
          </small>
        </div>

      </div>
    </footer>
  );
}
