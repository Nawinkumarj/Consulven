import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { assets } from "../assets/assets";
import { GrSend } from "react-icons/gr";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import CustomCursor from "../Components/cursorMain.jsx";

const EnquiryForm = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
    
  const handleChooseBottomClick = () => {
    setIsFormVisible(true);
  };

  const handleSend = (e) => {
    e.preventDefault();

    setIsFormVisible(false);
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  return (
    <div className="home-bottom-container">
              <div className="Homepage-choose-bottom">
                {isHovering && (
                  <CustomCursor
                    cursorImage={assets.clickImg}
                    cursorSize={{ width: 150, height: 150 }}
                  />
                )}
                <div
                  className={`Homepage-choose-bottom-main ${
                    isFormVisible ? "show-form" : ""
                  }`}
                  style={{ backgroundImage: `url(${assets.talkwithBg})` }}
                  onClick={handleChooseBottomClick}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="Homepage-choose-bottom-img">
                    <img
                      className="homepage-talkwith"
                      src={assets.talkwith}
                      alt=""
                    />
                  </div>
                  <div className="Homepage-choose-bottom-content">
                    <h1>Lets Request a schedule for free consultation</h1>

                    <p>
                      <FontAwesomeIcon
                        icon={faPhoneVolume}
                        className="enquiry-talktoUs-icon"
                      />
                      Call for more Info (+91 98610*****)
                    </p>
                  </div>
                </div>
              </div>
              <div className={`home-form ${isFormVisible ? "show-form" : ""}`}>
                <div className="home-form-head">
                  <h1>enquiry form</h1>
                </div>
                <form autoComplete="off" onSubmit={handleSend}>
                  <div className="home-form-name">
                    <div className="home-form-details">
                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        autoComplete="off"
                      />
                    </div>

                    <div className="home-form-details">
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        placeholder="Email Address"
                        required
                        autoComplete="off"
                      />
                    </div>
                    <div className="home-form-details">
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="user_phone"
                        placeholder="Phone Number"
                        required
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="home-form-details">
                    <textarea
                      id="message"
                      name="user_message"
                      placeholder="Message"
                      rows={2}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="home-form-button">
                    <button className="home-form-text" type="submit">
                      <GrSend />
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
  )
}

export default EnquiryForm