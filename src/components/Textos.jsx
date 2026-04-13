import { useState } from 'react';
import { COPY } from '../config/site';
import ArticleModal from './ArticleModal';

// ── Textos ────────────────────────────────────────────────────────────────────
// Lista editorial de artigos — títulos clicáveis abrem modal com texto completo
// Grid: número (2rem) + conteúdo (1fr)
// Hover no título: muda para Playfair Italic

export default function Textos() {
  const { h2, artigos } = COPY.textos;
  const [artigoAberto, setArtigoAberto] = useState(null);

  return (
    <>
      <section
        id="textos"
        aria-labelledby="textos-heading"
        style={{
          paddingTop: 'var(--space-lg)',
          paddingBottom: 'var(--space-2xl)',
          backgroundColor: 'var(--color-bg)',
        }}
      >
        <div className="container">

          {/* Linha divisória */}
          <hr className="rule reveal" style={{ marginBottom: 'var(--space-lg)' }} aria-hidden="true" />

          {/* Título da seção */}
          <h2
            id="textos-heading"
            className="reveal reveal-delay-1"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-h2)',
              fontWeight: 400,
              lineHeight: 'var(--leading-display)',
              letterSpacing: 'var(--tracking-display)',
              color: 'var(--color-text)',
              marginBottom: 'var(--space-lg)',
            }}
          >
            {h2}
          </h2>

          {/* Lista de artigos */}
          <ol className="article-list" aria-label="Textos de Thomas Speroni">
            {artigos.map((artigo, i) => (
              <li
                key={artigo.id}
                className={`article-list__item reveal reveal-delay-${Math.min(i + 2, 5)}`}
              >
                {/* Número */}
                <span className="article-list__number" aria-hidden="true">
                  {String(artigo.id).padStart(2, '0')}
                </span>

                {/* Conteúdo */}
                <div>
                  {/* Título — clique abre modal */}
                  <button
                    className="article-list__title article-list__title--btn"
                    onClick={() => setArtigoAberto(artigo)}
                    aria-label={`Ler texto completo: ${artigo.titulo}`}
                  >
                    {artigo.titulo}
                  </button>

                  {/* Leitura estimada em small caps */}
                  <p className="article-list__meta">
                    {artigo.leitura}
                  </p>

                  {/* Lede */}
                  <p className="article-list__lede">{artigo.lede}</p>
                </div>
              </li>
            ))}
          </ol>

        </div>
      </section>

      {/* Modal do artigo */}
      {artigoAberto && (
        <ArticleModal
          artigo={artigoAberto}
          onClose={() => setArtigoAberto(null)}
        />
      )}
    </>
  );
}
