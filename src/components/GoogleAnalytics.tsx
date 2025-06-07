import { useEffect } from 'react';
import { useCookieConsent } from '@/hooks/useCookieConsent';

interface GoogleAnalyticsProps {
  measurementId: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ measurementId }) => {
  const { canUseAnalytics } = useCookieConsent();

  useEffect(() => {
    // Inizializza Google Analytics solo se il consenso è stato dato
    if (canUseAnalytics()) {
      // Carica lo script di Google Analytics
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);

      // Inizializza gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', measurementId, {
        anonymize_ip: true, // Anonimizza gli IP per GDPR
        allow_google_signals: false, // Disabilita Google Signals per default
        allow_ad_personalization_signals: false, // Disabilita personalizzazione annunci per default
      });

      // Imposta il consenso iniziale
      gtag('consent', 'default', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        functionality_storage: 'granted',
        security_storage: 'granted',
      });

      console.log('Google Analytics initialized with consent');
    }
  }, [canUseAnalytics, measurementId]);

  // Traccia eventi personalizzati
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (canUseAnalytics() && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  // Traccia visualizzazioni di pagina
  const trackPageView = (pagePath: string, pageTitle?: string) => {
    if (canUseAnalytics() && window.gtag) {
      window.gtag('config', measurementId, {
        page_path: pagePath,
        page_title: pageTitle,
      });
    }
  };

  // Esponi le funzioni di tracking globalmente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.agtechAnalytics = {
        trackEvent,
        trackPageView,
      };
    }
  }, []);

  return null; // Questo componente non renderizza nulla
};

export default GoogleAnalytics;

// Estendi il tipo Window per le nostre funzioni di analytics
declare global {
  interface Window {
    dataLayer: any[];
    agtechAnalytics: {
      trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
      trackPageView: (pagePath: string, pageTitle?: string) => void;
    };
  }
}
