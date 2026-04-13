// ─────────────────────────────────────────────────────────────────────────────
// ANALYTICS HELPER — Thomas Speroni
// Helper centralizado para disparar eventos via dataLayer (GTM/GA4).
// Nunca chame window.dataLayer diretamente nos componentes — use este módulo.
// ─────────────────────────────────────────────────────────────────────────────

// Garante que dataLayer existe antes de qualquer push
window.dataLayer = window.dataLayer || [];

/**
 * Dispara um evento genérico para o dataLayer do GTM.
 * @param {string} eventName - Nome do evento (snake_case)
 * @param {object} params    - Parâmetros adicionais
 */
export const trackEvent = (eventName, params = {}) => {
  window.dataLayer.push({
    event: eventName,
    ...params,
  });
};

// ── Eventos de conversão pré-definidos ────────────────────────────────────────

export const events = {
  /**
   * Clique em qualquer botão de WhatsApp.
   * @param {string} source - 'contato_direto' | 'floating_button' | 'form_submit'
   */
  clickWhatsApp: (source) =>
    trackEvent('click_whatsapp', { event_source: source }),

  /**
   * Submit do formulário de contato (LGPD aceita, nome preenchido).
   * @param {string} nome - Primeiro nome do lead
   */
  submitForm: (nome) =>
    trackEvent('submit_form_contato', { lead_name: nome }),

  /**
   * Clique em número de telefone (caso exibido futuramente).
   */
  clickTelefone: () => trackEvent('click_telefone'),

  /**
   * Usuário rolou até a seção de contato (via IntersectionObserver).
   */
  scrollContato: () => trackEvent('scroll_contato'),

  /**
   * Tempo acumulado na página.
   * @param {number} seconds - Segundos passados (ex: 30)
   */
  timeOnPage: (seconds) => trackEvent('time_on_page', { seconds }),
};
