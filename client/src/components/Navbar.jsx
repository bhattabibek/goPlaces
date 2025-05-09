import React from "react";
import { Link, Links } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <>
      <nav>
        <h1 className="flex justify-center  bg-amber-500 p-2">Welcome to GO Places.com</h1>
        <div  className="flex gap-4 justify-between flex-wrap p-4 shadow mb-1">
        <h1 className="text-5xl">GOPLACES.</h1>
          <div className="flex gap-4 justify-center"><Link to="/"><IoHomeOutline />Home</Link>
          <Link to="/About">Destinations</Link>
          <Link to={"/about"}>About Us</Link>
          <Link to="/contact">Contact Us</Link></div>
          <button className="bg-black rounded-1xl text-white p-3 hover:bg-amber-500">Contact Us</button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
