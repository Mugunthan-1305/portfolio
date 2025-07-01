
import { Canvas } from '@react-three/fiber';
import { Float, Text3D, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Suspense } from 'react';

const FloatingIcon = ({ position, children }: { position: [number, number, number], children: React.ReactNode }) => {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={0.5}
      floatingRange={[-0.1, 0.1]}
    >
      <mesh position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <FloatingIcon position={[-2, 1, 0]}>💻</FloatingIcon>
          <FloatingIcon position={[2, -1, 0]}>⚡</FloatingIcon>
          <FloatingIcon position={[0, 2, -1]}>🚀</FloatingIcon>
          <FloatingIcon position={[-1, -2, 1]}>🎯</FloatingIcon>
          <FloatingIcon position={[3, 0, -2]}>💡</FloatingIcon>
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Hero3D;
