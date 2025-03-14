
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Server, Code, Database, CheckCircle, BarChart, FileSpreadsheet, Cpu, Network, BrainCircuit, Laptop, FileCode, Table } from "lucide-react";

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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-b from-agtech-blue to-agtech-purple text-white overflow-hidden">
        {/* Animated particles for background effect */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 20 + 5,
                height: Math.random() * 20 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -100 - 50],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        <div 
          ref={headerRef}
          className="container mx-auto px-4 md:px-6 text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Le nostre soluzioni innovative
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90">
              Offriamo servizi su misura per soddisfare ogni esigenza. Dall'intelligenza artificiale al computing distribuito, siamo pronti a guidare la tua trasformazione digitale.
            </p>
          </motion.div>
        </div>
        
        {/* Replacing wave SVG with gradient transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* AI & Computing */}
      <section 
        ref={aiRef}
        className="py-24 bg-white"
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
                className="text-3xl font-serif font-bold mb-6 title-underline"
                variants={itemVariants}
              >
                AI & Computing
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 mb-6"
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
              
              <motion.div variants={itemVariants}>
                <Link 
                  to="/contatti" 
                  className="primary-button"
                >
                  Richiedi informazioni
                </Link>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
              >
                <motion.div 
                  className="glass-card p-6 flex flex-col items-center text-center hover:bg-agtech-blue/5"
                  variants={itemVariants}
                >
                  <Cpu className="w-10 h-10 text-agtech-blue mb-4" />
                  <h3 className="font-medium">Potenza di calcolo</h3>
                </motion.div>
                <motion.div 
                  className="glass-card p-6 flex flex-col items-center text-center hover:bg-agtech-purple/5"
                  variants={itemVariants}
                >
                  <Network className="w-10 h-10 text-agtech-purple mb-4" />
                  <h3 className="font-medium">Reti distribuite</h3>
                </motion.div>
                <motion.div 
                  className="glass-card p-6 flex flex-col items-center text-center hover:bg-agtech-green/5"
                  variants={itemVariants}
                >
                  <BrainCircuit className="w-10 h-10 text-agtech-green mb-4" />
                  <h3 className="font-medium">Modelli AI avanzati</h3>
                </motion.div>
                <motion.div 
                  className="glass-card p-6 flex flex-col items-center text-center hover:bg-agtech-blue/5" 
                  variants={itemVariants}
                >
                  <Server className="w-10 h-10 text-agtech-blue mb-4" />
                  <h3 className="font-medium">Server ottimizzati</h3>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sviluppo Software */}
      <section 
        ref={devRef}
        className="py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="flex flex-col lg:flex-row gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isDevVisible ? "visible" : "hidden"}
          >
            <div className="lg:w-1/2">
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
              >
                <motion.div 
                  className="glass-card p-6 flex flex-col items-center text-center hover:bg-agtech-blue/5"
                  variants={itemVariants}
                >
                  <Laptop className="w-10 h-10 text-agtech-blue mb-4" />
                  <h3 className="font-medium">Applicazioni desktop</h3>
                </motion.div>
                <motion.div 
                  className="glass-card p-6 flex flex-col items-center text-center hover:bg-agtech-purple/5"
                  variants={itemVariants}
                >
                  <FileCode className="w-10 h-10 text-agtech-purple mb-4" />
                  <h3 className="font-medium">Sviluppo web</h3>
                </motion.div>
                <motion.div 
                  className="glass-card p-6 flex flex-col items-center text-center hover:bg-agtech-green/5"
                  variants={itemVariants}
                >
                  <Code className="w-10 h-10 text-agtech-green mb-4" />
                  <h3 className="font-medium">API personalizzate</h3>
                </motion.div>
                <motion.div 
                  className="glass-card p-6 flex flex-col items-center text-center hover:bg-agtech-blue/5"
                  variants={itemVariants}
                >
                  <Database className="w-10 h-10 text-agtech-blue mb-4" />
                  <h3 className="font-medium">Integrazione sistemi</h3>
                </motion.div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2">
              <motion.h2 
                className="text-3xl font-serif font-bold mb-6 title-underline"
                variants={itemVariants}
              >
                Sviluppo Software
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 mb-6"
                variants={itemVariants}
              >
                Software su misura sviluppato con Python, JavaScript, C++, Rust e Go. Creiamo applicazioni personalizzate che rispondono alle tue esigenze specifiche, garantendo qualità, sicurezza e prestazioni ottimali.
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
                  <p>Sviluppo web frontend e backend</p>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-2"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-5 h-5 text-agtech-green mt-1 flex-shrink-0" />
                  <p>Applicazioni desktop multipiattaforma</p>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-2"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-5 h-5 text-agtech-green mt-1 flex-shrink-0" />
                  <p>Integrazione sistemi e API</p>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-2"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-5 h-5 text-agtech-green mt-1 flex-shrink-0" />
                  <p>Revisione e ottimizzazione codice</p>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-2"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-5 h-5 text-agtech-green mt-1 flex-shrink-0" />
                  <p>Manutenzione e supporto continuo</p>
                </motion.div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Link 
                  to="/contatti" 
                  className="primary-button"
                >
                  Richiedi informazioni
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Automazione Dati */}
      <section 
        ref={dataRef}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="flex flex-col lg:flex-row gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isDataVisible ? "visible" : "hidden"}
          >
            <div className="lg:w-1/2 order-2 lg:order-1">
              <motion.h2 
                className="text-3xl font-serif font-bold mb-6 title-underline"
                variants={itemVariants}
              >
                Automazione Dati (Excel Solutions)
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 mb-6"
                variants={itemVariants}
              >
                Soluzioni Excel personalizzate per automatizzare processi e analizzare dati. Ottimizziamo i tuoi fogli di calcolo, automatizziamo le attività ripetitive e creiamo dashboard interattive per visualizzare i tuoi dati in modo efficace.
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
                  <p>Sviluppo macro e automazioni VBA</p>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-2"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-5 h-5 text-agtech-green mt-1 flex-shrink-0" />
                  <p>Creazione dashboard personalizzate</p>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-2"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-5 h-5 text-agtech-green mt-1 flex-shrink-0" />
                  <p>Ottimizzazione fogli di calcolo</p>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-2"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-5 h-5 text-agtech-green mt-1 flex-shrink-0" />
                  <p>Importazione ed elaborazione dati</p>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-2"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-5 h-5 text-agtech-green mt-1 flex-shrink-0" />
                  <p>Formazione e supporto</p>
                </motion.div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Link 
                  to="/contatti" 
                  className="primary-button"
                >
                  Richiedi informazioni
                </Link>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
              >
                <motion.div 
                  className="glass-card p-6 flex flex-col items-center text-center hover:bg-agtech-blue/5"
                  variants={itemVariants}
                >
                  <FileSpreadsheet className="w-10 h-10 text-agtech-blue mb-4" />
                  <h3 className="font-medium">Automazioni Excel</h3>
                </motion.div>
                <motion.div 
                  className="glass-card p-6 flex flex-col items-center text-center hover:bg-agtech-purple/5"
                  variants={itemVariants}
                >
                  <BarChart className="w-10 h-10 text-agtech-purple mb-4" />
                  <h3 className="font-medium">Dashboard interattive</h3>
                </motion.div>
                <motion.div 
                  className="glass-card p-6 flex flex-col items-center text-center hover:bg-agtech-green/5"
                  variants={itemVariants}
                >
                  <Table className="w-10 h-10 text-agtech-green mb-4" />
                  <h3 className="font-medium">Gestione dati</h3>
                </motion.div>
                <motion.div 
                  className="glass-card p-6 flex flex-col items-center text-center hover:bg-agtech-blue/5"
                  variants={itemVariants}
                >
                  <Database className="w-10 h-10 text-agtech-blue mb-4" />
                  <h3 className="font-medium">Analisi dati avanzata</h3>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-agtech-blue to-agtech-purple text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Hai bisogno di una soluzione personalizzata?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contattaci oggi per discutere dei tuoi progetti e scoprire come possiamo aiutarti a realizzarli.
          </p>
          <Link to="/contatti" className="bg-white text-agtech-blue hover:bg-opacity-90 font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
            Richiedi una consulenza gratuita
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
