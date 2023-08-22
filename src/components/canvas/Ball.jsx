import {
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Decal,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh costShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          scale={1}
        />
        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
      Ball
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    // The <Canvas> component is being used to create a WebGL canvas for rendering 3D graphics.
    // The "frameloop" attribute is set to "demand," indicating that the canvas will be rendered only when requested, optimizing performance.
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        {
          // <OrbitControls> is a component that provides interactive camera controls for the 3D scene.
        }
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      {
        // The <Preload> component is used to preload resources asynchronously.
      }
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
