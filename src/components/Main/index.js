import React from "react";
import FeynmanMainImg from "../../images/Artboard1.png";
import FeynmanMainImgMob from "../../images/Artboard2.png";

const Main = () => {
  return (
    <div className="w-screen">
      <div className="container mx-auto">
        <img
          src={FeynmanMainImg}
          className="mx-auto sm:block hidden"
          alt="Training Program Main"
        />
        <img
          src={FeynmanMainImgMob}
          className="mx-auto sm:hidden block"
          alt="Training Program Main"
        />
      </div>
    </div>
  );
};

export default Main;
