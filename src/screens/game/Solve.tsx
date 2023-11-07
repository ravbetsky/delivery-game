import { markerSolve } from "../../shared/ui/marker-solve";
import { useSolve } from "./hooks";
import {
  getPointByID,
  hasConnectionToPointFromPoint,
  isNoMorePointsLeft,
} from "./utils";
import { Level } from "../../models/level/type";
import { useMapAPI } from "../../entities/map/hooks";
import { makePolyline } from "../../shared/lib/polyline";
import { useEffect, useMemo } from "react";
import { markerFrom } from "../../shared/ui/marker-from";
import { markerTo } from "../../shared/ui/marker-to";

function Solve({
  level,
  score,
  onScoreUpdate,
  onChangeIsPathFull,
  isRouteFull,
}: {
  level: Level;
  score: number;
  isRouteFull: boolean;
  onScoreUpdate: (score: number) => void;
  onChangeIsPathFull: (isPathFull: boolean) => void;
}) {
  const { YMapMarker, YMapFeature } = useMapAPI();

  const { points, connections } = level;
  const { solveStack, popPoint, pushPoint } = useSolve({
    score,
    onScoreUpdate,
  });

  const lastId = solveStack[solveStack.length - 1];
  const solvePathCoords = solveStack.map(
    (item) => points.find((point) => point.id === item)!.coords!
  );

  useEffect(() => {
    onChangeIsPathFull(isNoMorePointsLeft(solveStack, connections, points));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [solveStack.length]);

  return (
    <>
      <YMapFeature {...makePolyline(solvePathCoords, "#1cc052")} />
      {connections.map(
        (connection) =>
          connection.every((connectionId) =>
            points.some((point) => point.id === connectionId)
          ) && (
            <YMapFeature
              key={connection.join("")}
              {...makePolyline(
                connection.map(
                  (id) => points.find((point) => point.id === id)!.coords!
                ),
                "rgba(0,0,0,0.3)"
              )}
            />
          )
      )}
      {points.map((point) => (
        <YMapMarker
          key={point.id}
          coordinates={point.coords}
          markerElement={markerSolve({
            weight: point.weight,
            isAvailable: hasConnectionToPointFromPoint(
              solveStack,
              connections,
              point.id
            ),
            isActive: solveStack.includes(point.id),
            isLast: lastId === point.id,
            onClick: () =>
              lastId === point.id
                ? popPoint(point.weight)
                : pushPoint(point.id, point.weight),
          })}
        />
      ))}
    </>
  );
}

export default Solve;
