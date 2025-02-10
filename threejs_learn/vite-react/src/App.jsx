import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, Sparkles} from "@react-three/drei";
import {useRef} from "react";

/**
 * A rotating cube with sparkles.
 *
 * This component renders a rotating mesh cube with sparkles.
 *
 * @returns {JSX.Element} The rotating cube with sparkles.
 */
const RotatingCube = () => {
    const meshRef = useRef();
    useFrame(() =>{
        if(meshRef.current){
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    })
    return (
        <mesh ref = {meshRef}>
            <cylinderGeometry args={[1, 1, 1]}/>
            <meshLambertMaterial color='#468585' emissive='#468585'/>

            <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.2} color='orange'/>
        </mesh>
    )
}

/**
 * The main component of the application.
 *
 * This component renders a {@link https://docs.pmnd.rs/react-three-fiber/api/canvas | Canvas} component
 * with a few child components:
 *
 * - A {@link https://docs.pmnd.rs/react-three-fiber/api/drei.orbitcontrols | OrbitControls} component
 *   to allow the user to interact with the scene.
 * - A {@link https://docs.pmnd.rs/react-three-fiber/api/core.directionallight | DirectionalLight}
 *   to provide some lighting in the scene.
 * - A {@link https://docs.pmnd.rs/react-three-fiber/api/core.color | Color} component to set the
 *   background color of the scene to black.
 * - A {@link module:RotatingCube | RotatingCube} component, which is a rotating cube.
 */
const App = () => {
    return (
        <Canvas style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <OrbitControls enableZoom={true} enablePan={true} enableRotate={true}/>

            <directionalLight position={[1, 1, 1]} intensity={10} color={'0x9CDBA6'}/>
            {/*<ambientLight intensity={2} color={'0x9CDBA6'}/>*/}

            <color attach="background" args={['#000000']}/>
            <RotatingCube/>
        </Canvas>
    )
}

export default App;