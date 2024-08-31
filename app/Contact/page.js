"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
function Contact() {
  return (
    <>
      <motion.div className=" w-full h-screen p-5 flex overflow-hidden  justify-center flex-col items-center text-white  relative bg-gradient-to-r from-slate-800 to-slate-950 z-30  ">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className=" text-4xl font-bold p-4"
        >
          Reach Out
        </motion.h1>
        <div className="w-full ring-2 p-5  ring-white h-full  rounded-xl overflow-scroll flex  flex-col items-center justify-evenly gap-2 lg:flex-row [scrollbar-width:none]">
          <div className="invisible absolute  lg:visible lg:relative">
            <motion.div
              initial={{ scale: 1.1 }}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.2, type: "spring" }}
              whileTap={{ scale: 0.9 }}
              viewport={{ once: true }}
              className="w-[2px] bg-white  rounded-sm  self-center "
            >
              <div className="bg-white rounded-full w-2 h-2 -ml-1 -mt-1  animate-ping"></div>

              <motion.div className="text-sm font-bold  mb-4  select-none flex w-fit items-center ">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-[0.5px] w-10 bg-white mt-3"
                ></motion.div>
                <h1 className="ring-1 ring-white rounded-xl p-2 text-2xl">
                  Contact
                </h1>
              </motion.div>

              <motion.div
                className="text-xl   mb-4  select-none flex w-fit items-center   "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <div className="h-2 w-2 rounded-full bg-white mt-2 ml-6 "></div>
                <h1 className=" p-2 w-fit">
                  mail me{" "}
                  <a
                    className="text-blue-500 underline"
                    href="mailto:negiaman604@gmail.com"
                  >
                    @negiaman604
                  </a>
                </h1>
              </motion.div>

              <motion.div
                className="text-2xl select-text text-white mb-4   flex w-fit items-center  "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <div className="h-2 w-2 rounded-full bg-white mt-2 ml-6 "></div>
                <h1 className=" p-2 w-96  flex gap-2">+91 8627801947</h1>
              </motion.div>
              <motion.div
                className="text-2xl  text-white mb-4  select-none flex w-fit items-center  "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <div className="h-2 w-2 rounded-full bg-white mt-2 ml-6 "></div>
                <h1 className=" p-2 w-96  flex gap-2">
                  Location <FaLocationDot /> India
                </h1>
              </motion.div>
            </motion.div>
          </div>

          <div className="flex flex-col items-center lg:hidden">
            <div className="text-sm font-bold  mb-4  select-none flex w-fit items-center ">
              <h1 className="ring-1 ring-white rounded-xl p-2">Contact</h1>
            </div>
            <div className="flex flex-row items-baseline">
              <div className="h-2 w-2 rounded-full bg-white mt-2 ml-6 "></div>
              <h1 className=" p-2 w-fit">
                mail me{" "}
                <a
                  className="text-blue-500 underline"
                  href="mailto:negiaman604@gmail.com"
                >
                  @negiaman604
                </a>
              </h1>
            </div>
            <div className="flex flex-row items-baseline">
              <div className="h-2 w-2 rounded-full bg-white mt-2  "></div>
              <h1 className=" p-2   flex gap-2">+91 8627801947</h1>
            </div>
            <div className="flex flex-row items-baseline">
              <div className="h-2 w-2 rounded-full bg-white mt-2  "></div>
              <h1 className=" p-2   flex gap-2">
                Location <FaLocationDot /> India
              </h1>
            </div>
          </div>
          <div className="text-white  flex gap-8 ">
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              dragElastic={1}
              href="https://www.linkedin.com/in/soamn/"
            >
              <FaLinkedin
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
              Linkedin
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.1 }}
              href="https://github.com/soamn"
              className="link"
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              dragElastic={1}
            >
              <FaGithub
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
              Github
            </motion.a>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.1 }}
              href="https://x.com/soamn_"
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              dragElastic={1}
            >
              <FaTwitter
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
              Twitter
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Contact;
