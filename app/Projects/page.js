"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useState, useEffect } from "react";
import Projectlg from "../Components/projectLg";
import ProjectSm from "../Components/projectSm";

function Projects(props) {
  const [mode, setMode] = useState("mygradient");
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [gesture, setGesture] = useState(true);
  const x = useMotionValue(0);
  const scroll_X = useTransform(x, [-0.45, 0], ["0svw", "-184svw"]);
  const handleMouseMove = (e) => {
    const width = window.innerWidth;
    const mouseX = e.clientX;
    const xpct = mouseX / width - 0.5;
    x.set(xpct);
  };
  useEffect(() => {
    setGesture(true);
  }, [30000]);
  useEffect(() => {
    setMode(localStorage.getItem("mode"));
  }, [mode]);
  return (
    <>
      <div
        className={` w-full h-[100svh] overflow-hidden p-4  flex flex-col space-y-6 relative justify-center bg-light ${
          props.mode ? `bg-${props.mode}` : `bg-${mode}`
        }  text-white`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={`select-none  ring-2 p-1  rounded-lg ring-slate-400 text-lg hover:cursor-pointer h-fit  w-fit self-center left-[45%] top-3 bg-white text-black z-10`}
        >
          Projects
        </motion.div>

        <div
          className="lg:w-full lg:p-4  w-full flex  self-center  ring-2  p-1  overflow-clip  ring-white h-2/3 rounded-lg  lg:h-[100svh]  "
          onMouseMove={handleMouseMove}
          onClick={() => {
            setGesture(false);
          }}
        >
          {/* //Large */}
          <Projectlg scroll_X={scroll_X} />
          {/* //small */}
          <ProjectSm
            setActiveSlideIndex={setActiveSlideIndex}
            activeSlideIndex={activeSlideIndex}
            gesture={gesture}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={`select-none  flex gap-3 text-lg hover:cursor-pointer h-fit  w-fit self-center z-10 lg:hidden `}
        >
          <span
            onClick={() => {
              setActiveSlideIndex(0);
            }}
            className={`${
              activeSlideIndex === 0 ? " bg-white text-black" : ""
            } rounded-lg ring-2 ring-slate-300 p-2 hover:[bg-white text-black]`}
          >
            <a href="/Projects/project1"> TradeRay</a>
          </span>
          <span
            onClick={() => {
              setActiveSlideIndex(1);
            }}
            className={`${
              activeSlideIndex === 1 ? " bg-white text-black" : ""
            } rounded-lg ring-2 ring-slate-300 p-2 hover:[bg-white text-black]`}
          >
            <a href="/Projects/project2">Apple Detect</a>
          </span>
          <span
            onClick={() => {
              setActiveSlideIndex(2);
            }}
            className={`${
              activeSlideIndex === 2 ? " bg-white text-black" : ""
            } rounded-lg ring-2 ring-slate-300 p-2  hover:[bg-white text-black]`}
          >
            <a href="/Projects/project3"> GierList</a>
          </span>
        </motion.div>
      </div>
    </>
  );
}

export default Projects;
