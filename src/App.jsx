import { useEffect } from 'react';
import './styles/globals.css';
import { events } from './config/analytics';

import Hero from './components/Hero';
import QuemEThomas from './components/QuemEThomas';
import CitacaoFreud from './components/CitacaoFreud';
import AEscuta from './components/AEscuta';
import Formacao from './components/Formacao';
import Consultorios from './components/Consultorios';
import Textos from './components/Textos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

// ── IntersectionObserver para scroll reveals ──────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Não observar mais após revelar — performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    // Observar todos os elementos com classe 'reveal'
    // Timeout para garantir que o DOM está pronto após mount inicial
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
}

// Tracker de tempo na página: dispara evento aos 30 segundos
function useTimeOnPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      events.timeOnPage(30);
    }, 30_000);

    return () => clearTimeout(timer);
  }, []);
}

export default function App() {
  useScrollReveal();
  useTimeOnPage();

  return (
    <>
      {/* Skip navigation — acessibilidade */}
      <a href="#main-content" className="skip-link">
        Ir para o conteúdo principal
      </a>

      <main id="main-content">
        <Hero />
        <QuemEThomas />
        <CitacaoFreud />
        <AEscuta />
        <Formacao />
        <Textos />
        <Consultorios />
      </main>

      <Footer />

      {/* Botão flutuante WhatsApp — visível apenas em mobile */}
      <WhatsAppFloat />
    </>
  );
}
