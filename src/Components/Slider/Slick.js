import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../Css/Slick.css";
const Slick = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="container-fluid container slide mb-5">
      <div className="slider-container ">
        <Slider {...settings}>
          <div>
            <img
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722324581/project1_zp5lt5.png"
              alt=""
            />
            <div className="slikee">
              <h3>Project For Marketing</h3>
              <p>SOFTWARE</p>
            </div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722324581/project2_g5clh1.png"
              alt=""
            />
            <div className="slikee">
              <h3>Digital Product Design</h3>
              <p>SOFTWARE</p>
            </div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722324581/project3_qbegeo.png"
              alt=""
            />
            <div className="slikee">
              <h3>Software Development</h3>
              <p>SOFTWARE</p>
            </div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722324581/project1_zp5lt5.png"
              alt=""
            />
            <div className="slikee">
              <h3>Project For Marketing</h3>
              <p>SOFTWARE</p>
            </div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722324581/project5_bdjgqn.png"
              alt=""
            />
            <div className="slikee">
              <h3>CMC Software Solution</h3>
              <p>SOFTWARE</p>
            </div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722324581/project4_ph3n6e.png"
              alt=""
            />
            <div className="slikee">
              <h3>App Development</h3>
              <p>SOFTWARE</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Slick;
