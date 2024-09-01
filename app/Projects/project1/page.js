import React from "react";
import Image from "next/image";
import { FaReact, FaArrowRight } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

const Project1 = () => {
  return (
    <div className="bg-white w-100svw h-full flex flex-col items-center p-4 text-black ">
      <a href="/" className="flex gap-1 hover:text-blue-900 ">
        <FaArrowRight className="absolute left-5 rotate-180 text-2xl text-blue-700" />{" "}
      </a>
      {/* Background icons */}
      <Image
        src="/auth.png"
        width={400}
        height={500}
        className="absolute w-fit h-1/2 left-0 top-[70%] lg:block hidden"
      />
      <Image
        src="/order.png"
        width={400}
        height={500}
        className="absolute h-1/2 right-0 w-fit top-[5%] lg:block hidden"
      />
      {/* Header */}
      <header className="flex flex-col sm:flex-row gap-4 sm:gap-10 text-blue-600 p-4">
        <a
          href="https://soblogs-p8qizzoaq-soamns-projects.vercel.app/posts/traderay"
          className="flex gap-1 hover:text-blue-900"
        >
          <FaArrowRight className="-rotate-45" /> Visit Blog
        </a>
        <a
          href="https://github.com/soamn/Traderay"
          className="flex gap-1 hover:text-blue-900"
        >
          <FaArrowRight className="-rotate-45" />
          Visit Source Code
        </a>
      </header>

      {/* Main content */}
      <div className="w-full sm:w-3/4 lg:w-1/2 bg-slate-50 shadow-xl shadow-slate-300 p-6 rounded-lg flex flex-col items-center gap-12 text-center">
        <h1 className="text-3xl md:text-4xl font-medium text-blue-300 p-4 rounded-3xl shadow-xl">
          TradeRay (An Overview)
        </h1>
        <h2 className="text-lg md:text-xl font-semibold">
          "Trade Your Opinions, Profit from Predictions."
        </h2>
        <Image
          src="/tradeicon.svg"
          width={500}
          height={500}
          className="w-24 h-24 md:w-48 md:h-48"
        />
        <p className="text-base md:text-lg">
          This project is inspired by the Probo app, which is a similar
          application. I was personally interested in learning the fast-working
          nature of orderbooks in exchange applications.
        </p>
        <p className="text-base md:text-lg">
          It also helped me learn concepts like{" "}
          <em>
            authorization, token-based authentication, saving user data,
            orderbook matching algorithms, creating admin panels, and simplistic
            user interfaces.
          </em>
        </p>
        <Image
          src="/eventDetail.png"
          width={900}
          height={500}
          className="w-full h-auto"
        />
        {/* Technologies */}
        <p className="text-lg font-bold">Languages and Technologies used:</p>
        <div className="flex flex-col gap-4 mt-5">
          <div className="flex justify-center items-center gap-4">
            <FaReact className="text-sky-500" /> React
          </div>
          <div className="flex justify-center items-center gap-4">
            <SiExpress /> Express
          </div>
          <div className="flex justify-center items-center gap-4">
            <SiMongodb className="text-green-500" /> MongoDB
          </div>
          <div className="flex justify-center items-center gap-4">
            <SiTailwindcss className="text-blue-400" /> TailwindCSS
          </div>
        </div>

        {/* Footer */}
        <footer className="flex flex-col sm:flex-row gap-4 sm:gap-10 text-blue-600 mt-10 mb-4">
          <a
            href="https://soblogs-p8qizzoaq-soamns-projects.vercel.app/posts/traderay"
            className="flex gap-1 hover:text-blue-900"
          >
            <FaArrowRight className="-rotate-45" /> Visit Blog
          </a>
          <a
            href="https://github.com/soamn/Traderay"
            className="flex gap-1 hover:text-blue-900"
          >
            <FaArrowRight className="-rotate-45" />
            Visit Source Code
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Project1;
