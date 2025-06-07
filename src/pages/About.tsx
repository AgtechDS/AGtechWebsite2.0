
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Lightbulb, Users, Shield, Sparkles, Heart, Award, Brain, Zap, Cpu, Network, Eye, Layers, GitBranch, Code, Database } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";
import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";

const About = () => {
  // Refs per le animazioni
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  // Stati per le animazioni
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isValuesVisible, setIsValuesVisible] = useState(false);
  const [isTeamVisible, setIsTeamVisible] = useState(false);

  // Effect per gestire l'intersezione
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target === headerRef.current) {
            setIsHeaderVisible(true);
          } else if (entry.target === contentRef.current) {
            setIsContentVisible(true);
          } else if (entry.target === valuesRef.current) {
            setIsValuesVisible(true);
          } else if (entry.target === teamRef.current) {
            setIsTeamVisible(true);
          }

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);
    if (teamRef.current) observer.observe(teamRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (valuesRef.current) observer.unobserve(valuesRef.current);
      if (teamRef.current) observer.unobserve(teamRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section Neural */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 text-white overflow-hidden">
        {/* Advanced Neural Network Background */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={28}
            variant="ai"
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
            {/* Neural badge */}
            <motion.div
              className="inline-flex items-center gap-3 neural-card px-8 py-4 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeaderVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Brain className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-cyber text-lg tracking-wider">NEURAL IDENTITY</span>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-cyber font-black mb-8 leading-tight">
              CHI <span className="hologram-text">SIAMO</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-gray-300 leading-relaxed">
              Conoscici meglio: la nostra <span className="text-green-400 font-semibold">storia neural</span>,
              i nostri <span className="text-cyan-400 font-semibold">valori digitali</span> e
              la nostra <span className="text-purple-400 font-semibold">missione futuristica</span> nel mondo dell'innovazione tecnologica.
            </p>

            {/* Neural DNA Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                {
                  icon: Brain,
                  label: "NEURAL INNOVATION",
                  desc: "AI-POWERED SOLUTIONS",
                  color: "text-green-400",
                  description: "Intelligenza artificiale avanzata"
                },
                {
                  icon: Zap,
                  label: "QUANTUM EXCELLENCE",
                  desc: "TECH LEADERSHIP",
                  color: "text-cyan-400",
                  description: "Eccellenza tecnologica"
                },
                {
                  icon: Cpu,
                  label: "FUTURE READY",
                  desc: "NEXT-GEN TECH",
                  color: "text-purple-400",
                  description: "Pronti per il futuro"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="neural-card p-8 text-center group hover:scale-105 transition-all duration-500 hover:shadow-glow-cyan"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeaderVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-20 h-20 neural-card flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow-cyan transition-all duration-300">
                    <item.icon className={`w-10 h-10 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div className={`text-xl font-cyber font-bold ${item.color} mb-2`}>{item.label}</div>
                  <div className="text-white text-sm font-cyber tracking-wider mb-2">{item.desc}</div>
                  <div className="text-gray-400 text-xs">{item.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
      </section>

      {/* Neural Story Section */}
      <section
        ref={contentRef}
        className="py-32 bg-gray-900 relative"
      >
        {/* Background neural network */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={15}
            variant="software"
            className="opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isContentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              {/* Neural badge */}
              <motion.div
                className="inline-flex items-center gap-2 neural-card px-6 py-3 mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isContentVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Code className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-cyber text-sm tracking-wider">NEURAL GENESIS</span>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-cyber font-bold text-white mb-12 text-center">
                LA NOSTRA <span className="hologram-text">STORIA</span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-8">
                  <motion.div
                    className="neural-card p-6"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isContentVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <p className="text-lg text-gray-300 leading-relaxed">
                      <span className="text-green-400 font-semibold">AgTechDesigne</span> è un team di esperti sviluppatori e consulenti IT appassionati di
                      <span className="text-cyan-400 font-semibold"> innovazione tecnologica</span>. Fondata con l'obiettivo di rendere accessibili le
                      tecnologie più avanzate alle aziende di ogni dimensione, la nostra società combina competenze tecniche di alto livello con una
                      profonda comprensione delle esigenze aziendali.
                    </p>
                  </motion.div>

                  <motion.div
                    className="neural-card p-6"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isContentVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Nati dalla <span className="text-purple-400 font-semibold">passione per la tecnologia</span> e l'innovazione, abbiamo deciso di mettere le nostre
                      competenze al servizio delle imprese che desiderano affrontare la
                      <span className="text-green-400 font-semibold"> trasformazione digitale</span> con soluzioni su misura, efficaci e all'avanguardia.
                    </p>
                  </motion.div>

                  <motion.div
                    className="neural-card p-6"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isContentVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Il nostro <span className="text-cyan-400 font-semibold">team multidisciplinare</span> vanta esperienza in diversi settori tecnologici,
                      dall'<span className="text-green-400 font-semibold">intelligenza artificiale</span> allo sviluppo software, dall'automazione dei dati al
                      <span className="text-purple-400 font-semibold">computing distribuito</span>. Questa varietà di competenze ci permette di affrontare
                      progetti complessi con un approccio integrato e completo.
                    </p>
                  </motion.div>
                </div>

                {/* Neural visualization */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isContentVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="neural-card p-8 text-center">
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { icon: Brain, label: "AI/ML", color: "text-green-400" },
                        { icon: Code, label: "SOFTWARE", color: "text-purple-400" },
                        { icon: Database, label: "DATA", color: "text-cyan-400" },
                        { icon: Network, label: "CLOUD", color: "text-green-400" }
                      ].map((tech, index) => (
                        <motion.div
                          key={index}
                          className="neural-card p-4 group hover:scale-105 transition-all duration-300"
                          whileHover={{ y: -5 }}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={isContentVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                        >
                          <div className="w-12 h-12 neural-card flex items-center justify-center mx-auto mb-3 group-hover:shadow-glow-cyan transition-all duration-300">
                            <tech.icon className={`w-6 h-6 ${tech.color}`} />
                          </div>
                          <div className={`text-sm font-cyber font-bold ${tech.color}`}>{tech.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Neural Values Section */}
      <section
        ref={valuesRef}
        className="py-32 bg-gradient-to-br from-gray-800 via-cyan-900/20 to-gray-900 relative overflow-hidden"
      >
        {/* Background neural network */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={20}
            variant="data"
            className="opacity-40"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-20">
            {/* Neural badge */}
            <motion.div
              className="inline-flex items-center gap-2 neural-card px-6 py-3 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isValuesVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
            >
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-cyber text-sm tracking-wider">NEURAL VALUES</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-cyber font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isValuesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I NOSTRI <span className="hologram-text">VALORI</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isValuesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I <span className="text-cyan-400 font-semibold">principi neurali</span> che guidano il nostro lavoro e definiscono chi siamo come
              <span className="text-green-400 font-semibold"> team tecnologico</span> e come
              <span className="text-purple-400 font-semibold">azienda innovativa</span>.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Innovazione Continua */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isValuesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -15 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-cyan-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

              <div className="relative neural-card p-8 h-full border border-green-400/30 group-hover:border-green-400/60 transition-all duration-500">
                <motion.div
                  className="w-20 h-20 neural-card flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow-green transition-all duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Lightbulb className="w-10 h-10 text-green-400" />
                </motion.div>
                <h3 className="text-2xl font-cyber font-bold text-white mb-6 text-center">
                  INNOVAZIONE <span className="text-green-400">CONTINUA</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-center">
                  Ci impegniamo a rimanere all'<span className="text-green-400 font-semibold">avanguardia</span> nel campo tecnologico,
                  studiando e implementando costantemente <span className="text-cyan-400 font-semibold">nuove soluzioni</span> che
                  possano apportare valore ai nostri clienti.
                </p>
              </div>
            </motion.div>

            {/* Qualità e Affidabilità */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isValuesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -15 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

              <div className="relative neural-card p-8 h-full border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-500">
                <motion.div
                  className="w-20 h-20 neural-card flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow-cyan transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Shield className="w-10 h-10 text-cyan-400" />
                </motion.div>
                <h3 className="text-2xl font-cyber font-bold text-white mb-6 text-center">
                  QUALITÀ & <span className="text-cyan-400">AFFIDABILITÀ</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-center">
                  Ogni soluzione che sviluppiamo risponde ai più alti <span className="text-cyan-400 font-semibold">standard di qualità</span>,
                  sicurezza e prestazioni. La <span className="text-green-400 font-semibold">fiducia</span> dei nostri clienti è il nostro bene più prezioso.
                </p>
              </div>
            </motion.div>

            {/* Trasparenza e Collaborazione */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isValuesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -15 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

              <div className="relative neural-card p-8 h-full border border-purple-400/30 group-hover:border-purple-400/60 transition-all duration-500">
                <motion.div
                  className="w-20 h-20 neural-card flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow-purple transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Target className="w-10 h-10 text-purple-400" />
                </motion.div>
                <h3 className="text-2xl font-cyber font-bold text-white mb-6 text-center">
                  TRASPARENZA & <span className="text-purple-400">COLLABORAZIONE</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-center">
                  Crediamo nel potere della <span className="text-purple-400 font-semibold">collaborazione aperta</span> e trasparente.
                  Lavoriamo a stretto contatto con i nostri clienti, condividendo <span className="text-cyan-400 font-semibold">conoscenze</span> e
                  obiettivi per raggiungere insieme i migliori risultati.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Neural Mission Section */}
      <section
        ref={teamRef}
        className="py-32 bg-gray-900 relative overflow-hidden"
      >
        {/* Background neural network */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={18}
            variant="services"
            className="opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image Section */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={isTeamVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative group">
                {/* Neural frame effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                <div className="relative neural-card p-4 border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-500">
                  <img
                    src="/agtech-uploads/CEO1.jpg"
                    alt="AgTechDesigne CEO - Neural Leadership"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={isTeamVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Neural badge */}
              <motion.div
                className="inline-flex items-center gap-2 neural-card px-6 py-3 mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isTeamVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Target className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-cyber text-sm tracking-wider">NEURAL MISSION</span>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-cyber font-bold text-white mb-8">
                LA NOSTRA <span className="hologram-text">MISSIONE</span>
              </h2>

              <div className="space-y-6 mb-8">
                <motion.div
                  className="neural-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isTeamVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-lg text-gray-300 leading-relaxed">
                    La nostra missione è <span className="text-cyan-400 font-semibold">democratizzare l'accesso</span> alle tecnologie avanzate,
                    rendendo l'<span className="text-green-400 font-semibold">innovazione digitale</span> disponibile a imprese di ogni dimensione.
                    Crediamo che ogni azienda meriti <span className="text-purple-400 font-semibold">soluzioni tecnologiche su misura</span> che
                    possano realmente fare la differenza nel proprio settore.
                  </p>
                </motion.div>

                <motion.div
                  className="neural-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isTeamVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Ci proponiamo di essere un <span className="text-cyan-400 font-semibold">partner tecnologico affidabile</span> e lungimirante,
                    in grado di guidare i nostri clienti attraverso il processo di
                    <span className="text-green-400 font-semibold"> trasformazione digitale</span> con competenza, trasparenza e un
                    <span className="text-purple-400 font-semibold">approccio orientato ai risultati</span>.
                  </p>
                </motion.div>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isTeamVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  to="/servizi"
                  className="cyber-button group"
                >
                  <span className="flex items-center gap-3">
                    <Brain className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    SCOPRI SERVIZI
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
                <Link
                  to="/contatti"
                  className="cyber-button border-purple-400 text-purple-400 hover:text-black group"
                >
                  <span className="flex items-center gap-3">
                    <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    CONTATTACI
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Neural CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-green-900/20 to-purple-900/20 text-white relative overflow-hidden">
        {/* Advanced Neural Background */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={30}
            variant="ai"
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
              <Brain className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-cyber text-lg tracking-wider">NEURAL COLLABORATION</span>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-cyber font-black text-white mb-8">
              PRONTI A <span className="hologram-text">INNOVARE</span> INSIEME?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Scopri come possiamo aiutarti a trasformare la tua <span className="text-green-400 font-semibold">visione</span> in
              <span className="text-cyan-400 font-semibold"> realtà digitale</span> con soluzioni tecnologiche
              <span className="text-purple-400 font-semibold">all'avanguardia</span>.
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
                  <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  PARLIAMO DEL PROGETTO
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link
                to="/servizi"
                className="cyber-button border-green-400 text-green-400 hover:text-black text-lg px-12 py-4 group"
              >
                <span className="flex items-center gap-3">
                  <Brain className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  ESPLORA SOLUZIONI
                </span>
              </Link>
            </motion.div>

            {/* Neural stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { number: "100%", label: "NEURAL FOCUS", color: "text-green-400" },
                { number: "∞", label: "INNOVATION", color: "text-cyan-400" },
                { number: "24/7", label: "PARTNERSHIP", color: "text-purple-400" }
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

      {/* Neural Testimonials Section */}
      <section className="py-32 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background neural network */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={12}
            variant="data"
            className="opacity-25"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              {/* Neural badge */}
              <motion.div
                className="inline-flex items-center gap-2 neural-card px-6 py-3 mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Users className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-cyber text-sm tracking-wider">NEURAL FEEDBACK</span>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-cyber font-bold text-white mb-8">
                COSA DICONO <span className="hologram-text">DI NOI</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Le <span className="text-cyan-400 font-semibold">opinioni</span> dei nostri clienti sono la testimonianza più sincera del nostro
                impegno per l'<span className="text-green-400 font-semibold">eccellenza</span> e l'
                <span className="text-purple-400 font-semibold">innovazione</span> tecnologica.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Marco Bianchi",
                  role: "CTO",
                  company: "TechInnovate",
                  content: "AgTechDesigne ha trasformato completamente il nostro approccio alla gestione dei dati. La loro soluzione personalizzata ha aumentato la nostra efficienza del 40% e ridotto i costi operativi.",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                  rating: 5
                },
                {
                  name: "Laura Rossi",
                  role: "CEO",
                  company: "Digital Solutions",
                  content: "Collaborare con AgTechDesigne è stata un'esperienza straordinaria. Il team è altamente professionale e sempre disponibile a trovare soluzioni innovative per ogni sfida.",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                  rating: 5
                },
                {
                  name: "Giovanni Verdi",
                  role: "Direttore IT",
                  company: "Global Services",
                  content: "Grazie ad AgTechDesigne abbiamo implementato un sistema di intelligenza artificiale che ha rivoluzionato il nostro servizio clienti. Risultati eccezionali in tempi record.",
                  image: "https://randomuser.me/api/portraits/men/67.jpg",
                  rating: 5
                }
              ].map((testimonial, index) => (
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
          </div>
        </div>
      </section>

      {/* Neural Partners Section */}
      <section className="py-32 bg-gray-800 relative overflow-hidden">
        {/* Background neural network */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={10}
            variant="services"
            className="opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            {/* Neural badge */}
            <motion.div
              className="inline-flex items-center gap-2 neural-card px-6 py-3 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Network className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-cyber text-sm tracking-wider">NEURAL NETWORK</span>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-cyber font-bold text-white mb-8">
              I NOSTRI <span className="hologram-text">PARTNER</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Collaboriamo con <span className="text-purple-400 font-semibold">aziende leader</span> per offrire
              <span className="text-cyan-400 font-semibold"> soluzioni tecnologiche integrate</span> e
              <span className="text-green-400 font-semibold">all'avanguardia</span>.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Neural partner cards */}
            {[1, 2, 3, 4, 5].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="neural-card p-6 text-center group hover:scale-105 transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 neural-card flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-purple transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-lg flex items-center justify-center">
                    <span className="text-white font-cyber text-xs font-bold">P{item}</span>
                  </div>
                </div>
                <div className="text-purple-400 font-cyber text-sm font-bold">PARTNER {item}</div>
                <div className="text-gray-400 text-xs mt-1">Tech Alliance</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
