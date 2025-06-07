import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  connections: number[];
  activity: number;
  layer: number;
  pulsePhase: number;
}

interface Connection {
  from: number;
  to: number;
  strength: number;
  activity: number;
  distance: number;
}

const AdvancedNeuralNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Initialize neural network
  const initializeNetwork = (width: number, height: number) => {
    const nodeCount = Math.min(80, Math.floor((width * height) / 15000));
    const nodes: Node[] = [];
    const connections: Connection[] = [];

    // Create nodes in layers
    for (let i = 0; i < nodeCount; i++) {
      const layer = Math.floor(Math.random() * 5);
      const node: Node = {
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: 2 + Math.random() * 4,
        connections: [],
        activity: Math.random(),
        layer,
        pulsePhase: Math.random() * Math.PI * 2
      };
      nodes.push(node);
    }

    // Create connections
    nodes.forEach((node, i) => {
      const connectionCount = 3 + Math.floor(Math.random() * 4);
      const nearbyNodes = nodes
        .filter((other, j) => j !== i)
        .map((other, j) => ({
          node: other,
          distance: Math.sqrt(
            Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2)
          ),
          index: j
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, connectionCount);

      nearbyNodes.forEach(({ node: other, distance, index }) => {
        if (distance < 200) {
          const connection: Connection = {
            from: i,
            to: index,
            strength: 1 - (distance / 200),
            activity: Math.random(),
            distance
          };
          connections.push(connection);
          node.connections.push(index);
        }
      });
    });

    nodesRef.current = nodes;
    connectionsRef.current = connections;
  };

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = dimensions;
    
    // Clear canvas with fade effect
    ctx.fillStyle = 'rgba(17, 24, 39, 0.1)';
    ctx.fillRect(0, 0, width, height);

    const time = Date.now() * 0.001;
    const nodes = nodesRef.current;
    const connections = connectionsRef.current;

    // Update nodes
    nodes.forEach((node, i) => {
      // Mouse interaction
      const mouseDistance = Math.sqrt(
        Math.pow(node.x - mouseRef.current.x, 2) + 
        Math.pow(node.y - mouseRef.current.y, 2)
      );
      
      if (mouseDistance < 150) {
        const force = (150 - mouseDistance) / 150;
        const angle = Math.atan2(
          node.y - mouseRef.current.y,
          node.x - mouseRef.current.x
        );
        node.vx += Math.cos(angle) * force * 0.02;
        node.vy += Math.sin(angle) * force * 0.02;
        node.activity = Math.min(1, node.activity + force * 0.1);
      }

      // Update position
      node.x += node.vx;
      node.y += node.vy;

      // Boundary collision
      if (node.x < 0 || node.x > width) node.vx *= -0.8;
      if (node.y < 0 || node.y > height) node.vy *= -0.8;
      
      node.x = Math.max(0, Math.min(width, node.x));
      node.y = Math.max(0, Math.min(height, node.y));

      // Friction
      node.vx *= 0.99;
      node.vy *= 0.99;

      // Update activity
      node.activity += (Math.sin(time + node.pulsePhase) * 0.1 + 0.1);
      node.activity = Math.max(0, Math.min(1, node.activity * 0.98));
    });

    // Update connections
    connections.forEach(connection => {
      const fromNode = nodes[connection.from];
      const toNode = nodes[connection.to];
      
      if (fromNode && toNode) {
        const distance = Math.sqrt(
          Math.pow(fromNode.x - toNode.x, 2) + 
          Math.pow(fromNode.y - toNode.y, 2)
        );
        
        connection.distance = distance;
        connection.strength = Math.max(0, 1 - (distance / 200));
        
        // Activity propagation
        const avgActivity = (fromNode.activity + toNode.activity) / 2;
        connection.activity += (avgActivity - connection.activity) * 0.1;
      }
    });

    // Draw connections
    connections.forEach(connection => {
      const fromNode = nodes[connection.from];
      const toNode = nodes[connection.to];
      
      if (fromNode && toNode && connection.strength > 0.1) {
        const alpha = connection.strength * connection.activity * 0.8;
        
        // Create gradient for connection
        const gradient = ctx.createLinearGradient(
          fromNode.x, fromNode.y, toNode.x, toNode.y
        );
        
        const hue = (connection.activity * 60 + 180) % 360;
        gradient.addColorStop(0, `hsla(${hue}, 70%, 60%, ${alpha})`);
        gradient.addColorStop(0.5, `hsla(${hue + 30}, 80%, 70%, ${alpha * 1.5})`);
        gradient.addColorStop(1, `hsla(${hue}, 70%, 60%, ${alpha})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = connection.strength * 2;
        ctx.lineCap = 'round';
        
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        
        // Curved connection
        const midX = (fromNode.x + toNode.x) / 2;
        const midY = (fromNode.y + toNode.y) / 2;
        const offset = Math.sin(time + connection.activity * 10) * 20;
        
        ctx.quadraticCurveTo(
          midX + offset, 
          midY + offset, 
          toNode.x, 
          toNode.y
        );
        ctx.stroke();

        // Data flow particles
        if (connection.activity > 0.7) {
          const progress = (time * 2 + connection.from) % 1;
          const particleX = fromNode.x + (toNode.x - fromNode.x) * progress;
          const particleY = fromNode.y + (toNode.y - fromNode.y) * progress;
          
          ctx.fillStyle = `hsla(${hue}, 90%, 80%, ${connection.activity})`;
          ctx.beginPath();
          ctx.arc(particleX, particleY, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    });

    // Draw nodes
    nodes.forEach(node => {
      const pulseSize = node.size + Math.sin(time * 3 + node.pulsePhase) * node.activity * 2;
      
      // Node glow
      const glowSize = pulseSize * 3;
      const gradient = ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, glowSize
      );
      
      const hue = (node.activity * 120 + node.layer * 60) % 360;
      gradient.addColorStop(0, `hsla(${hue}, 80%, 70%, ${node.activity * 0.8})`);
      gradient.addColorStop(0.3, `hsla(${hue}, 70%, 60%, ${node.activity * 0.4})`);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2);
      ctx.fill();

      // Node core
      ctx.fillStyle = `hsla(${hue}, 90%, 80%, ${0.8 + node.activity * 0.2})`;
      ctx.beginPath();
      ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
      ctx.fill();

      // Node ring
      if (node.activity > 0.5) {
        ctx.strokeStyle = `hsla(${hue}, 100%, 90%, ${node.activity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize + 3, 0, Math.PI * 2);
        ctx.stroke();
      }
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  // Handle mouse movement
  const handleMouseMove = (e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  // Handle resize
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const width = parent.clientWidth;
    const height = parent.clientHeight;

    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    setDimensions({ width, height });
    initializeNetwork(width, height);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      animate();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />
    </div>
  );
};

export default AdvancedNeuralNetwork;
