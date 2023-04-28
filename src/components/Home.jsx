import React from "react";
import LeftSideBar from "./Home/LeftSideBar";

import RightNav from "./Home/RightNav";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid grid-cols-12 gap-6 w-full container mx-auto">
      <LeftSideBar></LeftSideBar>
      <Outlet></Outlet>
      <RightNav></RightNav>
    </div>
  );
};

export default Home;
