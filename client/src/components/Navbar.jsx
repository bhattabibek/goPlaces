import React from "react";
import { Link, Links } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <h1>Welcome to GO Places.com</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/destination">Destinations</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
