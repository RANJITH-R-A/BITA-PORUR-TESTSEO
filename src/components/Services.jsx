// import React from 'react'

// const Services = () => {
//   return (
//     <div>Services</div>
//   )
// }


// export default Services 

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import '../components/Models/model.css'
import ServiceModel from './Models/ServiceModel'

// md_img
import mdimg2 from '../../src/assets/all-images/md_img4.png'
import mdimg1 from '../../src/assets/all-images/md_img01.png'
import mdimg3 from '../../src/assets/all-images/md-dm02.png'
import mdimg4 from '../../src/assets/all-images/ios2.png'
import mdimg5 from '../../src/assets/all-images/andriod.png'

// wd_img
import wdimg1 from '../../src/assets/all-images/wd_dm01.png'
import wdimg2 from '../../src/assets/all-images/wd_img01.png'
import wdimg3 from '../../src/assets/all-images/wd_img02.1.png'
import wdimg4 from '../../src/assets/all-images/wd_img03.png'
import wdimg5 from '../../src/assets/all-images/wd_img04.1.png'
import wdimg6 from '../../src/assets/all-images/wd_img05.png'






const Services = () => {
  return (
    <>
      <section className='font-urbanist' >
        {/* <div className='flex home_page'>
          
          <div className='hmmodel1'>
            <Canvas
              gl={{

                antialias: true,

              }}
              camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [0, 0, 6]
                
              }}
            >
              <ambientLight />
              <color args={ [ '#ff0000' ] } attach="background" />
              <OrbitControls autoRotate />
              <Suspense
                fallback={
                  <mesh position={[0, 0, 0]} scale={0.8} rotation={[0, 3.1, 0]}>
                    <sphereGeometry args={[2, 10, 10]} />
                    <meshBasicMaterial wireframe color="white" />
                  </mesh>}
              >
                <ServiceModel />
              </Suspense>
            </Canvas>
          </div>

          <div className='h-[100vh]'>

          </div>
        </div> */}
        <div className='bg-no-repeat bg-cover flex flex-col lg:flex-row justify-around w-auto py-[5%] items-center'
          style={{ backgroundImage: "url(../../src/assets/all-images/md_bg_svg01.jpg)" }}
        >
          <img src={mdimg3} alt="image" className='object-contain w-[90%] md:w-[50%] lg:w-[35%] h-auto rounded-2xl' />
          <p className='w-[90%] lg:w-[40%]  text-[#4F4A45] text-justify leading-8 text-lg font-sans'>
            At Bit Park Pvt Ltd, we recognize the importance of a mobile presence in
            today's digital landscape. With the exponential surge in smartphone usage,
            having a powerful and user-friendly mobile application is no longer a luxury,
            but rather a requirement for organizations in all industries.
            Whether you're a startup trying to make an impression or an established
            company looking to improve client interaction, our mobile application
            development services are tailored to your specific needs and will catapult
            your company to new heights.
          </p>
        </div>
        <div className='service_md' style={{ background: 'radial-gradient(circle, rgba(49,67,156,1) 0%, rgba(15,23,42,1) 100%)' }}>
          <div className='text-white px-4 pb-4'>
            <h1 className='text-3xl font-bold text-center pt-5 pb-16'>Our Mobile Application Development Services </h1>
            <div className='flex flex-col lg:flex-row  justify-around items-center'>
              <div className=' w-[90%] md:w-[70%] lg:w-[32%]'>
                <h3 className='text-xl font-[700] py-4'>iOS App Development: </h3>
                <h5 className='text-[17px] font-[600] pb-2'>SwiftUI and Objective-C</h5>
                <p className='text-[15px] text-justify'>Our committed team at BIT PARK possesses exceptional knowledge and skill in the development of iOS applications. They adeptly employ SwiftUI and Objective-C to create state-of-the-art solutions. By leveraging our expertise in SwiftUI's contemporary user interface framework and comprehensive understanding of Objective-C's legacy functionalities, we guarantee flawless operation and peak performance on every iOS device. Place your trust in our highly skilled
                  professionals to implement your app concepts with accuracy and cleverness.</p>
              </div>
              <img src={mdimg4} alt="image" className='object-contain w-[100%] md:w-[80%] lg:w-[40%] rounded-[10%] pt-8 lg:pt-0' />
            </div>
            <div className='flex flex-col-reverse lg:flex-row   justify-around items-center pt-8 lg:pt-0'>
              <img src={mdimg5} alt="image" className='object-contain pt-8 lg:pt-0' />
              <div className='w-[90%] md:w-[70%] lg:w-[32%]'>
                <h3 className='text-xl font-[700] py-4'>Android App Development: </h3>
                <h5 className='text-[17px] font-[600] pb-2'>Java and Kotlin</h5>
                <p className='text-[15px] text-justify'>BIT PARK's Android app developers are experts in Java and Kotlin. With expert knowledge of Java's solid capabilities and Kotlin's current features, we provide remarkable and efficient customer solutions. Our talented developers optimize efficiency, user experience, and feature implementation to make your Android app project a success.
                  Entrust BIT PARK for exceptional development services.</p>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row  justify-around items-center'>
              <div className='w-[90%] md:w-[70%] lg:w-[32%]'>
                <h3 className='text-xl font-[700] py-4'>Cross-Platform App Development:</h3>
                <h5 className='text-[17px] font-[600] pb-2'> React Native, Flutter </h5>
                <p className='text-[15px] text-justify'>Cross-platform app development is our speciality at BIT PARK, using React Native and Flutter. We provide smooth and efficient solutions for our clients using React Native's flexibility and Flutter's high-performance UI. Our talented developers make cross-platform projects successful by building dynamic user interfaces, optimizing app performance, and assuring platform compatibility.
                  Trust BIT PARK for exceptional development services.</p>
              </div>
              <img src={mdimg2} alt="image" className='w-[100%]  sm:w-[90%] md:w-[60%] lg:w-[37%] h-auto ' />
            </div>
          </div>
        </div>
        <div className='bg-no-repeat bg-cover '
          style={{ backgroundImage: "url(../../src/assets/all-images/md_bgimg02.jpg)" }}
        >
          <div className='bg-slate-900/70  py-[8%]'>
            <h1 className='text-center pb-12 text-2xl lg:text-4xl font-bold text-white '>Let's Build Something Extraordinary Together!</h1>
            <p className='w-[80%] lg:w-[50%] m-auto text-center text-white leading-7 text-lg'>
              Whether you want to modernize your company processes,
              streamline operations, or improve consumer engagement,
              Bit Park Pvt Ltd can help you get there with creative
              mobile application development solutions. Contact us
              today to discuss your project requirements, and let's
              go on a successful journey together!
            </p>
          </div>
        </div>






        <div className='bg-no-repeat bg-cover flex flex-col lg:flex-row justify-around w-auto py-[5%] items-center'
          style={{ backgroundImage: "url(../../src/assets/all-images/wd_bg_svg03.png)" }}
        // style={{backgroundImage:"url(../../src/assets/all-images/wd_bg_svg02.png)"}}
        >
          <img src={wdimg1} alt="image" className='object-contain w-[90%] md:w-[50%] lg:w-[35%] h-auto rounded-2xl' />
          <p className='w-[90%] lg:w-[40%] bg-white/70 p-12 rounded-lg text-[#4F4A45] text-justify leading-8 text-lg font-sans'>
            Greetings, and we appreciate your interest in BIT PARK PVT LTD. We are delighted to
            serve as your comprehensive provider of exceptional web development solutions,
            tailored to precisely fulfill your needs. On the basis of our unwavering commitment
            to dependability and excellence, we have specialized in consistently delivering
            state-of-the-art websites within the designated timeframe. These websites have been
            updated with the most recent technologies that have become mandatory to ensure your
            online success.
          </p>
        </div>
        <div className='service_md' style={{ background: 'radial-gradient(circle, rgba(49,67,156,1) 0%, rgba(15,23,42,1) 100%)' }}>
          <div className='text-white px-4 pb-4'>
            <h1 className='text-3xl font-bold text-center pt-5 pb-16'>Our Mobile Application Development Services </h1>
            <div className='flex flex-col lg:flex-row  justify-around items-center'>
              <div className=' w-[90%] md:w-[70%] lg:w-[32%]'>
                <h3 className='text-xl font-[700] py-4'>Custom Web Development: </h3>
                {/* <h5 className='text-[17px] font-[600] pb-2'>SwiftUI and Objective-C</h5> */}
                <p className='text-[15px] text-justify'>
                  We specialize in developing bespoke web applications that are fully functional, scalable, and user-friendly, for solutions
                  ranging from simple enterprise-level websites to those for small businesses.
                </p>
              </div>
              <img src={wdimg2} alt="image" className='object-contain w-[100%] md:w-[80%] lg:w-[28%] rounded-[10%] pt-8 lg:pt-0' />
            </div>
            <div className='flex flex-col-reverse lg:flex-row   justify-around items-center pt-8 lg:pt-0'>
              <img src={wdimg3} alt="image" className='object-contain w-[100%] md:w-[80%] lg:w-[30%] rounded-[10%] pt-8 lg:pt-0' />
              {/* <img src={wdimg3} alt="image"className='object-contain pt-8 lg:pt-0' /> */}
              <div className='w-[90%] md:w-[70%] lg:w-[32%]'>
                <h3 className='text-xl font-[700] py-4'>E-commerce Development:  </h3>
                {/* <h5 className='text-[17px] font-[600] pb-2'>Java and Kotlin</h5> */}
                <p className='text-[15px] text-justify'>
                  Confidently launch your online store! Our e-commerce development services maximize your online presence and
                  guarantee your consumers a seamless shopping experience, thereby increasing sales.
                </p>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row  justify-around items-center'>
              {/* <img src={mdimg1} alt="image"className='w-[32%] h-auto' /> */}
              <div className='w-[90%] md:w-[70%] lg:w-[32%]'>
                <h3 className='text-xl font-[700] py-4'>Responsive Design:</h3>
                {/* <h5 className='text-[17px] font-[600] pb-2'> React Native, Flutter, </h5> */}
                <p className='text-[15px] text-justify'>
                  In the mobile-centric world of today, it is essential to have a responsive website. By ensuring that your website appears and operates flawlessly on all devices,
                  our team increases user engagement and satisfaction.
                </p>
              </div>
              <img src={wdimg4} alt="image" className='w-[100%]  sm:w-[90%] md:w-[60%] lg:w-[28%] h-auto ' />
              {/* <div className='bg-green-600 '>
           <div className='bg-red-400 w-[40%] justify-self-end'>
            <img src={mdimg2} alt="image"className='w-[48%] h-auto' />
            </div>
           </div> */}
            </div>
            <div className='flex flex-col-reverse lg:flex-row   justify-around items-center pt-8 lg:pt-0'>
              <img src={wdimg5} alt="image" className='w-[100%]  sm:w-[90%] md:w-[60%] lg:w-[30%] h-auto ' />
              {/* <img src={wdimg5} alt="image"className='object-contain pt-8 lg:pt-0' /> */}
              <div className='w-[90%] md:w-[70%] lg:w-[32%]'>
                <h3 className='text-xl font-[700] py-4'>Content Management Systems (CMS):  </h3>
                <p className='text-[15px] text-justify'>
                  Our CMS solutions will grant you authority over the content of your website. We provide you with intuitive platforms such as WordPress, Joomla, and Drupal, which enable you to effortlessly administer and modify your website.
                </p>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row  justify-around items-center'>
              <div className='w-[90%] md:w-[70%] lg:w-[32%]'>
                <h3 className='text-xl font-[700] py-4'>Website Support and Maintenance:</h3>
                <p className='text-[15px] text-justify'>
                  Ongoing service is required to ensure the security and optimal performance of your website.
                  We provide comprehensive support and maintenance services to guarantee that your website is always secure, current, and operating efficiently.
                </p>
              </div>
              <img src={wdimg6} alt="image" className='w-[100%]  sm:w-[90%] md:w-[60%] lg:w-[30%] h-auto ' />
            </div>
          </div>
        </div>
        <div className='bg-no-repeat bg-cover '
          style={{ backgroundImage: "url(../../src/assets/all-images/md_bgimg02.jpg)" }}
        >
          <div className='bg-slate-900/70  py-[8%]'>
            {/* <h1 className='text-center pb-12 text-2xl lg:text-4xl font-bold text-white '>Let's Build Something Extraordinary Together!</h1> */}
            <p className='w-[80%] lg:w-[50%] m-auto text-center text-white leading-7 text-lg'>
              Collaborate with Bit Park Pvt. Ltd. to procure exceptional web development services that enhance your company's
              visibility on the web and stimulate expansion. Contact us immediately to discuss the specifications of your project and allow us to materialize your vision.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services





















// import * as THREE from 'three'
// import { useState, useRef, Suspense, useMemo } from 'react'
// import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber'
// import { Reflector, CameraShake, OrbitControls, useTexture } from '@react-three/drei'
// import { KernelSize } from 'postprocessing'
// import { EffectComposer, Bloom } from '@react-three/postprocessing'
// import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

// function Triangle({ color, ...props }) {
//   const ref = useRef()
//   const [r] = useState(() => Math.random() * 10000)
//   useFrame((_) => (ref.current.position.y = -1.75 + Math.sin(_.clock.elapsedTime + r) / 10))
//   const { paths: [path] } = useLoader(SVGLoader, '/triangle.svg') // prettier-ignore
//   const geom = useMemo(() => SVGLoader.pointsToStroke(path.subPaths[0].getPoints(), path.userData.style), [])
//   return (
//     <group ref={ref}>
//       <mesh geometry={geom} {...props}>
//         <meshBasicMaterial color={color} toneMapped={false} />
//       </mesh>
//     </group>
//   )
// }

// function Rig({ children }) {
//   const ref = useRef()
//   const vec = new THREE.Vector3()
//   const { camera, mouse } = useThree()
//   useFrame(() => {
//     camera.position.lerp(vec.set(mouse.x * 2, 0, 3.5), 0.05)
//     ref.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1)
//     ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (-mouse.x * Math.PI) / 20, 0.1)
//   })
//   return <group ref={ref}>{children}</group>
// }

// function Ground(props) {
//   const [floor, normal] = useTexture(['/SurfaceImperfections003_1K_var1.jpg', '/SurfaceImperfections003_1K_Normal.jpg'])
//   return (
//     <Reflector resolution={1024} args={[8, 8]} {...props}>
//       {(Material, props) => <Material color="#f0f0f0" metalness={0} roughnessMap={floor} normalMap={normal} normalScale={[2, 2]} {...props} />}
//     </Reflector>
//   )
// }

// export default function App() {
//   return (
//     <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 15] }}>
//       <color attach="background" args={['black']} />
//       <ambientLight />
//       <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
//       <Suspense fallback={null}>
//         <Rig>
//           <Triangle color="#ff2060" scale={0.009} rotation={[0, 0, Math.PI / 3]} />
//           <Triangle color="cyan" scale={0.009} position={[2, 0, -2]} rotation={[0, 0, Math.PI / 3]} />
//           <Triangle color="orange" scale={0.009} position={[-2, 0, -2]} rotation={[0, 0, Math.PI / 3]} />
//           <Triangle color="white" scale={0.009} position={[0, 2, -10]} rotation={[0, 0, Math.PI / 3]} />
//           <Ground mirror={1} blur={[500, 100]} mixBlur={12} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position-y={-0.8} />
//         </Rig>
//         <EffectComposer multisampling={8}>
//           <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6} />
//           <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.5} />
//         </EffectComposer>
//       </Suspense>
//       <CameraShake yawFrequency={0.2} pitchFrequency={0.2} rollFrequency={0.2} />
//     </Canvas>
//   )
// }
