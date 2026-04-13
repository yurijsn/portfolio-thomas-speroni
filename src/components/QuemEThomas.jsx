import { CLIENTE, COPY } from '../config/site';

// ── Quem é Thomas ─────────────────────────────────────────────────────────────
// Seção de apresentação editorial
// Texto em col-text (72ch), sem cards, sem ícones
// Foto placeholder responsiva com proporção de retrato

export default function QuemEThomas() {
  const { paragrafos } = COPY.quemEThomas;

  return (
    <section
      id="sobre"
      aria-labelledby="sobre-heading"
      style={{
        paddingTop: 'var(--space-lg)',
        paddingBottom: 'var(--space-2xl)',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="container">
        <div className="grid-editorial" style={{ alignItems: 'start' }}>

          {/* Coluna da foto — aparece primeiro (acima no mobile, esquerda no desktop) */}
          <aside
            className="reveal"
            aria-label="Foto de Thomas Speroni"
            style={{ position: 'relative' }}
          >
            <div
              style={{
                aspectRatio: '3 / 4',
                backgroundColor: 'var(--color-surface)',
                width: '100%',
                maxWidth: '420px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <picture style={{ display: 'contents' }}>
                <source srcSet={`${import.meta.env.BASE_URL}assets/thomas-speroni.avif`} type="image/avif" />
                <img
                  src={`${import.meta.env.BASE_URL}assets/thomas-speroni.avif`}
                  alt="Thomas Speroni, psicanalista e psicólogo"
                  width={420}
                  height={560}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                  onError={(e) => {
                    e.currentTarget.closest('picture').style.display = 'none';
                    e.currentTarget.closest('picture').nextElementSibling.style.display = 'flex';
                  }}
                />
              </picture>
              {/* Fallback — placeholder tipográfico */}
              <div
                style={{
                  display: 'none',
                  position: 'absolute',
                  inset: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: 'var(--space-xs)',
                  backgroundColor: 'var(--color-surface)',
                }}
                aria-hidden="true"
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-h2)',
                    fontStyle: 'italic',
                    color: 'var(--color-text-light)',
                    opacity: 0.4,
                  }}
                >
                  T.S.
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display-sc)',
                    fontSize: 'var(--text-label)',
                    letterSpacing: 'var(--tracking-label)',
                    color: 'var(--color-text-light)',
                    opacity: 0.3,
                  }}
                >
                  Foto
                </span>
              </div>
            </div>
          </aside>

          {/* Coluna de texto */}
          <div>
            {/* Rótulo de seção */}
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
              Sobre
            </p>

            {/* Paragrafos do texto fixo */}
            <div
              className="col-text"
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}
            >
              <p
                id="sobre-heading"
                className="reveal reveal-delay-1"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'var(--text-h3)',
                  fontWeight: 400,
                  lineHeight: 'var(--leading-display)',
                  color: 'var(--color-text)',
                }}
              >
                {paragrafos[0]}
              </p>

              <p
                className="reveal reveal-delay-2"
                style={{
                  fontSize: 'var(--text-body)',
                  fontWeight: 300,
                  lineHeight: 'var(--leading-body)',
                  color: 'var(--color-text)',
                }}
              >
                {paragrafos[1]}
              </p>

              <p
                className="reveal reveal-delay-3"
                style={{
                  fontSize: 'var(--text-body)',
                  fontWeight: 300,
                  lineHeight: 'var(--leading-body)',
                  color: 'var(--color-text)',
                }}
              >
                {paragrafos[2]}
              </p>
            </div>

            {/* Badge CRP */}
            <div
              className="reveal reveal-delay-4"
              style={{ marginTop: 'var(--space-lg)' }}
            >
              <span
                className="badge-crp"
                aria-label={`Registro no Conselho Regional de Psicologia: ${CLIENTE.crp}`}
              >
                {CLIENTE.crp}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
