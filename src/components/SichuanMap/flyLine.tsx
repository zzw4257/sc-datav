import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useControls } from "leva";
import { type GeoProjection } from "d3-geo";

import scOutlineData from "../../assets/sc_outline.json";

export default function FlyLine({ projection }: { projection: GeoProjection }) {
  const index = useRef(0); //取点索引位置
  const num = useRef(50); //从曲线上获取点数量
  const geometry = useRef(new THREE.BufferGeometry());
  const curve2 = useRef<THREE.CatmullRomCurve3>(null);
  const points = useRef<THREE.Vector3[]>([]);
  const controls = useControls({
    lineColor: { label: "边缘流光颜色", value: "#ffffff" },
    animation: {
      label: "边缘流光动画",
      value: true,
    },
  });

  useEffect(() => {
    let v3Arr: THREE.Vector3[] = [];

    scOutlineData.features.map((line) => {
      line.geometry.coordinates[0].map((coords) => {
        v3Arr = coords.map((ll) => {
          const [x, y] = projection(ll as [number, number]) ?? [];
          return new THREE.Vector3(x ?? 0, y ?? 0, 0.49);
        });
      });
    });

    points.current = new THREE.CatmullRomCurve3(v3Arr).getSpacedPoints(800);
    index.current = Math.floor((points.current.length - 35) * Math.random()); //取点索引位置随机
    const points2 = points.current.slice(
      index.current,
      index.current + num.current
    ); //从曲线上获取一段

    curve2.current = new THREE.CatmullRomCurve3(points2);
    const newPoints2 = curve2.current.getSpacedPoints(200); //获取更多的点数

    geometry.current.setFromPoints(newPoints2);

    // 每个顶点对应一个百分比数据attributes.percent 用于控制点的渲染大小
    const half = Math.floor(newPoints2.length / 2);
    const percentArr = newPoints2.map((_, i) =>
      i < half ? i / half : 1 - (i - half) / half
    ); //attributes.percent的数据

    geometry.current.attributes.percent = new THREE.BufferAttribute(
      new Float32Array(percentArr),
      1
    );
  }, [projection]);

  useFrame(() => {
    if (!curve2.current || !controls.animation) return;

    const pts = points.current;
    const total = pts.length;
    const start = index.current;
    const end = index.current + num.current;

    let segment;

    // ✅ 如果 end 超出数组长度，则拼接两段
    if (end <= total) {
      segment = pts.slice(start, end);
    } else {
      const overflow = end - total;
      segment = pts.slice(start).concat(pts.slice(0, overflow));
    }

    // 更新曲线和几何体
    curve2.current.points = segment;
    const newPoints2 = curve2.current.getSpacedPoints(200);
    geometry.current.setFromPoints(newPoints2);

    index.current = (index.current + 1) % total;
  });

  return (
    <object3D position={[0, 0, -0.51]}>
      <points geometry={geometry.current}>
        {/* <bufferGeometry setFromPoints={newPoints2}>
          <bufferAttribute
            attach="attributes-percent"
            args={[new Float32Array(percentArr), 1]}
          />
        </bufferGeometry> */}
        <pointsMaterial
          transparent
          color={controls.lineColor}
          size={0.2} //点大小 考虑相机渲染范围设置
          //   vertexColors= {THREE.VertexColors} //使用顶点颜色渲染
          onBeforeCompile={(shader) => {
            // 顶点着色器中声明一个attribute变量:百分比
            shader.vertexShader = shader.vertexShader
              .replace(
                "void main() {",
                [
                  "attribute float percent;", //顶点大小百分比变量，控制点渲染大小
                  "void main() {",
                ].join("\n") // .join()把数组元素合成字符串
              )
              // 调整点渲染大小计算方式
              .replace(
                "gl_PointSize = size;",
                ["gl_PointSize = percent *size;"].join("\n") // .join()把数组元素合成字符串
              );

            shader.fragmentShader = shader.fragmentShader.replace(
              "#include <output_fragment>",
              `#ifdef OPAQUE
                diffuseColor.a = 1.0;
                #endif

                // https://github.com/mrdoob/three.js/pull/22425
                #ifdef USE_TRANSMISSION
                diffuseColor.a *= transmissionAlpha + 0.2;
                #endif

                // 设置透明度变化
                float r = distance(gl_PointCoord, vec2(0.5, 0.5));
                // diffuseColor.a = diffuseColor.a*(1.0 - r/0.5);//透明度线性变化
                diffuseColor.a = diffuseColor.a*pow( 1.0 - r/0.5, 6.0 );//透明度非线性变化  参数2越大，gl_PointSize要更大，可以直接设置着色器代码，可以设置材质size属性
                gl_FragColor = vec4( outgoingLight, diffuseColor.a );`
            );
          }}
        />
      </points>
    </object3D>
  );
}
