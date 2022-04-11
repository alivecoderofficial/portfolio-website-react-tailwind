import React from "react";

const Footer = () => {
  let date = new Date();
  let copyrightDate = date.getFullYear();
  return (
    <div className="bg-pink-100 dark:bg-slate-900 dark:text-white p-4 font-myfont">
      <p className="text-base text-center">
        Copyright &copy; {copyrightDate} Steve Smith | All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
