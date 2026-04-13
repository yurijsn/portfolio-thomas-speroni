import { COPY } from '../config/site';

// ── Citação Freud ─────────────────────────────────────────────────────────────
// Seção fundo escuro #1C1917
// Citação em Playfair Display Italic, grande, centrada
// Autor em Playfair Display SC — small caps

export default function CitacaoFreud() {
  const { texto, autor } = COPY.citacaoFreud;

  return (
    <section
      className="section-dark"
      aria-label={`Citação de ${autor}`}
      style={{
        paddingBlock: 'var(--space-xl)',
      }}
    >
      <div className="container">
        {/* Marca de abertura de citação — ornamento tipográfico */}
        <div
          className="reveal"
          style={{ textAlign: 'center', marginBottom: 'var(--space-sm)' }}
          aria-hidden="true"
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(4rem, 8vw, 7rem)',
              lineHeight: 0.7,
              color: 'var(--color-accent-inverse)',
              opacity: 0.4,
              display: 'block',
            }}
          >
            "
          </span>
        </div>

        {/* Texto da citação */}
        <blockquote
          cite="https://pt.wikiquote.org/wiki/Sigmund_Freud"
          style={{
            textAlign: 'center',
          }}
        >
          <p
            className="col-quote reveal reveal-delay-1"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'var(--text-quote)',
              fontWeight: 400,
              lineHeight: 'var(--leading-quote)',
              letterSpacing: 'var(--tracking-display)',
              color: 'var(--color-text-inverse)',
            }}
          >
            {texto}
          </p>

          {/* Linha divisória */}
          <div
            className="reveal reveal-delay-2"
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBlock: 'var(--space-lg)',
            }}
            aria-hidden="true"
          >
            <hr
              style={{
                border: 'none',
                borderTop: '1px solid rgba(240,235,225,0.2)',
                width: '4rem',
              }}
            />
          </div>

          {/* Autor */}
          <footer>
            <cite
              className="reveal reveal-delay-3"
              style={{
                fontFamily: 'var(--font-display-sc)',
                fontSize: 'var(--text-label)',
                letterSpacing: 'var(--tracking-label)',
                fontStyle: 'normal',
                color: 'rgba(240,235,225,0.5)',
                display: 'block',
              }}
            >
              {autor.toUpperCase()}
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
