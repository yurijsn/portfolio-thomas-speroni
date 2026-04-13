/** @type {import('tailwindcss').Config} */
export default {
  // Purge — apenas os arquivos do projeto
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    // Não sobrescrever — Tailwind é usado apenas para utilitários estruturais.
    // Tokens de cor, tipografia e espaçamento vivem em globals.css como CSS variables.
    extend: {},
  },
  // Plugins desnecessários para este projeto
  plugins: [],

  // Garantir que classes de breakpoint não sejam purgadas
  safelist: [
    'hidden',
    'block',
    'flex',
    'grid',
    'overflow-hidden',
    'relative',
    'absolute',
    'fixed',
    'sm:hidden', 'sm:block', 'sm:flex', 'sm:grid',
    'md:hidden', 'md:block', 'md:flex', 'md:grid',
    'lg:hidden', 'lg:block', 'lg:flex', 'lg:grid',
    'xl:hidden', 'xl:block', 'xl:flex', 'xl:grid',
  ],
};
