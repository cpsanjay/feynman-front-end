import React from "react";
import FeynmanMainImg from "../../images/Feynman-main.jpg";

const Main = () => {
  return (
    <div className="w-screen">
      <div className="container mx-auto">
        <img
          src={FeynmanMainImg}
          className="mx-auto"
          alt="Training Program Main"
        />
      </div>
    </div>
  );
};

export default Main;
