import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CinematicIntroProps {
  onComplete: () => void;
}

const CinematicIntro = ({ onComplete }: CinematicIntroProps) => {
  const [phase, setPhase] = useState<'neural' | 'awakening' | 'consciousness' | 'logo' | 'complete'>('neural');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [nodes, setNodes] = useState<Array<{x: number, y: number, connections: number[], active: boolean}>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize neural network
    const nodeCount = 150;
    const initialNodes = Array.from({ length: nodeCount }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      connections: [] as number[],
      active: false
    }));

    // Create connections
    initialNodes.forEach((node, i) => {
      initialNodes.forEach((otherNode, j) => {
        if (i !== j) {
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
          );
          if (distance < 100 && Math.random() < 0.3) {
            node.connections.push(j);
          }
        }
      });
    });

    setNodes(initialNodes);

    // Animation sequence
    const sequence = async () => {
      // Phase 1: Neural network formation (3s)
      await new Promise(resolve => setTimeout(resolve, 3000));
      setPhase('awakening');

      // Phase 2: AI awakening - nodes start activating (2s)
      await new Promise(resolve => setTimeout(resolve, 2000));
      setPhase('consciousness');

      // Phase 3: Full consciousness - rapid activation (1.5s)
      await new Promise(resolve => setTimeout(resolve, 1500));
      setPhase('logo');

      // Phase 4: Logo revelation (2s)
      await new Promise(resolve => setTimeout(resolve, 2000));
      setPhase('complete');

      // Complete intro
      setTimeout(onComplete, 1000);
    };

    sequence();

    // Canvas animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      initialNodes.forEach((node, i) => {
        node.connections.forEach(connectionIndex => {
          const connectedNode = initialNodes[connectionIndex];
          const distance = Math.sqrt(
            Math.pow(node.x - connectedNode.x, 2) + Math.pow(node.y - connectedNode.y, 2)
          );

          let opacity = 0.1;
          let color = 'rgba(100, 100, 100, ';

          if (phase === 'awakening' && (node.active || connectedNode.active)) {
            opacity = 0.4;
            color = 'rgba(0, 212, 255, ';
          } else if (phase === 'consciousness') {
            opacity = 0.6;
            color = 'rgba(0, 255, 136, ';
          } else if (phase === 'logo') {
            opacity = 0.8;
            color = 'rgba(255, 255, 255, ';
          }

          ctx.strokeStyle = color + opacity + ')';
          ctx.lineWidth = phase === 'logo' ? 2 : 1;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connectedNode.x, connectedNode.y);
          ctx.stroke();
        });
      });

      // Draw nodes
      initialNodes.forEach((node, i) => {
        let radius = 2;
        let color = 'rgba(100, 100, 100, 0.5)';

        if (phase === 'awakening') {
          if (Math.random() < 0.01) node.active = true;
          if (node.active) {
            radius = 4;
            color = 'rgba(0, 212, 255, 0.8)';
          }
        } else if (phase === 'consciousness') {
          if (Math.random() < 0.05) node.active = true;
          if (node.active) {
            radius = 5;
            color = 'rgba(0, 255, 136, 0.9)';
          }
        } else if (phase === 'logo') {
          node.active = true;
          radius = 3;
          color = 'rgba(255, 255, 255, 0.7)';
        }

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();

        // Pulsing effect for active nodes
        if (node.active && phase !== 'logo') {
          const pulseRadius = radius + Math.sin(Date.now() * 0.01 + i) * 3;
          ctx.strokeStyle = color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [phase, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Neural Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at center, #0a0a0a 0%, #000000 100%)' }}
      />

      {/* Overlay Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Scan lines effect */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 255, 255, 0.1) 2px,
              rgba(0, 255, 255, 0.1) 4px
            )`
          }}
          animate={{
            backgroundPosition: ['0px 0px', '0px 20px']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

        {/* Consciousness awakening effect */}
        {phase === 'consciousness' && (
          <>
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.4, 0] }}
              transition={{ duration: 0.3, repeat: Infinity }}
              style={{
                background: 'radial-gradient(circle at center, rgba(0, 255, 136, 0.15) 0%, transparent 70%)'
              }}
            />
            {/* Digital glitch effect */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(90deg, transparent 0%, rgba(0, 255, 136, 0.1) 50%, transparent 100%)',
                  'linear-gradient(90deg, transparent 20%, rgba(0, 255, 136, 0.1) 70%, transparent 100%)',
                  'linear-gradient(90deg, transparent 0%, rgba(0, 255, 136, 0.1) 50%, transparent 100%)'
                ]
              }}
              transition={{ duration: 0.1, repeat: Infinity }}
            />
          </>
        )}

        {/* Logo phase - Matrix-like effect */}
        {phase === 'logo' && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            style={{
              background: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 100px,
                rgba(0, 212, 255, 0.05) 100px,
                rgba(0, 212, 255, 0.05) 102px
              )`
            }}
          />
        )}
      </div>

      {/* Text Overlays */}
      <div className="relative z-10 text-center">
        <AnimatePresence mode="wait">
          {phase === 'neural' && (
            <motion.div
              key="neural"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1 }}
              className="text-gray-400 font-mono text-lg tracking-wider"
            >
              INITIALIZING NEURAL NETWORK...
            </motion.div>
          )}

          {phase === 'awakening' && (
            <motion.div
              key="awakening"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 1 }}
              className="text-cyan-400 font-mono text-xl tracking-wider"
            >
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                NEURAL PATHWAYS ACTIVATING...
              </motion.div>
            </motion.div>
          )}

          {phase === 'consciousness' && (
            <motion.div
              key="consciousness"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1 }}
              className="text-green-400 font-mono text-2xl tracking-wider"
            >
              <motion.div
                animate={{
                  opacity: [0.7, 1, 0.7],
                  x: [0, -2, 2, 0],
                  textShadow: [
                    '0 0 10px rgba(0, 255, 136, 0.5)',
                    '0 0 30px rgba(0, 255, 136, 1)',
                    '0 0 10px rgba(0, 255, 136, 0.5)'
                  ]
                }}
                transition={{
                  opacity: { duration: 0.8, repeat: Infinity },
                  x: { duration: 0.1, repeat: Infinity },
                  textShadow: { duration: 0.5, repeat: Infinity }
                }}
              >
                CONSCIOUSNESS EMERGING...
              </motion.div>

              {/* Digital artifacts */}
              <motion.div
                className="absolute inset-0 text-green-400/30"
                animate={{
                  x: [0, 1, -1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 0.05, repeat: Infinity }}
              >
                CONSCIOUSNESS EMERGING...
              </motion.div>
            </motion.div>
          )}

          {phase === 'logo' && (
            <motion.div
              key="logo"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-center"
            >
              {/* Logo Container */}
              <motion.div
                className="relative mb-8"
                initial={{ rotateY: 180 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {/* Logo Background Glow */}
                <motion.div
                  className="absolute inset-0 w-32 h-32 mx-auto rounded-full blur-xl"
                  style={{
                    background: 'radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%)'
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Main Logo */}
                <motion.div
                  className="relative w-24 h-24 mx-auto neural-card flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    className="text-4xl font-cyber font-black hologram-text"
                    animate={{
                      textShadow: [
                        '0 0 20px rgba(0, 212, 255, 0.8)',
                        '0 0 40px rgba(0, 212, 255, 1)',
                        '0 0 20px rgba(0, 212, 255, 0.8)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    AG
                  </motion.div>

                  {/* Orbital Rings */}
                  <motion.div
                    className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ scale: 1.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 border border-purple-400/20 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    style={{ scale: 1.6 }}
                  />
                </motion.div>
              </motion.div>

              {/* Company Name */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="text-center"
              >
                <motion.h1
                  className="text-5xl font-cyber font-black hologram-text mb-4"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  AGTECH
                </motion.h1>
                <motion.p
                  className="text-cyan-400 text-lg tracking-widest font-mono"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  DIGITAL INNOVATION
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Skip Button */}
      <motion.button
        className="absolute top-8 right-8 text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-mono text-sm tracking-wider"
        onClick={onComplete}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        SKIP INTRO →
      </motion.button>

      {/* Progress Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex space-x-2">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-gray-600"
              animate={{
                backgroundColor:
                  (phase === 'neural' && i === 0) ||
                  (phase === 'awakening' && i === 1) ||
                  (phase === 'consciousness' && i === 2) ||
                  (phase === 'logo' && i === 3)
                    ? '#00d4ff' : '#4a5568'
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CinematicIntro;
