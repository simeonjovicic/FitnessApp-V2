
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/muscleman.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.0018}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_01_CL_Mesh_01_0.geometry}
          material={materials.CL_Mesh_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_01_CL_Mesh_01_0_1.geometry}
          material={materials.CL_Mesh_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_01_CL_Mesh_01_0_2.geometry}
          material={materials.CL_Mesh_01}
        />
      </group>
    </group>
  );
}

export default Model;

useGLTF.preload("/models/muscleman.glb");
