import React from "react";
import "./Experience.css";

const Exp = (props) => {
  return (
    <section className="flex mt-[50px] justify-center items-center">
      <article className="flex w-full justify-between max-w-[1020px]">
        <div className="m-[10px] w-full m-w-[500px] rounded-[5px] border-[2px] border-solid border-[#2c2c2c7e]">
          <div className="experience-item">
            <div className="p-[20px] pt-[10px] pb-[10px] border-b-[2px] border-solid border-[#2c2c2c7e]">
              <p className="experience-item-p">
                Curso
                <br />
                Discover
              </p>
              <p className="text-[#2f89dd]">Rocketseat</p>
            </div>
            <ul className="m-w-[340px] list-none p-[20px] pt-[10px] pb-[10px]">
              <li className="text-[#808080] mb-[10px] list-inside text-[15px]">
                Front-End Specialized in
                <br />
                HTML, CSS, JavaScript & DOM
              </li>
              <li className=" text-[#808080] mb-[10px] list-inside text-[15px]">
                Development object oriented
              </li>
              <li className="text-[#808080] mb-[10px] list-inside text-[15px]">
                Data structure and management
              </li>
              <li className="text-[#808080] mb-[10px] list-inside text-[15px]">
                Back-End with JavaScript, NodeJS & SQL
              </li>
            </ul>
          </div>
        </div>
        <div className="m-[10px] w-full m-w-[500px] rounded-[5px] border-[2px] border-solid border-[#2c2c2c7e]">
          <div className="experience-item">
            <div className="p-[20px] pt-[10px] pb-[10px] border-b-[2px] border-solid border-[#2c2c2c7e]">
              <p className="experience-item-p">
                Modern Web Course
                <br />
                With JavaScript
              </p>
              <p className="text-[#2f89dd]">Cod3r</p>
            </div>
            <ul className="m-w-[340px] list-none p-[20px] pt-[10px] pb-[10px]">
              <li className="text-[#808080] mb-[10px] list-inside text-[15px]">
                HTML5 Module & CSS Module & JavaScript Module
              </li>
              <li className="text-[#808080] mb-[10px] list-inside text-[15px]">
                API Module NodeJS
              </li>
              <li className="text-[#808080] mb-[10px] list-inside text-[15px]">
                MongoDB & NodeJs & Typescript
              </li>
              <li className="text-[#808080] mb-[10px] list-inside text-[15px]">
                ReactJs & Reduce Module
              </li>
            </ul>
          </div>
        </div>
        <div className="m-[10px] w-full m-w-[500px] rounded-[5px] border-[2px] border-solid border-[#2c2c2c7e]">
          <div className="experience-item">
            <div className="p-[20px] pt-[10px] pb-[10px] border-b-[2px] border-solid border-[#2c2c2c7e]">
              <p className="experience-item-p">
                Curso
                <br />
                em Vídeo
              </p>
              <p className="text-[#2f89dd]">Gustavo Guanabara</p>
            </div>
            <ul className="m-w-[340px] list-none p-[20px] pt-[10px] pb-[10px]">
              <li className=" text-[#808080] mb-[10px] list-inside text-[15px]">
                JavaScript Course
              </li>
              <li className=" text-[#808080] mb-[10px] list-inside text-[15px]">
                First HTML5 & CSS3 Module
              </li>
              <li className=" text-[#808080] mb-[10px] list-inside text-[15px]">
                Second HTML5 & CSS3 Module
              </li>
              <li className=" text-[#808080] mb-[10px] list-inside text-[15px]">
                Third HTML5 & CSS3 Module
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Exp;
