import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

interface ParticleSystemProps {
  particleCount?: number;
  colors?: string[];
  speed?: number;
  size?: { min: number; max: number };
  className?: string;
  interactive?: boolean;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({
  particleCount = 50,
  colors = ['#001F3F', '#6C5B7B', '#4CAF50', '#00ffff'],
  speed = 1,
  size = { min: 1, max: 3 },
  className = '',
  interactive = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Inizializza le particelle
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size: Math.random() * (size.max - size.min) + size.min,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 200 + 100
      });
    }

    setParticles(newParticles);
  }, [particleCount, colors, speed, size]);

  // Gestione del mouse per interattività
  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  // Animazione delle particelle
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let newParticle = { ...particle };

          // Aggiorna posizione
          newParticle.x += newParticle.vx;
          newParticle.y += newParticle.vy;

          // Interazione con il mouse
          if (interactive) {
            const dx = mousePos.x - newParticle.x;
            const dy = mousePos.y - newParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              const force = (100 - distance) / 100;
              newParticle.vx += (dx / distance) * force * 0.1;
              newParticle.vy += (dy / distance) * force * 0.1;
            }
          }

          // Rimbalzo sui bordi
          if (newParticle.x <= 0 || newParticle.x >= canvas.width) {
            newParticle.vx *= -1;
          }
          if (newParticle.y <= 0 || newParticle.y >= canvas.height) {
            newParticle.vy *= -1;
          }

          // Aggiorna vita della particella
          newParticle.life++;
          if (newParticle.life > newParticle.maxLife) {
            newParticle.life = 0;
            newParticle.x = Math.random() * canvas.width;
            newParticle.y = Math.random() * canvas.height;
            newParticle.vx = (Math.random() - 0.5) * speed;
            newParticle.vy = (Math.random() - 0.5) * speed;
          }

          // Disegna la particella
          ctx.save();
          ctx.globalAlpha = newParticle.opacity * (1 - newParticle.life / newParticle.maxLife);
          ctx.fillStyle = newParticle.color;
          ctx.beginPath();
          ctx.arc(newParticle.x, newParticle.y, newParticle.size, 0, Math.PI * 2);
          ctx.fill();

          // Effetto glow
          ctx.shadowColor = newParticle.color;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.restore();

          return newParticle;
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particles, mousePos, interactive, speed]);

  // Ridimensiona il canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{ 
        width: '100%', 
        height: '100%',
        zIndex: 1
      }}
    />
  );
};

export default ParticleSystem;
