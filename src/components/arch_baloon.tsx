import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import type { JSX } from "react";

type GLTFResult = GLTF & {
  nodes: {
    SM_Blueballoon_Blue_0: THREE.Mesh;
    SM_Greenballoon_Green_0: THREE.Mesh;
    SM_Yellowballoon_Yellow_0: THREE.Mesh;
    SM_Orangeballoon_Orange_0: THREE.Mesh;
    SM_Purpleballoon_Purple_0: THREE.Mesh;
  };
  materials: {
    Blue: THREE.MeshPhysicalMaterial;
    Green: THREE.MeshPhysicalMaterial;
    Yellow: THREE.MeshPhysicalMaterial;
    Orange: THREE.MeshPhysicalMaterial;
    Purple: THREE.MeshPhysicalMaterial;
  };
};

export function ArchBalloon(props: Readonly<JSX.IntrinsicElements["group"]>) {
  const { nodes, materials } = useGLTF(
    "./models/balloon_arch.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_Blueballoon_Blue_0.geometry}
          material={materials.Blue}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_Greenballoon_Green_0.geometry}
          material={materials.Green}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_Yellowballoon_Yellow_0.geometry}
          material={materials.Yellow}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_Orangeballoon_Orange_0.geometry}
          material={materials.Orange}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_Purpleballoon_Purple_0.geometry}
          material={materials.Purple}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/balloon_arch.glb");
