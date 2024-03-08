import { React, useRef } from 'react'
// import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF,  Sparkles, Center, useHelper, Environment } from '@react-three/drei'

export default function HomeModel1() {
    const hmmodel = useGLTF("./models/earthhologram.glb");
    // const groupref = useRef();
    const earthref = useRef();
    const sparkref = useRef();
    useFrame((state,delta) =>
{
    earthref.current.rotation.y += delta*0.3
    // sparkref.current.rotation.x += delta
})

    return (
        <>
            {/* <OrbitControls autoRotate /> */}
            {/* <Environment  
            background 
            // files={"../src/assets/all-images/h0meb9.hdr"}
            /> */}
            {/* <spotLight intensity={50} position={[1, 3, 1]} color={'aqua'} /> */}
            <Center>
                <Sparkles
                    ref={sparkref}
                    size={10}
                    scale={[10, 10, 10]}
                    position-y={.6}
                    speed={1.8}
                    count={100}
                    color={'blue'}
                    rotation={[.1, 0, 0]}

                />
            </Center>
            <group>
                <primitive
                    object={hmmodel.scene}
                    scale={2}
                    position={[.9,-1.4,.8]}
                    ref={ earthref } 
                    rotation-y={ Math.PI * 0.25 }
                >
                </primitive>

            </group>
        </>
    )
}

useGLTF.preload("./models/earthhologram.glb")