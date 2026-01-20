import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import styled from "styled-components";
import { useCityStore } from "@/stores/cityStore";
import Scene from "@/components/Map/Scene";
import Panel from "@/pages/Demo1/panel"; // Reusing the panel for demonstration

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const ErrorOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: red;
  font-size: 24px;
`;

export default function Viewer() {
  const { id } = useParams();
  const location = useLocation();
  const getCity = useCityStore((state) => state.getCity);
  const [cityData, setCityData] = useState<ReturnType<typeof getCity>>(undefined);

  const isEmbed = location.pathname.startsWith("/embed") || new URLSearchParams(location.search).get("embed") === "true";

  useEffect(() => {
    if (id) {
      const city = getCity(id);
      setCityData(city);
    }
  }, [id, getCity]);

  if (!id) return <ErrorOverlay>No ID provided</ErrorOverlay>;
  if (!cityData) return <ErrorOverlay>City not found</ErrorOverlay>;

  return (
    <Wrapper>
      <Scene
        geoJson={cityData.geoJson}
        mapTextureUrl={cityData.mapTextureUrl}
        normalMapTextureUrl={cityData.normalMapTextureUrl}
        stats={cityData.stats}
      />
      {!isEmbed && <Panel />}
    </Wrapper>
  );
}
