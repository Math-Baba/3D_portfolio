import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";

const Computers = ({isMobile}) => {
    const computer = useGLTF('/desktop_pc/scene.gltf');  

    return(
        <mesh>
            <hemisphereLight intensity={1} groundColor="black"/>  
            <pointLight intensity={30}/>  
            <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={20} castShadow shadow-mapSize={1024}/>
            <primitive object={computer.scene} scale={ isMobile ? 0.40 : 0.60 } position={ isMobile ? [0, -2, -1] : [0, -3.75, -1]} rotation={[-0.01, -0.2, -0.1]}/>  
        </mesh>
    )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

    return (
        <Canvas
          frameloop='demand'
          shadows
          dpr={[1, 2]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<Loader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile}/>  
          </Suspense>

          <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
