import React, { useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, Environment } from "@react-three/drei";
import * as THREE from "three";
import Loader from "../Loader";

/* --------------------- Avatar + Animation --------------------- */
function AvatarModel() {
  /* 1. Avatar GLB */
  const avatarGltf = useGLTF("/686a005f8bb684540fceb447(2).glb");

  /* 2. Animation GLB (Mixamo Without‑Skin converti glb) */
  const greetingGltf = useGLTF("/animations/Standing Greeting.glb");

  /* 3. Merge anims : on renomme le clip pour le retrouver facilement */
  const greetingClip       = greetingGltf.animations[0];
  greetingClip.name        = "StandingGreeting";
  const allAnimations      = [greetingClip];

  const group              = useRef();
  const { actions }        = useAnimations(allAnimations, group);
  const { nodes }          = avatarGltf;

  /* 4. Sourire permanent */
  useEffect(() => {
    const dict = nodes.Wolf3D_Head.morphTargetDictionary;
    const infl = nodes.Wolf3D_Head.morphTargetInfluences;
    ["mouthSmileLeft", "mouthSmileRight"].forEach((k) => {
      const idx = dict[k];
      if (idx !== undefined) infl[idx] = 0.5;
    });
  }, [nodes]);

  useFrame(() => {
    const dict = nodes.Wolf3D_Head.morphTargetDictionary;
    const infl = nodes.Wolf3D_Head.morphTargetInfluences;
    ["mouthSmileLeft", "mouthSmileRight"].forEach((k) => {
      const idx = dict[k];
      if (idx !== undefined) {
        infl[idx] = THREE.MathUtils.lerp(infl[idx], 0.5, 0.1);
      }
    });
  });

  /* 5. Joue l’animation une fois prête */
  useEffect(() => {
    const a = actions["StandingGreeting"];
    if (a) {
      a.reset().fadeIn(0.3).play();
    }
  }, [actions]);

  /* 6. Retourne le mesh */
  return (
    <group
      ref={group}
      scale={1.34}
      position={[0, -3, 0]}
      rotation={[-0.5, 0, 0]} /* face la caméra */
      dispose={null}
    >
      <primitive object={avatarGltf.scene} />
    </group>
  );
}

useGLTF.preload("/686a005f8bb684540fceb447.glb");
useGLTF.preload("/animations/Standing Greeting.glb");

/* ------------------------- Canvas wrapper ------------------------- */
export default function AvatarCanvas() {
  return (
    <div
      className="
        absolute inset-0 z-10
        top-80       
        sm:top-0      
      "
    >
   
      <Canvas camera={{ position: [0, 1.6, 2], fov: 20 }}>
        <Suspense fallback={<Loader />}>
          <AvatarModel />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
