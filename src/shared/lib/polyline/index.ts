import { YMapFeatureProps } from "@yandex/ymaps3-types";
import { Coords } from "../../../types";

export const makePolyline = (
  coords: Coords[],
  color: string
): YMapFeatureProps => {
  return {
    geometry: {
      type: "LineString",
      coordinates: coords,
    },
    style: { stroke: [{ color, width: 6 }] },
  };
};
