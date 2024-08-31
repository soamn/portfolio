"use client";

import React, { useEffect, useState } from "react";
import HomePage from "./Components/homepage.js";
import Projects from "./Projects/page.js";
import Contact from "./Contact/page.js";
import Navbar from "./Components/navbar.js";

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <Navbar />
      <main className=" bg-gradient-to-r from-slate-800 to-slate-950 snap-y snap-mandatory overflow-y-scroll h-screen overflow-x-clip ] text-white ">
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
          <Projects />
        </section>
        <section className="snap-always snap-center">
          <Contact />
        </section>
      </main>
    </>
  );
}
