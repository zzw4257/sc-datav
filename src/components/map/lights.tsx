import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper, PointLightHelper } from "three";

export default function Lights() {
  const directionalRef = useRef(null!);
  const point0Ref = useRef(null!);
  const point1Ref = useRef(null!);

  useHelper(directionalRef, DirectionalLightHelper, 5, "red");
  useHelper(point0Ref, PointLightHelper, 5, "#0e81fb");
  useHelper(point1Ref, PointLightHelper, 5, "#1f5f7a");

  return (
    <>
      <ambientLight color={0xffffff} intensity={2} />
      <directionalLight
        castShadow
        ref={directionalRef}
        color={0xffffff}
        intensity={4}
      />
      <pointLight
        ref={point0Ref}
        color="#0e81fb"
        intensity={1600}
        distance={200}
        position={[-3, 10, -3]}
      />
      <pointLight
        ref={point1Ref}
        color="#1f5f7a"
        intensity={1000}
        distance={300}
        position={[-4, 8, 10]}
      />
    </>
  );
}
