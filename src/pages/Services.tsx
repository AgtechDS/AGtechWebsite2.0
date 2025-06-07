
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Server, Code, Database, CheckCircle, BarChart, FileSpreadsheet, Cpu, Network, BrainCircuit, Laptop, FileCode, Table, ArrowRight, Sparkles, Zap, Shield, Brain, Eye, Layers, GitBranch } from "lucide-react";
import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";

const Services = () => {
  // Refs per le animazioni
  const headerRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);
  const devRef = useRef<HTMLDivElement>(null);
  const dataRef = useRef<HTMLDivElement>(null);

  // Stati per le animazioni
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isAiVisible, setIsAiVisible] = useState(false);
  const [isDevVisible, setIsDevVisible] = useState(false);
  const [isDataVisible, setIsDataVisible] = useState(false);

  // Effect per gestire l'intersezione
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target === headerRef.current) {
            setIsHeaderVisible(true);
          } else if (entry.target === aiRef.current) {
            setIsAiVisible(true);
          } else if (entry.target === devRef.current) {
            setIsDevVisible(true);
          } else if (entry.target === dataRef.current) {
            setIsDataVisible(true);
          }

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (aiRef.current) observer.observe(aiRef.current);
    if (devRef.current) observer.observe(devRef.current);
    if (dataRef.current) observer.observe(dataRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (aiRef.current) observer.unobserve(aiRef.current);
      if (devRef.current) observer.unobserve(devRef.current);
      if (dataRef.current) observer.unobserve(dataRef.current);
    };
  }, []);

  // Varianti per animazioni
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section con Neural Network */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 text-white overflow-hidden">
        {/* Neural Network Background */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={30}
            variant="services"
            className="opacity-60"
          />
        </div>

        {/* Gradient overlay per migliore leggibilità */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/80 z-10"></div>
        
        <div
          ref={headerRef}
          className="container mx-auto px-4 md:px-6 text-center relative z-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge superiore */}
            <motion.div
              className="inline-flex items-center gap-2 neural-card px-6 py-3 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeaderVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Brain className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-cyber text-sm tracking-wider">NEURAL SERVICES</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-cyber font-black mb-8 leading-tight">
              SERVIZI <span className="hologram-text">INTELLIGENTI</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-gray-300 leading-relaxed">
              Soluzioni tecnologiche <span className="text-cyan-400 font-semibold">all'avanguardia</span> per trasformare il tuo business.
              Dall'<span className="text-green-400 font-semibold">intelligenza artificiale</span> al
              <span className="text-purple-400 font-semibold"> computing distribuito</span>,
              siamo il tuo partner per l'<span className="hologram-text">innovazione digitale</span>.
            </p>

            {/* Neural Stats */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                {
                  icon: Brain,
                  number: "AI/ML",
                  label: "NEURAL INTELLIGENCE",
                  color: "text-green-400",
                  description: "Algoritmi avanzati"
                },
                {
                  icon: Network,
                  number: "CLOUD",
                  label: "DISTRIBUTED COMPUTING",
                  color: "text-cyan-400",
                  description: "Infrastrutture scalabili"
                },
                {
                  icon: Shield,
                  number: "24/7",
                  label: "QUANTUM SUPPORT",
                  color: "text-purple-400",
                  description: "Assistenza continua"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="neural-card p-8 text-center group hover:scale-105 transition-all duration-500 hover:shadow-glow-cyan"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeaderVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-16 h-16 neural-card flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow-cyan transition-all duration-300">
                    <stat.icon className={`w-8 h-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div className={`text-2xl font-cyber font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-white text-sm font-cyber tracking-wider mb-2">{stat.label}</div>
                  <div className="text-gray-400 text-xs">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Smooth transition con effetto neural */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
      </section>

      {/* Neural Services Grid */}
      <section className="py-32 bg-gray-900 relative">
        {/* Background neural network per questa sezione */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={20}
            variant="ai"
            className="opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Sezione header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-cyber font-bold text-white mb-6">
              ECOSISTEMA <span className="hologram-text">NEURAL</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tre pilastri fondamentali dell'innovazione tecnologica, interconnessi come una rete neurale avanzata
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {/* AI & Computing Card */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-cyan-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

              <div className="relative neural-card p-8 h-full border border-green-400/30 group-hover:border-green-400/60 transition-all duration-500">
                {/* Header con icona */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 neural-card flex items-center justify-center group-hover:shadow-glow-green transition-all duration-300">
                    <Brain className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-cyber font-bold text-white">
                      AI & NEURAL
                    </h3>
                    <p className="text-green-400 text-sm font-cyber">COMPUTING</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Soluzioni di <span className="text-green-400 font-semibold">computing distribuito</span> e
                  modelli AI personalizzati per ottimizzare i tuoi processi aziendali con intelligenza avanzata.
                </p>

                {/* Features grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { icon: Brain, label: "Machine Learning" },
                    { icon: Eye, label: "Computer Vision" },
                    { icon: Network, label: "Deep Learning" },
                    { icon: Cpu, label: "Neural Processing" }
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 neural-card p-2">
                      <feature.icon className="w-4 h-4 text-green-400" />
                      <span className="text-xs text-gray-300">{feature.label}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/servizi/ai-computing"
                  className="cyber-button w-full justify-center border-green-400 text-green-400 hover:text-black group-hover:shadow-glow-green"
                >
                  <span className="flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    ESPLORA AI
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Software Development Card */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

              <div className="relative neural-card p-8 h-full border border-purple-400/30 group-hover:border-purple-400/60 transition-all duration-500">
                {/* Header con icona */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 neural-card flex items-center justify-center group-hover:shadow-glow-purple transition-all duration-300">
                    <Code className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-cyber font-bold text-white">
                      SOFTWARE
                    </h3>
                    <p className="text-purple-400 text-sm font-cyber">DEVELOPMENT</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Software <span className="text-purple-400 font-semibold">su misura</span> sviluppato con
                  tecnologie moderne per trasformare le tue idee in realtà digitale avanzata.
                </p>

                {/* Features grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { icon: Code, label: "React/Next.js" },
                    { icon: Server, label: "Python/Django" },
                    { icon: Layers, label: "Node.js" },
                    { icon: Laptop, label: "Mobile Apps" }
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 neural-card p-2">
                      <feature.icon className="w-4 h-4 text-purple-400" />
                      <span className="text-xs text-gray-300">{feature.label}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/servizi/sviluppo-software"
                  className="cyber-button w-full justify-center border-purple-400 text-purple-400 hover:text-black group-hover:shadow-glow-purple"
                >
                  <span className="flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    SVILUPPA
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Data Automation Card */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

              <div className="relative neural-card p-8 h-full border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-500">
                {/* Header con icona */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 neural-card flex items-center justify-center group-hover:shadow-glow-cyan transition-all duration-300">
                    <Database className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-cyber font-bold text-white">
                      DATA
                    </h3>
                    <p className="text-cyan-400 text-sm font-cyber">AUTOMATION</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Trasforma i tuoi dati in <span className="text-cyan-400 font-semibold">insights azionabili</span> con
                  soluzioni di automazione intelligente e analytics avanzati.
                </p>

                {/* Features grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { icon: BarChart, label: "Data Analytics" },
                    { icon: FileSpreadsheet, label: "Excel Automation" },
                    { icon: GitBranch, label: "ETL Pipelines" },
                    { icon: Network, label: "Business Intelligence" }
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 neural-card p-2">
                      <feature.icon className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs text-gray-300">{feature.label}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/servizi/automazione-dati"
                  className="cyber-button w-full justify-center border-cyan-400 text-cyan-400 hover:text-black group-hover:shadow-glow-cyan"
                >
                  <span className="flex items-center gap-2">
                    <Database className="w-4 h-4" />
                    AUTOMATIZZA
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Neural Interconnections Section */}
      <section className="py-32 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background neural network */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={15}
            variant="data"
            className="opacity-40"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-cyber font-bold text-white mb-6">
              INTERCONNESSIONI <span className="hologram-text">NEURALI</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Come una rete neurale, i nostri servizi si interconnettono per creare soluzioni sinergiche e potenti
            </p>
          </motion.div>

          {/* Neural connections visualization */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: "INPUT LAYER",
                subtitle: "Dati & Requisiti",
                description: "Raccogliamo e analizziamo i tuoi dati e requisiti business",
                color: "text-green-400",
                icon: Database
              },
              {
                title: "HIDDEN LAYER",
                subtitle: "Processing & AI",
                description: "Elaboriamo con algoritmi avanzati e intelligenza artificiale",
                color: "text-cyan-400",
                icon: Brain
              },
              {
                title: "OUTPUT LAYER",
                subtitle: "Soluzioni Smart",
                description: "Generiamo soluzioni intelligenti e personalizzate",
                color: "text-purple-400",
                icon: Zap
              }
            ].map((layer, index) => (
              <motion.div
                key={index}
                className="neural-card p-8 text-center group hover:scale-105 transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                <div className={`w-20 h-20 neural-card flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow-cyan transition-all duration-300`}>
                  <layer.icon className={`w-10 h-10 ${layer.color}`} />
                </div>
                <h3 className={`text-xl font-cyber font-bold ${layer.color} mb-2`}>{layer.title}</h3>
                <p className="text-white text-sm font-cyber mb-4">{layer.subtitle}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{layer.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI & Computing Detailed Section */}
      <section
        ref={aiRef}
        className="py-32 bg-gray-900 relative"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="flex flex-col lg:flex-row gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isAiVisible ? "visible" : "hidden"}
          >
            <div className="lg:w-1/2 order-2 lg:order-1">
              <motion.h2
                className="text-4xl font-serif font-bold mb-8 gradient-text"
                variants={itemVariants}
              >
                AI & Computing
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Soluzioni di computing distribuite e modelli AI personalizzati per ottimizzare i tuoi processi. Il nostro team di esperti è in grado di progettare e implementare infrastrutture di calcolo scalabili e modelli di intelligenza artificiale su misura per le tue esigenze.
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                variants={containerVariants}
              >
                <motion.div 
                  className="flex items-start gap-2"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-5 h-5 text-agtech-green mt-1 flex-shrink-0" />
                  <p>Cluster pre-configurati per machine learning</p>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-2"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-5 h-5 text-agtech-green mt-1 flex-shrink-0" />
                  <p>Monitoraggio prestazioni in tempo reale</p>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-2"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-5 h-5 text-agtech-green mt-1 flex-shrink-0" />
                  <p>Backup automatici e sicurezza avanzata</p>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-2"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-5 h-5 text-agtech-green mt-1 flex-shrink-0" />
                  <p>Supporto tecnico 24/7</p>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-2"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-5 h-5 text-agtech-green mt-1 flex-shrink-0" />
                  <p>Scalabilità on-demand</p>
                </motion.div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex gap-4">
                <Link
                  to="/servizi/ai-computing"
                  className="primary-button inline-flex items-center gap-2"
                >
                  <span>Scopri di più</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contatti"
                  className="ghost-button text-agtech-blue border-agtech-blue hover:bg-agtech-blue hover:text-white"
                >
                  <span>Contattaci</span>
                </Link>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
              >
                <motion.div
                  className="glass-card p-8 flex flex-col items-center text-center hover:shadow-glow-blue transition-all duration-500 group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-agtech-blue-500 to-agtech-blue-700 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-glow-blue transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Cpu className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Potenza di calcolo</h3>
                </motion.div>
                <motion.div
                  className="glass-card p-8 flex flex-col items-center text-center hover:shadow-glow-purple transition-all duration-500 group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-agtech-purple-500 to-agtech-purple-700 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-glow-purple transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Network className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Reti distribuite</h3>
                </motion.div>
                <motion.div
                  className="glass-card p-8 flex flex-col items-center text-center hover:shadow-glow-green transition-all duration-500 group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-agtech-green-500 to-agtech-green-700 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-glow-green transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <BrainCircuit className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Modelli AI avanzati</h3>
                </motion.div>
                <motion.div
                  className="glass-card p-8 flex flex-col items-center text-center hover:shadow-glow-blue transition-all duration-500 group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-agtech-blue-500 to-agtech-blue-700 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-glow-blue transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Server className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Server ottimizzati</h3>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Software Development Neural Section */}
      <section
        ref={devRef}
        className="py-32 bg-gradient-to-br from-gray-800 via-purple-900/30 to-gray-900 relative overflow-hidden"
      >
        {/* Neural Network Background for Software */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={25}
            variant="software"
            className="opacity-40"
          />
        </div>

        {/* Code Matrix Effect */}
        <div className="absolute inset-0 z-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`code-${i}`}
              className="absolute text-purple-400/20 font-mono text-xs"
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
              {`{code: "neural"}`}
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div
            className="flex flex-col lg:flex-row gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isDevVisible ? "visible" : "hidden"}
          >
            {/* Neural Tech Stack Grid */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              <motion.div
                className="grid grid-cols-2 gap-6"
                variants={containerVariants}
              >
                <motion.div
                  className="neural-card p-6 text-center group hover:scale-105 transition-all duration-500 hover:shadow-glow-purple"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="w-16 h-16 neural-card flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-purple transition-all duration-300">
                    <Laptop className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="font-cyber font-bold text-purple-400 mb-2">DESKTOP APPS</h3>
                  <p className="text-gray-400 text-xs">Cross-platform solutions</p>
                </motion.div>
                <motion.div
                  className="neural-card p-6 text-center group hover:scale-105 transition-all duration-500 hover:shadow-glow-cyan"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="w-16 h-16 neural-card flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-cyan transition-all duration-300">
                    <FileCode className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="font-cyber font-bold text-cyan-400 mb-2">WEB DEV</h3>
                  <p className="text-gray-400 text-xs">Modern frameworks</p>
                </motion.div>
                <motion.div
                  className="neural-card p-6 text-center group hover:scale-105 transition-all duration-500 hover:shadow-glow-green"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="w-16 h-16 neural-card flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-green transition-all duration-300">
                    <Code className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="font-cyber font-bold text-green-400 mb-2">API NEURAL</h3>
                  <p className="text-gray-400 text-xs">Custom integrations</p>
                </motion.div>
                <motion.div
                  className="neural-card p-6 text-center group hover:scale-105 transition-all duration-500 hover:shadow-glow-purple"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="w-16 h-16 neural-card flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-purple transition-all duration-300">
                    <Database className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="font-cyber font-bold text-purple-400 mb-2">SYSTEMS</h3>
                  <p className="text-gray-400 text-xs">Integration layer</p>
                </motion.div>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 order-1 lg:order-2">
              {/* Neural badge */}
              <motion.div
                className="inline-flex items-center gap-2 neural-card px-6 py-3 mb-8"
                variants={itemVariants}
              >
                <Code className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-cyber text-sm tracking-wider">SOFTWARE NEURAL</span>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-cyber font-bold text-white mb-8"
                variants={itemVariants}
              >
                SOFTWARE <span className="hologram-text">DEVELOPMENT</span>
              </motion.h2>

              <motion.p
                className="text-lg text-gray-300 mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Software <span className="text-purple-400 font-semibold">su misura</span> sviluppato con
                <span className="text-cyan-400 font-semibold"> Python, JavaScript, C++, Rust e Go</span>.
                Creiamo applicazioni personalizzate che rispondono alle tue esigenze specifiche, garantendo
                <span className="text-green-400 font-semibold"> qualità, sicurezza e prestazioni ottimali</span>.
              </motion.p>

              {/* Neural Features List */}
              <motion.div
                className="space-y-4 mb-8"
                variants={containerVariants}
              >
                {[
                  { icon: Code, text: "Sviluppo web frontend e backend", color: "text-purple-400" },
                  { icon: Laptop, text: "Applicazioni desktop multipiattaforma", color: "text-cyan-400" },
                  { icon: Network, text: "Integrazione sistemi e API", color: "text-green-400" },
                  { icon: Shield, text: "Revisione e ottimizzazione codice", color: "text-purple-400" },
                  { icon: Zap, text: "Manutenzione e supporto continuo", color: "text-cyan-400" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 neural-card p-4 group hover:scale-105 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-10 h-10 neural-card flex items-center justify-center group-hover:shadow-glow-purple transition-all duration-300">
                      <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    </div>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{feature.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  to="/servizi/sviluppo-software"
                  className="cyber-button border-purple-400 text-purple-400 hover:text-black group"
                >
                  <span className="flex items-center gap-3">
                    <Code className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    ESPLORA CODICE
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Automation Neural Section */}
      <section
        ref={dataRef}
        className="py-32 bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-800 relative overflow-hidden"
      >
        {/* Neural Network Background for Data */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={20}
            variant="data"
            className="opacity-40"
          />
        </div>

        {/* Data Flow Effect */}
        <div className="absolute inset-0 z-10">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`data-${i}`}
              className="absolute text-cyan-400/20 font-mono text-sm"
              style={{
                left: `${15 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                x: [0, 100, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.6,
              }}
            >
              📊
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div
            className="flex flex-col lg:flex-row gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isDataVisible ? "visible" : "hidden"}
          >
            {/* Content Section */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              {/* Neural badge */}
              <motion.div
                className="inline-flex items-center gap-2 neural-card px-6 py-3 mb-8"
                variants={itemVariants}
              >
                <Database className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-cyber text-sm tracking-wider">DATA NEURAL</span>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-cyber font-bold text-white mb-8"
                variants={itemVariants}
              >
                DATA <span className="hologram-text">AUTOMATION</span>
              </motion.h2>

              <motion.p
                className="text-lg text-gray-300 mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Soluzioni <span className="text-cyan-400 font-semibold">Excel personalizzate</span> e
                <span className="text-green-400 font-semibold"> automazione dati avanzata</span>.
                Ottimizziamo i tuoi fogli di calcolo, automatizziamo le attività ripetitive e creiamo
                <span className="text-purple-400 font-semibold"> dashboard interattive</span> per visualizzare
                i tuoi dati in modo efficace.
              </motion.p>

              {/* Neural Features List */}
              <motion.div
                className="space-y-4 mb-8"
                variants={containerVariants}
              >
                {[
                  { icon: FileSpreadsheet, text: "Sviluppo macro e automazioni VBA", color: "text-cyan-400" },
                  { icon: BarChart, text: "Creazione dashboard personalizzate", color: "text-green-400" },
                  { icon: Zap, text: "Ottimizzazione fogli di calcolo", color: "text-purple-400" },
                  { icon: Database, text: "Importazione ed elaborazione dati", color: "text-cyan-400" },
                  { icon: Shield, text: "Formazione e supporto continuo", color: "text-green-400" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 neural-card p-4 group hover:scale-105 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-10 h-10 neural-card flex items-center justify-center group-hover:shadow-glow-cyan transition-all duration-300">
                      <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    </div>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{feature.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  to="/servizi/automazione-dati"
                  className="cyber-button border-cyan-400 text-cyan-400 hover:text-black group"
                >
                  <span className="flex items-center gap-3">
                    <Database className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    AUTOMATIZZA DATI
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Neural Data Grid */}
            <div className="lg:w-1/2 order-1 lg:order-2">
              <motion.div
                className="grid grid-cols-2 gap-6"
                variants={containerVariants}
              >
                <motion.div
                  className="neural-card p-6 text-center group hover:scale-105 transition-all duration-500 hover:shadow-glow-cyan"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="w-16 h-16 neural-card flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-cyan transition-all duration-300">
                    <FileSpreadsheet className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="font-cyber font-bold text-cyan-400 mb-2">EXCEL NEURAL</h3>
                  <p className="text-gray-400 text-xs">Advanced automations</p>
                </motion.div>
                <motion.div
                  className="neural-card p-6 text-center group hover:scale-105 transition-all duration-500 hover:shadow-glow-green"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="w-16 h-16 neural-card flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-green transition-all duration-300">
                    <BarChart className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="font-cyber font-bold text-green-400 mb-2">DASHBOARDS</h3>
                  <p className="text-gray-400 text-xs">Interactive analytics</p>
                </motion.div>
                <motion.div
                  className="neural-card p-6 text-center group hover:scale-105 transition-all duration-500 hover:shadow-glow-purple"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="w-16 h-16 neural-card flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-purple transition-all duration-300">
                    <Table className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="font-cyber font-bold text-purple-400 mb-2">DATA MGMT</h3>
                  <p className="text-gray-400 text-xs">Smart processing</p>
                </motion.div>
                <motion.div
                  className="neural-card p-6 text-center group hover:scale-105 transition-all duration-500 hover:shadow-glow-cyan"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="w-16 h-16 neural-card flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-cyan transition-all duration-300">
                    <Database className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="font-cyber font-bold text-cyan-400 mb-2">ANALYTICS</h3>
                  <p className="text-gray-400 text-xs">Deep insights</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neural CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-900/30 to-purple-900/30 text-white relative overflow-hidden">
        {/* Advanced Neural Background */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={35}
            variant="services"
            className="opacity-50"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/80 z-10"></div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Neural badge */}
            <motion.div
              className="inline-flex items-center gap-3 neural-card px-8 py-4 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Brain className="w-6 h-6 text-cyan-400" />
              <span className="text-cyan-400 font-cyber text-lg tracking-wider">NEURAL TRANSFORMATION</span>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-cyber font-black text-white mb-8">
              PRONTO PER IL <span className="hologram-text">FUTURO</span>?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Unisciti alla <span className="text-cyan-400 font-semibold">rivoluzione digitale</span>.
              I nostri servizi interconnessi trasformeranno il tuo business in un
              <span className="text-green-400 font-semibold"> ecosistema intelligente</span> e
              <span className="text-purple-400 font-semibold">autoevolutivo</span>.
            </p>

            {/* Neural action buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contatti"
                className="cyber-button text-lg px-12 py-4 group"
              >
                <span className="flex items-center gap-3">
                  <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  INIZIA TRASFORMAZIONE
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link
                to="/chi-siamo"
                className="cyber-button border-purple-400 text-purple-400 hover:text-black text-lg px-12 py-4 group"
              >
                <span className="flex items-center gap-3">
                  <Brain className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  SCOPRI NEURAL TECH
                </span>
              </Link>
            </motion.div>

            {/* Stats finali */}
            <motion.div
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { number: "99.9%", label: "UPTIME", color: "text-green-400" },
                { number: "24/7", label: "NEURAL SUPPORT", color: "text-cyan-400" },
                { number: "∞", label: "SCALABILITY", color: "text-purple-400" }
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

export default Services;
