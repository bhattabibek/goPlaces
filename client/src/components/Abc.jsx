import React from "react";
import { CiTimer } from "react-icons/ci";
import { FaHiking } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const Abc = () => {
  return (
    <>
      <div>
        <img className="w-full h-74 object-cover" src="/abc.jpg" alt="" />
      </div>
      <div className="bg-[#f7f8fa]">
        <h1 className="text-center">Annapurna Base Camp</h1>
        <div className="flex flex-col xl:flex-row xl:justify-evenly">
        <div className="flex ">
          <div>
            <h1>
              <CiTimer />
              Duration 10 Days
            </h1>
            <h1>
              <FaHiking />
              Difficulty Moderate
            </h1>
            <h1>
              <CiLocationArrow1 />
              Start
            </h1>
            <h1>
              <IoLocationOutline />
              End
            </h1>
            <h1>Price 13755</h1>
          </div>
      
          
         
        </div>
        <div className="flex flex-row">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.317149369585!2d85.28484712552132!3d27.7089542267553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1747206178551!5m2!1sen!2snp"
      className="w-180 h-80"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Kathmandu Map"
      ></iframe>
        </div>
        </div>
      </div>
    </>
  );
};

export default Abc;
