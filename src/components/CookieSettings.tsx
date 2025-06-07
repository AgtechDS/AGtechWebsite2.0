import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, Shield, BarChart, Eye, Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CookieSettings: React.FC = () => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Carica le preferenze salvate
    const saved = localStorage.getItem('agtech-cookie-consent');
    if (saved) {
      setPreferences(JSON.parse(saved));
    }
  }, []);

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'necessary') return; // Non permettere di disabilitare i cookie necessari
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  const savePreferences = () => {
    localStorage.setItem('agtech-cookie-consent', JSON.stringify(preferences));
    // Applica le impostazioni
    if (preferences.analytics) {
      console.log('Analytics cookies enabled');
    }
    if (preferences.marketing) {
      console.log('Marketing cookies enabled');
    }
    if (preferences.functional) {
      console.log('Functional cookies enabled');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="font-mono text-xs text-gray-500 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
          <Cookie className="w-3 h-3" />
          Gestisci Cookie
        </button>
      </DialogTrigger>
      
      <DialogContent className="neural-card border border-cyan-400/30 bg-gray-900 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-cyber text-cyan-400 flex items-center gap-3">
            <Settings className="w-6 h-6" />
            GESTIONE COOKIE
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Necessary Cookies */}
          <motion.div
            className="neural-card p-4 border border-green-400/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-400" />
                <h4 className="font-cyber font-bold text-green-400">Cookie Necessari</h4>
              </div>
              <Switch checked={true} disabled />
            </div>
            <p className="text-gray-300 text-sm">
              Essenziali per il funzionamento del sito. Non possono essere disabilitati.
            </p>
          </motion.div>

          {/* Analytics Cookies */}
          <motion.div
            className="neural-card p-4 border border-purple-400/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
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
              Ci aiutano a migliorare il sito analizzando come viene utilizzato.
            </p>
          </motion.div>

          {/* Marketing Cookies */}
          <motion.div
            className="neural-card p-4 border border-cyan-400/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
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
              Utilizzati per mostrare annunci pertinenti e misurare l'efficacia delle campagne.
            </p>
          </motion.div>

          {/* Functional Cookies */}
          <motion.div
            className="neural-card p-4 border border-yellow-400/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
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
              Permettono funzionalità avanzate e personalizzazione dell'esperienza.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <Button
            onClick={savePreferences}
            className="cyber-button"
          >
            Salva Preferenze
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieSettings;
