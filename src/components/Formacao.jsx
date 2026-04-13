import { CLIENTE, COPY } from '../config/site';

// ── Formação ──────────────────────────────────────────────────────────────────
// Dois blocos: Formação Acadêmica + Atuação
// Acadêmica: grau em destaque, instituição, local, dissertação e menção
// Atuação: lista editorial numerada

export default function Formacao() {
  const { h2, academica, atuacao } = COPY.formacao;

  return (
    <section
      id="formacao"
      aria-labelledby="formacao-heading"
      style={{
        paddingTop: 'var(--space-lg)',
        paddingBottom: 'var(--space-2xl)',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="container">

        {/* Linha divisória superior */}
        <hr className="rule reveal" style={{ marginBottom: 'var(--space-lg)' }} aria-hidden="true" />

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
          Currículo
        </p>

        {/* Título */}
        <h2
          id="formacao-heading"
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

        {/* ── Bloco 1: Formação Acadêmica ── */}
        <div
          className="col-text reveal reveal-delay-2"
          style={{ marginBottom: 'var(--space-2xl)' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-display-sc)',
              fontSize: 'var(--text-label)',
              letterSpacing: 'var(--tracking-label)',
              color: 'var(--color-text-light)',
              marginBottom: 'var(--space-lg)',
              textTransform: 'uppercase',
            }}
          >
            Formação Acadêmica
          </p>

          <ul style={{ listStyle: 'none' }} aria-label="Formação acadêmica de Thomas Speroni">
            {academica.map((item, i) => (
              <li
                key={item.id}
                className={`reveal reveal-delay-${Math.min(i + 2, 5)}`}
                style={{
                  paddingBlock: 'var(--space-lg)',
                  borderTop: '1px solid var(--color-rule)',
                }}
              >
                {/* Grau */}
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-h3)',
                    fontWeight: 400,
                    letterSpacing: 'var(--tracking-display)',
                    lineHeight: 'var(--leading-display)',
                    color: 'var(--color-text)',
                    marginBottom: 'var(--space-2xs)',
                  }}
                >
                  {item.grau}
                </p>

                {/* Instituição */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 300,
                    color: 'var(--color-text)',
                    marginBottom: 'var(--space-2xs)',
                  }}
                >
                  {item.instituicao}
                </p>

                {/* Local */}
                <p
                  style={{
                    fontFamily: 'var(--font-display-sc)',
                    fontSize: 'var(--text-label)',
                    letterSpacing: 'var(--tracking-label)',
                    color: 'var(--color-moss)',
                    textTransform: 'lowercase',
                    marginBottom: item.detalhe ? 'var(--space-md)' : 0,
                  }}
                >
                  {item.local}
                </p>

                {/* Dissertação + menção (quando existir) */}
                {item.detalhe && (
                  <div
                    style={{
                      borderLeft: '2px solid var(--color-accent)',
                      paddingLeft: 'var(--space-md)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--space-xs)',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontStyle: 'italic',
                        fontSize: 'var(--text-body)',
                        fontWeight: 400,
                        color: 'var(--color-text)',
                        lineHeight: 'var(--leading-body)',
                      }}
                    >
                      {item.detalhe}
                    </p>
                    {item.mencao && (
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: 'var(--text-small)',
                          fontWeight: 300,
                          color: 'var(--color-text-light)',
                          lineHeight: 'var(--leading-body)',
                        }}
                      >
                        {item.mencao}
                      </p>
                    )}
                  </div>
                )}
              </li>
            ))}

            {/* Borda inferior do último item */}
            <li
              style={{ borderTop: '1px solid var(--color-rule)', height: 0 }}
              aria-hidden="true"
            />
          </ul>
        </div>

        {/* ── Bloco 2: Atuação ── */}
        <div className="col-text reveal">
          <p
            style={{
              fontFamily: 'var(--font-display-sc)',
              fontSize: 'var(--text-small)',
              letterSpacing: 'var(--tracking-label)',
              color: 'var(--color-text)',
              marginBottom: 'var(--space-lg)',
              textTransform: 'uppercase',
            }}
          >
            Atuação
          </p>

          <ul className="formacao-list" aria-label="Atuação profissional de Thomas Speroni">
            {atuacao.map((item, i) => (
              <li
                key={item.id}
                className={`formacao-list__item reveal reveal-delay-${Math.min(i + 1, 5)}`}
              >
                <span className="formacao-list__num" aria-hidden="true">
                  {String(item.id).padStart(2, '0')}
                </span>
                <span className="formacao-list__text">
                  {item.italic
                    ? renderComItalico(item.texto, item.italic)
                    : item.texto}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Badge CRP */}
        <div className="reveal" style={{ marginTop: 'var(--space-lg)' }}>
          <span
            className="badge-crp"
            aria-label={`Registro no Conselho Regional de Psicologia: ${CLIENTE.crp}`}
          >
            {CLIENTE.crp}
          </span>
        </div>

      </div>
    </section>
  );
}

// Envolve trecho específico em <em> sem dangerouslySetInnerHTML
function renderComItalico(texto, trechoItalic) {
  const idx = texto.indexOf(trechoItalic);
  if (idx === -1) return texto;
  return (
    <>
      {texto.slice(0, idx)}
      <em>{trechoItalic}</em>
      {texto.slice(idx + trechoItalic.length)}
    </>
  );
}
