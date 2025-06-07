import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CyberCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Subtle AI Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.3,
        }}
      >
        <div className="w-3 h-3 relative">
          {/* AI Core */}
          <motion.div
            className="w-3 h-3 bg-cyan-400/60 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* AI Ring - Only on Hover */}
      {isHovering && (
        <motion.div
          className="fixed pointer-events-none z-49"
          animate={{
            x: mousePosition.x - 15,
            y: mousePosition.y - 15,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 25,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <motion.div
            className="w-8 h-8 border border-cyan-400/40 rounded-full relative"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: { duration: 3, repeat: Infinity, ease: "linear" },
              scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            {/* AI Indicators */}
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-green-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-purple-400 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
          </motion.div>
        </motion.div>
      )}

      {/* Subtle AI Trail */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-30"
          animate={{
            x: mousePosition.x - 1.5,
            y: mousePosition.y - 1.5,
          }}
          transition={{
            type: "spring",
            stiffness: 200 - i * 40,
            damping: 20 + i * 10,
            mass: 0.5 + i * 0.3,
          }}
        >
          <motion.div
            className="w-1 h-1 rounded-full"
            style={{
              opacity: 0.4 - i * 0.1,
              backgroundColor: i === 0 ? '#00d4ff' : i === 1 ? '#8b5cf6' : '#00ff88'
            }}
            animate={{
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        </motion.div>
      ))}



      {/* Subtle Click Effect */}
      {isClicking && (
        <motion.div
          className="fixed pointer-events-none z-40"
          style={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
          }}
          initial={{ scale: 0.5, opacity: 0.8 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="w-4 h-4 border border-cyan-400/60 rounded-full"></div>
        </motion.div>
      )}
    </>
  );
};

export default CyberCursor;
