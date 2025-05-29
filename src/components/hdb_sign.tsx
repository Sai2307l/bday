// Title: Happy Birthday Sign

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import type { JSX } from "react";
type GLTFResult = GLTF & {
  nodes: {
    Birthday_Happy_Birthday_0: THREE.Mesh;
  };
  materials: {
    Happy_Birthday: THREE.MeshStandardMaterial;
  };
};

export function Sign(props: Readonly<JSX.IntrinsicElements["group"]>) {
  const { nodes, materials } = useGLTF(
    "./models/happy_birthday_sign.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.192, 0.019, -0.001]}
        rotation={[-1.569, -0.212, 0.079]}
      >
        <group rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Birthday_Happy_Birthday_0.geometry}
            material={materials.Happy_Birthday}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/happy_birthday_sign.glb");
