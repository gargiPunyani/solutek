import React from "react";
import "../../Css/Services.css";
import Feature from "./Feature";
import EssentialSolution from "./EssentialSolution";
import ProfessionalServices from "./ProfessionalServices";
import Project from "./Project";
import Plans from "./Plans";
import Guide from "./Guide";
import Testimonials from "../Testimonials";
import Contact from "./Contact";
import Blog from "./Blog";
import Footer from "../Footer";

const ItService = () => {
  return (
    <div className="container-fluid services">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="serviceProvided">
              <div className="servicesAvailable">
                <h5>SOLUTEK IT SERVICES</h5>
                <div className="itServicesHeader">
                  <h1>
                    The Beauty Behind
                    <br />
                    IT Services.
                  </h1>
                  <p>
                    Where your interests international networks intersect provid
                    custom software solutions for any value software.
                  </p>
                </div>
                <div className="exploreMoreBtn">
                  <button className="exploreMore">Explore More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="itSevicesImage">
              <img
                src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722230848/soluhome1_aub2o8.png"
                alt=""
              />
            </div>
          </div>
        
    
      <div className=" feauterss">
        <div>
          <Feature
            image="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722247352/feature1_axwdky.png"
            heading="Data Security"
          />
        </div>

        <div>
          <Feature
            image="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722247378/feature2_hualex.png"
            heading="Digital Marketing"
          />{" "}
        </div>

        <div>
          <Feature
            image="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722247698/feature3_honqiy.png"
            heading="Data Security"
          />{" "}
        </div>

        <div>
          <Feature
            image="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722247699/feature4_obcp7z.png"
            heading="Data Security"
          />{" "}
        </div>

        <div>
          <Feature
            image="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722247699/feature5_xvrpcq.png"
            heading="Data Security"
          />
        </div>
      </div>
    </div>
    </div>
    <EssentialSolution/>
    <ProfessionalServices/>
    <Project/>
    <Plans/>
    <Guide/>
    <Testimonials/>
    <Contact/>
    <Blog/>
    <Footer/>
    </div>
  );
};

export default ItService;
