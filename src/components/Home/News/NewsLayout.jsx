import React from "react";
import { Outlet } from "react-router-dom";
import RightNav from "../RightNav";
import Header from "../../Header";
import Footer from "../../Footer";

const NewsLayout = () => {
  return (
    <div className=" w-full container mx-auto">
      <Header></Header>
    
        <Outlet></Outlet>
  
      <Footer></Footer>
    </div>
  );
};

export default NewsLayout;
