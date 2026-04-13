import { useEffect } from 'react';

// ── ArticleModal ──────────────────────────────────────────────────────────────
// Overlay com texto completo do artigo
// Fecha com ESC, clique no backdrop ou botão fechar
// Fundo: --color-bg (areia), tipografia editorial

export default function ArticleModal({ artigo, onClose }) {
  // Fechar com ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    // Bloquear scroll do body enquanto modal aberto
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!artigo) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-titulo"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <article className="modal-content">

        {/* Header do modal */}
        <header className="modal-header">
          <div className="modal-meta">
            <span className="modal-autor">{artigo.autor}</span>
            <span className="modal-sep" aria-hidden="true">·</span>
            <span className="modal-leitura">{artigo.leitura}</span>
          </div>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Fechar artigo"
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        {/* Título */}
        <h2 id="modal-titulo" className="modal-titulo">
          {artigo.titulo}
        </h2>

        <hr className="modal-rule" aria-hidden="true" />

        {/* Corpo do artigo */}
        <div className="modal-corpo">
          {artigo.conteudo.map((bloco, i) => {
            if (bloco.tipo === 'h2') {
              return (
                <h3 key={i} className="modal-section-title">
                  {bloco.texto}
                </h3>
              );
            }
            return (
              <p key={i} className="modal-paragrafo">
                {bloco.texto}
              </p>
            );
          })}
        </div>

        {/* Rodapé */}
        <footer className="modal-footer">
          <button className="btn-primary" onClick={onClose}>
            Fechar
          </button>
        </footer>

      </article>
    </div>
  );
}
