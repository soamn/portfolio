"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useState, useEffect } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import Image from "next/image";
// import { ReactComponent as TradeRay } from "../../assets/Traderay.svg";
// import { ReactComponent as Appledd } from "../../assets/Apple-dd.svg";

function Projects() {
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
  return (
    <>
      <div className="w-full h-[100svh] overflow-hidden p-4  flex flex-col space-y-6 relative justify-center bg-gradient-to-r from-slate-800 to-slate-950  text-white">
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

          <div
            className="invisible  absolute self-center   lg:visible lg:relative
          "
          >
            <motion.div
              className=" rounded-md w-fit h-fit flex justify-around gap-10  "
              style={{ x: scroll_X }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className=" rounded-xl w-[94svw] h-[85svh]  sticky top-0 flex flex-col gap-3 select-none"
                whileHover={{ scale: 0.9, opacity: 0.9 }}
              >
                <a href="/Projects/project1" className="w-full h-full">
                  <Image
                    src="/traderay.png"
                    width={1000}
                    height={1000}
                    className="w-full object-contain h-full shadow-xl shadow-slate-900"
                  />
                </a>
                <p className="text-2xl self-center">Traderay</p>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className=" rounded-xl w-[94svw] h-[85svh]  sticky top-0 flex flex-col gap-3 select-none "
                whileHover={{ scale: 0.9, opacity: 0.9 }}
              >
                <a href="/Projects/project2" className="w-full h-full ">
                  <Image
                    src="/project2.png"
                    width={1000}
                    height={1000}
                    className="w-full object-contain h-full shadow-xl shadow-slate-900 "
                  />
                </a>
                <p className="text-2xl self-center">Apple Detect</p>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className=" rounded-xl w-[94svw] h-[85svh]  sticky top-0 flex flex-col gap-3 select-none "
                whileHover={{ scale: 0.9, opacity: 0.9 }}
              >
                <a href="/Projects/project3" className="w-full h-full ">
                  <Image
                    src="/project3.png"
                    width={1000}
                    height={1000}
                    className="w-full object-contain h-full shadow-xl shadow-slate-900 "
                  />
                </a>
                <p className="text-2xl self-center">
                  GierList - Livestreaming application
                </p>
              </motion.div>
            </motion.div>
          </div>
          {/* //small */}
          <div className="lg:hidden lg:absolute hover:opacity-90 self-center w-full    ">
            <ReactSimplyCarousel
              activeSlideIndex={activeSlideIndex}
              onRequestChange={setActiveSlideIndex}
              autoplay={true}
              autoplayDirection="forward"
              autoplayDelay={10000}
              itemsToShow={1}
              itemsToScroll={1}
              speed={300}
              easing="ease-in-out"
              forwardBtnProps={{
                style: {
                  position: "absolute",
                  top: "20%",
                  height: "60%",
                  width: "40%",
                  right: "1%",
                },

                children: (
                  <>
                    {gesture ? (
                      <span className="bg-black rounded-full  absolute  right-90 w-16 h-16   p-3 opacity-20 text-white text-3xl animate-ping"></span>
                    ) : (
                      <></>
                    )}
                  </>
                ),
              }}
              backwardBtnProps={{
                style: {
                  position: "absolute",
                  zIndex: "1",
                  top: "20%",
                  height: "60%",
                  width: "40%",
                  left: "1%",
                },

                children: (
                  <>
                    {gesture ? (
                      <span className="bg-black rounded-full  absolute  left-0    w-16 h-16   p-3 opacity-20 text-white text-3xl animate-ping "></span>
                    ) : (
                      <></>
                    )}
                  </>
                ),
              }}
            >
              <div className="w-[370px]   h-[541px] overflow-hidden  rounded-lg md:w-[700px] ">
                <a href="/Projects/project1" className="w-full h-full">
                  <Image
                    src="/traderay.png"
                    width={900}
                    height={500}
                    className="w-full h-full rounded-lg object-contain"
                  />
                </a>
              </div>
              <div className="w-[370px] h-[541px] overflow-hidden rounded-lg  md:w-[700px]">
                <a href="/Projects/project2" className="w-full h-full">
                  <Image
                    src="/project2.png"
                    width={900}
                    height={500}
                    className="w-full rounded-lg object relative top-[30%]"
                  />
                </a>
              </div>
              <div className="w-[370px] h-[541px] overflow-hidden rounded-lg  md:w-[700px]">
                <a href="/Projects/project2" className="w-full h-full">
                  <Image
                    src="/project3.png"
                    width={900}
                    height={1000}
                    className="w-full top-[30%] relative rounded-lg"
                  />
                </a>
              </div>
            </ReactSimplyCarousel>
          </div>
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
