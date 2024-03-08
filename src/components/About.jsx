import React from 'react'
import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
// import HomeModelGirl from './Models/HomeModelGirl'
import { Bloom, ToneMapping, EffectComposer } from '@react-three/postprocessing'
// import { OrbitControls } from '@react-three/drei'
import '../components/Models/model.css'
// import { OrbitControls } from '@react-three/drei'
import { HomeModelgirl01 } from './Models/homemodelgirl01'
import Contact from './Contact'

const About = () => {
  // const [action, setAction] = useState("Idle");
  return (
    <>
      <section className='bg-slate-900 '>
        {/* <div>
         <video src="../src/assets/all-videos/home-bg-vd1.mp4" autoPlay loop></video>
       </div> */}
        <div className=' lg:relative'>
          <div className=' relative w-[100%]'>
            <div className='aboutmodel1 '>
              <Canvas
                gl={{
                  antialias: true,
                }}
                camera={{
                  fov: 45,
                  near: 0.1,
                  far: 200,
                  position: [0, 3, 8]
                  // position: [3, 2, 6]
                }}
              >
                {/* <OrbitControls/> */}
                <EffectComposer disableNormalPass>
                  {/* ... */}
                  {/* <Bloom luminanceThreshold={1.1} /> */}
                  <Bloom
                    luminanceThreshold={1.1}
                    mipmapBlur
                    intensity={0.06}
                  />
                  {/* <ToneMapping /> */}
                </EffectComposer>
                <ambientLight />
                {/* <OrbitControls /> */}
                <pointLight intensity={1.5} position={[-1, 1, 3]} color="red" />
                <pointLight intensity={1.5} position={[1, 1, 3]} color="blue" />
                <pointLight intensity={1.5} position={[0, 3, -10]} color="white" />
                {/* <color args={ [ '#ff0000' ] } attach="background" /> */}

                <Suspense
                  fallback={
                    <mesh position={[3, 0, 0]} scale={1} rotation={[0, 3.1, 0]}>
                      <sphereGeometry args={[2, 10, 10]} />
                      <meshBasicMaterial wireframe color="white" />
                    </mesh>}
                >
                  {/* <HomeModelGirl action={action} /> */}
                  <HomeModelgirl01 />
                {/* <Contact /> */}

                  
                </Suspense>
              </Canvas>
              {/* <div className="absolute bottom-0 right-0 flex items-center">
                <button className=' bg-white text-black m-[1rem] rounded px-3 py-1' onClick={() => setAction("Idle")} >Idle</button>
                <button className=' bg-white text-black m-[1rem] rounded px-3 py-1' onClick={() => setAction("Vectory")}>Vectory</button>
                <button className='aboutbtn' onClick={() => setAction("Draw Arrow")}>Draw Arrow</button>
                <button className='aboutbtn' onClick={() => setAction("Standing Idle")}>Idle</button>
              </div> */}
              {/* <div className='absolute top-0'>
                <Contact />
              </div> */}
            </div>
          </div>
          {/* <div className='w-[100%] lg:w-[55%]  pl-[2rem] max-[1024px]:py-[10%]  top-[35%] flex flex-col justify-center items-start max-[1024px]:items-center'> */}
            <div className='w-[100%] lg:w-[55%]  pl-[2rem] max-[1024px]:py-[10%] lg:absolute top-[35%] flex flex-col justify-center items-start max-[1024px]:items-center'>
            <div>
              <p className='font-mono  text-white text-[25px] font-black leading-[50px]'>
                Transforming ideas into innovation. <br />
                Elevate your digital journey with our expertise.
              </p>
              <button className='bg-white mt-10 text-slate-900 text-lg font-semibold p-2 rounded' >
                Talk with an export
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About


