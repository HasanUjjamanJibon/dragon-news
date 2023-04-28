import React from "react";
import logo from "../assets/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="container mx-auto py-10 text-center w-full space-y-3">
      <img src={logo} className="inline-block" alt="" />
      <p>Journalism Without Fear or Favour</p>
      <span className="inline-block">{moment().format("dddd, MMMM D YYYY")}</span>
      <div className="px-2 flex bg-gray-200 h-fit py-2">
        <span className="px-3 py-1 bg-red-500 mr-4  text-white">Notice</span>
        <Marquee className="px-4">
          I can be a React component, multiple React components, or just some
          text. I can be a React component, multiple React components, or just
          some text. I can be a React component, multiple React components, or
          just some text.
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
