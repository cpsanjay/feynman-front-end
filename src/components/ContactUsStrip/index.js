import React from "react";
import { MdEmail } from "react-icons/md";

const ContactUsStrip = () => {
  return (
    <div className=" border-b border-t text-center font-semibold">
      <div className=" flex items-center justify-center">
        <MdEmail className="mr-4" />
        <a href="mailto:feynmaninstitute24@gmail.com">
          feynmaninstitute24@gmail.com
        </a>
      </div>
    </div>
  );
};

export default ContactUsStrip;
