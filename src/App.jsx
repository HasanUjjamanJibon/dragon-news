import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import TopNav from "./components/TopNav";

const App = () => {
  return (
    <div>
      <Header></Header>
      <TopNav></TopNav>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
};

export default App;
