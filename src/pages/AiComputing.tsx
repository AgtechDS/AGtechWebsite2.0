
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Server, Network, Cpu, Lock } from "lucide-react";

const AiComputing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-agtech-blue to-agtech-purple py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[url('/agtech-uploads/photo-1526374965328-7f61d4dc18c5.jpeg')] bg-cover bg-center bg-no-repeat filter blur-[2px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              AI & Computing Solutions
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Soluzioni di computing distribuite e modelli AI personalizzati
              per ottimizzare i tuoi processi aziendali.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/agtech-uploads/photo-1485827404703-89b55fcc595e.jpeg"
              alt="AI and Computing Solutions"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-bold">
              Computing Distribuito e Intelligenza Artificiale
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Il nostro team di esperti è specializzato nella progettazione e implementazione
              di soluzioni AI all'avanguardia e sistemi di computing distribuito.
              Sviluppiamo modelli di machine learning personalizzati e ottimizziamo
              le infrastrutture tecnologiche per garantire prestazioni elevate.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Ogni soluzione è progettata considerando le specifiche esigenze del cliente,
              con particolare attenzione alla sicurezza, scalabilità e facilità di gestione.
            </p>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-serif font-bold mb-4">
              Caratteristiche dei nostri servizi
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Offriamo soluzioni complete per trasformare il tuo business con le più avanzate tecnologie AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Server,
                title: "Cluster pre-configurati",
                description:
                  "Forniamo cluster pre-configurati per machine learning, pronti all'uso e ottimizzati per le tue esigenze."
              },
              {
                icon: Cpu,
                title: "Monitoraggio in tempo reale",
                description:
                  "Sistemi di monitoraggio avanzati per tenere sotto controllo prestazioni e costi delle tue infrastrutture."
              },
              {
                icon: Lock,
                title: "Sicurezza avanzata",
                description:
                  "Implementiamo misure di sicurezza all'avanguardia e backup automatici per proteggere i tuoi dati."
              },
              {
                icon: Network,
                title: "Scalabilità on-demand",
                description:
                  "Le nostre soluzioni crescono con te, garantendo la scalabilità necessaria per il tuo business."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <feature.icon className="w-12 h-12 text-agtech-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-24 bg-gray-50 dark:bg-gray-800/30 p-8 rounded-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <img
                src="/agtech-uploads/photo-1531297484001-80022131f5a1.jpeg"
                alt="Case Study"
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-serif font-bold mb-4">Case Study: Analisi Predittiva</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Per un'importante azienda del settore manifatturiero abbiamo implementato un sistema 
                di analisi predittiva basato su AI che ha permesso di ridurre i tempi di inattività 
                dei macchinari del 35% e aumentare l'efficienza produttiva del 28%.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Il nostro sistema monitora continuamente i parametri operativi, identifica potenziali 
                guasti prima che si verifichino e suggerisce interventi manutentivi ottimali, 
                riducendo significativamente i costi operativi.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-agtech-blue to-agtech-purple py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold text-white mb-6">
              Pronto a trasformare il tuo business con l'AI?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Contattaci oggi per una consulenza gratuita e scopri come possiamo aiutarti
              a sfruttare al meglio le potenzialità dell'intelligenza artificiale.
            </p>
            <a
              href="/contatti"
              className="bg-white text-agtech-blue hover:bg-opacity-90 font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] inline-block"
            >
              Parliamo del tuo progetto
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AiComputing;
