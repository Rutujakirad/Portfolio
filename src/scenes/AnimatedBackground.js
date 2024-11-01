// scenes/AnimatedBackground.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function Particles() {
  const ref = useRef();
  const count = 1000;
  const positions = new Float32Array(count * 3);

  // Arrange particles in a grid for a structured look
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10;
    positions[i + 1] = (Math.random() - 0.5) * 10;
    positions[i + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  return (
    <Points ref={ref} positions={positions}>
      <PointMaterial color="var(--accent-color)" size={0.02} sizeAttenuation />
    </Points>
  );
}

export default function AnimatedBackground() {
  return (
    <Canvas className="canvas">
      <Particles />
    </Canvas>
  );
}
