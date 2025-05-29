import React from "react";

const Lights: React.FC = () => (
  <>
    {/* Soft ambient light for general illumination */}
    <ambientLight intensity={0.5} />

    {/* Directional light for shadows and highlights */}
    <directionalLight
      position={[5, 10, 7.5]}
      intensity={1}
      castShadow
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
    />

    {/* Point light for extra effect */}
    <pointLight position={[-5, 5, -5]} intensity={0.5} />
  </>
);

export { Lights };
