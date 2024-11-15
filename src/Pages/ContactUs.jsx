import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot ,faPhoneVolume , faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { assets } from "../assets/assets";
import SectionTitle from "../Components/SectionTitle";
import Header from '../Components/Header'

const ContactUs = () => {
  return (
    <div className="contact-container">
           <Header title='LOREM IPSUM' para='Excellence at the Intersection of Strategy and Compliance' image={"https://images.pexels.com/photos/27509020/pexels-photo-27509020/free-photo-of-b-w-pentax.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
 
      <div className="contact-main">
        <div className="contact-head">
        <SectionTitle sectionTitle={"CONTACT US"}  />
        </div>
        <div className="contact-content">
          <div className="contact-form">
            <h1>you can connect with us when you need help<span style={{color:"#228b22"}}>!</span></h1>
            <form>
              <input type="text" placeholder="NAME*" />
              <input type="email" placeholder="EMAIL*" />
              <input type="tel" placeholder="PHONE*" />
              <textarea placeholder="MESSAGE*" rows={7} />
              <button>submit</button>
            </form>
          </div>
          <div className="contact-content-details">
          <div className="contact-form-cross">
            <h1>Consulven</h1>
          </div>
          <div className="contact-details">
          <img className="contact-details-vector" src={assets.dotcircle}/>
          <div className="contact-details-blank"></div>
            <div className="contact-details-main">
                
              <div
                className="contact-details-section" >
                  <div className="contact-details-icon">
                <img src={assets.abouticon}/>
                </div>
                <p>No.18 Chandrabagh Avenue</p>
              </div>
              <div className="contact-details-section">
              <div className="contact-details-icon">
                <img src={assets.abouticon}/>
                </div>
                <p>consulven@gmail.com</p>
              </div>
              <div className="contact-details-section">
              <div className="contact-details-icon">
                <img src={assets.abouticon}/>
                </div>
                <p>+91 9610765860</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;