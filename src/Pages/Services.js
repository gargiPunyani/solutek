import React from "react";
import Navbar from "../Components/Navbar";
import { FaAngleLeft } from "react-icons/fa6";
import "../Css/ServicesProvided.css";
import ServicesProvidedDetail from "../Components/ServicesProvided/ServicesProvidedDetail";
import DedicatedTeam from "../Components/ServicesProvided/DedicatedTeam";
import Blog from "../Components/Home1/Blog"
import Footer from "../Components/Footer"

export const Services = () => {
  const servicesProvided = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1722667126/service-thumb1_nogs6v.png",
      service: "IT Management",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1722665455/service-thumb2_qgk72i.png",
      service: "Digital Marketing",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1722665455/service-thumb3_vvnd6q.png",
      service: "Web Development",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1722667127/service-thumb4_kcba0o.png",
      service: "App Development",
    },
  ];
  const teamMember = [
    {
      id: 5,
      image: "https://res.cloudinary.com/dixfg1bvv/image/upload/v1722671856/team-thu_hcedi7.png",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dixfg1bvv/image/upload/v1722671856/team-thu3_bydbe4.png",
    },
    { 
    id: 7, 
    image: "https://res.cloudinary.com/dixfg1bvv/image/upload/v1722671856/team-thu4_t5srjk.png" 
    },
    {
     id: 8, 
     image: "https://res.cloudinary.com/dixfg1bvv/image/upload/v1722671856/team-thu2_qkh1fi.png" 
    },
  ];
  return (
    <div>
      <Navbar />
      <div>
        <div className="aboutUs">
          <div>
            <div className="AboutUSHeader">
              <h1>Services</h1>
            </div>
            <div className="About team">
              <h6>
                Home <FaAngleLeft />
                <span> Services</span>{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="companyService">
        <div className="solutekCompany teamMembers ">
          <h6>SOLUTEK COMPANY</h6>
        </div>
        <div className="servicesHeader">
          <h1>How Professional IT Services</h1>
          <h1>
            {" "}
            Can Drive
            <span> Success. </span>
          </h1>
        </div>
       <div className="container-fluid">
          <div className="container">
            <div className="row">
              {servicesProvided.map((item, id) => {
                return (
                  <ServicesProvidedDetail
                    key={id}
                    image={item.image}
                    service={item.service}
                  />
                );
              })}
            </div>
          </div>
          </div>
          </div>
          <div className="solutekCompany teamMembers ">
            <h6>OUR TEAM MEMBERS</h6>
          </div>
          <div className="teamMembers">
            <h1>Dedicated Team Members</h1>
          </div>
          <div className=" container">
            <div className="row">
                {teamMember.map((item,id)=>{
                    return (
                        <DedicatedTeam
                        key={id}
                        image={item.image}/>
                    )
                })}
            </div>
          </div>
          <Blog/>
          <Footer/>
        </div>
  );
};
