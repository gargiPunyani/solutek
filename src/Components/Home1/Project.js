import React from "react";
import Slick from "../Slider/Slick";
import "../../Css/Project.css";
import { Link } from "react-router-dom";
// import Slick2 from "../Slider/Slick2";

const Project = () => {
  return (
    <div className="projects">
      <div className="container">
      <div className="row">
      <div className="col-md-6">
      <div className="GoldVision recentUpdates">
        <h6>GOLD VISION COMPANY</h6>
      </div>
      <div className="recentProjects">
        <h2>
          Explore Our Recent
          <span> Projects.</span>
        </h2>
      </div>
      </div>
      <div className="col-md-6">
        <button className="projectDetailBtn">
          <Link to={"/project"} className="Link">
          View Project
          </Link>
          </button>
      </div>
      </div>
      </div>
      <div className="slickData">
        <div className="conatiner">
        <Slick />
        </div>
      </div>
      
    </div>
  );
};

export default Project;
