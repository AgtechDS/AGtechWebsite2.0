import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, FileText, Users, Database, AlertTriangle } from 'lucide-react';
import NeuralNetworkBackground from '@/components/NeuralNetworkBackground';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: Shield,
      title: "Informazioni Generali",
      content: `AgTechDesigne (di seguito "noi", "nostro" o "la Società") rispetta la tua privacy e si impegna a proteggere i tuoi dati personali. Questa informativa sulla privacy ti informa su come trattiamo i tuoi dati personali quando visiti il nostro sito web e ti informa sui tuoi diritti sulla privacy.`
    },
    {
      icon: Database,
      title: "Dati che Raccogliamo",
      content: `Raccogliamo diversi tipi di informazioni:
      • Dati di identità: nome, cognome, titolo
      • Dati di contatto: indirizzo email, numero di telefono, indirizzo postale
      • Dati tecnici: indirizzo IP, tipo di browser, fuso orario, sistema operativo
      • Dati di utilizzo: informazioni su come utilizzi il nostro sito web
      • Dati di marketing: le tue preferenze nel ricevere comunicazioni di marketing`
    },
    {
      icon: Eye,
      title: "Come Utilizziamo i Tuoi Dati",
      content: `Utilizziamo i tuoi dati personali per:
      • Fornire e migliorare i nostri servizi
      • Comunicare con te riguardo ai nostri servizi
      • Inviarti informazioni di marketing (solo con il tuo consenso)
      • Analizzare l'utilizzo del sito web per migliorare l'esperienza utente
      • Rispettare gli obblighi legali e normativi`
    },
    {
      icon: Lock,
      title: "Base Legale per il Trattamento",
      content: `Trattiamo i tuoi dati personali sulla base di:
      • Consenso: quando hai dato il consenso esplicito
      • Contratto: quando necessario per l'esecuzione di un contratto
      • Interesse legittimo: per migliorare i nostri servizi e comunicazioni
      • Obbligo legale: quando richiesto dalla legge`
    },
    {
      icon: Users,
      title: "Condivisione dei Dati",
      content: `Non vendiamo, scambiamo o trasferiamo i tuoi dati personali a terzi senza il tuo consenso, eccetto:
      • Fornitori di servizi che ci assistono nelle operazioni aziendali
      • Quando richiesto dalla legge o per proteggere i nostri diritti
      • In caso di fusione, acquisizione o vendita di asset aziendali`
    },
    {
      icon: AlertTriangle,
      title: "I Tuoi Diritti",
      content: `Secondo il GDPR, hai il diritto di:
      • Accedere ai tuoi dati personali
      • Rettificare dati inesatti o incompleti
      • Cancellare i tuoi dati personali
      • Limitare il trattamento dei tuoi dati
      • Portabilità dei dati
      • Opporti al trattamento
      • Revocare il consenso in qualsiasi momento`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground 
            nodeCount={20}
            variant="data"
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
              <Shield className="w-6 h-6 text-blue-400" />
              <span className="text-blue-400 font-cyber text-lg tracking-wider">PRIVACY PROTECTION</span>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-cyber font-black text-white mb-8">
              PRIVACY <span className="hologram-text">POLICY</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              La tua <span className="text-blue-400 font-semibold">privacy</span> è importante per noi. 
              Questa policy spiega come raccogliamo, utilizziamo e proteggiamo i tuoi 
              <span className="text-cyan-400 font-semibold"> dati personali</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Last Updated */}
          <motion.div
            className="neural-card p-6 mb-12 border border-yellow-400/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-yellow-400" />
              <h3 className="font-cyber font-bold text-yellow-400">ULTIMO AGGIORNAMENTO</h3>
            </div>
            <p className="text-gray-300">
              Questa Privacy Policy è stata aggiornata il <span className="text-yellow-400 font-semibold">15 Dicembre 2024</span>. 
              Ti consigliamo di rivedere periodicamente questa pagina per eventuali modifiche.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="neural-card p-8 border border-blue-400/30"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 neural-card flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-cyber font-bold text-blue-400">
                    {section.title.toUpperCase()}
                  </h2>
                </div>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            className="neural-card p-8 mt-12 border border-cyan-400/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="text-center">
              <h2 className="text-2xl font-cyber font-bold text-cyan-400 mb-6">
                CONTATTACI PER QUESTIONI SULLA PRIVACY
              </h2>
              <p className="text-gray-300 mb-6">
                Se hai domande su questa Privacy Policy o sui tuoi dati personali, contattaci:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-cyan-400 font-semibold">Email:</span> privacy@agtechdesigne.com</p>
                <p><span className="text-cyan-400 font-semibold">Telefono:</span> +39 XXX XXX XXXX</p>
                <p><span className="text-cyan-400 font-semibold">Indirizzo:</span> Via Example, 123 - 00000 Roma, Italia</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
