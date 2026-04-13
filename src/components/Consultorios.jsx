import { CLIENTE, COPY } from '../config/site';

// ── Consultórios ──────────────────────────────────────────────────────────────
// Grid 1 col mobile → 2 col tablet
// Cada consultório: cidade em destaque, endereço, referência
// Linha divisória entre consultórios no mobile

export default function Consultorios() {
  const { h2, locais, cta } = COPY.consultorios;

  return (
    <section
      id="consultorios"
      aria-labelledby="consultorios-heading"
      style={{
        paddingTop: 'var(--space-2xl)',
        paddingBottom: 'var(--space-2xl)',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      <div className="container">

        {/* Rótulo */}
        <p
          className="reveal"
          style={{
            fontFamily: 'var(--font-display-sc)',
            fontSize: 'var(--text-label)',
            letterSpacing: 'var(--tracking-label)',
            color: 'var(--color-accent)',
            marginBottom: 'var(--space-md)',
            textTransform: 'uppercase',
          }}
          aria-hidden="true"
        >
          Onde
        </p>

        {/* Título */}
        <h2
          id="consultorios-heading"
          className="reveal reveal-delay-1"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-h2)',
            fontWeight: 400,
            lineHeight: 'var(--leading-display)',
            letterSpacing: 'var(--tracking-display)',
            color: 'var(--color-text)',
            marginBottom: 'var(--space-xl)',
          }}
        >
          {h2}
        </h2>

        {/* Grid de consultórios */}
        <div className="grid-consultorios">
          {locais.map((local, i) => (
            <article
              key={local.id}
              className={`reveal reveal-delay-${i + 1}`}
              aria-label={`Consultório em ${local.cidade}`}
              style={{
                paddingTop: 'var(--space-md)',
                borderTop: '1px solid var(--color-rule)',
              }}
            >
              {/* Número do consultório */}
              <p
                style={{
                  fontFamily: 'var(--font-display-sc)',
                  fontSize: 'var(--text-label)',
                  letterSpacing: 'var(--tracking-label)',
                  color: 'var(--color-accent)',
                  marginBottom: 'var(--space-sm)',
                }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </p>

              {/* Cidade */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-h3)',
                  fontWeight: 700,
                  lineHeight: 'var(--leading-display)',
                  letterSpacing: 'var(--tracking-display)',
                  color: 'var(--color-text)',
                  marginBottom: 'var(--space-xs)',
                }}
              >
                {local.cidade}
              </h3>

              {/* Endereço */}
              <address
                style={{
                  fontStyle: 'normal',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-2xs)',
                }}
              >
                <span
                  style={{
                    fontSize: 'var(--text-body)',
                    fontWeight: 300,
                    color: 'var(--color-text)',
                  }}
                >
                  {local.endereco}
                </span>
                <span
                  style={{
                    fontSize: 'var(--text-small)',
                    fontWeight: 300,
                    color: 'var(--color-text-light)',
                    fontStyle: 'italic',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {local.referencia}
                </span>
              </address>
            </article>
          ))}
        </div>

        {/* Linha divisória */}
        <hr
          className="rule reveal"
          style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-lg)' }}
          aria-hidden="true"
        />

        {/* Modalidades + WhatsApp + CTA */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-md)',
          }}
        >
          <p
            style={{
              fontSize: 'var(--text-small)',
              fontWeight: 300,
              color: 'var(--color-text-light)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2xs)',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display-sc)',
                fontSize: 'var(--text-label)',
                letterSpacing: 'var(--tracking-label)',
                textTransform: 'uppercase',
              }}
            >
              WhatsApp / Telegram
            </span>
            <span aria-hidden="true">·</span>
            <a
              href={CLIENTE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-editorial"
              aria-label={`Contato via WhatsApp ou Telegram: ${CLIENTE.whatsappDisplay}`}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-body)',
              }}
            >
              {CLIENTE.whatsappDisplay}
            </a>
          </p>

          <div style={{ paddingTop: 'var(--space-sm)' }}>
            <a
              href={CLIENTE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label="Marcar uma conversa com Thomas Speroni pelo WhatsApp"
            >
              {cta}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
