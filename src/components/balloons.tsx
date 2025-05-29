import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import type { JSX } from "react";
type GLTFResult = GLTF & {
  nodes: {
    Sphere_Balloon3_0: THREE.Mesh;
    Sphere001_Balloon5_0: THREE.Mesh;
    Sphere002_Balloon6_0: THREE.Mesh;
    Sphere003_Balloon6001_0: THREE.Mesh;
    Sphere004_Balloon5_0: THREE.Mesh;
    Plane004_lace_0: THREE.Mesh;
    Sphere005_balloon1_0: THREE.Mesh;
    Plane005_lace_0: THREE.Mesh;
    Sphere006_balloon2_0: THREE.Mesh;
    Plane006_lace_0: THREE.Mesh;
    Sphere007_Balloon4_0: THREE.Mesh;
    Sphere008_Balloon3_0: THREE.Mesh;
    Sphere009_Balloon6_0: THREE.Mesh;
    Plane001_lace_0: THREE.Mesh;
    Sphere010_balloon2_0: THREE.Mesh;
    Cube_cord_0: THREE.Mesh;
    Cube001_cord_0: THREE.Mesh;
    Cube002_cord_0: THREE.Mesh;
    Cube003_cord_0: THREE.Mesh;
    Cube004_cord_0: THREE.Mesh;
    Cube005_cord_0: THREE.Mesh;
    Cube006_cord_0: THREE.Mesh;
    Cube007_cord_0: THREE.Mesh;
    Cube008_cord_0: THREE.Mesh;
    Cube009_cord_0: THREE.Mesh;
    Sphere011_balloon1_0: THREE.Mesh;
    Cube010_cord_0: THREE.Mesh;
    Cube011_cord_0: THREE.Mesh;
    Plane002_lace_0: THREE.Mesh;
  };
  materials: {
    Balloon3: THREE.MeshStandardMaterial;
    Balloon5: THREE.MeshStandardMaterial;
    Balloon6: THREE.MeshStandardMaterial;
    ["Balloon6.001"]: THREE.MeshStandardMaterial;
    lace: THREE.MeshStandardMaterial;
    balloon1: THREE.MeshStandardMaterial;
    balloon2: THREE.MeshStandardMaterial;
    Balloon4: THREE.MeshStandardMaterial;
    cord: THREE.MeshStandardMaterial;
  };
};

export function Balloons(props: Readonly<JSX.IntrinsicElements["group"]>) {
  const { nodes, materials } = useGLTF(
    "./models/colorful_balloons.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_Balloon3_0.geometry}
        material={materials.Balloon3}
        position={[-0.434, -190.208, -37.676]}
        rotation={[-1.161, 0.045, 0.347]}
        scale={150.024}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001_Balloon5_0.geometry}
        material={materials.Balloon5}
        position={[161.155, 63.449, -100.493]}
        rotation={[-1.35, 0.248, -0.049]}
        scale={150.024}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002_Balloon6_0.geometry}
        material={materials.Balloon6}
        position={[-45.703, 103.37, -158.481]}
        rotation={[-Math.PI / 2, -0.103, 0]}
        scale={144.85}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere003_Balloon6001_0.geometry}
        material={materials["Balloon6.001"]}
        position={[-111.017, -40.66, -131.147]}
        rotation={[-1.335, -0.75, -0.137]}
        scale={150.167}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere004_Balloon5_0.geometry}
        material={materials.Balloon5}
        position={[-128.598, -415.298, -62.218]}
        rotation={[-1.364, -0.393, -0.076]}
        scale={144.103}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004_lace_0.geometry}
        material={materials.lace}
        position={[-128.598, -415.298, -62.218]}
        scale={5.06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere005_balloon1_0.geometry}
        material={materials.balloon1}
        position={[37.976, -532.88, -7.031]}
        rotation={[-1.071, 0.039, -0.157]}
        scale={144.103}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005_lace_0.geometry}
        material={materials.lace}
        position={[37.976, -532.88, -7.031]}
        scale={5.06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere006_balloon2_0.geometry}
        material={materials.balloon2}
        position={[201.484, -426.119, -72.852]}
        rotation={[-1.38, 0.328, -0.303]}
        scale={144.103}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006_lace_0.geometry}
        material={materials.lace}
        position={[196.071, -426.119, -74.297]}
        rotation={[Math.PI, -0.486, Math.PI]}
        scale={5.06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere007_Balloon4_0.geometry}
        material={materials.Balloon4}
        position={[230.716, -156.055, -196.901]}
        rotation={[-1.795, 0.444, -0.201]}
        scale={144.103}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere008_Balloon3_0.geometry}
        material={materials.Balloon3}
        position={[-120.853, -267.235, -214.413]}
        rotation={[-2.157, -0.627, -0.193]}
        scale={144.85}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere009_Balloon6_0.geometry}
        material={materials.Balloon6}
        position={[38.997, -345.859, -236.78]}
        rotation={[-2.066, 0.077, -0.15]}
        scale={144.103}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_lace_0.geometry}
        material={materials.lace}
        position={[38.997, -345.859, -236.78]}
        scale={5.06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere010_balloon2_0.geometry}
        material={materials.balloon2}
        position={[85.963, 48.935, -201.332]}
        rotation={[-2.462, 0.06, -0.247]}
        scale={144.85}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_cord_0.geometry}
        material={materials.cord}
        position={[0, -1259.242, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[4.522, 4.522, 155.678]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_cord_0.geometry}
        material={materials.cord}
        position={[0, -1259.242, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[4.522, 4.522, 155.678]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_cord_0.geometry}
        material={materials.cord}
        position={[0, -1259.242, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[4.522, 4.522, 155.678]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003_cord_0.geometry}
        material={materials.cord}
        position={[0, -1259.242, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[4.522, 4.522, 155.678]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004_cord_0.geometry}
        material={materials.cord}
        position={[0, -1259.242, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[4.522, 4.522, 155.678]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_cord_0.geometry}
        material={materials.cord}
        position={[0, -1259.242, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[4.522, 4.522, 155.678]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006_cord_0.geometry}
        material={materials.cord}
        position={[0, -1259.242, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[4.522, 4.522, 155.678]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007_cord_0.geometry}
        material={materials.cord}
        position={[0, -1259.242, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[4.522, 4.522, 155.678]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008_cord_0.geometry}
        material={materials.cord}
        position={[0, -1259.242, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[4.522, 4.522, 155.678]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009_cord_0.geometry}
        material={materials.cord}
        position={[0, -1259.242, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[4.522, 4.522, 155.678]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere011_balloon1_0.geometry}
        material={materials.balloon1}
        position={[-115.285, 45.94, -250.066]}
        rotation={[-2.351, -0.375, -0.162]}
        scale={132.376}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010_cord_0.geometry}
        material={materials.cord}
        position={[0, -1259.242, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[4.522, 4.522, 155.678]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011_cord_0.geometry}
        material={materials.cord}
        position={[0, -1259.242, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[4.522, 4.522, 155.678]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002_lace_0.geometry}
        material={materials.lace}
        position={[-119.73, -267.599, -211.18]}
        rotation={[0, -0.759, 0]}
        scale={5.06}
      />
    </group>
  );
}

useGLTF.preload("./models/colorful_balloons.glb");
