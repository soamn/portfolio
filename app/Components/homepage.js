"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";
import Character from "./character";
import About from "./about";

export default function HomePage() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const eye_x = useTransform(mouseXSpring, [-0.5, 0.5], [-4, 4]);
  const eye_y = useTransform(mouseYSpring, [-0.5, 0.5], [-4, 4]);
  const handleMouseMove = (e) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const xpct = mouseX / width - 0.5;
    const ypct = mouseY / height - 0.5;
    x.set(xpct);
    y.set(ypct);
  };

  return (
    <>
      <div className=" h-screen  " onMouseMove={handleMouseMove}>
        {/*  div for large screens */}
        <div className="  w-fit  relative top-1/4 lg:left-[30%] left-[10%]  invisible md:visible  ">
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className={` w-fit text-white ring-slate-400 ring-2 rounded-xl p-5   `}
          >
            <span className="text-sm text-blue-600 font-extralight opacity-40   select-none">
              Hi it's
            </span>
            <h2 className="font-bold text-white mb-4  select-none text-4xl">
              Aman Negi
            </h2>
            <p className="  p-4  text-justify  font-mono ">
              {" "}
              As a passionate and dedicated full-stack developer,
              <br />I thrive on bringing ideas to life through clean, efficient,
              <br />
              and scalable code. I excel in building dynamic web <br />
              applications that are both user-friendly and highly performant.{" "}
              <br />
            </p>
          </motion.div>
        </div>
        {/* div for small Screens */}
        <div className="md:invisible visible absolute  top-1/4 left-1/4 w-2/3 -ml-5  ">
          <div
            className={`  text-white ring-slate-400 ring-2 rounded-xl p-5  overflow-hidden w-fit`}
          >
            <span className="text-sm text-blue-600 font-extralight opacity-40   select-none">
              Hi it's
            </span>
            <h2 className="text-lg font-bold text-white mb-4  select-none">
              Aman Negi
            </h2>
            <p className="  p-1  text-justify  select-none font-mono text-xs ">
              As a passionate and dedicated full-stack developer, I thrive on
              bringing ideas to life through clean, efficient, and scalable
              code. I excel in building dynamic web applications that are both
              user-friendly and highly performant.
            </p>
          </div>
        </div>
        <Character eye_x={eye_x} eye_y={eye_y} />
        <About />
      </div>
    </>
  );
}
