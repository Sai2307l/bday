import React, { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Loading from "./Loading";

import { ArchBalloon } from "./arch_baloon";
import { Balloons } from "./balloons";
import { Ribbons } from "./bday_ribbon";
import { CrystalHeart } from "./crystal_heart";
import { Sign } from "./hdb_sign";
import { Cake } from "./cake";
import { Lights } from "./lights";

function AudioComponent() {
  const { camera } = useThree();

  useEffect(() => {
    const listener = new THREE.AudioListener();
    camera.add(listener);

    const sound = new THREE.Audio(listener);
    const audioLoader = new THREE.AudioLoader();

    audioLoader.load("/audio/song.mp3", (buffer) => {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.5);
      sound.play();
    });
    console.log("Audio loaded and playing");
    return () => {
      sound.stop();
      camera.remove(listener);
    };
  }, [camera]);

  return null;
}

const Bday: React.FC = () => {
  const handleclick = () => {
    alert("Happy Birthday, Love!");
  };
  return (
    <div className="w-full h-[100vh] bg-gradient-to-r from-red-700 to-pink-700 relative">
      <Canvas className="w-full  h-full" shadows>
        <Suspense fallback={<Loading />}>
          <OrbitControls />
          <PerspectiveCamera makeDefault position={[0, 5, 5]} fov={50} />
          <ambientLight intensity={0.5} />
          <Lights />
          <Cake
            onClick={() => {
              handleclick();
            }}
            position={[0, 0, 0]}
            rotateZ={Math.PI / 2}
          />
          <Balloons scale={0.001} position={[-2, 1, 0.8]} />
          <Balloons scale={0.001} position={[2, 1, 0.8]} />
          <Ribbons position={[0, 0, 2]} />
          <Sign position={[0, 2, 0]} />
          <CrystalHeart position={[-3, 1.2, 3]} />
          <CrystalHeart position={[3, 1.2, 3]} />
          <ArchBalloon scale={1.4} />
          <AudioComponent />
        </Suspense>
      </Canvas>
      <div
        style={{
          position: "absolute",
          top: 40,
          width: "100%",
          textAlign: "center",
          color: "#fff",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textShadow: "2px 2px 8px #000",
          letterSpacing: "2px",
        }}
      >
        Happy Birthday, Love!
      </div>
    </div>
  );
};

export default Bday;
