import React from "react";

const About = (props) => {
  return (
    <section className="about flex justify-center items-center mt-[50px]">
      <article className="about-container flex max-w-[1200px] justify-between	">
        <div className="about-box flex justify-center items-center flex-col w-[400px]">
          <div className="about-box-content flex flex-col">
            <p className="about-p-p text-[2.5rem] text-end text-[#2f89dd]">
              Main
            </p>
            <p className="about-p text-[3rem] text-[#ffffffff] text-end leading-[40px]">
              SKILLS
              <span className="about-p-p text-[2.7rem] text-[#2f89dd]  text-end">
                &
              </span>
              <br />
              KNOWLEDGE
            </p>
          </div>
        </div>
        <div
          className="about-box flex justify-center items-center 
        w-[400px] flex-col"
        >
          <div className="about-box-content flex flex-col">
            <img
              className="about-box-img flex justify-center w-[300px] p-[50px] pt-[0px] pb-[0px] m-[20px] mt-[10px] mb-[20px] items-center rounded-[50%]"
              src="./about.png"
              alt="About"
            />
          </div>
        </div>
        <div
          className="about-box flex justify-center items-center 
        w-[400px] flex-col"
        >
          <div className="about-box-content flex flex-col">
            <div className="about-item mb-[20px]">
              <h3 className="about-item-h3 text-[#2f89dd] text-[1.5rem]">
                Have experience with
              </h3>
              <p className="about-item-p text-[1.2rem] text-[#808080]">
                JS|React|Typescript|
                <br />
                MongoDB|NodeJS|GIT
              </p>
              <br />
            </div>
            <div className="about-item mb-[20px]">
              <h3 className="about-item-h3 text-[#2f89dd] text-[1.5rem]">
                Have Interest in
              </h3>
              <p className="about-item-p text-[1.2rem] text-[#808080]">
                Typescript|Ruby|
                <br />
                React Native|MySql
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
