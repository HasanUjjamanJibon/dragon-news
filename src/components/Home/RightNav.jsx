import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone1 from "../../assets/qZone1.png";
import QZone2 from "../../assets/qZone2.png";
import QZone3 from "../../assets/qZone3.png";
import bgOverlay from "../../assets/bg.png";

const RightNav = () => {
  return (
    <div className="w-full col-span-2">
      <div className="w-full">
        <span className="font-bold text-xl">Login With</span>
        <div className="full my-4 space-y-2">
          <button className="flex w-full justify-center items-center gap-2 border-2 text-primary border-primary  py-1 rounded-md">
            <BsGoogle /> <span>Login with Google</span>
          </button>
          <button className="flex w-full justify-center items-center gap-2 border-2 border-gray-600  py-1 rounded-md">
            <BsGithub /> <span>Login with Github</span>
          </button>
        </div>
      </div>
      <div className="w-full mt-8 mb-3">
        <span className="font-bold text-xl">Find Us On</span>
        <div className="w-full  my-4 space-y-2 border-2   border-gray-200 rounded-md">
          <button className="flex w-full justify-start items-center gap-2 border-b-2 ps-2 py-2 border-gray-200  ">
            <FaFacebookF className="text-cyan-700 bg-gray-200 rounded-full px-1 py-2 text-3xl" />
            <span>Facebook</span>
          </button>
          <button className="flex w-full justify-start items-center gap-2 py-2 ps-2 border-b-2  border-gray-200 ">
            <FaTwitter className="text-primary bg-gray-200 rounded-full px-1 py-2 text-3xl" />
            <span>Twitter</span>
          </button>
          <button className="flex w-full justify-start items-center gap-2 py-2 ps-2 ">
            <FaInstagram className="text-error bg-gray-200 rounded-full px-1 py-2 text-3xl" />
            <span>Instagram</span>
          </button>
        </div>
      </div>
      <div className="w-full mt-8 mb-3 bg-gray-200 py-4 px-3 space-y-8">
        <span className="font-bold text-xl">Q-Zone</span>
        <div className="space-y-6">
          <div className="w-full h-auto flex justify-center">
            <img src={QZone1} alt="" />
          </div>
          <div className="w-full h-auto flex justify-center">
            <img src={QZone2} alt="" />
          </div>
          <div className="w-full h-auto flex justify-center">
            <img src={QZone3} alt="" />
          </div>
        </div>
      </div>
      <div className="relative text-center ">
        <img src={bgOverlay} alt="" />
        <div className="absolute top-0 right-4 left-4 bottom-0 flex flex-col justify-center items-center ">
          <h1 className=" text-white text-3xl font-semibold text-center">
            Create an Amazing Newspaper
          </h1>
          <p className=" text-white  text-center my-5">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="btn bg-red-500 self-center">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
