import React from "react";
import "../../Css/Professional.css";
import { ProfessinalDetails } from "./ProfessinalDetails";

const ProfessionalServices = () => {
  return (
    <div className="professionalItService">
      <div className="Itservice">
        <div className="solutekCompany success">
          <h6>SOLUTEK COMPANY</h6>
        </div>
        <div className="professionalServices">
            <h2>How Professional IT Services<br/>
            Can Drive  
            <span> Success.</span></h2>
        </div>
        <div className="container">
            <div className="row">
               <ProfessinalDetails
                    image="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722314578/service2_s2rh3i.png"
                    head="IT Management"
                    details="Marketing repurpose success in professions whereas in services sapien maximus design."
               />
                 <ProfessinalDetails
                    image="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722314578/service1_kuhkph.png"
                    head="Web Development"
                    details="Marketing repurpose success in professions whereas in services sapien maximus design."
               />
                 <ProfessinalDetails
                    image="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722314578/service3_nxujde.png"
                    head="Digital Marketing"
                    details="Marketing repurpose success in professions whereas in services sapien maximus design."
               />
                 <ProfessinalDetails
                    image="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722314578/service4_zppd2m.png"
                    head="App Development"
                    details="Marketing repurpose success in professions whereas in services sapien maximus design."
               />
            </div>
        
        </div>

      </div>
    </div>
  );
};

export default ProfessionalServices;
