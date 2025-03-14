import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import MatrixBackground from "@/components/MatrixBackground";
import ServiceCard from "@/components/ServiceCard";
import { Server, Code, Database, Award, Users, ArrowRight, ChevronDown } from "lucide-react";

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
      role: "CEO, TechInnovate",
      content: "AgTechDesigne ha trasformato completamente il nostro approccio all'analisi dati. Le soluzioni personalizzate hanno migliorato l'efficienza del 40%.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Laura Bianchi",
      role: "CTO, DataSphere",
      content: "La competenza tecnica e la capacità di comprendere le nostre esigenze hanno reso AgTechDesigne il partner ideale per i nostri progetti di AI.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Giovanni Verdi",
      role: "Direttore IT, InnovaGroup",
      content: "Professionalità, puntualità e soluzioni innovative. AgTechDesigne ha superato ogni nostra aspettativa.",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
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
        {/* Advanced background with particles and grid */}
        <div className="absolute inset-0 z-0">
          <MatrixBackground intensity={5} speed={5} opacity={0.08} />
          
          {/* Animated grid overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <span className="text-white/90 font-medium">Innovazione tecnologica per il tuo business</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-bold mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Innovazione e Tecnologia
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
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/servizi" className="primary-button backdrop-blur-sm bg-agtech-blue/80 hover:bg-agtech-blue group">
              <span>Scopri i nostri servizi</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contatti" className="secondary-button backdrop-blur-sm bg-white/10 hover:bg-white/20">
              Contattaci ora
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

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className="py-16 bg-gradient-to-r from-agtech-blue/5 to-agtech-purple/5"
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
              className="text-center p-8 rounded-xl backdrop-blur-sm bg-white/50 dark:bg-white/5 shadow-lg border border-gray-200 dark:border-white/10 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                backgroundColor: "rgba(255, 255, 255, 0.6)"
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-agtech-blue/10 text-agtech-blue">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-agtech-blue mb-2">{count1}+</div>
              <div className="text-lg font-medium text-gray-700 dark:text-gray-300">Progetti completati</div>
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
                  src="/lovable-uploads/05117b04-9b40-4413-bcca-0c6d768d3e0e.png" 
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
                description="Soluzioni di computing distribuite e modelli AI personalizzati per ottimizzare i tuoi processi."
                hoverColor="hover:bg-agtech-blue/10"
                link="/servizi/ai-computing"
                delay={0}
                badge="Innovativo"
                badgeColor="bg-agtech-blue/20 text-agtech-blue"
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
                description="Software su misura sviluppato con Python, JavaScript, C++, Rust e Go per ogni esigenza."
                hoverColor="hover:bg-agtech-purple/10"
                link="/servizi/sviluppo-software"
                delay={2}
                badge="Personalizzato"
                badgeColor="bg-agtech-purple/20 text-agtech-purple"
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
                description="Soluzioni Excel personalizzate e automazioni per migliorare l'analisi e la gestione dei dati."
                hoverColor="hover:bg-agtech-green/10"
                link="/servizi/automazione-dati"
                delay={4}
                badge="Efficiente"
                badgeColor="bg-agtech-green/20 text-agtech-green"
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
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-agtech-blue to-agtech-purple text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg group hover:scale-[1.02]"
            >
              <span>Esplora tutti i servizi</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        ref={testimonialsRef}
        className="py-24 bg-white dark:bg-agtech-blue/20 overflow-hidden"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-serif font-bold mb-4 title-underline inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={isTestimonialsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              Cosa Dicono i Nostri Clienti
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isTestimonialsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              La soddisfazione dei nostri clienti è la nostra priorità. Ecco alcune testimonianze di chi ha scelto di lavorare con noi.
            </motion.p>
          </div>
          
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-white dark:bg-agtech-blue/10 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 dark:border-white/10">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={testimonials[activeTestimonial].image} 
                        alt={testimonials[activeTestimonial].name}
                        className="w-20 h-20 rounded-full object-cover border-2 border-agtech-blue"
                      />
                    </div>
                    <div>
                      <div className="mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-6">
                        "{testimonials[activeTestimonial].content}"
                      </p>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {testimonials[activeTestimonial].name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {testimonials[activeTestimonial].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index 
                      ? 'bg-agtech-blue w-8' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Testimonianza ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={() => setActiveTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Testimonianza precedente"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => setActiveTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Testimonianza successiva"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-agtech-blue to-agtech-purple text-white relative">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Pronti a trasformare il tuo business?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Contattaci oggi per scoprire come possiamo aiutarti a raggiungere i tuoi obiettivi tecnologici.
            </p>
            <Link to="/contatti" className="bg-white text-agtech-blue hover:bg-opacity-90 font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] inline-flex items-center">
              <span>Parlaci del tuo progetto</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;