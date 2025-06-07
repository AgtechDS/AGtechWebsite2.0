import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cookie, Shield, BarChart, Eye, Settings, Clock, Trash2 } from 'lucide-react';
import NeuralNetworkBackground from '@/components/NeuralNetworkBackground';

const CookiePolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cookieTypes = [
    {
      icon: Shield,
      title: "Cookie Necessari",
      color: "text-green-400",
      borderColor: "border-green-400/30",
      description: "Questi cookie sono essenziali per il funzionamento del sito web.",
      examples: [
        "Cookie di sessione per l'autenticazione",
        "Cookie per le preferenze di sicurezza",
        "Cookie per il carrello degli acquisti",
        "Cookie per il bilanciamento del carico"
      ],
      duration: "Sessione o fino a 1 anno"
    },
    {
      icon: BarChart,
      title: "Cookie Analitici",
      color: "text-purple-400",
      borderColor: "border-purple-400/30",
      description: "Ci aiutano a capire come i visitatori interagiscono con il sito.",
      examples: [
        "Google Analytics per statistiche di utilizzo",
        "Cookie per il monitoraggio delle performance",
        "Cookie per l'analisi del comportamento utente",
        "Cookie per i test A/B"
      ],
      duration: "Fino a 2 anni"
    },
    {
      icon: Eye,
      title: "Cookie di Marketing",
      color: "text-cyan-400",
      borderColor: "border-cyan-400/30",
      description: "Utilizzati per tracciare i visitatori e mostrare annunci pertinenti.",
      examples: [
        "Cookie per la pubblicità personalizzata",
        "Cookie per il retargeting",
        "Cookie per i social media",
        "Cookie per le campagne di marketing"
      ],
      duration: "Fino a 1 anno"
    },
    {
      icon: Settings,
      title: "Cookie Funzionali",
      color: "text-yellow-400",
      borderColor: "border-yellow-400/30",
      description: "Permettono al sito di ricordare le tue scelte e fornire funzionalità migliorate.",
      examples: [
        "Cookie per le preferenze di lingua",
        "Cookie per le impostazioni del tema",
        "Cookie per le preferenze di layout",
        "Cookie per i contenuti personalizzati"
      ],
      duration: "Fino a 1 anno"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-orange-900/20 to-yellow-900/20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground 
            nodeCount={18}
            variant="services"
            className="opacity-40"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/80 z-10"></div>

        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center gap-3 neural-card px-8 py-4 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Cookie className="w-6 h-6 text-orange-400" />
              <span className="text-orange-400 font-cyber text-lg tracking-wider">COOKIE MANAGEMENT</span>
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-cyber font-black text-white mb-8">
              COOKIE <span className="hologram-text">POLICY</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Informazioni dettagliate sui <span className="text-orange-400 font-semibold">cookie</span> che utilizziamo, 
              come funzionano e come puoi <span className="text-cyan-400 font-semibold">gestire le tue preferenze</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What are Cookies Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="neural-card p-8 mb-12 border border-orange-400/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 neural-card flex items-center justify-center">
                <Cookie className="w-6 h-6 text-orange-400" />
              </div>
              <h2 className="text-2xl font-cyber font-bold text-orange-400">
                COSA SONO I COOKIE
              </h2>
            </div>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. 
                Sono ampiamente utilizzati per far funzionare i siti web in modo più efficiente e per fornire informazioni 
                ai proprietari del sito.
              </p>
              <p>
                I cookie possono essere "persistenti" o "di sessione". I cookie persistenti rimangono sul tuo dispositivo 
                anche dopo aver chiuso il browser, mentre i cookie di sessione vengono eliminati quando chiudi il browser.
              </p>
            </div>
          </motion.div>

          {/* Cookie Types */}
          <div className="space-y-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                className={`neural-card p-8 border ${type.borderColor}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 neural-card flex items-center justify-center">
                    <type.icon className={`w-6 h-6 ${type.color}`} />
                  </div>
                  <h3 className={`text-2xl font-cyber font-bold ${type.color}`}>
                    {type.title.toUpperCase()}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {type.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className={`font-cyber font-bold ${type.color} mb-3`}>ESEMPI:</h4>
                    <ul className="space-y-2">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start gap-2">
                          <span className={`w-2 h-2 ${type.color.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`}></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className={`font-cyber font-bold ${type.color} mb-3 flex items-center gap-2`}>
                      <Clock className="w-4 h-4" />
                      DURATA:
                    </h4>
                    <p className="text-gray-300">{type.duration}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* How to Manage Cookies */}
          <motion.div
            className="neural-card p-8 mt-12 border border-cyan-400/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 neural-card flex items-center justify-center">
                <Settings className="w-6 h-6 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-cyber font-bold text-cyan-400">
                COME GESTIRE I COOKIE
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="font-cyber font-bold text-cyan-400 mb-3">TRAMITE IL NOSTRO SITO:</h4>
                <p>
                  Puoi gestire le tue preferenze sui cookie utilizzando il banner dei cookie che appare 
                  quando visiti il nostro sito per la prima volta, oppure accedendo alle impostazioni 
                  dei cookie dal footer del sito.
                </p>
              </div>
              
              <div>
                <h4 className="font-cyber font-bold text-cyan-400 mb-3">TRAMITE IL BROWSER:</h4>
                <p>
                  La maggior parte dei browser web ti permette di controllare i cookie attraverso le 
                  impostazioni del browser. Puoi impostare il browser per rifiutare i cookie o per 
                  avvisarti quando un cookie viene inviato.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="neural-card p-8 mt-12 border border-purple-400/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="text-center">
              <h2 className="text-2xl font-cyber font-bold text-purple-400 mb-6">
                DOMANDE SUI COOKIE?
              </h2>
              <p className="text-gray-300 mb-6">
                Se hai domande sulla nostra Cookie Policy, contattaci:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-purple-400 font-semibold">Email:</span> cookies@agtechdesigne.com</p>
                <p><span className="text-purple-400 font-semibold">Telefono:</span> +39 XXX XXX XXXX</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
