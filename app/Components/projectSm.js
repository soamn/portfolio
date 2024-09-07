"use client";
import React from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import Image from "next/image";
const ProjectSm = (props) => {
  return (
    <div className="lg:hidden lg:absolute hover:opacity-90 self-center w-full    ">
      <ReactSimplyCarousel
        activeSlideIndex={props.activeSlideIndex}
        onRequestChange={props.setActiveSlideIndex}
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
              {props.gesture ? (
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
              {props.gesture ? (
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
              alt="image"
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
              alt="image"
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
              alt="image"
              src="/project3.png"
              width={900}
              height={1000}
              className="w-full top-[30%] relative rounded-lg"
            />
          </a>
        </div>
      </ReactSimplyCarousel>
    </div>
  );
};

export default ProjectSm;
