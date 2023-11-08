import { Connection, Point } from "../../entities/level";

export const getPointByID = (points: Point[], id: string) =>
  points.find((point) => point.id === id);

export const formatTimer = (timer: number) =>
  `00:${timer < 10 ? `0${timer}` : timer}`;

export const hasConnectionToPointFromPoint = (
  solveStack: string[],
  connections: Connection[],
  pointTo: string
) => {
  if (solveStack.length === 0) {
    return true;
  }
  const currentPoint = solveStack[solveStack.length - 1];
  const possibleConnections = connections.filter((connection) =>
    connection.some((c) => c === currentPoint)
  );
  return (
    possibleConnections.some((connection) =>
      connection.some((c) => c === pointTo)
    ) && solveStack.every((item) => item !== pointTo)
  );
};

export const isNoMorePointsLeft = (
  solveStack: string[],
  connections: Connection[],
  points: Point[]
) => {
  const pointsLeft = points
    .filter((point) => !solveStack.includes(point.id))
    .map((point) => point.id);

  return pointsLeft.every(
    (pointId) =>
      !hasConnectionToPointFromPoint(solveStack, connections, pointId)
  );
};

export const isConnectionConnectable = (
  connection: Connection,
  solveStack: string[] = []
) => {
  const stack = [...solveStack];
  const lastFromStack = stack.pop();
  return (
    lastFromStack &&
    connection.includes(lastFromStack) &&
    stack.every((id) => !connection.includes(id))
  );
};
