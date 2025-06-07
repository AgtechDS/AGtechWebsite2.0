
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Server, Network, Cpu, Lock, Brain, Zap, Shield, Database } from "lucide-react";

const AiComputing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section Futuristico */}
      <section className="relative py-32 cyber-container text-white overflow-hidden">
        {/* AI Neural Network Background */}
        <div className="absolute inset-0 z-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`ai-node-${i}`}
              className="absolute"
              style={{
                left: `${10 + (i % 5) * 20}%`,
                top: `${15 + Math.floor(i / 5) * 25}%`,
              }}
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <div className="neural-card p-4 flex items-center justify-center">
                <Brain className="w-5 h-5 text-green-400" />
              </div>

              {/* Neural connections */}
              {i < 12 && (
                <motion.div
                  className="absolute top-1/2 left-full w-20 h-0.5 bg-gradient-to-r from-green-400/60 to-transparent"
                  animate={{
                    scaleX: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Cyber grid pattern */}
        <div className="cyber-grid absolute inset-0 opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-cyber font-black text-white mb-8">
              AI & <span className="hologram-text">COMPUTING</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300 max-w-4xl mx-auto leading-relaxed font-light">
              Soluzioni di <span className="text-green-400 font-semibold">computing distribuito</span> e
              modelli <span className="text-purple-400 font-semibold">AI personalizzati</span> per
              ottimizzare i tuoi processi aziendali con tecnologie all'avanguardia.
            </p>
          </motion.div>
        </div>

        {/* Smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gray-900 relative -mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="neural-card p-2 overflow-hidden">
                <img
                  src="/agtech-uploads/photo-1485827404703-89b55fcc595e.jpeg"
                  alt="AI and Computing Solutions"
                  className="rounded-lg w-full h-auto object-cover"
                />

                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-green-400/20 to-transparent rounded-lg"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-cyber font-bold text-white">
                COMPUTING DISTRIBUITO E <span className="hologram-text">INTELLIGENZA ARTIFICIALE</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Il nostro team di esperti è specializzato nella progettazione e implementazione
                di <span className="text-green-400 font-semibold">soluzioni AI all'avanguardia</span> e
                sistemi di <span className="text-cyan-400 font-semibold">computing distribuito</span>.
                Sviluppiamo modelli di machine learning personalizzati e ottimizziamo
                le infrastrutture tecnologiche per garantire prestazioni elevate.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Ogni soluzione è progettata considerando le specifiche esigenze del cliente,
                con particolare attenzione alla <span className="text-purple-400 font-semibold">sicurezza</span>,
                <span className="text-cyan-400 font-semibold"> scalabilità</span> e
                <span className="text-green-400 font-semibold"> facilità di gestione</span>.
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-3">
                {['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Cloud Computing'].map((tech, i) => (
                  <span key={i} className="neural-card px-4 py-2 text-sm font-cyber text-green-400">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-cyber font-bold text-white mb-8">
              CARATTERISTICHE <span className="hologram-text">AVANZATE</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Offriamo soluzioni complete per trasformare il tuo business con le più avanzate tecnologie AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Server,
                title: "CLUSTER PRE-CONFIGURATI",
                description: "Cluster pre-configurati per machine learning, pronti all'uso e ottimizzati per le tue esigenze.",
                color: "text-cyan-400"
              },
              {
                icon: Cpu,
                title: "MONITORAGGIO REAL-TIME",
                description: "Sistemi di monitoraggio avanzati per tenere sotto controllo prestazioni e costi delle tue infrastrutture.",
                color: "text-green-400"
              },
              {
                icon: Lock,
                title: "SICUREZZA AVANZATA",
                description: "Implementiamo misure di sicurezza all'avanguardia e backup automatici per proteggere i tuoi dati.",
                color: "text-purple-400"
              },
              {
                icon: Network,
                title: "SCALABILITÀ ON-DEMAND",
                description: "Le nostre soluzioni crescono con te, garantendo la scalabilità necessaria per il tuo business.",
                color: "text-cyan-400"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="neural-card p-6 text-center group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 neural-card flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow-cyan transition-all duration-300">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className={`text-lg font-cyber font-bold ${feature.color} mb-4`}>{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="neural-card p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="neural-card p-2 overflow-hidden">
                  <img
                    src="/agtech-uploads/photo-1531297484001-80022131f5a1.jpeg"
                    alt="Case Study"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-cyber font-bold text-white mb-6">
                  CASE STUDY: <span className="hologram-text">ANALISI PREDITTIVA</span>
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Per un'importante azienda del settore manifatturiero abbiamo implementato un sistema
                  di <span className="text-green-400 font-semibold">analisi predittiva basato su AI</span> che ha permesso di ridurre i tempi di inattività
                  dei macchinari del <span className="text-cyan-400 font-semibold">35%</span> e aumentare l'efficienza produttiva del <span className="text-purple-400 font-semibold">28%</span>.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Il nostro sistema monitora continuamente i parametri operativi, identifica potenziali
                  guasti prima che si verifichino e suggerisce interventi manutentivi ottimali,
                  riducendo significativamente i <span className="text-green-400 font-semibold">costi operativi</span>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 cyber-container text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-cyber font-bold text-white mb-8">
              PRONTO A <span className="hologram-text">TRASFORMARE</span> IL TUO BUSINESS?
            </h2>
            <p className="text-xl text-cyan-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Contattaci oggi per una <span className="text-green-400 font-semibold">consulenza gratuita</span> e
              scopri come possiamo aiutarti a sfruttare al meglio le potenzialità dell'
              <span className="text-purple-400 font-semibold">intelligenza artificiale</span>.
            </p>
            <motion.a
              href="/contatti"
              className="cyber-button text-lg px-12 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-3">
                <Brain className="w-6 h-6" />
                PARLIAMO DEL TUO PROGETTO
                <Zap className="w-6 h-6" />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AiComputing;
