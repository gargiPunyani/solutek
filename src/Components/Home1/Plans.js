import React from "react";
import { PlanDetail } from "./PlanDetail";
import "../../Css/Plans.css"

const Plans = () => {
  return (
    <div className="bestPlans">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="solutekCompany businessplans ">
              <h6>START BUSINESS</h6>
            </div>
            <div className="plans">
              <h2>Choose Your Best Plan</h2>
            </div>
          </div>
          <div className="col-md-6 plans">
            <p>
              paradigms. Monotonectally extend open-source mvia competitive
              methods of empowerment dri revolutionize stand- business.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <PlanDetail price="₹500" plan="Standard Plan" />
          <PlanDetail price="₹1000" plan="Basic Plan" />
          <PlanDetail price="₹1500" plan="Begineer Plan" />
          <PlanDetail price="₹2000" plan="Premium Plan" />
        </div>
      </div>
    </div>
  );
};

export default Plans;
