import React from "react";
import { FaAngleDown, FaArrowRight } from "react-icons/fa6";
import "../Css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img
          className="logoImage"
          src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1727262458/WhatsApp_Image_2024-09-25_at_16.34.25_a870efb2_yzhj1c.jpg"
          alt="logo"
        />
        <nav className="nav-head">
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="link" to="/project">
                Projects
              </Link>
            </li>
            <li>
              <Link className="link" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
            <li></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
