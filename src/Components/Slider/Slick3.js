import React from "react";
import { FaStar } from "react-icons/fa6";
import Slider from "react-slick";

const Slick3 = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1800,
    autoplaySpeed: 1800,
    cssEase: "linear",
  };
  return (
    <div className="container-fluid slide">
      <div className="slider-container ">
        <Slider {...settings}>
          <div className="slickHead">
            <img
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722403279/testi1_nglbnh.png"
              alt=""
            />
            <p>
              paradigms. Monotonectally extend open-source mvia competitive
              methods of empowerment dri revolutionize stand- business.
            </p>
            <hr />
            <div className="slickbody">
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />

              <p>Hosain Al-Amin
              <span> DEVELOPER</span>
              </p>
            </div>
          </div>
          <div className="slickHead">
            <img
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722403279/testi1_nglbnh.png"
              alt=""
            />
            <p>
              paradigms. Monotonectally extend open-source mvia competitive
              methods of empowerment dri revolutionize stand- business.
            </p>
            <hr />
            <div className="slickbody">
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />

              <p>Alberta
                 <span> DEVELOPER</span>
                 </p>
            </div>
          </div>
          <div className="slickHead">
            <img
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722403279/testi1_nglbnh.png"
              alt=""
            />
            <p>
              paradigms. Monotonectally extend open-source mvia competitive
              methods of empowerment dri revolutionize stand- business.
            </p>
            <hr />
            <div className="slickbody">
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />
              <FaStar className="starIcon" />

              <p>M.Kamrul Islam
              <span>DEVELOPER</span>
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Slick3;
