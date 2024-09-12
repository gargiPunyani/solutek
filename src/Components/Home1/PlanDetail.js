import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

export const PlanDetail = (props) => {
  return (
    <div className="col-md-3">
      <div className="pricingHead">
        <h2>{props.price}</h2>
        <h5>{props.plan}</h5>
      </div>
      <div className="pricingBody">
        <ul>
          <li>
            <FaCircleCheck className="checkIcon" />
            30 Days Trial Features
          </li>
          <li>
            <FaCircleCheck className="checkIcon" />
            Multi-Language Content
          </li>
          <li>
            <FaCircleCheck className="checkIcon" /> 
            Unlimited Features
          </li>
          <li>
            <FaCircleCheck className="checkIcon" />
            Data backup and recovery
          </li>
          <li>
            <FaCircleCheck className="checkIcon" />
            Synced To Cloud Database
          </li>
        </ul>
        <div className="plans">
        <button className="plan">Choose Plan</button>
        </div>
      </div>
      
 </div>
  );
};
