import React from "react";
import { FaAngleDown, FaArrowRight } from "react-icons/fa6";
import "../Css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img
          src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722416964/footer-logo_hhrexq.png"
          alt=""
        />
        <nav className="nav-head">
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              Company <FaAngleDown className="angleDownIcon" />
              <ul className="dropdown">
                <li>
                  <Link className="dropdownLink" to="/about">
                    About Us{" "}
                  </Link>
                </li>
                <li>
                  <Link className="dropdownLink" to="/team">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link className="dropdownLink" to="/teamDetails">
                    Team Details
                  </Link>
                </li>
                <li>
                <Link className="dropdownLink" to="/project">
                  Project
                  </Link>
                  </li>
                <li><Link className="dropdownLink" to="/pricing">
                  Pricing
                  </Link>
                  </li>
                <li>
                  <Link className="dropdownLink" to="/contact">Contact
                  </Link>
                  </li>
              </ul>
            </li>
            <li>
            <Link className="link" to="/portfolio">
            Portfolio
            </Link></li>
            <li>
            <Link className="link" to="/services">
            Services
            </Link></li>
            <li>
            <Link className="link" to="/blogs">
              Blog
              </Link></li>
            <li>
           <Link className="link" to="/contact">
              Contact
              </Link></li>
          </ul>
        </nav>
        <div className="quote">
          <p><Link className="link" to="/contact">
            GET A QUOTE NOW <FaArrowRight className="arrowRightIcon" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
