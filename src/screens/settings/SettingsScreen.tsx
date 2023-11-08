import { useNavigate } from "react-router-dom";
import { Settings } from "../../shared/ui/settings";

export function SettingsScreen() {
  const navigate = useNavigate();
  return (
    <Settings
      onSaveClick={() => navigate("/")}
      onBackClick={() => navigate("/")}
    />
  );
}
