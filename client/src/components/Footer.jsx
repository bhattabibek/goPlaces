import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-6 p-4 text-white  bg-[#154c79]">
        <div>
          <h2 className="font-bold">GoPlaces.</h2>
          <p>
            Go places is a Nepal Based Travel and Tour Agencies that Helps
            Adventure and thrill Seeking Individuals the best Tour Packages at a
            cost Effective Rate
          </p>
        </div>
        <div>
          <h3 className="font-bold">QUICK LINKS</h3>
          <ul>
            <li>
              <IoHomeOutline className="text-red-500 text-3xl" /> Home
            </li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold">Contact Us</h2>
          <ul>
            <li>Phone Number: +977 987654321</li>
            <li>Address: Kathmandu,Nepal</li>
            <li>Email:gopalces@gmail.com</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Social Media</h3>
          <ul>
            <li> Facebook</li>
            <li>Address: Kathmandu,Nepal</li>
            <li>Email:gopalces@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-bold bg-amber-600 p-4">
          Copytight 2025. All Rights Reserved
        </div>
        <div>
          <CiFacebook /> <FaInstagram /> <CiLinkedin />
        </div>
      </div>
    </>
  );
};

export default Footer;
