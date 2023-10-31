import React from "react";
import ReactDOM from "react-dom/client";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { MapProvider } from "./entities/map/provider";
import Map from "./entities/map/Map";
import { LeaderboardScreen } from "./screens/leaderboard/LeaderboardScreen";
import { MainScreen } from "./screens/main/MainScreen";
import { GameScreen } from "./screens/game/GameScreen";
import { TutorialScreen } from "./screens/tutorial/TutorialScreen";
// import { GameOverScreen } from "./screens/gameover/GameOverScreen";

import "./index.css";

// @ts-ignore
window.ysdk.features.LoadingAPI?.ready();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MapProvider>
      <Map>
        <MemoryRouter>
          <Routes>
            <Route path="/" Component={MainScreen} />
            <Route path="/game" Component={GameScreen} />
            <Route path="/leaderboard" Component={LeaderboardScreen} />
            <Route path="/tutorial" Component={TutorialScreen} />
            {/* <Route path="/gameover" Component={GameOverScreen} /> */}
          </Routes>
        </MemoryRouter>
      </Map>
    </MapProvider>
  </React.StrictMode>
);
