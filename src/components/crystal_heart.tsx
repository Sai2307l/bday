import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import type { JSX } from "react";
type GLTFResult = GLTF & {
  nodes: {
    Crystal_Heart_Crystal_Heart_Mat_0: THREE.Mesh;
  };
  materials: {
    Crystal_Heart_Mat: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Take 001";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function CrystalHeart(props: Readonly<JSX.IntrinsicElements["group"]>) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/models/crystal_heart.glb"
  ) as unknown as GLTFResult;
  const { actions } = useAnimations(animations, group);
  const action = actions["Take 001"] as GLTFActions[ActionName];
  useEffect(() => {
    if (action) {
      action.reset();
      action.play();
      action.setLoop(THREE.LoopRepeat, Infinity);
    }
  }, [action]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Crystal_Heartfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Crystal_Heart"
                  position={[0, 0.839, -0.001]}
                  scale={0.01}
                >
                  <mesh
                    name="Crystal_Heart_Crystal_Heart_Mat_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Crystal_Heart_Crystal_Heart_Mat_0.geometry}
                    material={materials.Crystal_Heart_Mat}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/crystal_heart.glb");
