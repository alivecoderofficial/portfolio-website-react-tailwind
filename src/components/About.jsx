import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="bg-pink-100 dark:bg-slate-900 dark:text-white h-screen w-full flex-col flex items-center font-myfont"
    >
      <div className="w-2/3 mx-auto h-full flex flex-col justify-center">
        <div className="md:text-center font-bold">
          <h1 className="sm:text-6xl text-3xl border-b-4 border-pink-700 inline">
            About Me
          </h1>
        </div>
        <div className="grid md:grid-cols-2 md:gap-8 mt-5 md:mt-8">
          <div className="md:text-4xl text-3xl font-bold md:text-right">
            <p>Hi, I'm Steve, nice to meet you. Please take a look around.</p>
          </div>
          <div className="text-base md:text-xl mt-4 md:mt-0">
            <p className="md:text-left">
              I am passionate about building excellent mobile applications that
              improves the lives of those around me. I specialize in creating
              application for clients ranging from individuals and
              small-businesses all the way to large enterprise corporations.
              What would you do if you had a app developer available at your
              fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
