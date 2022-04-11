import React from "react";
import profile from "../assets/profile.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="bg-pink-100 dark:bg-slate-900 dark:text-white h-screen w-full flex-col flex items-center font-myfont"
    >
      <div className="w-2/3 mx-auto h-full flex flex-col justify-center items-center sm:flex-row">
        <div className="sm:flex gap-4 items-center">
          <div className="h-48 w-48 sm:h-60 sm:w-60">
            <img
              src={profile}
              alt=""
              className="w-full object-cover h-full shadow-md shadow-pink-700 rounded-lg"
            />
          </div>
          <div className="mt-2">
            <p className="text-pink-700 text-xl sm:text-2xl mb-1">My Name is</p>
            <h1 className="sm:text-6xl text-3xl mb-1 font-bold">Steve Smith</h1>
            <p className="text-xl sm:text-4xl mb-1">I'm a Flutter Developer</p>
            <Link to="work" smooth={true} duration={500}>
              <button className="py-2 px-3 border-2 border-pink-700 bg-pink-700 rounded-lg text-white font-bold uppercase hover:bg-transparent hover:text-pink-700 duration-300">
                My Works
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
