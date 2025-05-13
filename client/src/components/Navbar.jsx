import React from "react";
import { Link, Links } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
      <nav>
        <h1 className="flex justify-center  bg-amber-500 p-2">Welcome to Go Places.com</h1>
        <div  className="flex gap-4 justify-between flex-wrap p-4 shadow mb-1">
        <h1 className="text-5xl flex items-center gap-2">
  G <FaGlobe /> PLACES.
</h1>
          <div className="flex gap-5 items-center"><Link to="/">Home</Link>
          <Link to="/About">Destinations</Link>
          <Link to={"/about"}>About Us</Link>
          <Link to={"/about"}>Destinations</Link>
          <Link to={"/about"}>Tours</Link>
          <Link to="/contact">Contact Us</Link></div>
          <button className="flex items-center gap-2 bg-black rounded-xl text-white p-3 hover:bg-amber-500">
  <CiMail  size={18}/>
  Contact Us
</button>
          <button className="flex items-center gap-2 bg-black rounded-xl text-white p-3 hover:bg-amber-500"><FaRegUser size={18} />REGISTER</button>
        </div>
        
      </nav>
    </>
  );
};
export default Navbar;
