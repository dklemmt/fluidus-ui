import { useState } from "react";
import { SunMoon } from "lucide-react";

export const SwitchTheme = () => {
  const setTheme = (themeName: string) => {
    document.documentElement.className = themeName;
  };

  // hooks for switch
  const [lightTheme, setLightTheme] = useState(true);

  return <SunMoon />;
};

export default SwitchTheme;
