import { useState } from "react";

export const SwitchTheme = () => {
  const setTheme = (themeName: string) => {
    document.documentElement.className = themeName;
  };

  // hooks for switch
  const [lightTheme, setLightTheme] = useState(true);

  return <></>;
};

export default SwitchTheme;
