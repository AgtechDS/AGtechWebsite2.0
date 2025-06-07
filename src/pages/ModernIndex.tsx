import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Zap,
  Shield,
  Cpu,
  Database,
  ArrowRight,
  Play,
  ChevronDown,
  Sparkles,
  Brain,
  Rocket,
  Crown,
  Bot,
  Network,
  Eye,
  Layers,
  Code,
  BarChart,
  Settings
} from "lucide-react";
import AdvancedNeuralNetwork from "@/components/AdvancedNeuralNetwork";
import CinematicIntro from "@/components/CinematicIntro";


const ModernIndex = () => {
  const [showIntro, setShowIntro] = useState(() => {
    // Check if user has seen intro before (in this session)
    return !sessionStorage.getItem('agtech-intro-seen');
  });

  const [typedText, setTypedText] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fullText = "Trasformiamo il futuro attraverso l'intelligenza artificiale, lo sviluppo software avanzato e l'automazione intelligente. Il domani inizia oggi.";

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing effect
  useEffect(() => {
    if (!showIntro) {
      let i = 0;
      const timer = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [showIntro, fullText]);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('agtech-intro-seen', 'true');
  };

  // SEO Meta Tags
  useEffect(() => {
    document.title = "AgtechDesigne AI-Driven | Prima Azienda 100% Gestita da AI | Sviluppo Software & Intelligenza Artificiale";

    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AGtechDesigne AI-Driven è la prima azienda al mondo completamente gestita da intelligenza artificiale. Offriamo sviluppo software, AI computing e automazione dati con tecnologie all\'avanguardia.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'AgtechDesigne AI-Driven è la prima azienda al mondo completamente gestita da intelligenza artificiale. Offriamo sviluppo software, AI computing e automazione dati con tecnologie all\'avanguardia.';
      document.head.appendChild(meta);
    }

    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'intelligenza artificiale, AI, sviluppo software, automazione dati, machine learning, azienda AI, tecnologia, innovazione, AGtechDesigne, neural network, computing distribuito');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'intelligenza artificiale, AI, sviluppo software, automazione dati, machine learning, azienda AI, tecnologia, innovazione, AgtechDesigne, neural network, computing distribuito';
      document.head.appendChild(meta);
    }

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'AGtechDesigne AI-Driven | Prima Azienda 100% Gestita da AI');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = 'AgtechDesigne AI-Driven | Prima Azienda 100% Gestita da AI';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Cinematic Intro */}
      <AnimatePresence>
        {showIntro && (
          <CinematicIntro onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>
      {/* Hero Section Futuristico */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden cyber-container"
      >
        {/* Advanced Neural Network Background */}
        <div className="absolute inset-0 z-0">
          <AdvancedNeuralNetwork />
        </div>

        <motion.div
          style={{ y, opacity }}
          className="relative z-20 text-center max-w-6xl mx-auto px-6"
        >
          {/* Advanced Content Backdrop */}
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          >
            {/* Primary Backdrop Layer */}
            <motion.div
              className="absolute inset-0 bg-gray-900/30 backdrop-blur-2xl rounded-3xl border border-white/10"
              style={{
                padding: '4rem',
                margin: '-4rem',
              }}
              animate={{
                backdropFilter: [
                  "blur(25px) saturate(1.3) brightness(1.1)",
                  "blur(30px) saturate(1.5) brightness(1.2)",
                  "blur(25px) saturate(1.3) brightness(1.1)"
                ],
                background: [
                  "rgba(17, 24, 39, 0.3)",
                  "rgba(17, 24, 39, 0.4)",
                  "rgba(17, 24, 39, 0.3)"
                ],
                borderColor: [
                  "rgba(255, 255, 255, 0.1)",
                  "rgba(255, 255, 255, 0.15)",
                  "rgba(255, 255, 255, 0.1)"
                ]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Secondary Glow Layer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-cyan/5 rounded-3xl"
              style={{
                padding: '3rem',
                margin: '-3rem',
              }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.01, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />

            {/* Ambient Glow Border */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                padding: '4rem',
                margin: '-4rem',
              }}
              animate={{
                boxShadow: [
                  "0 0 30px rgba(255, 255, 255, 0.1), inset 0 0 30px rgba(255, 255, 255, 0.05)",
                  "0 0 50px rgba(255, 255, 255, 0.15), inset 0 0 50px rgba(255, 255, 255, 0.08)",
                  "0 0 30px rgba(255, 255, 255, 0.1), inset 0 0 30px rgba(255, 255, 255, 0.05)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8
              }}
            />

            {/* Floating Ambient Particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`content-ambient-${i}`}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${10 + (i % 4) * 25}%`,
                  top: `${15 + Math.floor(i / 4) * 25}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.sin(i * 0.5) * 15, 0],
                  opacity: [0, 0.4, 0],
                  scale: [0.5, 1.2, 0.5]
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>


          {/* Main Title con effetti avanzati */}
          <motion.h1
            className="text-6xl md:text-8xl font-cyber font-black mb-8 leading-tight relative z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.span
              className="relative inline-block text-white"
              whileHover={{
                scale: 1.02
              }}
              transition={{ duration: 0.4 }}
            >
              INNOVATION

              {/* Elegant Underline */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-white/60 via-white to-white/60"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 1 }}
              />

              {/* Floating Dots */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`dot-${i}`}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${25 + i * 25}%`,
                    top: '-10px',
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.span>
          </motion.h1>

          {/* Subtitle con typing effect */}
          <motion.div
            className="text-xl md:text-2xl text-cyan-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light min-h-[120px] flex items-center justify-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p>
              {typedText}
              {typedText.length < fullText.length && (
                <motion.span
                  className="inline-block w-0.5 h-6 bg-green-400 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link to="/servizi" className="cyber-button text-lg px-8 py-4">
              <div className="flex items-center gap-3">
                <Rocket className="w-5 h-5" />
                ESPLORA SERVIZI
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
            
            <Link to="/demo-ai-driven" className="cyber-button bg-transparent border-purple-400 text-purple-400 hover:text-black text-lg px-8 py-4">
              <div className="flex items-center gap-3">
                <Play className="w-5 h-5" />
                GUARDA DEMO
              </div>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {[
              { number: "50+", label: "PROGETTI", icon: Zap },
              { number: "98%", label: "SUCCESSO", icon: Shield },
              { number: "24/7", label: "SUPPORTO", icon: Cpu }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="neural-card p-6 text-center group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:text-green-400 transition-colors duration-300" />
                <div className="text-3xl font-cyber font-bold hologram-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="neural-card p-3 rounded-full">
            <ChevronDown className="w-6 h-6 text-cyan-400" />
          </div>
        </motion.div>

        {/* Advanced Neural Elements */}
        <div className="absolute inset-0 z-10">
          {/* AI Processing Nodes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`node-${i}`}
              className="absolute"
              style={{
                left: `${15 + (i % 4) * 25}%`,
                top: `${20 + Math.floor(i / 4) * 60}%`,
              }}
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.1, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              <div className="relative">
                {/* Core Node */}
                <motion.div
                  className="w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full shadow-glow-blue"
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(0, 212, 255, 0.5)",
                      "0 0 20px rgba(0, 212, 255, 0.8)",
                      "0 0 10px rgba(0, 212, 255, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Orbital Ring */}
                <motion.div
                  className="absolute inset-0 w-8 h-8 border border-cyan-400/30 rounded-full"
                  style={{ left: '-8px', top: '-8px' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                {/* Data Streams */}
                {i < 4 && (
                  <motion.div
                    className="absolute top-1/2 left-full w-20 h-0.5 bg-gradient-to-r from-cyan-400/60 to-transparent"
                    animate={{
                      scaleX: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.7
                    }}
                  />
                )}
              </div>
            </motion.div>
          ))}

          {/* Neural Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(0, 212, 255, 0.4)" />
                <stop offset="50%" stopColor="rgba(139, 92, 246, 0.6)" />
                <stop offset="100%" stopColor="rgba(0, 255, 136, 0.4)" />
              </linearGradient>
            </defs>

            {/* Animated Neural Paths */}
            {[...Array(6)].map((_, i) => (
              <motion.path
                key={`path-${i}`}
                d={`M ${150 + (i % 3) * 300} 300 Q 500 ${200 + i * 100} ${850 - (i % 3) * 300} 700`}
                stroke="url(#neuralGradient)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-cyber font-bold hologram-text mb-8">
              SERVIZI AVANZATI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluzioni tecnologiche all'avanguardia per il futuro del tuo business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI & COMPUTING",
                description: "Intelligenza artificiale e computing distribuito per ottimizzare i tuoi processi",
                color: "cyan",
                link: "/servizi/ai-computing"
              },
              {
                icon: Cpu,
                title: "SOFTWARE DEV",
                description: "Sviluppo software personalizzato con tecnologie moderne e scalabili",
                color: "purple",
                link: "/servizi/sviluppo-software"
              },
              {
                icon: Database,
                title: "DATA AUTOMATION",
                description: "Automazione intelligente dei dati per insights azionabili",
                color: "green",
                link: "/servizi/automazione-dati"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="neural-card p-8 group hover:scale-105 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 neural-card flex items-center justify-center mb-6 group-hover:shadow-${service.color} transition-all duration-300`}>
                  <service.icon className={`w-8 h-8 text-${service.color}-400`} />
                </div>
                
                <h3 className="text-2xl font-cyber font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <Link 
                  to={service.link}
                  className="cyber-button w-full justify-center"
                >
                  SCOPRI DI PIÙ
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Driven Leadership Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Neural Background */}
        <div className="absolute inset-0 z-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`ai-node-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              <div className="w-3 h-3 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full shadow-glow-green"></div>
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-3 neural-card px-8 py-4 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Crown className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-cyber text-lg tracking-wider">AI-DRIVEN LEADERSHIP</span>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-cyber font-bold mb-8">
              LA PRIMA AZIENDA <span className="hologram-text">100% AI</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              <span className="text-yellow-400 font-semibold">AgtechDesigne AI-Driven</span> è la prima azienda al mondo
              completamente gestita da intelligenza artificiale, dove ogni processo è ottimizzato da
              <span className="text-green-400 font-semibold"> modelli AI avanzati</span> sotto la guida visionaria del nostro CEO umano.
            </p>
          </motion.div>

          {/* CEO Section */}
          <motion.div
            className="neural-card p-12 mb-16 border border-yellow-400/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* CEO Image */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {/* Neural frame effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                <div className="relative neural-card p-4 border border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-500">
                  <img
                    src="/agtech-uploads/CEO2.jpg"
                    alt="CEO AGtechDesigne - Visionary Leader"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </motion.div>

              {/* CEO Content */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 neural-card flex items-center justify-center">
                    <Crown className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-cyber font-bold text-yellow-400">CEO & FOUNDER</h3>
                    <p className="text-gray-400 font-cyber text-lg">HUMAN VISIONARY LEADER</p>
                  </div>
                </div>

                <div className="neural-card p-6">
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    Come <span className="text-yellow-400 font-semibold">CEO e fondatore</span> di AgtechDesigne, ho creato la prima azienda
                    al mondo completamente gestita da intelligenza artificiale. La mia visione è quella di
                    <span className="text-green-400 font-semibold"> democratizzare l'accesso all'AI</span> e mostrare come l'intelligenza
                    artificiale possa rivoluzionare ogni aspetto del business.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Ogni decisione strategica, ogni processo operativo e ogni interazione con i clienti è
                    <span className="text-cyan-400 font-semibold"> ottimizzata da modelli AI avanzati</span>, creando un'efficienza e una
                    precisione senza precedenti nel settore tecnologico.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="neural-card p-4 text-center">
                    <div className="text-2xl font-cyber font-bold text-yellow-400 mb-2">2024</div>
                    <div className="text-gray-400 text-sm">FOUNDED</div>
                  </div>
                  <div className="neural-card p-4 text-center">
                    <div className="text-2xl font-cyber font-bold text-green-400 mb-2">100%</div>
                    <div className="text-gray-400 text-sm">AI-DRIVEN</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* AI Team Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-cyber font-bold text-white mb-6">
              IL NOSTRO <span className="text-green-400">TEAM AI</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Ogni membro del nostro team è un <span className="text-green-400 font-semibold">modello AI specializzato</span>,
              progettato per eccellere in specifiche aree di competenza.
            </p>
          </motion.div>

          {/* AI Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "ROSE",
                role: "CEO AI",
                specialty: "Strategic Leadership & Client Relations",
                icon: Crown,
                color: "text-pink-400",
                borderColor: "border-pink-400/30",
                description: "AI CEO che gestisce le relazioni strategiche e l'interazione con i clienti con intelligenza emotiva avanzata."
              },
              {
                name: "NEURAL-DEV",
                role: "Lead Developer AI",
                specialty: "Software Architecture & Development",
                icon: Code,
                color: "text-purple-400",
                borderColor: "border-purple-400/30",
                description: "Modello AI specializzato nello sviluppo software, architetture scalabili e ottimizzazione del codice."
              },
              {
                name: "DATA-MIND",
                role: "Data Scientist AI",
                specialty: "Analytics & Machine Learning",
                icon: BarChart,
                color: "text-cyan-400",
                borderColor: "border-cyan-400/30",
                description: "AI esperto in analisi dati, machine learning e generazione di insights azionabili per i clienti."
              },
              {
                name: "QUANTUM-OPS",
                role: "Operations AI",
                specialty: "Process Optimization & Automation",
                icon: Settings,
                color: "text-green-400",
                borderColor: "border-green-400/30",
                description: "Modello AI che ottimizza tutti i processi operativi, automazione e gestione delle risorse aziendali."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className={`neural-card p-6 border ${member.borderColor} group hover:scale-105 transition-all duration-500`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* AI Avatar */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 neural-card flex items-center justify-center mx-auto group-hover:shadow-glow-green transition-all duration-300`}>
                    <member.icon className={`w-10 h-10 ${member.color}`} />
                  </div>

                  {/* AI Status Indicator */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    <Bot className="w-3 h-3 text-gray-900" />
                  </motion.div>
                </div>

                {/* AI Info */}
                <div className="text-center">
                  <h4 className={`text-xl font-cyber font-bold ${member.color} mb-2`}>
                    {member.name}
                  </h4>
                  <p className="text-white font-cyber text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-xs mb-4 font-mono">
                    {member.specialty}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* AI Activity Indicator */}
                <div className="mt-6 flex justify-center">
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`w-2 h-2 bg-green-400 rounded-full`}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2 + index * 0.1
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AI Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            {[
              { number: "4", label: "AI MODELS", color: "text-green-400" },
              { number: "24/7", label: "ACTIVE", color: "text-cyan-400" },
              { number: "99.9%", label: "UPTIME", color: "text-purple-400" },
              { number: "∞", label: "SCALABILITY", color: "text-yellow-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="neural-card p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`text-3xl font-cyber font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-cyber tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-cyber font-bold mb-8">
              PRONTO PER IL <span className="hologram-text">FUTURO</span>?
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Unisciti alla rivoluzione digitale. Trasforma la tua visione in realtà
              con le nostre soluzioni innovative gestite da <span className="text-green-400 font-semibold">intelligenza artificiale</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contatti" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative cyber-button text-xl px-12 py-6 bg-gray-900 border-2 border-green-400 hover:border-cyan-400 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Sparkles className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    INIZIA ORA
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>

              <Link to="/servizi" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative cyber-button border-purple-400 text-purple-400 hover:text-white text-xl px-12 py-6 bg-transparent border-2 hover:bg-purple-400/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Brain className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    ESPLORA SERVIZI
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ModernIndex;
