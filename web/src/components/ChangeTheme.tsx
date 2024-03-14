"use client";

import { useTheme } from "@/hooks";
import { MoonIcon, SunIcon } from "@/icons";

export const ChangeTheme = () => {
  const [theme, setTheme] = useTheme();
  const handleClick = () => setTheme(theme === "dark" ? "light" : "dark");
  return (
    <button
      onClick={handleClick}
      className="flex justify-center items-center cursor-pointer dark:bg-[#282828] bg-[#ff000030] rounded p-2"
    >
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};
