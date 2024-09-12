import React, { useState } from "react";
import "../../Css/Guide.css";
import GuideDetails from "./GuideDetails";
const Guide = () => {
  const [accordionData, setAccordionData] = useState({
    one: false,
    two: false,
    three: false,
  });

  const handleOpen = (id) => {
    console.log(id);
    if(id === 1) {
      setAccordionData({...accordionData, one: !accordionData.one, two: false, three: false})
    }
    if(id === 2) {
      setAccordionData({...accordionData, two: !accordionData.two, one: false, three: false})
    }
    if(id === 3) {
      setAccordionData({...accordionData, three: !accordionData.three, one:false, two: false})
    }
  };
  return (
    <div className="conatiner">
      <div className="row">
        <div className="col-md-6 ">
          <div className="updates">
            <div className="business">
              <h1>Keeping Your Business</h1>
              <h1>
                Safe and
                <span> Available. </span>
              </h1>
            </div>
            <div className="faqImage">
              <img
                src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722342078/faq1_i01835.png"
                alt="faq"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 faq">
          <div className="frequentlyAsk">
            <h2>
              A Comprehensive
              <span> Guide.</span>
            </h2>
            <p>
              Alternative innovation network environmental whiteboard pursue for
              premier methods empowerment go forward opportunities
            </p>
          </div>
          <GuideDetails
            open={accordionData.one}
            question="What Medical Services Do You Provide?"
            answer="Appropriately promote enterprise-wide vortals throuh innovative information evolve go forward markets whereas synergistic applications power full sound quality vectors without equity invested best practices revolutionize enterprise-wide vortals through innovative."
            id={1}
            handleClick={handleOpen}
          />
          <GuideDetails
            open={accordionData.two}
            question="What is your customer geography?"
            answer="Appropriately promote enterprise-wide vortals throuh innovative information evolve go forward markets whereas synergistic applications power full sound quality vectors without equity invested best practices revolutionize enterprise-wide vortals through innovative."
            id={2}
            handleClick={handleOpen}
          />

          <GuideDetails
            open={accordionData.three}
            question="What are the main industries we serve?"
            answer="Appropriately promote enterprise-wide vortals throuh innovative information evolve go forward markets whereas synergistic applications power full sound quality vectors without equity invested best practices revolutionize enterprise-wide vortals through innovative"
            id={3}
            handleClick={handleOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Guide;
