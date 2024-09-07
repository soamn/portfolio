"use client";

import React, { useEffect, useState } from "react";
import HomePage from "./Components/homepage.js";
import Projects from "./Projects/page.js";
import Contact from "./Contact/page.js";
import Navbar from "./Components/navbar.js";
import { FaMoon, FaLightbulb } from "react-icons/fa";
export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [mode, setMode] = useState("dark");
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <>
      <Navbar />
      <main
        className={` ${
          mode === "dark" ? "bg-dark" : "bg-mygradient"
        } snap-y snap-mandatory overflow-y-scroll h-screen overflow-x-clip ] text-white `}
      >
        <div className="absolute top-2 left-[80%]  gap-4 flex z-50 ">
          <button
            className={`bg-zinc-900 rounded-full w-6 h-6 p-1 ${
              mode === "dark" ? "shadow-sm shadow-slate-100" : "text-black"
            }`}
            onClick={() => {
              setMode("dark");
            }}
          >
            {" "}
            <FaMoon />
          </button>

          <button
            className={`bg-mygradient rounded-full w-6  h-6 p-1 ${
              mode === "mygradient"
                ? "shadow-sm shadow-slate-100"
                : "text-black"
            }`}
            onClick={() => {
              setMode("mygradient");
            }}
          >
            <FaLightbulb />
          </button>
        </div>
        <div
          className="fixed top-0 left-0 h-52 w-52  opacity-10 bg-yellow-100  blur-3xl z-50"
          style={{
            transform: `translate(${cursorPosition.x + 50}px, ${
              cursorPosition.y + 50
            }px)`,
            transition: "transform 6s ease-out",
          }}
        ></div>

        <section className="snap-always snap-center">
          <HomePage />
        </section>

        <section className="snap-always snap-center  ">
          <Projects mode={mode} />
        </section>
        <section className="snap-always snap-center">
          <Contact mode={mode} />
        </section>
      </main>
    </>
  );
}
