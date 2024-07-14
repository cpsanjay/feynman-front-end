import React from "react";

const MovingText = ({ children }) => (
  <div className="overflow-hidden whitespace-nowrap w-full">
    <div className="moving-text inline-block">{children}</div>
  </div>
);

const ContactUsStrip = () => {
  return (
    <div className=" border-b border-t text-center font-semibold text-sm sm:text-lg bg-blue-400 text-white">
      <MovingText>
        <div className=" flex items-center justify-center">
          Registrations open for January - June Batch{" "}
          <a
            href="https://bit.ly/FIP_Registration_form"
            className="ml-2 text-black"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Register Now
          </a>
          . <span className="ml-2">July to December </span>
          <a
            href="https://bit.ly/FIP_Registration_form"
            className="ml-2 text-black"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Register Now
          </a>
          .
          {/* <MdEmail className="mr-4" />
        <a href="mailto:feynmaninstitute24@gmail.com">
          feynmaninstitute24@gmail.com
        </a> */}
        </div>
      </MovingText>
    </div>
  );
};

export default ContactUsStrip;
