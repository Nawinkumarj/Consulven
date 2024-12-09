import React from 'react'
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import {assets} from "../assets/assets.js"
import {Link} from "react-router-dom"


const Footer = () => {
    return (
        <div className='Footer-container'>

            <div className='Footer-body'>
                 <img className='Footer-container-img' src={assets.footerBG} alt=""/>
                <div className='Footer-main'>
                    <div className='Footer-logo'>
                        <img src={assets.footerLogo} alt='Consulven' />
                    </div>
                    <div className='Footer-content'>
                        <div className='Footer-joinus'>
                            <h1>Join Our Mailing List</h1>
                            <p>Stay Updated with the Latest Insights, News and Offerings from Consulven IFSC</p>
                            <div className='Footer-joinus-form'>
                                <form>
                                    <div className="input-container">
                                        <input
                                            type="email"
                                            placeholder='EMAIL'
                                        />
                                        <button type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='Footer-quicklinks'>
                            <div className='Footer-quicklinks-head'>
                                <h1>Quick links</h1>
                            </div>
                            <div className='Footer-quicklinks-content'>
                            <Link to='/'><p><FontAwesomeIcon icon={faPlay} className='Footer-quicklinks-content-icon' />Home</p></Link>
                            <Link to='/about'><p><FontAwesomeIcon icon={faPlay} className='Footer-quicklinks-content-icon' />About</p></Link>
                            <Link to='/service'><p><FontAwesomeIcon icon={faPlay} className='Footer-quicklinks-content-icon' />Services</p></Link>
                            <Link to='/industrie'><p><FontAwesomeIcon icon={faPlay} className='Footer-quicklinks-content-icon' />Industries</p></Link>
                            <Link to='/team'><p><FontAwesomeIcon icon={faPlay} className='Footer-quicklinks-content-icon' />Teams</p></Link>
                            <Link to='/career'><p><FontAwesomeIcon icon={faPlay} className='Footer-quicklinks-content-icon' />Careers</p></Link>
                            <Link to='/contact'><p><FontAwesomeIcon icon={faPlay} className='Footer-quicklinks-content-icon' />Contact</p></Link>
                            </div>
                        </div>

                    </div>
                    <div className='Footer-talktoUS'>
                        <h1>Our team is ready to assist you</h1>
                        <div className='Footer-talktoUS-detail'>
                            <a href='tel:081488812523'><FontAwesomeIcon icon={faPhoneVolume} className='Footer-talktoUs-icon' />+91 81488812523</a>
                            <a href='mailto:info@consulvenifsc.com'><FontAwesomeIcon icon={faEnvelope} className='Footer-talktoUs-icon' />info@consulvenifsc.com</a>
                            <a href='https://maps.app.goo.gl/Gy4iLRzcNQLNMqe7A' target='_blank'><FontAwesomeIcon icon={faLocationDot} className='Footer-talktoUs-icon' />Unit No. 51, “The Platform”,<br />Ground floor, 11 T2, Block-11,<br/>GIFT SEZ, Gift City,<br/>Gandhinagar - 382355</a>
                        </div>
                    </div>

                </div>
                <div className='Footer-mediaLinks'>
                    <div className="Footer-mediaLinks-details">
                    <a href="https://facebook.com/lorem" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className='Footer-mediaLinks-icons' color='white' />
                    <p>consulven@facebook.com</p>
                    </a>
                    </div>
                    <div className="Footer-mediaLinks-details">
                    <a href="https://instagram.com/lorem" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className='Footer-mediaLinks-icons' color='white' />
                    <p>consulven_ifsc</p>
                    </a>
                    </div>
                    <div className="Footer-mediaLinks-details">
                    <a href="https://linkedin.com/in/lorem" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className='Footer-mediaLinks-icons' color='white' />
                    <p>consulven_ifsc</p>
                    </a>
                    </div>
                </div>
                <div className='Footer-bottom'>
                    <div>
                    <p>Copyright © 2024 All Rights Reserved</p>
                    </div>
                    <div className='Footer-terms'>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer