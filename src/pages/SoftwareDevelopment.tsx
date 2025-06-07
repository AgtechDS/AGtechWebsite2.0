
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Globe, Database, Layers, GitBranch, Brain, Zap, ArrowRight, Shield, Cpu, Network, Eye, Terminal } from "lucide-react";
import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";

const SoftwareDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section Neural */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 text-white overflow-hidden">
        {/* Neural Network Background */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={30}
            variant="software"
            className="opacity-60"
          />
        </div>

        {/* Code Matrix Effect */}
        <div className="absolute inset-0 z-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`code-matrix-${i}`}
              className="absolute text-purple-400/20 font-mono text-sm"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 2) * 60}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.8,
              }}
            >
              {`<code/>`}
            </motion.div>
          ))}
        </div>

        {/* Gradient overlay per migliore leggibilità */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/80 z-10"></div>

        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Neural badge */}
            <motion.div
              className="inline-flex items-center gap-3 neural-card px-8 py-4 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Code className="w-6 h-6 text-purple-400" />
              <span className="text-purple-400 font-cyber text-lg tracking-wider">SOFTWARE NEURAL</span>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-cyber font-black text-white mb-8 leading-tight">
              SOFTWARE <span className="hologram-text">DEVELOPMENT</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Software <span className="text-purple-400 font-semibold">su misura</span> sviluppato con
              <span className="text-cyan-400 font-semibold">tecnologie all'avanguardia</span> per soddisfare
              le specifiche esigenze del tuo <span className="text-green-400 font-semibold">business digitale</span>.
            </p>
          </motion.div>
        </div>

        {/* Smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
      </section>

      {/* Main Content Neural */}
      <section className="py-32 bg-gray-900 relative -mt-16">
        {/* Background neural network */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={20}
            variant="ai"
            className="opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-2 lg:order-1 space-y-8"
            >
              {/* Neural badge */}
              <motion.div
                className="inline-flex items-center gap-2 neural-card px-6 py-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Terminal className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-cyber text-sm tracking-wider">CODE CRAFTING</span>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-cyber font-bold text-white">
                SOLUZIONI <span className="hologram-text">SOFTWARE</span> SU MISURA
              </h2>

              <div className="space-y-6">
                <motion.div
                  className="neural-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Il nostro team di <span className="text-purple-400 font-semibold">sviluppatori esperti</span> progetta e implementa
                    soluzioni software personalizzate utilizzando un'ampia gamma di tecnologie e linguaggi di programmazione,
                    tra cui <span className="text-cyan-400 font-semibold">Python, JavaScript, C++, Rust e Go</span>.
                  </p>
                </motion.div>

                <motion.div
                  className="neural-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Che si tratti di <span className="text-green-400 font-semibold">applicazioni web</span>,
                    <span className="text-purple-400 font-semibold"> software desktop</span>,
                    <span className="text-cyan-400 font-semibold">sistemi embedded</span> o API per l'integrazione di sistemi,
                    sviluppiamo prodotti robusti, scalabili e facili da mantenere che rispondono perfettamente alle vostre esigenze operative.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Image Section con Neural Frame */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="order-1 lg:order-2 relative group"
            >
              {/* Neural frame effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

              <div className="relative neural-card p-4 border border-purple-400/30 group-hover:border-purple-400/60 transition-all duration-500">
                <img
                  src="/agtech-uploads/photo-1461749280684-dccba630e2f6.jpeg"
                  alt="Software Development Neural"
                  className="rounded-lg w-full h-auto object-cover"
                />

                {/* Code overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-transparent to-blue-600/10 rounded-lg"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Neural Technologies Section */}
      <section className="py-32 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background neural network */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={25}
            variant="software"
            className="opacity-40"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-20"
          >
            {/* Neural badge */}
            <motion.div
              className="inline-flex items-center gap-2 neural-card px-6 py-3 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-cyber text-sm tracking-wider">TECH STACK</span>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-cyber font-bold text-white mb-8">
              LE NOSTRE <span className="hologram-text">COMPETENZE</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Utilizziamo <span className="text-purple-400 font-semibold">tecnologie moderne</span> e consolidate per sviluppare
              <span className="text-cyan-400 font-semibold"> software di qualità superiore</span> con
              <span className="text-green-400 font-semibold">performance eccezionali</span>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "SVILUPPO WEB",
                description: "Applicazioni web responsive, progressive web apps (PWA) e siti web ad alte prestazioni con React, Vue, Angular e Node.js.",
                color: "text-cyan-400"
              },
              {
                icon: Code,
                title: "DESKTOP & MOBILE",
                description: "Applicazioni desktop multipiattaforma e app mobili native utilizzando tecnologie come Electron, React Native e Flutter.",
                color: "text-green-400"
              },
              {
                icon: Database,
                title: "DATABASE & BACKEND",
                description: "Architetture backend robuste con Python, Go o Node.js e gestione database ottimizzata con SQL e NoSQL.",
                color: "text-purple-400"
              },
              {
                icon: Layers,
                title: "SYSTEM INTEGRATION",
                description: "Integrazione di sistemi esistenti, sviluppo API e middleware per connettere diverse piattaforme e servizi.",
                color: "text-cyan-400"
              },
              {
                icon: GitBranch,
                title: "DEVOPS & CI/CD",
                description: "Implementazione di pipeline di integrazione e distribuzione continua, containerizzazione e orchestrazione con Docker e Kubernetes.",
                color: "text-green-400"
              },
              {
                icon: Cpu,
                title: "LOW-LEVEL & EMBEDDED",
                description: "Sviluppo di software per sistemi embedded, IoT e applicazioni che richiedono elevate prestazioni con C++, Rust e Go.",
                color: "text-purple-400"
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="neural-card p-8 group hover:scale-105 transition-all duration-500 hover:shadow-glow-purple"
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 neural-card flex items-center justify-center mr-6 group-hover:shadow-glow-purple transition-all duration-300">
                    <tech.icon className={`w-8 h-8 ${tech.color}`} />
                  </div>
                  <h3 className={`text-xl font-cyber font-bold ${tech.color}`}>{tech.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neural Projects Section */}
      <section className="py-32 bg-gray-900 relative overflow-hidden">
        {/* Background neural network */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={15}
            variant="ai"
            className="opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {/* Neural badge */}
            <motion.div
              className="inline-flex items-center gap-2 neural-card px-6 py-3 mb-8 mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <Eye className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-cyber text-sm tracking-wider">PROJECT SHOWCASE</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-cyber font-bold text-white mb-16 text-center">
              I NOSTRI <span className="hologram-text">PROGETTI</span>
            </h2>

            <div className="space-y-20">
              {/* Project 1 */}
              <motion.div
                className="neural-card p-8 border border-cyan-400/30"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1 relative group">
                    {/* Neural frame effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                    <div className="relative neural-card p-3 border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-500">
                      <img
                        src="/agtech-uploads/photo-1486312338219-ce68d2c6f44d.jpeg"
                        alt="Web Platform Neural"
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl md:text-3xl font-cyber font-bold text-cyan-400 mb-6">
                      PIATTAFORMA GESTIONE AZIENDALE
                    </h3>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      Abbiamo sviluppato una <span className="text-cyan-400 font-semibold">piattaforma web completa</span> per una media impresa del settore
                      manifatturiero, integrando <span className="text-green-400 font-semibold">gestione ordini</span>,
                      <span className="text-purple-400 font-semibold">inventario</span>, CRM e reportistica avanzata.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="neural-card px-4 py-2 text-cyan-400 font-cyber text-sm border border-cyan-400/30">REACT</span>
                      <span className="neural-card px-4 py-2 text-green-400 font-cyber text-sm border border-green-400/30">NODE.JS</span>
                      <span className="neural-card px-4 py-2 text-purple-400 font-cyber text-sm border border-purple-400/30">POSTGRESQL</span>
                      <span className="neural-card px-4 py-2 text-cyan-400 font-cyber text-sm border border-cyan-400/30">DOCKER</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div
                className="neural-card p-8 border border-green-400/30"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl md:text-3xl font-cyber font-bold text-green-400 mb-6">
                      SISTEMA IoT SMART BUILDING
                    </h3>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      Progettazione e implementazione di un <span className="text-green-400 font-semibold">sistema completo</span> per il monitoraggio
                      energetico e ambientale di edifici commerciali, con <span className="text-cyan-400 font-semibold">dashboard di visualizzazione</span>
                      dati e <span className="text-purple-400 font-semibold">algoritmi di ottimizzazione</span> AI-powered.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="neural-card px-4 py-2 text-green-400 font-cyber text-sm border border-green-400/30">PYTHON</span>
                      <span className="neural-card px-4 py-2 text-cyan-400 font-cyber text-sm border border-cyan-400/30">VUE.JS</span>
                      <span className="neural-card px-4 py-2 text-purple-400 font-cyber text-sm border border-purple-400/30">MQTT</span>
                      <span className="neural-card px-4 py-2 text-green-400 font-cyber text-sm border border-green-400/30">TENSORFLOW</span>
                    </div>
                  </div>
                  <div className="lg:col-span-1 relative group">
                    {/* Neural frame effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                    <div className="relative neural-card p-3 border border-green-400/30 group-hover:border-green-400/60 transition-all duration-500">
                      <img
                        src="/agtech-uploads/photo-1581091226825-a6a2a5aee158.jpeg"
                        alt="IoT System Neural"
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neural CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 text-white relative overflow-hidden">
        {/* Advanced Neural Background */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={30}
            variant="software"
            className="opacity-50"
          />
        </div>

        {/* Code Matrix Effect */}
        <div className="absolute inset-0 z-10">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`cta-code-${i}`}
              className="absolute text-purple-400/20 font-mono text-lg"
              style={{
                left: `${15 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              {`{code}`}
            </motion.div>
          ))}
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/80 z-10"></div>

        <div className="container mx-auto px-4 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Neural badge */}
            <motion.div
              className="inline-flex items-center gap-3 neural-card px-8 py-4 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Code className="w-6 h-6 text-purple-400" />
              <span className="text-purple-400 font-cyber text-lg tracking-wider">CODE INNOVATION</span>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-cyber font-black text-white mb-8">
              HAI UN'IDEA PER UN <span className="hologram-text">SOFTWARE</span>?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Contattaci per discutere del tuo <span className="text-purple-400 font-semibold">progetto innovativo</span> e scoprire come possiamo aiutarti
              a trasformare la tua <span className="text-cyan-400 font-semibold">idea</span> in
              <span className="text-green-400 font-semibold"> realtà digitale</span>.
            </p>

            {/* Neural action button */}
            <motion.a
              href="/contatti"
              className="cyber-button text-lg px-12 py-4 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                <Brain className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                RICHIEDI CONSULENZA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.a>

            {/* Neural stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { number: "100+", label: "PROJECTS", color: "text-purple-400" },
                { number: "24/7", label: "SUPPORT", color: "text-cyan-400" },
                { number: "∞", label: "POSSIBILITIES", color: "text-green-400" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-cyber font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-gray-400 text-sm font-cyber tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
