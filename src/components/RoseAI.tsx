import { motion } from 'framer-motion';
import { Bot, Sparkles, Zap } from 'lucide-react';
import TypingEffect from './TypingEffect';

interface RoseAIProps {
  variant?: 'floating' | 'inline' | 'hero';
  showIcon?: boolean;
  animated?: boolean;
  className?: string;
  showTyping?: boolean;
  messages?: string[];
}

const RoseAI: React.FC<RoseAIProps> = ({
  variant = 'floating',
  showIcon = true,
  animated = true,
  className = '',
  showTyping = false,
  messages = [
    "Benvenuti nel futuro dell'innovazione",
    "Sono Rose, la vostra CEO AI",
    "Trasformiamo le idee in realtà digitale",
    "Insieme verso il successo tecnologico"
  ]
}) => {
  const baseClasses = {
    floating: "glass-card border border-white/30 backdrop-blur-xl p-6",
    inline: "inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm",
    hero: "text-center"
  };

  const textSizes = {
    floating: "text-2xl md:text-3xl",
    inline: "text-lg",
    hero: "text-4xl md:text-5xl"
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const floatingAnimation = animated ? {
    y: [0, -10, 0],
    boxShadow: [
      "0 0 20px rgba(0,255,255,0.3)",
      "0 0 40px rgba(0,255,255,0.6)",
      "0 0 20px rgba(0,255,255,0.3)"
    ]
  } : {};

  const floatingTransition = animated ? {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  } : {};

  return (
    <motion.div
      className={`${baseClasses[variant]} ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      animate={variant === 'floating' ? floatingAnimation : {}}
      transition={variant === 'floating' ? floatingTransition : {}}
    >
      {variant === 'floating' && (
        <>
          {/* Icona AI */}
          {showIcon && (
            <motion.div
              className="flex justify-center mb-4"
              variants={itemVariants}
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-agtech-blue-500 to-agtech-purple-500 flex items-center justify-center">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                
                {/* Anelli orbitali */}
                <motion.div
                  className="absolute inset-0 border-2 border-agtech-green-400/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{ scale: 1.3 }}
                />
                <motion.div
                  className="absolute inset-0 border border-agtech-blue-400/20 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  style={{ scale: 1.6 }}
                />
              </div>
            </motion.div>
          )}

          {/* Testo principale */}
          <motion.h3 
            className={`${textSizes[variant]} font-bold text-white mb-2`}
            variants={itemVariants}
          >
            Benvenuti
          </motion.h3>
          
          <motion.p 
            className="text-lg md:text-xl text-agtech-green-400 font-semibold"
            variants={itemVariants}
          >
            Sono <span className="holographic-text">Rose</span> CEO AI
          </motion.p>

          {/* Sottotitolo con typing effect */}
          <motion.div
            className="text-sm text-white/70 mt-2"
            variants={itemVariants}
          >
            {showTyping ? (
              <TypingEffect
                texts={messages}
                speed={80}
                deleteSpeed={40}
                pauseDuration={3000}
                className="text-sm text-white/70"
              />
            ) : (
              "La vostra assistente AI per l'innovazione tecnologica"
            )}
          </motion.div>

          {/* Particelle decorative */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-agtech-green-400 rounded-full"
                style={{
                  left: `${20 + (i * 10)}%`,
                  top: `${20 + (i % 3) * 20}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </>
      )}

      {variant === 'inline' && (
        <>
          {showIcon && (
            <motion.div
              className="w-8 h-8 rounded-full bg-gradient-to-r from-agtech-blue-500 to-agtech-purple-500 flex items-center justify-center"
              variants={itemVariants}
            >
              <Bot className="w-4 h-4 text-white" />
            </motion.div>
          )}
          
          <motion.div variants={itemVariants}>
            <span className="text-white font-medium">
              Benvenuti, sono <span className="holographic-text">Rose</span> CEO AI
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Sparkles className="w-4 h-4 text-agtech-green-400" />
          </motion.div>
        </>
      )}

      {variant === 'hero' && (
        <>
          <motion.div
            className="flex justify-center mb-6"
            variants={itemVariants}
          >
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-agtech-blue-500 to-agtech-purple-500 flex items-center justify-center">
                <Bot className="w-12 h-12 text-white" />
              </div>
              
              {/* Effetti luminosi */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-agtech-blue-500 to-agtech-purple-500 rounded-full blur-xl opacity-50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <motion.h1 
            className={`${textSizes[variant]} font-bold text-white mb-4`}
            variants={itemVariants}
          >
            Benvenuti
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-agtech-green-400 font-semibold mb-4"
            variants={itemVariants}
          >
            Sono <span className="holographic-text">Rose</span> CEO AI
          </motion.p>

          <motion.p
            className="text-lg text-white/80 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            La vostra assistente AI dedicata all'innovazione tecnologica e alla trasformazione digitale del vostro business
          </motion.p>

          {/* Decorazioni */}
          <motion.div
            className="flex justify-center gap-4 mt-6"
            variants={itemVariants}
          >
            {[Sparkles, Zap, Bot].map((Icon, index) => (
              <motion.div
                key={index}
                className="w-8 h-8 text-agtech-green-400"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                <Icon className="w-full h-full" />
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default RoseAI;
