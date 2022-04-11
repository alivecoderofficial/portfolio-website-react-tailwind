import { react, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navigation from "./Navigation";
import Social from "./Social";
import Work from "./Work";
import Footer from "./Footer";

import { FaLightbulb, FaMoon } from "react-icons/fa";

const Main = () => {
  const [ModeLight, setModeLight] = useState(true);

  let icon = ModeLight ? "BsMoonStarsFill" : "FaLightbulb";

  const ModeHandle = () => {
    setModeLight(!ModeLight);
  };

  return (
    <div className={ModeLight ? "light" : "dark"}>
      <div
        className="fixed top-5 sm:right-6 right-3 text-2xl sm:text-3xl cursor-pointer"
        onClick={ModeHandle}
      >
        <div className="dark:text-slate-100 text-slate-900">
          <FaMoon className={ModeLight ? "block" : "hidden"} />
          <FaLightbulb className={ModeLight ? "hidden" : "block"} />
        </div>
      </div>
      <Navigation />
      <Social />
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
