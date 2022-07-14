import React from "react";
import "./Hero.css";

const Hero = (props) => {
  return (
    <section className="hero flex p-[5px] justify-center items-center">
      <article className="hero-container max-w-[1020px]">
        <div className="hero-box text-center p-[5px] pt-0 pb-0">
          <p className="hero-p-hello mt-[20px] text-[14px] text-[#4bbbd1]">
            Hello World
          </p>
        </div>
        <div className="hero-box text-center p-[5px] pt-0 pb-0">
          <p className="hero-p-name text-[4rem] font-[700]">Pedro Lucas</p>
        </div>
        <div className="hero-box text-center p-[5px] pt-0 pb-0">
          <p className="hero-p-comp mt-[20px] text-[#2f89dd] text-[1.3rem]">
            Fullstack Developer
          </p>
        </div>
        <div className="hero-box text-center p-[5px] pt-0 pb-0">
          <p className="hero-p-res mt-[20px] text-center text-[#808080]">
            Technology enthusiast and passionate about solving problems.
            Currently specializing in fullstack development.
          </p>
        </div>
        <div className="hero-box-arrow">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="white"
            fill="white"
          >
            <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"></path>
          </svg>
        </div>
      </article>
    </section>
  );
};
export default Hero;
