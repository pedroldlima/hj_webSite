/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 hologran.gltf 
Author: shinymagic (https://sketchfab.com/shinymagic)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/looking-glass-hologram-technology-meet-art-d727bc1f53354deaa512c4db9d581903
Title: Looking Glass hologram "technology meet art"
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Hologran(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/hologran.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={4}>
          <group name="d4e286c425e847e78723a56ea435af67fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Concept_202" position={[0, 0.152, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
                  <group name="Concept_203" rotation={[0, Math.PI / 2, 0]}>
                    <group name="Object_6" position={[-0.036, 0.072, -507.334]}>
                      <mesh name="Concept_203_hexagon__0" geometry={nodes.Concept_203_hexagon__0.geometry} material={materials.hexagon} />
                      <mesh name="Concept_203_glowing_edges_0" geometry={nodes.Concept_203_glowing_edges_0.geometry} material={materials.glowing_edges} />
                    </group>
                  </group>
                  <group name="Concept_2_orange_line01" position={[7.689, 0, 0]} rotation={[0.087, 1.571, 0]}>
                    <group name="Object_10" position={[-0.036, 0.072, -507.334]}>
                      <mesh name="Concept_2_orange_line01_thin_line_0" geometry={nodes.Concept_2_orange_line01_thin_line_0.geometry} material={materials.thin_line} />
                    </group>
                  </group>
                </group>
                <group name="Concept_201" position={[0, 0.152, 0]} rotation={[0.698, 0, -Math.PI / 4]} scale={0.005}>
                  <group name="Object_13" position={[0, 0, -12.5]}>
                    <mesh name="Concept_201_blue_cube_mapped_0" geometry={nodes.Concept_201_blue_cube_mapped_0.geometry} material={materials.blue_cube_mapped} />
                  </group>
                </group>
                <group name="Plane002" position={[-0.819, 0.167, -0.003]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
                  <group name="Object_16" position={[532.114, 0, -38.875]} rotation={[Math.PI / 2, 0, 1.52]}>
                    <mesh name="Plane002_volume_light_0" geometry={nodes.Plane002_volume_light_0.geometry} material={materials.volume_light} />
                  </group>
                </group>
                <group name="Concept_204" position={[0, 0.152, 0]} rotation={[0.698, 0, -Math.PI / 4]} scale={0.006}>
                  <group name="Object_19" position={[0, 0, -12.5]}>
                    <mesh name="Concept_204_blue_cube_mapped_0" geometry={nodes.Concept_204_blue_cube_mapped_0.geometry} material={materials.blue_cube_mapped} />
                  </group>
                </group>
                <group name="Plane004" position={[-0.819, 0.168, -0.003]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
                  <group name="Object_22" position={[532.598, -21.397, 16.451]} rotation={[1.572, -0.04, 1.602]}>
                    <mesh name="Plane004_volume_light_0" geometry={nodes.Plane004_volume_light_0.geometry} material={materials.volume_light} />
                  </group>
                </group>
                <group name="Plane005" position={[0.879, 0.143, -0.003]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
                  <group name="Object_25" position={[-533.066, 14.955, -16.481]} rotation={[-1.57, 0.028, -1.58]}>
                    <mesh name="Plane005_volume_light_0" geometry={nodes.Plane005_volume_light_0.geometry} material={materials.volume_light} />
                  </group>
                </group>
                <group name="Plane006" position={[0.879, 0.143, -0.003]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
                  <group name="Object_28" position={[-532.464, 0, 29.508]} rotation={[-Math.PI / 2, 0, -1.515]}>
                    <mesh name="Plane006_volume_light_0" geometry={nodes.Plane006_volume_light_0.geometry} material={materials.volume_light} />
                  </group>
                </group>
                <group name="Plane007" position={[-0.819, 0.167, -0.01]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
                  <group name="Object_31" position={[530.292, 29.795, -50.588]} rotation={[1.572, 0.056, 1.498]}>
                    <mesh name="Plane007_volume_light_0" geometry={nodes.Plane007_volume_light_0.geometry} material={materials.volume_light} />
                  </group>
                </group>
                <group name="Plane008" position={[0.879, 0.142, -0.01]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
                  <group name="Object_34" position={[-530.292, 29.795, -50.588]} rotation={[1.572, -0.056, -1.498]} scale={[-1, 1, 1]}>
                    <mesh name="Plane008_volume_light_0" geometry={nodes.Plane008_volume_light_0.geometry} material={materials.volume_light} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/hologran.gltf')
