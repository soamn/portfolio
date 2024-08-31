import Image from "next/image";
import React from "react";

import { FaArrowRight, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFlask, SiNumpy } from "react-icons/si";

const Project2 = () => {
  return (
    <div className="bg-white absolute w-100svh h-100svh flex flex-col items-center p-4 text-black">
      <a href="/" className="flex gap-1 hover:text-blue-900 ">
        <FaArrowRight className="absolute left-5 rotate-180 text-2xl text-blue-700" />{" "}
      </a>
      <header className=" flex gap-10 text-blue-600  p-4">
        <a href="/" className="flex gap-1 hover:text-blue-900 ">
          <FaArrowRight className="-rotate-45" /> vist blog
        </a>
        <a href="/" className="flex gap-1 hover:text-blue-900">
          <FaArrowRight className="-rotate-45" />
          visit source code
        </a>
      </header>
      <div className="w-full lg:w-1/2  h-fit bg-slate-50 shadow-xl shadow-slate-300 items-center p-2 flex flex-col gap-32 text-center ">
        <h1 className="text-4xl font-medium text-blue-800 p-4 rounded-3xl shadow-xl">
          GierList - Livestreaming App ( An overview)
        </h1>
        <h1 className="text-xl font-semibold">
          " Create and Discover Livestreams on this platform"
        </h1>
        <Image
          src="/gierlisticon.png"
          width={900}
          height={500}
          className="w-60  h-48 rounded-lg"
        />
        <p className="text-xl">
          Livestreaming Site Created using Node-media-server , ffmpeg using Hls
          and nextjs as frontend. Users can create accounts and the livestream
          using OBS .
        </p>
        <Image
          src="/p3img1.png"
          width={900}
          height={500}
          className="w-full rounded-lg"
        />
        <p className="text-xl">
          This project uses Node-media-server to create a Livestreaming server
          that recieves RTMP stream and then the stream is recieved in nextjs
          frontend , each livestream is unique and is created using a streamKey
          that is unique to each user.
        </p>
        <Image
          src="/p3img2.png"
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
          <div className="flex  justify-center items-center gap-4 mt-5 ">
            <FaNodeJs className="text-green-500" />
            NodeJs
          </div>
          <div className="flex  justify-center items-center gap-4 mt-5">
            <SiTailwindcss className="text-blue-400" />
            Tailwindcss
          </div>
        </div>
        <footer className=" flex gap-10 text-blue-600 mb-10 ">
          <a href="/" className="flex gap-1 hover:text-blue-900">
            <FaArrowRight className="-rotate-45" /> vist blog
          </a>
          <a href="/" className="flex gap-1 hover:text-blue-900">
            <FaArrowRight className="-rotate-45" />
            visit source code
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Project2;
