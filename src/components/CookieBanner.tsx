import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Settings, Shield, Eye, BarChart, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Sempre true, non modificabile
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Controlla se l'utente ha già dato il consenso
    const consent = localStorage.getItem('agtech-cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      applyCookieSettings(savedPreferences);
    }
  }, []);

  const applyCookieSettings = (prefs: CookiePreferences) => {
    // Applica le impostazioni dei cookie
    if (prefs.analytics) {
      // Abilita Google Analytics o altri strumenti di analisi
      console.log('Analytics cookies enabled');
    }
    if (prefs.marketing) {
      // Abilita cookie di marketing
      console.log('Marketing cookies enabled');
    }
    if (prefs.functional) {
      // Abilita cookie funzionali
      console.log('Functional cookies enabled');
    }
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('agtech-cookie-consent', JSON.stringify(allAccepted));
    applyCookieSettings(allAccepted);
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(necessaryOnly);
    localStorage.setItem('agtech-cookie-consent', JSON.stringify(necessaryOnly));
    applyCookieSettings(necessaryOnly);
    setShowBanner(false);
  };

  const savePreferences = () => {
    localStorage.setItem('agtech-cookie-consent', JSON.stringify(preferences));
    applyCookieSettings(preferences);
    setShowSettings(false);
    setShowBanner(false);
  };

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'necessary') return; // Non permettere di disabilitare i cookie necessari
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4"
          >
            <div className="neural-card p-6 mx-auto max-w-6xl border border-cyan-400/30 bg-gray-900/95 backdrop-blur-lg">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                {/* Cookie Icon */}
                <div className="w-16 h-16 neural-card flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-8 h-8 text-cyan-400" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-cyber font-bold text-white mb-3">
                    GESTIONE <span className="text-cyan-400">COOKIE</span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Utilizziamo cookie per migliorare la tua esperienza di navigazione, analizzare il traffico del sito e personalizzare i contenuti. 
                    Puoi scegliere quali categorie di cookie accettare. I cookie necessari sono sempre attivi per garantire il funzionamento del sito.
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <a href="/privacy-policy" className="text-cyan-400 hover:text-cyan-300 underline">
                      Privacy Policy
                    </a>
                    <span className="text-gray-500">•</span>
                    <a href="/cookie-policy" className="text-cyan-400 hover:text-cyan-300 underline">
                      Cookie Policy
                    </a>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                  <Button
                    onClick={() => setShowSettings(true)}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Personalizza
                  </Button>
                  <Button
                    onClick={acceptNecessary}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    Solo Necessari
                  </Button>
                  <Button
                    onClick={acceptAll}
                    className="cyber-button"
                  >
                    Accetta Tutti
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="neural-card border border-cyan-400/30 bg-gray-900 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-cyber text-cyan-400">
              IMPOSTAZIONI COOKIE
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 mt-6">
            {/* Necessary Cookies */}
            <div className="neural-card p-4 border border-green-400/30">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <h4 className="font-cyber font-bold text-green-400">Cookie Necessari</h4>
                </div>
                <Switch checked={true} disabled />
              </div>
              <p className="text-gray-300 text-sm">
                Questi cookie sono essenziali per il funzionamento del sito web e non possono essere disabilitati. 
                Includono cookie per la sicurezza, l'autenticazione e le preferenze di base.
              </p>
            </div>

            {/* Analytics Cookies */}
            <div className="neural-card p-4 border border-purple-400/30">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <BarChart className="w-5 h-5 text-purple-400" />
                  <h4 className="font-cyber font-bold text-purple-400">Cookie Analitici</h4>
                </div>
                <Switch 
                  checked={preferences.analytics}
                  onCheckedChange={(checked) => updatePreference('analytics', checked)}
                />
              </div>
              <p className="text-gray-300 text-sm">
                Ci aiutano a capire come i visitatori interagiscono con il sito raccogliendo informazioni anonime. 
                Utilizziamo questi dati per migliorare l'esperienza utente.
              </p>
            </div>

            {/* Marketing Cookies */}
            <div className="neural-card p-4 border border-cyan-400/30">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-cyan-400" />
                  <h4 className="font-cyber font-bold text-cyan-400">Cookie di Marketing</h4>
                </div>
                <Switch 
                  checked={preferences.marketing}
                  onCheckedChange={(checked) => updatePreference('marketing', checked)}
                />
              </div>
              <p className="text-gray-300 text-sm">
                Utilizzati per tracciare i visitatori sui siti web per mostrare annunci pertinenti e coinvolgenti 
                per il singolo utente.
              </p>
            </div>

            {/* Functional Cookies */}
            <div className="neural-card p-4 border border-yellow-400/30">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-yellow-400" />
                  <h4 className="font-cyber font-bold text-yellow-400">Cookie Funzionali</h4>
                </div>
                <Switch 
                  checked={preferences.functional}
                  onCheckedChange={(checked) => updatePreference('functional', checked)}
                />
              </div>
              <p className="text-gray-300 text-sm">
                Permettono al sito di ricordare le scelte che fai e fornire funzionalità migliorate e personalizzate.
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8">
            <Button
              onClick={() => setShowSettings(false)}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Annulla
            </Button>
            <Button
              onClick={savePreferences}
              className="cyber-button"
            >
              Salva Preferenze
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieBanner;
