import React, { useState } from "react";
import Logo from "../../images/LOGO.png";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 50; // Offset in pixels
    const headerHeight = 60; // Assuming the header height is 60px
    const elementPosition = element.getBoundingClientRect().top; // Position relative to the viewport
    const offsetPosition =
      elementPosition + window.scrollY - offset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <header className=" bg-white lg:pb-0 fixed w-full top-0 z-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <div
              onClick={() => scrollToSection("header-div")}
              title=""
              className="flex"
            >
              <img className="w-auto h-8 lg:h-10" src={Logo} alt="Logo" />
            </div>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={() => setOpenNav(!openNav)}
          >
            <svg
              className={`${openNav ? "hidden" : "block"} w-6 h-61`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8h16M4 16h16"
              />
            </svg>

            <svg
              className={`${openNav ? "block" : "hidden"} w-6 h-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <div
              onClick={() => scrollToSection("our-aim")}
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 cursor-pointer"
            >
              {" "}
              Aim{" "}
            </div>

            <div
              onClick={() => scrollToSection("info-card-section")}
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 cursor-pointer"
            >
              {" "}
              Info{" "}
            </div>

            <div
              onClick={() => scrollToSection("training-program")}
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 cursor-pointer"
            >
              {" "}
              Training Programs{" "}
            </div>
            <div
              onClick={() => scrollToSection("contact-us")}
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 cursor-pointer"
            >
              {" "}
              Contact Us{" "}
            </div>
          </div>
        </nav>

        <nav
          className={`pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden ${
            openNav ? "" : "hidden"
          }`}
        >
          <div className="flow-root">
            <div className="flex flex-col px-6 -my-2 space-y-1">
              <div
                onClick={() => {
                  scrollToSection("our-aim");
                  setOpenNav(false);
                }}
                title=""
                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Aim{" "}
              </div>

              <div
                onClick={() => {
                  scrollToSection("info-card-section");
                  setOpenNav(false);
                }}
                title=""
                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Info{" "}
              </div>

              <div
                onClick={() => {
                  scrollToSection("training-program");
                  setOpenNav(false);
                }}
                title=""
                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Training Programs{" "}
              </div>
              <div
                onClick={() => {
                  scrollToSection("contact-us");
                  setOpenNav(false);
                }}
                title=""
                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Contact Us{" "}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
