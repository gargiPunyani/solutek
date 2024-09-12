import React from "react";
import "../../Css/Contact.css";
const Contact = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className=" col-md-7 ">
            <div className="solutekCompany recentUpdates">
              <h6>CONTACT US</h6>
            </div>
            <div className="contactUs">
              <h1>
                Make an Online Appoinemnt Booking For
                <span> Business Planing. </span>
              </h1>
            </div>
            <div className="">
              <form>
                <div className="row contactform">
                  <div className="col-md-6">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" placeholder="E-mail" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="Subject" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="Contact" />
                  </div>

                  <div className="contactMessage">
                    <input type="text" placeholder="Message" />
                  </div>
                </div>
                <div className="exploreMoreBtn">
                  <button className="submitBtn" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-5 contactImage">
            <img
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722585802/contactUS_qb9iia.png"
              alt=""
            />
          </div>
        </div>
      </div>
      </div>
  );
};

export default Contact;
