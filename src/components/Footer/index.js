import React from "react";
import { FaInstagram, FaRegAddressBook, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { TiSocialFacebookCircular } from "react-icons/ti";
import QR from "../../images/qr.jpeg";

const SocialMediaInfo = ({ Icon, link, text }) => {
  return (
    <div className="flex items-center my-4">
      <Icon className="text-2xl mr-4" />
      <a href={link} target="_blank" className="text-wrap" rel="noreferrer">
        {text}
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-[#433d8b] text-white p-4">
      <div className="container mx-auto flex md:flex-row flex-col max-w-[1260px]">
        <div className=" md:w-[50%] flex sm:mt-14 mt-3 justify-center">
          <div className="my-auto">
            <h1 className="text-4xl font-extrabold mb-6">
              Contact Information
            </h1>
            <div className="flex items-center justify-center flex-col md:flex-row">
              <div className="w-auto">
                <span>Scan the QR to Register</span>
                <img
                  src={QR}
                  alt="QR code"
                  height={"200px"}
                  width={"200px"}
                  className="mt-4"
                />
              </div>
              <div className="ml-10 sm:text-xl text-xs w-full mt-5">
                <SocialMediaInfo
                  Icon={FaWhatsapp}
                  link="https://wa.me/qr/IZMSJTRBYY3HF1"
                  text="Join WhatsApp"
                />
                <SocialMediaInfo
                  Icon={TiSocialFacebookCircular}
                  link="https://www.facebook.com/profile.php?id=61561718680025&mibextid=ZbWKwL"
                  text="Facebook"
                />
                <SocialMediaInfo
                  Icon={MdOutlineEmail}
                  link="mailto:feynmaninstitute24@gmail.com"
                  text="feynmaninstitute24@gmail.com"
                />
                <SocialMediaInfo
                  Icon={FaInstagram}
                  link="https://www.instagram.com/feynmaninstitute2024"
                  text="Instagram/feynmaninstitute2024"
                />
                <SocialMediaInfo
                  Icon={MdOutlineLocalPhone}
                  link="tel:+919048752498"
                  text="+91-9048752498"
                />
                <SocialMediaInfo
                  Icon={FaRegAddressBook}
                  link=""
                  text="Address: Vidyaranyapura, Mysuru, Karnataka - 570008"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" md:w-[50%]">
          <div className="sm:p-14 p-2 flex align-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15593.801231350599!2d76.650802!3d12.2854325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf6fe46ab23ceb%3A0x61455e1a5cedfdf0!2sFeynman%20Institute%20of%20Physics!5e0!3m2!1sen!2sin!4v1720956012504!5m2!1sen!2sin"
              width={window.window < "600px" ? "300px" : "650px"}
              height="450"
              allowfullscreen=""
              loading="lazy"
              title="map"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
