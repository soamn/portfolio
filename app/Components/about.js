"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaReact, FaNodeJs, FaPython, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
export const About = () => {
  const [dialog, setDialog] = useState(0);
  return (
    <>
      <div
        className={`${
          dialog === 0 ? "invisible" : "visible"
        } bg-black w-screen h-screen absolute top-0 left-0 z-0 opacity-50 `}
        onClick={() => {
          setDialog(0);
        }}
      ></div>

      <div className="w-full  top-[5%]  flex  absolute justify-center gap-20  z-0">
        <div
          className={`${
            dialog === 2 ? "bg-white text-black " : ""
          } select-none  ring-2  p-1 rounded-lg ring-slate-100 text-lg hover:cursor-pointer `}
          onClick={() => setDialog(2)}
        >
          Education
        </div>

        <div
          className={` ${
            dialog === 1 ? "bg-white text-black" : ""
          } select-none  ring-2 p-1 rounded-lg ring-slate-100  text-lg hover:cursor-pointer`}
          onClick={() => setDialog(1)}
        >
          Skills
        </div>
      </div>
      <div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className={`${
            dialog === 0 ? "invisible " : ""
          }  absolute w-full bg-slate-50 p-10 rounded-lg h-[50%]  flex flex-col bottom-0    `}
        >
          <div
            onClick={() => {
              setDialog(0);
            }}
            className=" hover:bg-black hover:text-white absolute w-16 h-16 text-center p-4 text-xl right-6 top-1 select-none text-black font-medium rounded-full"
          >
            X
          </div>
          <div className="w-full   flex flex-col items-center overflow-scroll gap-5  mt-2 text-black text-center [scrollbar-width:none]">
            <h1 className=" font-bold text-xl  ">
              Languages Tools & Techonologies
            </h1>
            <div className="flex  gap-6 ">
              <span className="hover:text-green-400 font-medium">
                MongoDB
                <SiMongodb className=" p-2 rounded-xl w-12 h-12 " />
              </span>
              <span className="hover:text-slate-700  hover:rounded-full hover:shadow-xl  font-medium">
                Express
                <SiExpress className=" p-2 rounded-xl w-12 h-12 " />
              </span>
              <span className="hover:text-sky-500 font-medium">
                React
                <FaReact className=" p-2 rounded-xl w-12 h-12 " />
              </span>
              <span className="hover:text-green-400 font-medium">
                Node.js
                <FaNodeJs className="p-2 rounded-xl w-12 h-12  " />
              </span>
            </div>
            <div className="flex gap-6 text-black">
              <span className="hover:text-sky-500 font-medium">
                <RiTailwindCssFill className=" p-2 rounded-xl w-12 h-12 " />
                Tailwind
              </span>
              <span className="hover:text-blue-200 font-medium">
                <FaPython className=" p-2 rounded-xl w-12 h-12 " />
                Python
              </span>
              <span className="hover:text-orange-900  font-medium">
                <FaGithub className=" p-2 rounded-xl w-12 h-12 " />
                Github
              </span>
            </div>
            <div className="flex  gap-6 ">
              <span className="hover:text-yellow-200 font-medium ">
                Javascript
                <SiJavascript className=" p-2 rounded-xl w-12 h-12 " />
              </span>
              <span className="hover:text-black hover:rounded-full hover:shadow-xl font-medium ">
                Next
                <RiNextjsFill className=" p-2 rounded-xl w-12 h-12 " />
              </span>
              <span className="hover:text-blue-400 font-medium ">
                Typescript
                <SiTypescript className=" p-2 rounded-xl w-12 h-12 " />
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className={`${
            dialog === 2 ? "visible " : "invisible"
          }  absolute w-full bg-slate-100 p-10 rounded-lg h-[50%]  flex flex-col bottom-0  `}
        >
          <div
            onClick={() => {
              setDialog(0);
            }}
            className=" hover:bg-black hover:text-white absolute w-16 h-16 text-center p-4 text-xl right-6 top-1 select-none text-black font-medium rounded-full"
          >
            X
          </div>
          <div className=" h-full  flex flex-col gap-6 text-black overflow-scroll [scrollbar-width:none]">
            <h1 className="text-2xl  font-bold">Education</h1>
            <div>
              <h2 className="text-xl  font-bold">Graduation</h2>
              <h3 className="text-lg font-medium">
                H.P.U (HIMACHAL PRADESH UNIVERSITY , SHIMLA)
              </h3>
              <h3 className="text-lg font-medium mt-5">Course</h3>
              <p> Bachelor in Computer Applications</p>
              <h3 className="text-lg font-medium">Percentile </h3>
              <p>70%</p>
            </div>
            <div>
              <h2 className="text-xl  font-bold">Secondary Education</h2>
              <h3 className="text-lg font-medium">H.P.B.S.E</h3>
              <h3 className="text-lg font-medium mt-5">12th</h3>
              <h3 className="text-lg font-medium">Percentile </h3>
              <p>70%</p>
              <h3 className="text-lg font-medium mt-5">10th</h3>
              <h3 className="text-lg font-medium">Percentile </h3>
              <p>87%</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default About;
