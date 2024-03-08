import * as THREE from "three";
import React, { useEffect, useRef } from "react";
// import { useGLTF, useAnimations } from "@react-three/drei";
import {
useGLTF,
useAnimations,
  // Float,
  // MeshDistortMaterial,
  // MeshWobbleMaterial,
} from "@react-three/drei";
// import { motion } from "framer-motion-3d";


export default function HomeModelGirl({ action }) {
  const group = useRef();
  const previousAction = usePrevious(action);
  const hmgirlmodel = useGLTF("./models/girlmodel.glb");
  const { animations } = useGLTF("./models/girlmodel.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    if (previousAction) {
      actions[previousAction].fadeOut(0.2);
      actions[action].stop();
    }
    actions[action].play();
    actions[action].fadeIn(0.2);
  }, [actions, action, previousAction]);

  // const shiningWhite = new THREE.Color(1.1, 1.1, 1.1);

  return (
    <>
      <group ref={group} dispose={null} position={[2.2, 0, -1]}>
        <primitive
          object={hmgirlmodel.scene}
          scale={3}
          position={[0, -2.5, 0]}
        >
        </primitive>
        <mesh castShadow position={[-0.3, -.4, -2]} rotation={[-.4, 0, 0]} scale={2.1}>
          <ringGeometry args={[0.92, 0.98, 70]} />
          {/* <ringGeometry args={[0.9, 1, 4, 1]} />0.92, 1, 32 */}
          <meshStandardMaterial color={[1.5, 1, 4]} toneMapped={false} />
        </mesh>
      </group>

      {/* <Float>
          <mesh position={[1, -2, -14]} scale={5} >
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={1}
              color={[1.5, 1, 4]}
              toneMapped={false}
            />
          </mesh>
        </Float> */}

      {/* <motion.group
    initial={{
      x:2,
      opacity:0.4
    }}
    animate={{
      x:-4,
      opacity:1,
      rotate:360
    }}
    transition={{
      type:"spring",
      stiffness:50,
      damping:5
    }}
    >
    <mesh castShadow position={[0,0,0]}  rotation={[0,0,0]} scale={1}>
          <boxGeometry/>
          <meshStandardMaterial color={"red"} />
        </mesh>
    </motion.group> */}
     
    </>
  )
}
useGLTF.preload("./models/girlmodel.glb")

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

{/* <mesh
// ref={triangle}
scale={2}
// position={[-4, -1.161, -1]}
position={[0,0,-1.2]}
rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
>
<ringGeometry args={[0.9, 1, 3, 1]} />
<boxGeometry/>
<meshStandardMaterial color="orange" emissive="orange" emissiveIntensity={ 4} />
<meshStandardMaterial
  color={[1.5, 1, 4]}
  roughness={0.75}
toneMapped={false}
/>
</mesh> */}