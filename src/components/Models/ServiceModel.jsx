import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
// import * as THREE from 'three';
// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion-3d";


export default function ServiceModel() {

  const { viewport } = useThree();
  // console.log (viewport.height,viewport.width)

  const isMobile = window.innerWidth < 992;
  const responsiveRatio = viewport.width / 12;



  // const scrollControl=useScroll();
  // console.log(ScrollControl)

  // useFrame(()=>{
  //   console.log(scrollControl.offset)

  // })
  
  
  // const [Scroll,setScroll] = useState()

  //   const scrollY = window.scrollY;
  // const Scroll= window.addEventListener('scroll',()=>{
  //   var scrollY = window.scrollY;
  //   console.log(scrollY)
  //   if(scrollY<=3 || scrollY>=110)
  //   {
  //    console.log('true')
  //    }
  //    else{
  //     console.log('false')
  //    }
  // })
  // console.log(Scroll)
 
  // console.log(Scroll)
  // console.log(responsiveRatio)
  // const [isAnimating,setisAnimating] =useState(false)

  return (
    <>
    <group 
    // position={[ isMobile ? 0 : 1,isMobile ? 0 : .3,0]}
    position={[0,0,0]}
    scale={1*responsiveRatio}
    >
    
    <mesh>
        <boxGeometry />
        <meshStandardMaterial color={"yellow"} />
      </mesh>
    </group>
  
      {/* <motion.mesh 
     scale={1}
     animate={{
        x : isAnimating ? 5 : 0,
        opacity : isAnimating ? 1 : 0.5,
        rotateZ: isAnimating ? 180 : 0
     }}
     initial={{
        opacity :0.1
     }}
     transition={{
        type:"spring",
        stiffness:60,
        damping:5
     }}
     onClick={()=>{setisAnimating(!isAnimating)}}
     >
        <boxGeometry />
        <meshStandardMaterial color={"red"} />
      </motion.mesh> */}


    </>
  )
}

