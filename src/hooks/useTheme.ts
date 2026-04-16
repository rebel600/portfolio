import { useEffect, useState } from "react";

const getInitialTheme = (): boolean => {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem("theme");
  if (stored === "dark") return true;
  if (stored === "light") return false;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
};

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialTheme);;

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return { isDarkMode, setIsDarkMode };
};