import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(sessionStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      sessionStorage.setItem("theme", theme);
    } else {
      document.documentElement.classList.add("dark");
      sessionStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [theme, setTheme];
};
