
import { useEffect, useRef } from "react";

interface MatrixBackgroundProps {
  intensity?: number; // Intensità delle gocce (1-10)
  speed?: number; // Velocità delle gocce (1-10)
  opacity?: number; // Opacità delle gocce (0-1)
}

const MatrixBackground = ({ 
  intensity = 5, 
  speed = 5, 
  opacity = 0.05 
}: MatrixBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Imposta canvas a dimensione schermo intero
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    // Caratteri per l'effetto matrix
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const drops: number[] = [];

    // Numero di colonne basato sull'intensità (1-10)
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize * (intensity / 5));

    // Inizializza le gocce
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height);
    }

    // Velocità di aggiornamento basata sulla velocità (1-10)
    const fps = 15 + (speed * 3);
    const interval = 1000 / fps;

    // Funzione di disegno
    let lastTime = 0;
    const draw = (timestamp: number) => {
      if (timestamp - lastTime < interval) {
        requestAnimationFrame(draw);
        return;
      }
      lastTime = timestamp;

      // Sfondo semi-trasparente per creare l'effetto scia
      ctx.fillStyle = `rgba(0, 31, 63, ${1 - opacity * 2})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Caratteri in verde
      ctx.fillStyle = `rgba(76, 175, 80, ${opacity * 2})`;
      ctx.font = `${fontSize}px monospace`;

      // Disegna i caratteri
      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Resetta le gocce quando escono dallo schermo
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [intensity, speed, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: opacity }}
    />
  );
};

export default MatrixBackground;
