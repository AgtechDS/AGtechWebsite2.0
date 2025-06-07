import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Float,
  Center,
  Environment,
  Stars,
  Sparkles as DreiSparkles
} from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';

// Componente per sfere fluttuanti animate
const FloatingSphere = ({ position, color, scale = 1 }: { 
  position: [number, number, number]; 
  color: string; 
  scale?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} position={position} scale={scale} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

// Componente per particelle 3D
const ParticleField = () => {
  const points = useRef<THREE.Points>(null);
  const particleCount = 1000;

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05;
      points.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#00ffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Componente per effetti di luce
const LightEffects = () => {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(state.clock.elapsedTime) * 5;
      lightRef.current.position.z = Math.cos(state.clock.elapsedTime) * 5;
    }
  });

  return (
    <>
      <pointLight ref={lightRef} position={[0, 5, 0]} intensity={1} color="#00ffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#ff00ff" />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#ffff00" />
    </>
  );
};

// Componente principale della scena 3D
const Scene3DContent = () => {
  return (
    <>
      {/* Illuminazione ambientale */}
      <ambientLight intensity={0.3} />

      {/* Effetti di luce dinamici */}
      <LightEffects />

      {/* Ambiente stellato */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      {/* Sfere fluttuanti con materiali avanzati */}
      <FloatingSphere position={[-3, 0, 0]} color="#001F3F" scale={0.8} />
      <FloatingSphere position={[3, 2, -2]} color="#6C5B7B" scale={1.2} />
      <FloatingSphere position={[0, -2, 2]} color="#4CAF50" scale={0.6} />
      <FloatingSphere position={[2, -1, 1]} color="#00ffff" scale={0.4} />

      {/* Campo di particelle */}
      <ParticleField />

      {/* Effetti sparkles */}
      <DreiSparkles
        count={100}
        scale={[10, 10, 10]}
        size={2}
        speed={0.4}
        opacity={0.6}
        color="#00ffff"
      />

      {/* Controlli orbitali */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
};

// Componente wrapper per la scena 3D
interface Scene3DProps {
  className?: string;
  height?: string;
}

const Scene3D: React.FC<Scene3DProps> = ({ 
  className = '', 
  height = '400px' 
}) => {
  return (
    <div className={`relative ${className}`} style={{ height }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <Scene3DContent />
      </Canvas>
    </div>
  );
};

export default Scene3D;
