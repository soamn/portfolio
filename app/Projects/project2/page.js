import Image from "next/image";
import React from "react";

import { FaArrowRight, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFlask, SiNumpy } from "react-icons/si";

const Project2 = () => {
  return (
    <div className="bg-white absolute w-100svh h-100svh flex flex-col items-center p-4 text-black">
      <a href="/" className="flex gap-1 hover:text-red-900 ">
        <FaArrowRight className="absolute left-5 rotate-180 text-2xl text-red-700" />{" "}
      </a>
      <header className=" flex gap-10 text-red-600  p-4">
        <a
          href="https://soblogs-p8qizzoaq-soamns-projects.vercel.app/posts/apple-detect"
          className="flex gap-1 hover:text-red-900 "
        >
          <FaArrowRight className="-rotate-45" /> vist blog
        </a>
        <a
          href="https://github.com/soamn/Apple-detect"
          className="flex gap-1 hover:text-red-900"
        >
          <FaArrowRight className="-rotate-45" />
          visit source code
        </a>
      </header>
      <div className="w-full lg:w-1/2  h-fit bg-slate-50 shadow-xl shadow-slate-300 items-center p-2 flex flex-col gap-32 text-center ">
        <h1 className="text-4xl font-medium text-red-300 p-4 rounded-3xl shadow-xl">
          🍎 Apple Detect App ( An overview)
        </h1>
        <h1 className="text-xl font-semibold">
          "AppleDetect is your go-to tool for ensuring the best quality apples
          every time. "
        </h1>
        <h1 className="text-8xl">🍎</h1>
        <p className="text-xl">
          This project is made for solving a problem that is faced by Apple
          farmers to detect different types of apple disease or disorders like (
          scab, bitter-rot, brown-rot etc.), It also helps them in grade
          identifying the varieties of different apples like (red-delicious,
          golden-delicious,mc-intosh etc.)
        </p>
        <Image
          src="/p2img1.png"
          width={900}
          height={500}
          className="w-full rounded-lg"
        />
        <p className="text-xl">
          This image detection app was built using a custom YOLOv10 model
          created with Ultralytics in Python. The trained model was then
          integrated into a Flask application, leveraging cv2 and Ultralytics to
          enable seamless image detection directly in web browsers.
        </p>
        <Image
          src="/p2img2.jpg"
          width={800}
          height={500}
          className="rounded-lg"
        />
        <div className="text-xl font-bold ">
          Languages and Technologies used - <br />
          <div className="flex  justify-center items-center gap-4 mt-5">
            <SiNextdotjs />
            Nextjs
          </div>
          <div className="flex  justify-center items-center gap-4 mt-5">
            <FaPython />
            Python
          </div>
          <div className="flex  justify-center items-center gap-4 mt-5">
            <SiFlask />
            Flask
          </div>
          <div className="flex  justify-center items-center gap-4 mt-5">
            <SiNumpy />
            Numpy
          </div>
          <div className="flex  justify-center items-center gap-4 mt-5">
            <SiTailwindcss className="text-blue-400" />
            Tailwindcss
          </div>
        </div>
        <footer className=" flex gap-10 text-red-600 mb-10 ">
          <a
            href="https://soblogs-p8qizzoaq-soamns-projects.vercel.app/posts/apple-detect"
            className="flex gap-1 hover:text-red-900"
          >
            <FaArrowRight className="-rotate-45" /> vist blog
          </a>
          <a
            href="https://github.com/soamn/Apple-detect"
            className="flex gap-1 hover:text-red-900"
          >
            <FaArrowRight className="-rotate-45" />
            visit source code
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Project2;
