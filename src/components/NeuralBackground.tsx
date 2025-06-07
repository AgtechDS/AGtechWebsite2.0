import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
}

const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth || 1920;
      canvas.height = window.innerHeight || 1080;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize nodes with different types
    const nodeCount = 80;
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        connections: []
      });
    }

    nodesRef.current = nodes;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update nodes
      nodes.forEach((node, i) => {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;

        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Find connections
        node.connections = [];
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              node.connections.push(j);
            }
          }
        });
      });

      // Draw connections with AI-themed colors
      nodes.forEach((node, i) => {
        node.connections.forEach(connectionIndex => {
          const connectedNode = nodes[connectionIndex];
          const dx = node.x - connectedNode.x;
          const dy = node.y - connectedNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const opacity = 1 - (distance / 120);

          // Gradient connections for AI effect
          const gradient = ctx.createLinearGradient(node.x, node.y, connectedNode.x, connectedNode.y);
          gradient.addColorStop(0, `rgba(0, 212, 255, ${opacity * 0.3})`);
          gradient.addColorStop(0.5, `rgba(139, 92, 246, ${opacity * 0.4})`);
          gradient.addColorStop(1, `rgba(0, 255, 136, ${opacity * 0.3})`);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = Math.max(0.5, opacity * 2);
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connectedNode.x, connectedNode.y);
          ctx.stroke();

          // Data packets flowing through connections
          if (Math.random() < 0.02) {
            const progress = (Date.now() * 0.001) % 1;
            const packetX = node.x + (connectedNode.x - node.x) * progress;
            const packetY = node.y + (connectedNode.y - node.y) * progress;

            ctx.fillStyle = `rgba(0, 255, 136, ${opacity * 0.8})`;
            ctx.beginPath();
            ctx.arc(packetX, packetY, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      });

      // Draw nodes with AI-themed styling
      nodes.forEach((node, index) => {
        const connectionCount = node.connections.length;
        const isHub = connectionCount > 4;
        const isProcessor = connectionCount > 2;

        // Different node types based on connections
        if (isHub) {
          // Hub nodes - main AI processors
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 12);
          gradient.addColorStop(0, 'rgba(0, 255, 136, 0.9)');
          gradient.addColorStop(0.3, 'rgba(0, 212, 255, 0.6)');
          gradient.addColorStop(1, 'transparent');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
          ctx.fill();

          // Pulsing ring for hub nodes
          const pulseRadius = 12 + Math.sin(Date.now() * 0.003 + index) * 4;
          ctx.strokeStyle = `rgba(0, 255, 136, ${0.4 + Math.sin(Date.now() * 0.003 + index) * 0.3})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
          ctx.stroke();
        } else if (isProcessor) {
          // Processor nodes
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 8);
          gradient.addColorStop(0, 'rgba(139, 92, 246, 0.8)');
          gradient.addColorStop(0.5, 'rgba(0, 212, 255, 0.4)');
          gradient.addColorStop(1, 'transparent');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Regular nodes
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 6);
          gradient.addColorStop(0, 'rgba(0, 212, 255, 0.6)');
          gradient.addColorStop(1, 'transparent');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Neural Network Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.6 }}
      />
      
      {/* Floating Data Streams */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 bg-gradient-to-b from-cyan-400 to-transparent"
            style={{
              left: `${20 + i * 20}%`,
              height: '100px',
              top: '-100px'
            }}
            animate={{
              y: [0, 1000],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Cyber Scan Lines */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute w-full bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent"
          style={{ height: '2px', top: '0px' }}
          animate={{
            y: [0, 800],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Holographic Interference */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(45deg, transparent 48%, rgba(0, 212, 255, 0.1) 49%, rgba(0, 212, 255, 0.1) 51%, transparent 52%)`,
            backgroundSize: '20px 20px',
          }}
          animate={{
            x: [0, 20],
            y: [0, 20],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* AI Processing Clusters */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`cluster-${i}`}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 2) * 80}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            {/* Main Processing Node */}
            <div
              className="w-16 h-16 rounded-full blur-lg"
              style={{
                background: `radial-gradient(circle, ${
                  ['rgba(0, 212, 255, 0.15)', 'rgba(139, 92, 246, 0.15)', 'rgba(0, 255, 136, 0.15)'][i % 3]
                } 0%, transparent 70%)`
              }}
            />

            {/* Satellite Nodes */}
            {[...Array(3)].map((_, j) => (
              <motion.div
                key={`satellite-${j}`}
                className="absolute w-4 h-4 rounded-full blur-sm"
                style={{
                  background: `radial-gradient(circle, ${
                    ['rgba(0, 212, 255, 0.3)', 'rgba(139, 92, 246, 0.3)', 'rgba(0, 255, 136, 0.3)'][j % 3]
                  } 0%, transparent 70%)`,
                  left: `${Math.cos(j * 120 * Math.PI / 180) * 30 + 24}px`,
                  top: `${Math.sin(j * 120 * Math.PI / 180) * 30 + 24}px`,
                }}
                animate={{
                  rotate: 360,
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, delay: j * 0.5 }
                }}
              />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Neural Synapses */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`synapse-${i}`}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </>
  );
};

export default NeuralBackground;
