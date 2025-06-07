import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
  activity: number;
  type: 'input' | 'hidden' | 'output';
}

interface NeuralNetworkBackgroundProps {
  nodeCount?: number;
  className?: string;
  variant?: 'services' | 'ai' | 'data' | 'software';
}

const NeuralNetworkBackground: React.FC<NeuralNetworkBackgroundProps> = ({
  nodeCount = 25,
  className = '',
  variant = 'services'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>();

  // Colori per varianti
  const colors = {
    services: {
      primary: 'rgba(0, 212, 255, 0.8)', // Cyan
      secondary: 'rgba(0, 255, 136, 0.6)', // Green
      tertiary: 'rgba(139, 92, 246, 0.7)', // Purple
      connection: 'rgba(0, 212, 255, 0.3)',
      pulse: 'rgba(255, 255, 255, 0.9)'
    },
    ai: {
      primary: 'rgba(0, 255, 136, 0.8)', // Green
      secondary: 'rgba(0, 212, 255, 0.6)', // Cyan
      tertiary: 'rgba(139, 92, 246, 0.7)', // Purple
      connection: 'rgba(0, 255, 136, 0.3)',
      pulse: 'rgba(0, 255, 136, 0.9)'
    },
    data: {
      primary: 'rgba(139, 92, 246, 0.8)', // Purple
      secondary: 'rgba(0, 212, 255, 0.6)', // Cyan
      tertiary: 'rgba(0, 255, 136, 0.7)', // Green
      connection: 'rgba(139, 92, 246, 0.3)',
      pulse: 'rgba(139, 92, 246, 0.9)'
    },
    software: {
      primary: 'rgba(0, 212, 255, 0.8)', // Cyan
      secondary: 'rgba(139, 92, 246, 0.6)', // Purple
      tertiary: 'rgba(0, 255, 136, 0.7)', // Green
      connection: 'rgba(0, 212, 255, 0.3)',
      pulse: 'rgba(0, 212, 255, 0.9)'
    }
  };

  const currentColors = colors[variant];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Inizializza nodi
    const initNodes = () => {
      const nodes: Node[] = [];
      for (let i = 0; i < nodeCount; i++) {
        const type = i < 5 ? 'input' : i > nodeCount - 6 ? 'output' : 'hidden';
        nodes.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          connections: [],
          activity: Math.random(),
          type
        });
      }

      // Crea connessioni intelligenti
      nodes.forEach((node, i) => {
        const connectionCount = Math.floor(Math.random() * 4) + 2;
        for (let j = 0; j < connectionCount; j++) {
          const targetIndex = Math.floor(Math.random() * nodes.length);
          if (targetIndex !== i && !node.connections.includes(targetIndex)) {
            node.connections.push(targetIndex);
          }
        }
      });

      nodesRef.current = nodes;
    };

    initNodes();

    // Animazione
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const nodes = nodesRef.current;
      const time = Date.now() * 0.001;

      // Aggiorna posizioni nodi
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Rimbalzo sui bordi
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;

        // Mantieni nei limiti
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Aggiorna attività
        node.activity = (Math.sin(time + node.id) + 1) / 2;
      });

      // Disegna connessioni
      nodes.forEach(node => {
        node.connections.forEach(targetId => {
          const target = nodes[targetId];
          if (!target) return;

          const distance = Math.sqrt(
            Math.pow(target.x - node.x, 2) + Math.pow(target.y - node.y, 2)
          );

          if (distance < 200) {
            // Gradiente per la connessione
            const gradient = ctx.createLinearGradient(node.x, node.y, target.x, target.y);
            gradient.addColorStop(0, currentColors.connection);
            gradient.addColorStop(0.5, currentColors.pulse);
            gradient.addColorStop(1, currentColors.connection);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = Math.max(0.5, (node.activity + target.activity) * 2);
            ctx.globalAlpha = 0.6 * (1 - distance / 200);

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();

            // Pulse effect
            if (node.activity > 0.8) {
              const pulseProgress = (time * 2) % 1;
              const pulseX = node.x + (target.x - node.x) * pulseProgress;
              const pulseY = node.y + (target.y - node.y) * pulseProgress;

              ctx.globalAlpha = 1 - pulseProgress;
              ctx.fillStyle = currentColors.pulse;
              ctx.beginPath();
              ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        });
      });

      // Disegna nodi
      nodes.forEach(node => {
        const size = 3 + node.activity * 4;
        let color = currentColors.primary;
        
        if (node.type === 'input') color = currentColors.secondary;
        else if (node.type === 'output') color = currentColors.tertiary;

        // Alone esterno
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Nodo principale
        ctx.globalAlpha = 0.8 + node.activity * 0.2;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Centro luminoso
        ctx.globalAlpha = 1;
        ctx.fillStyle = currentColors.pulse;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size * 0.3, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [nodeCount, variant]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ background: 'transparent' }}
    />
  );
};

export default NeuralNetworkBackground;
