  import { useFrame } from "@react-three/fiber";
  import gsap from "gsap";
  import { useLayoutEffect, useRef,useState} from "react";
import { HomeModelGirl02 } from "./HomeModel02";
  
  // const shiningWhite = new THREE.Color(1.1, 1.1, 1.1);
  // const shiningRed = new THREE.Color(4.8, 0.1, 0.1);
  
  export const HomeModelgirl01 = () => {
  // const [action, setAction] = useState("Idle");
    const podium = useRef();
    const car = useRef();

  
    const tl = useRef();
  
    useFrame((_state, delta) => {
      podium.current.rotation.y += delta*0.2 ;
    });
  
    useLayoutEffect(() => {
      tl.current = gsap.timeline();
      // VERTICAL ANIMATION
      tl.current.to(car.current.position, {
        duration: 2,
        y: -2,
      });
      tl.current.to(
        podium.current.position,
        {
          duration: 2,
          y: -1.90,
        },
        0
      );
  
      tl.current.to(
        car.current.rotation,
        {
          duration: 2,
          y: Math.PI * 2 - Math.PI / 26,
          z:0.10,
        },
        0
      );
  
      tl.current.to(podium.current.rotation, {
        duration: 1,
        y: Math.PI * 12,
      });
      tl.current.to(
        podium.current.position,
        {
          duration: 0.5,
          z: -8,
        },
        1.5
      );
  
      tl.current.to(
        podium.current.rotation,
        {
          duration: 1,
          x: Math.PI / 4,
        },
        1.8
      );
    }, []);
  
    return (
      <>
        {/* <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} /> */}
        <hemisphereLight intensity={0.5} />
  
      <group position={[4,-.5,0]} rotation={[0,-0.40,0]}>
        <group ref={car}>
          <HomeModelGirl02/>
        </group>
        <group scale={[4, 0.4, 4]} position={[0, 0, 0]} ref={podium}>
          <mesh
            position={[0, 0.51, 0]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
          >
            <ringGeometry args={[0.92, 1, 40]} />
            <meshStandardMaterial
              color={[1.5, 1, 4]}
              toneMapped={false}
              roughness={0.75}
            />
          </mesh>
        </group>
         </group>
         
      </>
    );
  };
  