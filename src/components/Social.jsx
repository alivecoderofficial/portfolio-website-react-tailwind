import React from "react";
import {
  FaHome,
  FaUser,
  FaRegEnvelope,
  FaAtom,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

const Social = () => {
  return (
    <div className="fixed top-[30%] sm:right-6 right-3">
      <ul className="flex flex-col gap-6">
        <li className="relative group text-2xl sm:text-3xl bg-[#3b5998] text-white p-2 rounded-full hover:scale-125 duration-300 cursor-pointer">
          <div className="hidden lg:block absolute right-14 bottom-1 group-hover:opacity-80 duration-300 opacity-0 py-2 px-3 bg-[#3b5998] rounded-full">
            <p className="text-base">Facebook</p>
          </div>
          <a href="https://www.facebook.com/monikauprety" target={"_blank"}>
            <FaFacebookF />
          </a>
        </li>
        <li className="relative group text-2xl sm:text-3xl bg-[#DD2A7B] text-white p-2 rounded-full hover:scale-125 duration-300 cursor-pointer">
          <div className="hidden lg:block absolute right-14 bottom-1 group-hover:opacity-80 duration-300 opacity-0 py-2 px-3 bg-[#DD2A7B] rounded-full">
            <p className="text-base">Instagram</p>
          </div>
          <a href="https://www.instagram.com/upretymonika/" target={"_blank"}>
            <FaInstagram />
          </a>
        </li>
        <li className="relative group text-2xl sm:text-3xl bg-[#C4302B] text-white p-2 rounded-full hover:scale-125 duration-300 cursor-pointer">
          <div className="hidden lg:block absolute right-14 bottom-1 group-hover:opacity-80 duration-300 opacity-0 py-2 px-3 bg-[#C4302B] rounded-full">
            <p className="text-base">Youtube</p>
          </div>
          <a
            href="https://www.youtube.com/channel/UCvhkYQ75NPIvaz04PDZ0CxA"
            target={"_blank"}
          >
            <FaYoutube />
          </a>
        </li>
        <li className="relative group text-2xl sm:text-3xl bg-[#171515] text-white p-2 rounded-full hover:scale-125 duration-300 cursor-pointer">
          <div className="hidden lg:block absolute right-14 bottom-1 group-hover:opacity-80 duration-300 opacity-0 py-2 px-3 bg-[#171515] rounded-full">
            <p className="text-base">Github</p>
          </div>
          <a href="https://github.com/monikauprety" target={"_blank"}>
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
