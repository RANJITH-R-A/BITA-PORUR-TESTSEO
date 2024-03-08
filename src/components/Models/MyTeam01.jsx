import * as THREE from 'three'
import { Suspense, useEffect, useLayoutEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, Sky, useScroll, useGLTF, useAnimations } from '@react-three/drei'
import '../Models/myteam.css'
export default function MyTeam01() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.03} />
      <fog attach="fog" args={['#ff5020', 5, 18]} />
      <spotLight angle={0.14} color="#ffd0d0" penumbra={1} position={[25, 50, -20]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow />
      {/* <Sky scale={1000} sunPosition={[2, 0.4, 10]} /> */}
      <Suspense fallback={null}>
        {/* Wrap contents you want to scroll into <ScrollControls> */}
        <ScrollControls pages={3}>
          <LittlestTokyo scale={0.02} position={[0, 2.5, 0]} />
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}

function LittlestTokyo({ ...props }) {
  // This hook gives you offets, ranges and other useful things
  const scroll = useScroll()
  const { scene, nodes, animations } = useGLTF('./models/LittlestTokyo-transformed.glb')
//   console.log(animations)
  const { actions } = useAnimations(animations, scene)
//   useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
//   useEffect(() => void (actions['Take 001'].play().paused=true), [actions])
  useFrame((state, delta) => {

    // const action = actions['Take 001']

    const scrolloffset = scroll.offset
    // console.log(scrolloffset)
    
    if(scrolloffset<=0.1){
    //  console.log('true')
    const action = actions['Take 001'].stop()
    }
    else{
        const action = actions['Take 001'].play()
    }
        // console.log('false')
    
    
  
    // const action = actions['Take 001']
    // The offset is between 0 and 1, you can apply it to your models any way you like
    // const offset = 1 - scroll.offset

    // action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
    // state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
    // state.camera.lookAt(0, 0, 0)
  })


  return (
    <>
    <group>
    <primitive object={scene} {...props} />
    </group>
    </>
  )
}

/*
author: glenatron (https://sketchfab.com/glenatron)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/94b24a60dc1b48248de50bf087c0f042
title: Littlest Tokyo */
useGLTF.preload('./models/LittlestTokyo-transformed.glb')
