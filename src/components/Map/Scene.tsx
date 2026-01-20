import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import styled from "styled-components";
import Lights from "./Lights";
import Base from "./Base";
import type { CityGeoJSON } from "@/types/map";

const CanvasWrapper = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

export interface SceneProps {
  geoJson: CityGeoJSON;
  mapTextureUrl: string;
  normalMapTextureUrl: string;
  stats?: Record<string, any>;
}

// Inner component to handle loading within Canvas
function InnerScene({ geoJson, mapTextureUrl, normalMapTextureUrl, stats }: SceneProps) {
  const [mapTexture, normalMapTexture] = useLoader(TextureLoader, [mapTextureUrl, normalMapTextureUrl]);

  return (
    <Suspense fallback={null}>
      <Base
        data={geoJson}
        mapTexture={mapTexture}
        normalMapTexture={normalMapTexture}
        stats={stats}
      />
    </Suspense>
  );
}

export default function Scene(props: SceneProps) {
  return (
    <CanvasWrapper>
      <Canvas
        flat
        shadows
        camera={{ position: [-50, 125, 250], fov: 50, far: 2000, near: 1 }}
        dpr={[1, 2]}>
        <color attach="background" args={["#fff5e8"]} />
        <Lights />

        <InnerScene {...props} />

        <ContactShadows
          opacity={0.5}
          scale={300}
          blur={0.5}
          resolution={256}
          color="#000000"
        />

        <OrbitControls
          enablePan
          enableZoom
          enableRotate
          zoomSpeed={0.3}
          minDistance={100}
          maxDistance={300}
          maxPolarAngle={1.5}
        />
      </Canvas>
    </CanvasWrapper>
  );
}
