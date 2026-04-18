"use client";
import { useEffect, useState } from "react";

const AnimateMouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const theme = localStorage.getItem("theme");
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      style={{
        left: mousePosition.x - 192,
        top: mousePosition.y - 192,
        transition: "all 0.35 ease-out",
      }}
      className={`fixed w-96 h-96 bg-linear-to-r ${theme === "dark" ? "from-slate-500/20 to-blue-500/20" : "from-blue-500/20 to-slate-500/20"} rounded-full filter blur-3xl pointer-events-none z-0`}
    ></div>
  );
};

export default AnimateMouse;
