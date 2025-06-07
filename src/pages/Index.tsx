import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import MatrixBackground from "@/components/MatrixBackground";
import ParticleSystem from "@/components/ParticleSystem";
import Scene3D from "@/components/Scene3D";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import RoseAI from "@/components/RoseAI";
import { Server, Code, Database, Award, Users, ArrowRight, ChevronDown, Sparkles, Zap } from "lucide-react";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Intersection Observer per animazioni on-scroll
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);
  
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  // Stats counter animation
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const servicesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsServicesVisible(true);
          servicesObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true);
          aboutObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
          statsObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const testimonialsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTestimonialsVisible(true);
          testimonialsObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) servicesObserver.observe(servicesRef.current);
    if (aboutRef.current) aboutObserver.observe(aboutRef.current);
    if (statsRef.current) statsObserver.observe(statsRef.current);
    if (testimonialsRef.current) testimonialsObserver.observe(testimonialsRef.current);

    return () => {
      if (servicesRef.current) servicesObserver.unobserve(servicesRef.current);
      if (aboutRef.current) aboutObserver.unobserve(aboutRef.current);
      if (statsRef.current) statsObserver.unobserve(statsRef.current);
      if (testimonialsRef.current) testimonialsObserver.unobserve(testimonialsRef.current);
    };
  }, []);

  // Stats counter effect
  useEffect(() => {
    if (isStatsVisible) {
      const duration = 2000;
      const target1 = 50; // Progetti completati
      const target2 = 98; // Soddisfazione clienti
      const target3 = 5; // Anni di esperienza
      
      const step1 = Math.ceil(target1 / (duration / 16));
      const step2 = Math.ceil(target2 / (duration / 16));
      const step3 = Math.ceil(target3 / (duration / 16));
      
      const timer1 = setInterval(() => {
        setCount1(prev => {
          const next = Math.min(prev + step1, target1);
          if (next >= target1) clearInterval(timer1);
          return next;
        });
      }, 16);
      
      const timer2 = setInterval(() => {
        setCount2(prev => {
          const next = Math.min(prev + step2, target2);
          if (next >= target2) clearInterval(timer2);
          return next;
        });
      }, 16);
      
      const timer3 = setInterval(() => {
        setCount3(prev => {
          const next = Math.min(prev + step3, target3);
          if (next >= target3) clearInterval(timer3);
          return next;
        });
      }, 16);
      
      return () => {
        clearInterval(timer1);
        clearInterval(timer2);
        clearInterval(timer3);
      };
    }
  }, [isStatsVisible]);

  // Testimonials data
  const testimonials = [
    {
      name: "Marco Rossi",
      role: "CEO",
      company: "TechInnovate",
      content: "AgTechDesigne ha trasformato completamente il nostro approccio all'analisi dati. Le soluzioni personalizzate hanno migliorato l'efficienza del 40% e ridotto i costi operativi del 25%.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      name: "Laura Bianchi",
      role: "CTO",
      company: "DataSphere",
      content: "La competenza tecnica e la capacità di comprendere le nostre esigenze hanno reso AgTechDesigne il partner ideale per i nostri progetti di AI. Risultati eccezionali in tempi record.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      name: "Giovanni Verdi",
      role: "Direttore IT",
      company: "InnovaGroup",
      content: "Professionalità, puntualità e soluzioni innovative. AgTechDesigne ha superato ogni nostra aspettativa, consegnando un sistema che ha rivoluzionato i nostri processi interni.",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 5
    },
    {
      name: "Sofia Chen",
      role: "Product Manager",
      company: "FutureTech",
      content: "L'approccio innovativo di AgTechDesigne all'automazione dei dati ci ha permesso di scalare il nostro business del 300% mantenendo la qualità del servizio.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
      {/* Hero Section con Background Avanzato */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Advanced background with multiple layers */}
        <div className="absolute inset-0 z-0">
          <MatrixBackground
            intensity={6}
            speed={4}
            opacity={0.12}
            variant="neural"
            interactive={true}
            colors={['#001F3F', '#6C5B7B', '#4CAF50', '#00ffff']}
          />

          {/* Particle system overlay */}
          <ParticleSystem
            particleCount={80}
            colors={['rgba(0,31,63,0.6)', 'rgba(108,91,123,0.6)', 'rgba(76,175,80,0.6)']}
            speed={1.5}
            interactive={true}
            className="opacity-40"
          />

          {/* Cyber grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          ></div>
          
          {/* Animated glowing orbs */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl"
              style={{
                background: i % 2 === 0 
                  ? 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(59,130,246,0) 70%)' 
                  : 'radial-gradient(circle, rgba(147,51,234,0.6) 0%, rgba(147,51,234,0) 70%)',
                width: Math.random() * 300 + 200,
                height: Math.random() * 300 + 200,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Digital circuit lines */}
          <svg className="absolute inset-0 w-full h-full z-0 opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M0,50 Q25,30 50,50 T100,50"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="0.2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "loop", ease: "linear" }}
            />
            <motion.path
              d="M0,30 Q35,60 70,30 T100,30"
              stroke="rgba(147,51,234,0.8)"
              strokeWidth="0.2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 7, repeat: Infinity, repeatType: "loop", ease: "linear" }}
            />
            <motion.path
              d="M0,70 Q45,40 80,70 T100,70"
              stroke="rgba(59,130,246,0.8)"
              strokeWidth="0.2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "loop", ease: "linear" }}
            />
          </svg>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-agtech-blue/80 to-agtech-purple/80 z-10">
          {/* Lens flare effect */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
          
          {/* Cinematic light streaks */}
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.05, 0] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white to-transparent rotate-45 translate-y-[-50%] translate-x-[-50%]"></div>
          </motion.div>
        </div>
        
        <motion.div 
          className="container mx-auto px-4 md:px-6 relative z-20 text-center"
          style={{ opacity, scale, y }}
        >
          {/* Rose AI Inline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <RoseAI
              variant="inline"
              showIcon={true}
              animated={false}
              className="border border-white/30"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full glass-card border border-white/30"
          >
            <Sparkles className="w-4 h-4 text-agtech-green-400" />
            <span className="text-white/90 font-medium tracking-wide">Innovazione tecnologica per il tuo business</span>
            <Zap className="w-4 h-4 text-agtech-blue-400" />
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl text-white font-display font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">Innovazione</span>
            <span className="block gradient-text bg-gradient-to-r from-agtech-green-400 via-agtech-blue-400 to-agtech-purple-400 bg-clip-text text-transparent">
              & Tecnologia
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 drop-shadow-md"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sviluppiamo soluzioni digitali avanzate per il tuo successo.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/servizi" className="group relative overflow-hidden">
              <div className="primary-button flex items-center">
                <span>Scopri i nostri servizi</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            <Link to="/contatti" className="group relative overflow-hidden">
              <div className="ghost-button">
                <span>Contattaci ora</span>
              </div>
            </Link>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 3D Interactive Section */}
      <section className="py-24 bg-gradient-to-b from-black/5 to-agtech-blue/10 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-4 gradient-text">Esperienza Immersiva</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Esplora le nostre tecnologie attraverso un'esperienza 3D interattiva
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-3d"
          >
            <Scene3D height="500px" className="rounded-2xl" />

            {/* Rose CEO AI sovrapposta */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <RoseAI
                  variant="floating"
                  showIcon={true}
                  animated={true}
                  showTyping={true}
                  messages={[
                    "Benvenuti nel futuro dell'innovazione",
                    "Sono Rose, la vostra CEO AI",
                    "Esplorate le nostre tecnologie 3D",
                    "Insieme verso il successo digitale"
                  ]}
                  className="pointer-events-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-20 bg-gradient-to-r from-agtech-blue/5 to-agtech-purple/5 relative"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isStatsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-serif font-bold mb-4 title-underline inline-block">I Nostri Numeri</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Risultati concreti che parlano del nostro impegno verso l'eccellenza e l'innovazione.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-10 rounded-2xl glass-card hover:shadow-glow-blue transition-all duration-500 transform hover:scale-[1.05] group"
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-agtech-blue-500 to-agtech-blue-700 text-white shadow-glow-blue group-hover:shadow-glow-blue"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Award className="w-10 h-10" />
              </motion.div>
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-3">{count1}+</div>
              <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">Progetti completati</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-8 rounded-xl backdrop-blur-sm bg-white/50 dark:bg-white/5 shadow-lg border border-gray-200 dark:border-white/10 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                backgroundColor: "rgba(255, 255, 255, 0.6)"
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-agtech-purple/10 text-agtech-purple">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-agtech-purple mb-2">{count2}%</div>
              <div className="text-lg font-medium text-gray-700 dark:text-gray-300">Soddisfazione clienti</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-8 rounded-xl backdrop-blur-sm bg-white/50 dark:bg-white/5 shadow-lg border border-gray-200 dark:border-white/10 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                backgroundColor: "rgba(255, 255, 255, 0.6)"
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-agtech-green/10 text-agtech-green">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-agtech-green mb-2">{count3}+</div>
              <div className="text-lg font-medium text-gray-700 dark:text-gray-300">Anni di esperienza</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section 
        ref={aboutRef}
        className="py-24 bg-white dark:bg-agtech-blue/20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isAboutVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-agtech-purple/20 rounded-lg transform rotate-3 z-0"></div>
                <img 
                  src="/agtech-uploads/05117b04-9b40-4413-bcca-0c6d768d3e0e.png" 
                  alt="AgTechDesigne" 
                  className="relative z-10 rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-6 title-underline">Chi Siamo</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                AgTechDesigne nasce dalla passione per l'innovazione e la tecnologia. Combina competenze tecniche avanzate con una profonda comprensione delle esigenze aziendali.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Il nostro obiettivo è rendere accessibili le tecnologie più avanzate alle aziende di ogni dimensione, creando soluzioni personalizzate che rispondano alle specifiche esigenze dei nostri clienti.
              </p>
              <Link to="/chi-siamo" className="inline-flex items-center px-6 py-3 rounded-lg bg-agtech-purple/90 hover:bg-agtech-purple text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg group">
                <span>Scopri più su di noi</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Servizi Section */}
      <section 
        ref={servicesRef}
        className="py-24 bg-gray-50 dark:bg-agtech-blue/10 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-agtech-blue/30 blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-agtech-purple/30 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-serif font-bold mb-4 title-underline inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={isServicesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              I Nostri Servizi
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isServicesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Offriamo soluzioni su misura per soddisfare ogni esigenza. Tecnologie all'avanguardia per il tuo business.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isServicesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ServiceCard
                icon={Server}
                title="AI & Computing"
                description="Soluzioni di computing distribuite e modelli AI personalizzati per ottimizzare i tuoi processi aziendali."
                hoverColor="hover:bg-agtech-blue/10"
                link="/servizi/ai-computing"
                delay={0}
                badge="Innovativo"
                badgeColor="bg-agtech-blue/20 text-agtech-blue"
                features={["Machine Learning", "Deep Learning", "Computer Vision", "NLP"]}
                gradient="from-agtech-blue-500 to-agtech-blue-700"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isServicesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ServiceCard
                icon={Code}
                title="Sviluppo Software"
                description="Software su misura sviluppato con tecnologie moderne per trasformare le tue idee in realtà digitale."
                hoverColor="hover:bg-agtech-purple/10"
                link="/servizi/sviluppo-software"
                delay={2}
                badge="Personalizzato"
                badgeColor="bg-agtech-purple/20 text-agtech-purple"
                features={["React/Next.js", "Python/Django", "Node.js", "Mobile Apps"]}
                gradient="from-agtech-purple-500 to-agtech-purple-700"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isServicesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ServiceCard
                icon={Database}
                title="Automazione Dati"
                description="Trasforma i tuoi dati in insights azionabili con soluzioni di automazione intelligente e analytics avanzati."
                hoverColor="hover:bg-agtech-green/10"
                link="/servizi/automazione-dati"
                delay={4}
                badge="Efficiente"
                badgeColor="bg-agtech-green/20 text-agtech-green"
                features={["Data Analytics", "Excel Automation", "Business Intelligence", "ETL Pipelines"]}
                gradient="from-agtech-green-500 to-agtech-green-700"
              />
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isServicesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/servizi"
              className="primary-button inline-flex items-center gap-2"
            >
              <span>Esplora tutti i servizi</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-agtech-blue-900/20 dark:to-agtech-purple-900/20 overflow-hidden relative"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-agtech-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-agtech-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-serif font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isTestimonialsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              Cosa Dicono i Nostri Clienti
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isTestimonialsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              La soddisfazione dei nostri clienti è la nostra priorità. Ecco le testimonianze di chi ha trasformato il proprio business con noi.
            </motion.p>
          </div>

          {/* Grid di testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                content={testimonial.content}
                image={testimonial.image}
                rating={testimonial.rating}
                delay={index * 0.2}
              />
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isTestimonialsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Vuoi essere il prossimo a raccontare la tua storia di successo?
            </p>
            <Link
              to="/contatti"
              className="primary-button inline-flex items-center gap-2"
            >
              <span>Inizia il tuo progetto</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-agtech-blue-900 via-agtech-purple-900 to-agtech-blue-800 text-white relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <ParticleSystem
            particleCount={60}
            colors={['rgba(255,255,255,0.3)', 'rgba(0,255,255,0.4)', 'rgba(255,0,255,0.3)']}
            speed={0.5}
            className="opacity-30"
          />
        </div>

        {/* Animated background shapes */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl"
              style={{
                background: i % 2 === 0
                  ? 'radial-gradient(circle, rgba(0,255,255,0.3) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(255,0,255,0.3) 0%, transparent 70%)',
                width: Math.random() * 400 + 200,
                height: Math.random() * 400 + 200,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Pronti a <span className="holographic-text">Trasformare</span> il tuo Business?
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Unisciti a centinaia di aziende che hanno già rivoluzionato i loro processi con le nostre soluzioni innovative.
              Il futuro del tuo business inizia oggi.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contatti"
                className="group relative overflow-hidden bg-white text-agtech-blue hover:text-white font-bold px-10 py-4 rounded-xl shadow-3d hover:shadow-glow-blue transition-all duration-300 transform hover:scale-[1.05] active:scale-[0.95]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  Parlaci del tuo progetto
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-agtech-blue-600 to-agtech-purple-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </Link>

              <Link
                to="/servizi"
                className="ghost-button text-white border-white hover:bg-white hover:text-agtech-blue"
              >
                <span>Esplora i servizi</span>
              </Link>
            </motion.div>

            {/* Stats preview */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { number: "50+", label: "Progetti Completati" },
                { number: "98%", label: "Clienti Soddisfatti" },
                { number: "24/7", label: "Supporto Dedicato" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;