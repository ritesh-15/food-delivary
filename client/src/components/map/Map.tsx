import { useEffect } from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";
import { FC } from "react";
import { useState } from "react";

interface MapProps {
  currentCordinates?: number[];
  setCurrentCordinates?(cordinates: number[]): any;
}

const Map: FC<MapProps> = ({ currentCordinates, setCurrentCordinates }) => {
  const [map, setMap] = useState<mapboxgl.Map>();

  const initMapbox = () => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoicml0ZXNoa2hvcmUxNSIsImEiOiJja3lzN3JkaHMxMHh2Mm9tbWJ5YTJpbW1rIn0.3srv_m-eyJLcRvyNRNIKnQ";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/riteshkhore15/ckyse28da6nbq14tfmp03rry5",
      center: [73.8567, 18.5204],
      zoom: 4,
    });

    setMap(map);

    map.on("click", (e: mapboxgl.MapMouseEvent) => {
      if (setCurrentCordinates) {
        setCurrentCordinates(e.lngLat.toArray());
      }
    });
  };

  useEffect(() => {
    initMapbox();
  }, []);

  useEffect(() => {
    if (!map) return;
    if (!currentCordinates) return;

    const marker = new mapboxgl.Marker({
      color: "hsl(27, 97%, 54%)",
    })
      .setLngLat([currentCordinates[0], currentCordinates[1]])
      .addTo(map);

    map.flyTo({
      center: [currentCordinates[0], currentCordinates[1]],
      zoom: 10,
    });

    return () => {
      marker.remove();
    };
  }, [currentCordinates, map]);

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = styled.div`
  height: 100%;
`;
