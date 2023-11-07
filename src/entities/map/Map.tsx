import React from "react";
import { useMapAPI } from "./hooks";

function Map({ children }: { children: React.ReactNode }) {
  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } =
    useMapAPI();

  return (
    <YMap
      className="map"
      behaviors={[]}
      location={{ center: [37.618423, 55.751244], zoom: 12 }}
      margin={[120, 30, 185, 30]}
      mode="vector"
      // @ts-ignore Инстанс пригодится чтобы управлять картой
      ref={(x) => (window.mapInstance = x)}
    >
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />
      {children}
    </YMap>
  );
}

export default Map;
