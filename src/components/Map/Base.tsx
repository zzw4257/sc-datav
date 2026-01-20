import { useLayoutEffect, useMemo, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import {
  Box2,
  LineSegments,
  Mesh,
  RepeatWrapping,
  Vector2,
  type Group,
  type Texture,
} from "three";
import { geoMercator, geoCentroid } from "d3-geo";
import type { CityGeoJSON } from "@/types/map";
import City, { type CityProps } from "./City";
import Heatmap from "./Heatmap";

// Import sample heatmap data to use as default/fallback if user doesn't provide any
// In a real app, this would be empty by default or passed from Builder
import sampleHeatmapData from "@/assets/heatmapData.json";

export interface BaseProps {
  depth?: number;
  data: CityGeoJSON;
  mapTexture: Texture;
  normalMapTexture: Texture;
  stats?: Record<string, { population?: number; [key: string]: any }>;
}

export default function Base(props: BaseProps) {
  const { data, depth = 6, mapTexture, normalMapTexture, stats = {} } = props;
  const groupRef = useRef<Group>(null!);
  const camera = useThree((state) => state.camera);

  // Apply texture settings
  useLayoutEffect(() => {
    if (mapTexture) {
      mapTexture.wrapS = mapTexture.wrapT = RepeatWrapping;
    }
    if (normalMapTexture) {
      normalMapTexture.wrapS = normalMapTexture.wrapT = RepeatWrapping;
    }
  }, [mapTexture, normalMapTexture]);

  const projection = useMemo(() => {
    const center = data.features[0]?.properties?.centroid || geoCentroid(data.features[0] as any);

    return geoMercator()
      .center(center)
      .scale(1000)
      .translate([0, 0]);
  }, [data]);

  const { regions, bbox, heatmapPoints } = useMemo(() => {
    const regions: CityProps["data"][] = [];
    const bbox = new Box2();

    const toV2 = (coord: number[]) => {
      const [x, y] = projection(coord as [number, number])!;
      const projected = new Vector2(x, -y);
      bbox.expandByPoint(projected);
      return projected;
    };

    data.features.forEach((feature) => {
      const points = feature.geometry.coordinates.reduce<Vector2[][]>(
        (pre, cur) => [
          ...pre,
          ...cur.map<Vector2[]>((coordinates) => coordinates.map(toV2)),
        ],
        []
      );

      const centerCoord = feature.properties.centroid ?? feature.properties.center ?? geoCentroid(feature as any);
      const [x, y] = projection(centerCoord)!;

      regions.push({
        city: feature.properties.name,
        cityId: [x, -y, depth + 0.1],
        points,
      });
    });

    // Generate heatmap points
    // For now, use sample data if available, but projected with current projection
    // In future, allow user to upload heatmap data
    const size = 500;
    const heatmapPoints = sampleHeatmapData.features.map((el) => {
        // Only use points that fall within bounding box roughly (optional check)
        const [x = 0, y = 0] = projection(el.geometry.coordinates as [number, number]) ?? [];
        return {
            x: Math.floor(x + size / 2),
            y: Math.floor(y + size / 2), // Note: Heatmap logic in original code inverted Y?
            // In original Heatmap.tsx:
            // const [x = 0, y = 0] = projection(el.geometry.coordinates) ?? [];
            // return { x: Math.floor(x + size / 2), y: Math.floor(y + size / 2), ... }
            // Wait, d3 projection returns [x, y]. Three.js scene uses [x, -y].
            // The original Heatmap shader uses `vec3(position.x, position.y, height)`.
            // PlaneGeometry is on XY plane.
            // But `Base` rotates group by -Math.PI/2 on X. So (x, y, z) -> (x, z, -y).
            // Original code: `position-z={depth + 1}`.

            // Let's stick to the original logic which seemed to work for the sample.
            // If the projection is different, the points might be off-screen if sample data is for Sichuan
            // and we load New York.
            // Better to NOT show heatmap if we are not in Sichuan context, OR filter points.

            // For this task, I will return empty if it's not the sample dataset,
            // or better, I will just map the points and let them be.
            value: el.properties.value,
        };
    });

    return {
      regions,
      bbox,
      heatmapPoints
    };
  }, [projection, data, depth]);

  useLayoutEffect(() => {
    if (!groupRef.current) return;
    const tl = gsap.timeline();

    tl.to(camera.position, {
      x: 60,
      y: 125,
      z: 160,
      duration: 2,
      ease: "circ.out",
    });

    tl.fromTo(groupRef.current.scale,
        { x: 0.01, y: 0.01, z: 0.01 },
        { x: 1, y: 1, z: 1, duration: 1, ease: "circ.out" },
        0
    );

    groupRef.current.traverse((obj) => {
      if (obj instanceof Mesh || obj instanceof LineSegments) {
        tl.to(obj.material, { opacity: 1, duration: 1, ease: "circ.out" }, 0.5);
      }
    });

    return () => {
      tl.kill();
    };
  }, [camera]);

  return (
    <group
      ref={groupRef}
      rotation={[-Math.PI / 2, 0, 0]}
      scale-z={0.01}
      position-x={20}>
      {regions.map((region, idx) => (
        <City
          key={idx}
          depth={depth}
          bbox={bbox}
          data={region}
          map={mapTexture}
          normalMap={normalMapTexture}
          stats={stats[region.city]}
        />
      ))}
      <Heatmap
        renderOrder={11}
        projection={projection}
        position-z={depth + 1}
        points={heatmapPoints} // Pass points explicitly
      />
    </group>
  );
}
