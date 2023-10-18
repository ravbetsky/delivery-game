import React from "react";
import ReactDOM from "react-dom/client";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { MapProvider } from "./entities/map/provider";
import Map from "./entities/map/Map";
import { LeaderBoardScreen } from "./screens/leaderboard/LeaderboardScreen";
import { MainScreen } from "./screens/main/MainScreen";
import { GameScreen } from "./screens/game/GameScreen";
import { TutorialScreen } from "./screens/tutorial/TutorialScreen";

import "./index.css";

const router = createMemoryRouter([
  {
    path: "/",
    element: <MainScreen />,
  },
  {
    path: "/game",
    element: <GameScreen />,
  },
  {
    path: "/leaderboard",
    element: <LeaderBoardScreen />,
  },
  {
    path: "/tutorial",
    element: <TutorialScreen />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MapProvider>
      <Map>
        <RouterProvider router={router} />
      </Map>
    </MapProvider>
  </React.StrictMode>
);
