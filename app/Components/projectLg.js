import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Projectlg = (props) => {
  return (
    <div>
      {" "}
      <div
        className="invisible  absolute self-center   lg:visible lg:relative
"
      >
        <motion.div
          className=" w-fit h-fit flex justify-around gap-10  "
          style={{ x: props.scroll_X }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" w-[94svw] h-[85svh]  sticky top-0 flex flex-col gap-3 select-none"
            whileHover={{ scale: 0.9, opacity: 0.9 }}
          >
            <a href="/Projects/project1" className="w-full h-full">
              <Image
                alt="image"
                src="/traderay.png"
                width={1000}
                height={1000}
                className="w-full object-contain h-full "
              />
            </a>
            <p className="text-2xl self-center">Traderay</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" w-[94svw] h-[85svh]  sticky top-0 flex flex-col gap-3 select-none "
            whileHover={{ scale: 0.9, opacity: 0.9 }}
          >
            <a href="/Projects/project2" className="w-full h-full ">
              <Image
                alt="image"
                src="/project2.png"
                width={1000}
                height={1000}
                className="w-full object-contain h-full "
              />
            </a>
            <p className="text-2xl self-center">Apple Detect</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" w-[94svw] h-[85svh]  sticky top-0 flex flex-col gap-3 select-none  "
            whileHover={{ scale: 0.9, opacity: 0.9 }}
          >
            <a href="/Projects/project3" className="w-full h-full  ">
              <Image
                alt="image"
                src="/project3.png"
                width={1000}
                height={1000}
                className=" w-full h-full object-contain  "
              />
            </a>
            <p className="text-2xl self-center">
              GierList - Livestreaming application
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projectlg;
