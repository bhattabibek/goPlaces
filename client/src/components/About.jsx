import React from "react";

const About = () => {
  return (
    <>
      <div className="flex bg-[#154c79] relative mb-6 h-100">
        <div>
          <h1 className="items-center text-center text-white font-montserrat">
            Welcome to GOPLACES.{" "}
          </h1>
          <p className="items-center text-white p-10 font-montserrat">
            Lorem ipsum Lorem ipsum dolor sit <br />
            amet.dolor sit amet, consectetur <br />
            adipisicing elit. Doloribus, culpa.
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing
            <br /> elit. Aliquid, dolor.
          </p>
          <button className="border px-4 mx-9 border-white py-2 rounded text-white">
            Explore More
          </button>
        </div>
        <div className="flex gap-6 absolute top-25 right-4">
          <img
            className="w-70 h-90 object-cover rounded-lg"
            src="/hiking.jpg"
          />
          <img className="w-70 h-90 object-cover rounded-lg " src="/para.jpg" />
          <img className="w-70 h-90 object-cover" src="/rafting.jpg" />
        </div>
      </div>
    </>
  );
};

export default About;
