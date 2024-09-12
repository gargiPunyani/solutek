import React from 'react'
import "../Css/Footer.css"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='container-fluid'>
        <div className='footerAddress'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 address'>
                        <div className='address1Icon'>
                            <img src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1722600015/address1_jo6qn1.png" alt='address1'/>
                        </div>
                        <div className='address1'>
                            <h2>Elevating Customer Experience.</h2>
                        </div>
                    </div>
                    <div className='col-md-6 address'>
                        <div className='address2Icon'>
                        <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1722600015/address2_qzqesp.png' alt='address2'/>
                    </div>    
                    <div className='address2' >
                        <h4>+91 99001167891</h4>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 footerLeftSide'>
                    <div>
                        <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1722416964/footer-logo_hhrexq.png' alt='logo'/>
                    </div>
                    <div>
                        <p>Globally monetize plug-and-play data it solu monotonectally disseminate oriented busine multifunctional mind design.</p>
                    </div>
                    <div className='footerSocialMedia'>
                        <FaInstagram className='footerSocialMediaIcon'/>
                        <FaFacebook className='footerSocialMediaIcon' />
                        <FaTwitter className='footerSocialMediaIcon'/>
                        <FaLinkedin className='footerSocialMediaIcon'/>
                    </div>
                    </div>
                    <div className='col-md-3 footerMiddleSide '>
                        <h4>Useful Links</h4>
                        <ul>
                            <li><Link className="link" to="/about">About Company</Link></li>
                            <li><Link className="link" to="/team">About Team</Link></li>
                            <li><Link className="link" to="/blogs">Blogs</Link></li>
                            <li><Link className="link" to="/contact">Contact Us</Link></li>
                            <li><Link className="link" to="/project">Projects</Link></li>

                        </ul>
                    </div>
                    <div className='col-md-3 footerMiddle2Side'>
                        <h4>Services</h4>
                        <ul>
                            <li><Link className="link" to="/about">About Company</Link></li>
                            <li><Link className="link" to="/team">About Team</Link></li>
                            <li><Link className="link" to="/blogs">Blogs</Link></li>
                            <li><Link className="link" to="/contact">Contact Us</Link></li>
                            <li><Link className="link" to="/services">Services</Link></li>

                        </ul>
                    </div>
                    <div className='col-md-3 footerRightSide'>
                        <div>
                        <h4>Newsletter</h4>
                        </div>
                        <div>
                            <p>Globally monetize plug-and-play data it solu monotonectally disseminate oriented busine multifunctional mind design.</p>
                        </div>
                    </div>
                </div>
                <hr/>

                <div className='copyright'>
                    <div >
                        &copy; Copyright 2024 By Solutek
                    </div>
                    <div>

                    </div>

                </div>
           </div>


        </div>
    </div>
  )
}

export default Footer