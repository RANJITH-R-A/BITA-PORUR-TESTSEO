// import React from 'react'

// const Contact = () => {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact


import { useRef, Suspense, useEffect } from "react";
import {
  Text3D,
  OrbitControls,
  Center,
  Stars,
  Float,
  Sparkles,
  useMatcapTexture,
  useGLTF
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import "./Models/model.css";
import * as THREE from "three"
const material = new THREE.MeshMatcapMaterial()


// export default function Contact()  {
function Hero() {
  // const [matcapTexture] = useMatcapTexture('ADC2CD_DFF7FA_C9E6F5_C1DBEC', 256);
  // const [ matcapTexture ] = useMatcapTexture('AE9D99_29303B_585F70_875C33', 256)
  // const [ matcapTexture ] = useMatcapTexture('537387_75BBB9_152E5B_0E85E8', 256)
  // const [ matcapTexture ] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)
  const [matcapTexture] = useMatcapTexture('B6B8B1_994A24_315C81_927963', 256)

  const ref = useRef();


  // const { width: w, height: h } = useThree((state) => state.viewport);
  useEffect(() => {
    matcapTexture.colorSpace = THREE.SRGBColorSpace
    matcapTexture.needsUpdate = true
    material.matcap = matcapTexture
    material.needsUpdate = true
  }, [])
  return (
    <>
      {/* <Center  > */}
      {/* <Physics gravity={10}> */}
      {/* <Physics> */}
      {/* <Float speed={5}> */}
      {/* <Text3D
              position={[0, 0, 0]}
              scale={[-.4, .4, .4]}
              ref={ref}
              size={w / 9}
              maxWidth={[-w / 5, -h * 2, 3]}
              font={"/gt.json"}
              curveSegments={24}
              brevelSegments={1}
              bevelEnabled
              bevelSize={0.08}
              bevelThickness={0.03}
              height={1}
              lineHeight={1} 
              letterSpacing={0.3}
            >
              {`WELCOME TO\n   BIT PARK`}
              <meshMatcapMaterial color='#F8FAE5' matcap={matcapTexture} />
            </Text3D> */}

      <Text3D
        material={material}
        // font="./fonts/helvetiker_regular.typeface.json"
        // font={"/gt.json"}
        font={"/gt.json"}
        size={1}
        scale={[-.6, .6, .6]}
        // curveSegments={12}
        // bevelEnabled
        // bevelThickness={0.02}
        // bevelSize={0.02}
        // bevelOffset={0}
        // bevelSegments={5}
        height={.3}
        lineHeight={1}
        letterSpacing={0.3}
        position={[0, -.5, 0]}
        // rotateZ={-10}
        rotation={[0, 0, 0]}

      >
        {/* {`welcome`} */}
        {/* welcome */}
        {`WELCOME TO\n   BIT PARK`}
      </Text3D>
      {/* </Float> */}
      {/* </Physics> */}
      {/* </Center> */}
    </>
  );
}

function BgModel() {

  const bgmodel = useGLTF("./models/scifi_mine.glb")
  return (
    <>
      {/* <ambientLight intensity={2}/> */}
      {/* <directionalLight intensity={10}/> */}
      {/* <pointLight color={'#40A2E3'}/> */}
      <pointLight intensity={1.5} position={[-1, 1, 3]} color="#7E2553" />
      <pointLight intensity={1.5} position={[1, 1, 3]} color="blue" />
      <pointLight intensity={1.5} position={[0, 3, -10]} color="white" />
      <group >
        <primitive
          object={bgmodel.scene}
          scale={0.050}
        >
        </primitive>
      </group>
    </>
  )
}

export default function Contact() {
  return (
    <div className="scene">
      <Canvas camera={{
        // position: [0, 0, -10], 
        // fov: 60 
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 3, 8]
      }}>
        {/* <OrbitControls
          enableZoom={true}
          autoRotate={true}
          autoRotateSpeed={-0.1}
          enablePan={true}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
          zoomSpeed={0.15}
          dampingFactor={0.05}
        /> */}

        <OrbitControls />
        {/* <ambientLight  /> */}
        {/* <ambientLight intensity={2}/> */}
        {/* <directionalLight color={'#40A2E3'} intensity={0.5} />   */}
        {/* <hemisphereLight color={['red','green']}/> */}
        <Suspense fallback={"Loading"}>
          {/* <Stars
            radius={100}
            depth={100}
            count={4000}
            factor={4}
            saturation={0}
            fade
            speed={0.01}
          /> */}
          {/* <Sparkles
            count={300}
            size={3}
            speed={0.02}
            opacity={1}
            scale={10}
            color="#fff3b0"
          /> */}

          {/* <Hero /> */}
          <BgModel />

        </Suspense>
        {/* <ambientLight intensity={0.6} color={"#dee2ff"} /> */}
      </Canvas>
    </div>
  );
}
