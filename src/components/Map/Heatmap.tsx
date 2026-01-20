import { useEffect, useRef } from "react";
import {
  CanvasTexture,
  Color,
  DoubleSide,
  type Mesh,
  type PlaneGeometry,
  type ShaderMaterial,
} from "three";
import type { GeoProjection } from "d3-geo";
import type { ThreeElements } from "@react-three/fiber";
//@ts-ignore
import heatmapJs from "keli-heatmap.js";

// Remove static import
// import data from "@/assets/heatmapData.json";

interface HeatmapProps extends Omit<ThreeElements["group"], "visible"> {
  projection: GeoProjection;
  size?: number;
  visible?: boolean;
  points?: Array<{ x: number, y: number, value: number }>; // Pass processed points or raw geo features
}

export default function Heatmap(props: HeatmapProps) {
  const { projection, size = 500, visible = true, points = [], ...args } = props;
  const refMesh = useRef<Mesh<PlaneGeometry, ShaderMaterial>>(null!);

  useEffect(() => {
    if (points.length === 0) return;

    const radius = 10;
    const heatmapContainer = document.createElement("div");
    heatmapContainer.style = `position:absolute;top:-9999px;left:-9999px;`;
    document.body.appendChild(heatmapContainer);

    const heatmap = heatmapJs.create({
      container: heatmapContainer,
      gradient: {
        0.5: "#1fc2e1",
        0.6: "#24d560",
        0.7: "#9cd522",
        0.8: "#f1e12a",
        0.9: "#ffbf3a",
        1.0: "#ff0000",
      },
      blur: 1,
      radius: radius,
      maxOpacity: 1,
      width: size,
      height: size,
    });

    const greymap = heatmapJs.create({
      container: heatmapContainer,
      gradient: {
        0.0: "black",
        1.0: "white",
      },
      radius: radius,
      maxOpacity: 1,
      width: size,
      height: size,
    });

    // Assume points are already {x, y, value} projected relative to size/2
    // If we want to support raw geojson features passed in, we can add logic here.
    // For now, let's assume the parent handles projection to keep this component dumb(er).
    // Actually, the previous implementation did projection INSIDE here. Let's keep that logic but allow passing feature data.

    // BUT, the prop is now `points`. Let's stick to the previous logic but allow data injection.
    // Ideally, we accept GeoJSON features and project them.

    // Let's rely on the passed `points` being correct for the heatmap lib {x, y, value}.
    // ...Wait, `points` depends on `projection` and `size`.
    // It's safer to pass the source data (features) and let this component project it,
    // OR ensure the parent knows exactly how `heatmap.js` wants coordinates (0 to size).

    const max = 1000;
    const min = 0; // Fixed min to 0 for generic use

    heatmap.setData({
      max,
      min,
      data: points,
    });

    greymap.setData({
      max,
      min,
      data: points,
    });

    const texture = new CanvasTexture(heatmap._renderer.canvas);
    texture.needsUpdate = true;
    const texture2 = new CanvasTexture(greymap._renderer.canvas);
    texture2.needsUpdate = true;

    if (refMesh.current && refMesh.current.material) {
        refMesh.current.material.uniforms.heatMap.value = texture;
        refMesh.current.material.uniforms.greyMap.value = texture2;
    }

    return () => {
      if (greymap._renderer.canvas.parentNode) greymap._renderer.canvas.remove();
      if (heatmap._renderer.canvas.parentNode) heatmap._renderer.canvas.remove();
      if (heatmapContainer.parentNode) document.body.removeChild(heatmapContainer);
    };
  }, [projection, size, points]);

  return (
    <group visible={visible} {...args}>
      <mesh ref={refMesh}>
        <planeGeometry args={[size, size, 300, 300]} />
        <shaderMaterial
          transparent
          side={DoubleSide}
          vertexShader={`
            varying vec2 vUv;
            uniform float z_scale;
            uniform sampler2D greyMap;
            void main() {
                vUv = uv;
                vec4 frgColor = texture2D(greyMap, uv);
                float height = z_scale * frgColor.a;
                vec3 transformed = vec3( position.x, position.y, height);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
            }
        `}
          fragmentShader={`
            #ifdef GL_ES
            precision highp float;
            #endif
            varying vec2 vUv;
            uniform sampler2D heatMap;
            uniform vec3 u_color;//基础颜色
            uniform float u_opacity; // 透明度
            void main() {
                gl_FragColor = vec4(u_color, u_opacity) * texture2D(heatMap, vUv);
            }
        `}
          uniforms={{
            heatMap: {
              value: { value: undefined },
            },
            greyMap: {
              value: { value: undefined },
            },
            z_scale: { value: 4.0 },
            u_color: {
              value: new Color("#ffffff"),
            },
            u_opacity: {
              value: 1.0,
            },
          }}
        />
      </mesh>
    </group>
  );
}
