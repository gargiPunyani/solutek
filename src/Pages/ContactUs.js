import React from 'react'
import Navbar from '../Components/Navbar'
import { FaAngleLeft } from 'react-icons/fa6'
import Contact from '../Components/Home1/Contact'

const ContactUs = () => {
  return (
    <div>
        <Navbar/>
        <div>
        <div className='aboutUs'>
          <div >
            <div className='AboutUSHeader'>
              <h1>Contact Us</h1>
            </div>
            <div className='About team'>
              <h6>Home <FaAngleLeft/>
              <span> Contact Us</span> </h6>
            </div>
            </div>
            </div>
        </div>
        <Contact/>
        <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.498447243554!2d77.30918341107807!3d28.5848199755895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5097b129809%3A0x5195490a2c01875!2sNoida%20sector%2015%20Metro%20Station!5e0!3m2!1sen!2sin!4v1722586007989!5m2!1sen!2sin"
          style={{ width: "100%", height: "29rem", borderRadius:"15px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default ContactUs