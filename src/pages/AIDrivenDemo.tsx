import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/workflow-3d.css';
import { 
  MessageCircle, 
  User, 
  CheckCircle, 
  Code, 
  FileText, 
  DollarSign, 
  Shield, 
  Database,
  Brain,
  Crown,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  Zap
} from 'lucide-react';
import NeuralNetworkBackground from '@/components/NeuralNetworkBackground';

const AIDrivenDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const workflowSteps = [
    {
      id: 1,
      title: "Cliente Invia Richiesta",
      description: "Il cliente invia una richiesta tramite il nostro sistema",
      icon: MessageCircle,
      color: "text-blue-400",
      borderColor: "border-blue-400/30",
      position: { x: 10, y: 20 }
    },
    {
      id: 2,
      title: "Rose AI Riceve",
      description: "Rose CEO AI riceve e analizza la richiesta con intelligenza avanzata",
      icon: Crown,
      color: "text-pink-400",
      borderColor: "border-pink-400/30",
      position: { x: 50, y: 10 }
    },
    {
      id: 3,
      title: "Valutazione Intelligente",
      description: "Rose valuta complessità, risorse necessarie e tempistiche",
      icon: Brain,
      color: "text-purple-400",
      borderColor: "border-purple-400/30",
      position: { x: 80, y: 25 }
    },
    {
      id: 4,
      title: "Notifica al CEO",
      description: "Rose informa il CEO fisico con analisi dettagliata",
      icon: User,
      color: "text-yellow-400",
      borderColor: "border-yellow-400/30",
      position: { x: 70, y: 60 }
    },
    {
      id: 5,
      title: "Conferma CEO",
      description: "Il CEO approva il progetto e autorizza l'esecuzione",
      icon: CheckCircle,
      color: "text-green-400",
      borderColor: "border-green-400/30",
      position: { x: 40, y: 70 }
    },
    {
      id: 6,
      title: "Attivazione Team AI",
      description: "Rose attiva tutti i dipendenti AI necessari per il progetto",
      icon: Zap,
      color: "text-cyan-400",
      borderColor: "border-cyan-400/30",
      position: { x: 15, y: 50 }
    }
  ];

  const aiEmployees = [
    {
      name: "DEV-AI",
      role: "Lead Developer",
      task: "Sviluppo codice e architettura",
      icon: Code,
      color: "text-purple-400",
      borderColor: "border-purple-400/30"
    },
    {
      name: "LEGAL-AI",
      role: "Legal Advisor",
      task: "Creazione contratti e compliance",
      icon: FileText,
      color: "text-blue-400",
      borderColor: "border-blue-400/30"
    },
    {
      name: "FINANCE-AI",
      role: "Financial Analyst",
      task: "Analisi economica e budget",
      icon: DollarSign,
      color: "text-green-400",
      borderColor: "border-green-400/30"
    },
    {
      name: "SECURITY-AI",
      role: "Security Expert",
      task: "Sicurezza e protezione dati",
      icon: Shield,
      color: "text-red-400",
      borderColor: "border-red-400/30"
    },
    {
      name: "DATA-AI",
      role: "Data Scientist",
      task: "Analisi dati e insights",
      icon: Database,
      color: "text-cyan-400",
      borderColor: "border-cyan-400/30"
    }
  ];

  const startDemo = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    setCompletedSteps([]);
    
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < workflowSteps.length - 1) {
          setCompletedSteps(completed => [...completed, prev]);
          return prev + 1;
        } else {
          setCompletedSteps(completed => [...completed, prev]);
          setIsPlaying(false);
          clearInterval(interval);
          return prev;
        }
      });
    }, 2000);
  };

  const resetDemo = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setCompletedSteps([]);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground 
            nodeCount={25}
            variant="ai"
            className="opacity-50"
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
              <Brain className="w-6 h-6 text-cyan-400" />
              <span className="text-cyan-400 font-cyber text-lg tracking-wider">AI-DRIVEN WORKFLOW</span>
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-cyber font-black text-white mb-8">
              DEMO <span className="hologram-text">AI-DRIVEN</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              Scopri come <span className="text-cyan-400 font-semibold">AgtechDesigne</span> gestisce ogni progetto
              attraverso un flusso di lavoro completamente automatizzato guidato da
              <span className="text-green-400 font-semibold"> intelligenza artificiale</span>.
            </p>

            {/* Advanced Demo Control Panel */}
            <motion.div
              className="neural-card p-8 max-w-2xl mx-auto mb-8 border border-cyan-400/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-cyber font-bold text-cyan-400 mb-2">
                  PANNELLO DI CONTROLLO DEMO
                </h3>
                <p className="text-gray-400 text-sm">
                  Controlla la visualizzazione del processo AI-driven
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                <motion.button
                  onClick={startDemo}
                  disabled={isPlaying}
                  className="group relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 rounded-xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative cyber-button px-8 py-4 disabled:opacity-50 bg-gray-900 border-2 border-green-400">
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ rotate: isPlaying ? 360 : 0 }}
                        transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
                      >
                        <Play className="w-5 h-5" />
                      </motion.div>
                      AVVIA DEMO
                    </div>
                  </div>
                </motion.button>

                <motion.button
                  onClick={resetDemo}
                  className="group relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative cyber-button border-purple-400 text-purple-400 hover:text-black px-8 py-4 bg-transparent border-2">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: -180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <RotateCcw className="w-5 h-5" />
                      </motion.div>
                      RESET
                    </div>
                  </div>
                </motion.button>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Progresso Demo</span>
                  <span>{Math.round((completedSteps.length / workflowSteps.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 to-green-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(completedSteps.length / workflowSteps.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center justify-center gap-3">
                <motion.div
                  className={`w-3 h-3 rounded-full ${
                    isPlaying ? 'bg-green-400' : 'bg-gray-500'
                  }`}
                  animate={{
                    scale: isPlaying ? [1, 1.2, 1] : 1,
                    opacity: isPlaying ? [1, 0.7, 1] : 1
                  }}
                  transition={{
                    duration: 1,
                    repeat: isPlaying ? Infinity : 0
                  }}
                />
                <span className={`text-sm font-cyber ${
                  isPlaying ? 'text-green-400' : 'text-gray-400'
                }`}>
                  {isPlaying ? 'DEMO IN ESECUZIONE' : 'DEMO IN PAUSA'}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Advanced Workflow Visualization */}
      <section className="py-32 bg-gray-900 relative overflow-hidden">
        {/* Dynamic Neural Background */}
        <div className="absolute inset-0 z-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`neural-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <div className={`w-2 h-2 rounded-full ${
                i % 3 === 0 ? 'bg-cyan-400' :
                i % 3 === 1 ? 'bg-green-400' : 'bg-purple-400'
              } shadow-lg`}></div>
            </motion.div>
          ))}
        </div>

        {/* Data Flow Lines */}
        <div className="absolute inset-0 z-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`flow-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              style={{
                left: '0%',
                top: `${20 + i * 10}%`,
                width: '100%',
              }}
              animate={{
                opacity: [0, 1, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Title */}
            <motion.div
              className="inline-flex items-center gap-3 neural-card px-8 py-4 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Brain className="w-6 h-6 text-cyan-400" />
              </motion.div>
              <span className="text-cyan-400 font-cyber text-lg tracking-wider">NEURAL WORKFLOW</span>
              <motion.div
                className="w-3 h-3 bg-cyan-400 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl font-cyber font-black text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              FLUSSO DI LAVORO <span className="hologram-text">AI-DRIVEN</span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ogni progetto segue un processo <span className="text-cyan-400 font-semibold">intelligente</span> e
              <span className="text-green-400 font-semibold"> automatizzato</span> che garantisce
              <span className="text-purple-400 font-semibold">risultati eccezionali</span>
            </motion.p>

            {/* Process Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { number: "6", label: "STEP PROCESS", color: "text-cyan-400" },
                { number: "100%", label: "AUTOMATED", color: "text-green-400" },
                { number: "0", label: "HUMAN ERROR", color: "text-purple-400" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="neural-card p-4 text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className={`text-3xl font-cyber font-bold ${stat.color} mb-2`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400 text-sm font-cyber tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Revolutionary 3D Workflow Visualization */}
          <div className="relative h-[600px] mb-20 perspective-1000">
            {/* 3D Stage Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 via-transparent to-gray-800/50 rounded-3xl backdrop-blur-sm border border-cyan-400/20"></div>

            {/* Animated Grid */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={`grid-h-${i}`}
                  className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                  style={{ top: `${i * 10}%` }}
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={`grid-v-${i}`}
                  className="absolute h-full w-px bg-gradient-to-b from-transparent via-purple-400 to-transparent"
                  style={{ left: `${i * 10}%` }}
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 + 1 }}
                />
              ))}
            </div>

            {/* Dynamic Connection Network */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
              {workflowSteps.slice(0, -1).map((step, index) => {
                const nextStep = workflowSteps[index + 1];
                const isActive = currentStep > index || completedSteps.includes(index);
                const isCurrentConnection = currentStep === index + 1 && isPlaying;

                return (
                  <g key={`connection-${index}`}>
                    {/* Main Connection Line */}
                    <motion.line
                      x1={`${step.position.x}%`}
                      y1={`${step.position.y}%`}
                      x2={`${nextStep.position.x}%`}
                      y2={`${nextStep.position.y}%`}
                      stroke={isActive ? "#00d4ff" : "#374151"}
                      strokeWidth={isCurrentConnection ? "4" : "2"}
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={{
                        pathLength: isActive ? 1 : 0,
                        stroke: isCurrentConnection ? "#00ff88" : (isActive ? "#00d4ff" : "#374151")
                      }}
                      transition={{ duration: 0.8 }}
                    />

                    {/* Data Flow Particles */}
                    {isActive && (
                      <motion.circle
                        r="3"
                        fill="#00ff88"
                        initial={{
                          cx: `${step.position.x}%`,
                          cy: `${step.position.y}%`
                        }}
                        animate={{
                          cx: `${nextStep.position.x}%`,
                          cy: `${nextStep.position.y}%`
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.3
                        }}
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Holographic Data Streams */}
            {isPlaying && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={`stream-${i}`}
                    className="absolute w-1 h-20 bg-gradient-to-b from-cyan-400 via-green-400 to-transparent rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: '10%',
                    }}
                    animate={{
                      y: [0, 400, 0],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Revolutionary 3D Workflow Steps */}
            {workflowSteps.map((step, index) => {
              const isActive = currentStep === index;
              const isCompleted = completedSteps.includes(index);
              const isNext = currentStep === index - 1 && isPlaying;

              return (
                <motion.div
                  key={step.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30"
                  style={{
                    left: `${step.position.x}%`,
                    top: `${step.position.y}%`
                  }}
                  initial={{ scale: 0, opacity: 0, rotateY: -90 }}
                  animate={{
                    scale: isActive ? 1.2 : 1,
                    opacity: 1,
                    rotateY: 0,
                    z: isActive ? 50 : 0
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.1,
                    z: 30,
                    rotateX: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Holographic Aura */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-green-400/20 to-purple-400/20 rounded-2xl blur-xl"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.7, 0.3],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}

                  {/* Energy Rings */}
                  {isActive && (
                    <>
                      {[...Array(3)].map((_, ringIndex) => (
                        <motion.div
                          key={`ring-${ringIndex}`}
                          className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
                          style={{
                            width: `${100 + ringIndex * 20}%`,
                            height: `${100 + ringIndex * 20}%`,
                            left: `${-10 - ringIndex * 10}%`,
                            top: `${-10 - ringIndex * 10}%`,
                          }}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0.5],
                            rotate: [0, 360]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: ringIndex * 0.3
                          }}
                        />
                      ))}
                    </>
                  )}

                  {/* Main Card */}
                  <motion.div
                    className={`neural-card p-8 border-2 backdrop-blur-lg ${
                      isActive ? 'border-cyan-400 shadow-glow-cyan bg-cyan-400/10' :
                      isCompleted ? 'border-green-400 shadow-glow-green bg-green-400/10' :
                      isNext ? 'border-yellow-400 shadow-glow-yellow bg-yellow-400/10' :
                      step.borderColor + ' bg-gray-900/80'
                    } transition-all duration-700 max-w-sm transform-gpu`}
                    animate={{
                      rotateY: isActive ? [0, 5, -5, 0] : 0,
                    }}
                    transition={{
                      duration: 2,
                      repeat: isActive ? Infinity : 0
                    }}
                  >
                    <div className="text-center relative">
                      {/* Icon Container with 3D Effect */}
                      <motion.div
                        className={`w-20 h-20 neural-card flex items-center justify-center mx-auto mb-6 relative ${
                          isActive ? 'shadow-glow-cyan' :
                          isCompleted ? 'shadow-glow-green' : ''
                        }`}
                        animate={{
                          rotateY: isActive ? 360 : 0,
                          scale: isActive ? [1, 1.1, 1] : 1
                        }}
                        transition={{
                          rotateY: { duration: 2, repeat: isActive ? Infinity : 0 },
                          scale: { duration: 1, repeat: isActive ? Infinity : 0 }
                        }}
                      >
                        {/* Icon Glow */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 bg-cyan-400/30 rounded-xl blur-md"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.3, 0.7, 0.3]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity
                            }}
                          />
                        )}

                        <step.icon className={`w-10 h-10 relative z-10 ${
                          isActive ? 'text-cyan-400' :
                          isCompleted ? 'text-green-400' :
                          isNext ? 'text-yellow-400' :
                          step.color
                        }`} />
                      </motion.div>

                      {/* Step Number */}
                      <motion.div
                        className={`absolute -top-4 -right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-cyber font-bold ${
                          isActive ? 'bg-cyan-400 text-gray-900' :
                          isCompleted ? 'bg-green-400 text-gray-900' :
                          'bg-gray-700 text-gray-300'
                        }`}
                        animate={{
                          scale: isActive ? [1, 1.2, 1] : 1
                        }}
                        transition={{
                          duration: 1,
                          repeat: isActive ? Infinity : 0
                        }}
                      >
                        {index + 1}
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        className={`font-cyber font-bold mb-4 text-lg ${
                          isActive ? 'text-cyan-400' :
                          isCompleted ? 'text-green-400' :
                          isNext ? 'text-yellow-400' :
                          'text-white'
                        }`}
                        animate={{
                          scale: isActive ? [1, 1.05, 1] : 1
                        }}
                        transition={{
                          duration: 2,
                          repeat: isActive ? Infinity : 0
                        }}
                      >
                        {step.title}
                      </motion.h3>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {step.description}
                      </p>

                      {/* Progress Indicator */}
                      {isActive && (
                        <motion.div
                          className="mt-4 flex justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <div className="flex gap-1">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="w-2 h-2 bg-cyan-400 rounded-full"
                                animate={{
                                  scale: [1, 1.5, 1],
                                  opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  delay: i * 0.2
                                }}
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {/* Completion Check */}
                      {isCompleted && (
                        <motion.div
                          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-gray-900" />
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Employees Section */}
      <section className="py-32 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={15}
            variant="software"
            className="opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 neural-card px-6 py-3 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-cyber text-sm tracking-wider">AI WORKFORCE</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </motion.div>

            <h2 className="text-4xl font-cyber font-bold text-white mb-6">
              DIPENDENTI <span className="text-green-400">AI SPECIALIZZATI</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Una volta ricevuta la conferma, Rose attiva automaticamente tutti i dipendenti AI necessari
            </p>
          </motion.div>

          {/* AI Employees Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiEmployees.map((employee, index) => (
              <motion.div
                key={employee.name}
                className={`neural-card p-8 border ${employee.borderColor} group hover:scale-105 transition-all duration-500`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* AI Status Indicator */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 neural-card flex items-center justify-center mx-auto group-hover:shadow-glow-green transition-all duration-300`}>
                    <employee.icon className={`w-10 h-10 ${employee.color}`} />
                  </div>

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
                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  </motion.div>
                </div>

                {/* AI Info */}
                <div className="text-center">
                  <h3 className={`text-xl font-cyber font-bold ${employee.color} mb-2`}>
                    {employee.name}
                  </h3>
                  <p className="text-white font-cyber text-sm mb-3">
                    {employee.role}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {employee.task}
                  </p>
                </div>

                {/* AI Activity Indicator */}
                <div className="mt-6 flex justify-center">
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-green-400 rounded-full"
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

          {/* Process Flow */}
          <motion.div
            className="mt-20 neural-card p-12 border border-cyan-400/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-cyber font-bold text-cyan-400 mb-8 text-center">
              PROCESSO DI ATTIVAZIONE
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 neural-card flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-pink-400" />
                </div>
                <h4 className="font-cyber font-bold text-pink-400 mb-2">ROSE ANALIZZA</h4>
                <p className="text-gray-300 text-sm">
                  Rose CEO AI analizza il progetto e identifica le competenze necessarie
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 neural-card flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="font-cyber font-bold text-yellow-400 mb-2">ATTIVAZIONE AUTOMATICA</h4>
                <p className="text-gray-300 text-sm">
                  Attiva automaticamente solo i dipendenti AI necessari per il progetto specifico
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 neural-card flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="font-cyber font-bold text-green-400 mb-2">COORDINAMENTO</h4>
                <p className="text-gray-300 text-sm">
                  Coordina il lavoro di tutti gli AI per garantire risultati ottimali
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-cyber font-bold text-white mb-6">
              PRONTO A SPERIMENTARE IL FUTURO?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contatti"
                className="cyber-button px-8 py-4"
              >
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5" />
                  RICHIEDI DEMO PERSONALIZZATA
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>
              <a
                href="/servizi"
                className="cyber-button border-purple-400 text-purple-400 hover:text-black px-8 py-4"
              >
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5" />
                  ESPLORA SERVIZI
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIDrivenDemo;
