import React from "react";
import ReactDOM from "react-dom/client";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { MapProvider } from "./shared/ui/map/provider";
import Map from "./shared/ui/map/Map";
import { MainScreen } from "./screens/main/MainScreen";
import { GameScreen } from "./screens/game/GameScreen";
import { LeaderboardScreen } from "./screens/leaderboard/LeaderboardScreen";
import { LoginScreen } from "./screens/login/LoginScreen";
import { SettingsScreen } from "./screens/settings/SettingsScreen";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MapProvider>
      <Map>
        <MemoryRouter>
          <Routes>
            <Route path="/" Component={MainScreen} />
            <Route path="/game" Component={GameScreen} />
            <Route path="/leaderboard" Component={LeaderboardScreen} />
            <Route path="/login" Component={LoginScreen} />
            <Route path="/settings" Component={SettingsScreen} />
          </Routes>
        </MemoryRouter>
      </Map>
    </MapProvider>
  </React.StrictMode>
);
