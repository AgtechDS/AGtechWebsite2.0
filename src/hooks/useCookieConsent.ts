import { useState, useEffect } from 'react';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export const useCookieConsent = () => {
  const [hasConsent, setHasConsent] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('agtech-cookie-consent');
    if (consent) {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      setHasConsent(true);
      applyCookieSettings(savedPreferences);
    }
  }, []);

  const applyCookieSettings = (prefs: CookiePreferences) => {
    // Google Analytics
    if (prefs.analytics) {
      // Abilita Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted'
        });
      }
    } else {
      // Disabilita Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'denied'
        });
      }
    }

    // Marketing cookies
    if (prefs.marketing) {
      // Abilita cookie di marketing
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted'
        });
      }
    } else {
      // Disabilita cookie di marketing
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied'
        });
      }
    }

    // Functional cookies
    if (prefs.functional) {
      // Abilita cookie funzionali (es. preferenze tema, lingua, ecc.)
      localStorage.setItem('agtech-functional-enabled', 'true');
    } else {
      localStorage.removeItem('agtech-functional-enabled');
    }
  };

  const updateConsent = (newPreferences: CookiePreferences) => {
    setPreferences(newPreferences);
    setHasConsent(true);
    localStorage.setItem('agtech-cookie-consent', JSON.stringify(newPreferences));
    applyCookieSettings(newPreferences);
  };

  const revokeConsent = () => {
    setHasConsent(false);
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    });
    localStorage.removeItem('agtech-cookie-consent');
    
    // Pulisci i cookie esistenti (eccetto quelli necessari)
    if (typeof window !== 'undefined') {
      // Rimuovi cookie di analytics
      document.cookie = '_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = '_ga_*=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = '_gid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      
      // Rimuovi cookie di marketing
      document.cookie = '_fbp=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = '_fbc=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
  };

  const canUseAnalytics = () => {
    return hasConsent && preferences.analytics;
  };

  const canUseMarketing = () => {
    return hasConsent && preferences.marketing;
  };

  const canUseFunctional = () => {
    return hasConsent && preferences.functional;
  };

  return {
    hasConsent,
    preferences,
    updateConsent,
    revokeConsent,
    canUseAnalytics,
    canUseMarketing,
    canUseFunctional,
  };
};

// Estendi il tipo Window per gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
