import { markerSolve } from "../../shared/ui/marker-solve";
import { useSolve } from "./hooks";
import {
  hasConnectionToPointFromPoint,
  isConnectionConnectable,
  isNoMorePointsLeft,
} from "./utils";
import { Level } from "../../types";
import { useMapAPI } from "../../shared/ui/map/hooks";
import { makePolyline } from "../../shared/lib/polyline";
import { useEffect } from "react";

const CONNECTION_COLOR_DEFAULT = "rgba(0,0,0,0.2)";
const CONNECTION_COLOR_CONNECTABLE = "rgba(0,0,0,0.6)";

function Solve({
  level,
  score,
  onScoreUpdate,
  onChangeIsPathFull,
}: {
  level: Level;
  score: number;
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
                isConnectionConnectable(connection, solveStack)
                  ? CONNECTION_COLOR_CONNECTABLE
                  : CONNECTION_COLOR_DEFAULT
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
