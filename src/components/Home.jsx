import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import HomeModel1 from './Models/HomeModel1'
import '../components/Models/model.css'
// import { OrbitControls } from '@react-three/drei'
// background-image: linear-gradient(to top, #152342, #0f1e3d, #091a38, #041533, #000f2e);

const Home = () => {
  return (
    <>
      <section >
        {/* <div>
          <video src="../src/assets/all-videos/home-bg-vd1.mp4" autoPlay loop></video>
        </div> */}
        <div className='flex home_page'>
          {/* <div className='h-screen w-1/2 flex flex-col items-center justify-center'>
            <div className='home_bg pl-10'>
              <div className=' text-white'>
                <p className='text-textColor text-3xl md:text-4xl leading-relaxed'>
                  Transforming ideas into innovation .
                  Elevate your digital journey with our expertise.
                </p>
              </div>
              <button className='text-slate-900 text-2xl font-semibold rounded-xl px-8 py-4 mt-24   bg-white'>
                Talk with an expert
              </button>
            </div>
          </div> */}
          <div className='hmmodel1'>
            <Canvas
              gl={{
                
                antialias: true,
                // toneMapping: THREE.ACESFilmicToneMapping,
                // outputColorSpace: THREE.SRGBColorSpace
                // Blender 3.4 Hand & Finger Rig | Tutorial 3 (youtube.com)
              }}
              camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [3, 2, 6]
              }}
            >
              {/* <color args={ [ '#ff0000' ] } attach="background" /> */}
            {/* <OrbitControls autoRotate /> */}
              <Suspense
                fallback={
                  <mesh position={[0, 0, 0]} scale={0.8} rotation={[0, 3.1, 0]}>
                    <sphereGeometry args={[2, 10, 10]} />
                    <meshBasicMaterial wireframe color="white" />
                  </mesh>}
              >
                <HomeModel1 />
              </Suspense>
            </Canvas>

          </div>
        </div>
        {/* <div className='h-screen mt-1 bg-slate-900 flex flex-col items-center justify-center'>
      <div className='home_bg pl-10'>
             <div className=' text-white'>
             <p className='text-textColor text-3xl md:text-4xl leading-relaxed'>
              Transforming ideas into innovation .
              Elevate your digital journey with our expertise. 
              </p>
             </div>
             <button className='text-slate-900 text-2xl font-semibold rounded-xl px-8 py-4 mt-24   bg-white'>
            Talk with an expert
            </button>
            </div>
      </div> */}
      </section>
    </>
  )
}

export default Home