import  { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import { assets } from "../assets/assets";
import {Link} from "react-router-dom";
import CustomCursor from "../Components/cursorMain.jsx";
import EnquiryForm from "./EnquiryForm.jsx";

const HomeComponents = () => {
  
  const [isMoving, setIsMoving] = useState(false);


  const handleMouseHover = () => setIsMoving(true);
  const handleMouseMove = () => setIsMoving(false);

  return (
    <div className="Homepage-about-container">
      <img className="Homepage-about-dotcircle" src={assets.dotcircle} />
      <img className="Homepage-about-linevector" src={assets.linevec} />
      <img className="Homepage-about-linevector2" src={assets.linevec} />

      {/* <img className="Homepage-about-linevec" src={assets.linevec} /> */}
      <ul id="Homepage-cards">
        <li className="Homepage-card" id="Homepage-card_1">
          <div className="Homepage-about-main">
            <img className="Homepage-about-linevector3" src={assets.linevec} />
            <img className="Homepage-about-linevector4" src={assets.linevec} />

            <div className="Homepage-about-img">
              {isMoving && (
                <CustomCursor
                  cursorImage={assets.clickImg}
                  cursorSize={{ width: 80, height: 80 }}
                />
              )}
              <img
                className="Homepage-about-img-main"
                src={assets.aboutImg_1}
                alt="About-us"
                onMouseEnter={handleMouseHover}
                onMouseLeave={handleMouseMove}
              />

              <img className="Homepage-about-logo" src={assets.abouticon} />
            </div>
            <div className="Homepage-about-content">
              <div className="Homepage-about-content-head">
                <p>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ color: "#228b22" }}
                  />
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
              <div className="Homepage-about-content-main">
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  voluptatum, consectetur alias suscipit laborum repellat aut
                  porro ab similique et necessitatibus nam enim minima unde
                  mollitia sapiente voluptatem saepe. Amet.
                </p>

                <div className="Homepage-about-content-flip">
                  <img src={assets.logo} />
                  <div>
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Animi nulla, accusantium tempore eius cupiditate ipsa
                      corrupti rerum odio.
                    </p>
                  </div>
                </div>
                <div className="Homepage-about-content-flip">
                  <img src={assets.logo} />
                  <div>
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Animi nulla, accusantium tempore eius cupiditate ipsa
                      corrupti rerum odio.
                    </p>
                  </div>
                </div>
                <div className="Homepage-about-content-button">
                  <Link to="/about">
                  <button>
                    <FontAwesomeIcon
                      className="Homepage-about-content-button-icon"
                      icon={faArrowRight}
                      size="s"
                      style={{ color: "#000000" }}
                    />
                    Know More
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="Homepage-about-dot">
              <img className="Homepage-about-dot" src={assets.dotvec} />
            </div>
          </div>
        </li>
        <li className="Homepage-card" id="Homepage-card_2">
          <div className="Homepage-choose-main">
            <div className="Homepage-choose-head">
              <h1>
                WHY CHOOSE{" "}
                <FontAwesomeIcon
                  className="Homepage-about-content-button-icon"
                  icon={faArrowRight}
                  size="xs"
                  style={{ color: "#228b22" }}
                />{" "}
                US
              </h1>
            </div>
            <div className="Homepage-choose-content">
              <div className="Homepage-choose-dot">
                <img className="Homepage-choose-dot" src={assets.dotvec} />
              </div>
              <div className="Homepage-choose-content-l">
                <div className="Homepage-choose-content-left">
                  <h2>LOREM IPSUM</h2>
                  <h1>SIMPLE TEXT</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique volupta
                  </p>
                  <img src={assets.chooseus} alt="" />
                </div>
                <div className="Homepage-about-border"></div>
              </div>
              <div className="Homepage-choose-content-r">
                <div className="Homepage-choose-content-main">
                  <img src={assets.abouticon} />
                  <div className="Homepage-choose-content-text">
                    <h1>Client-Centric Solutions</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      est sint porro doloribus velit. Cupiditate, ducimus
                      doloremque!
                    </p>
                  </div>
                </div>
                <div className="Homepage-choose-content-main">
                  <img src={assets.abouticon} />
                  <div className="Homepage-choose-content-text">
                    <h1>Client-Centric Solutions</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      est sint porro doloribus velit. Cupiditate, ducimus
                      doloremque!
                    </p>
                  </div>
                </div>
                <div className="Homepage-choose-content-main">
                  <img src={assets.abouticon} />
                  <div className="Homepage-choose-content-text">
                    <h1>Client-Centric Solutions</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      est sint porro doloribus velit. Cupiditate, ducimus
                      doloremque!
                    </p>
                  </div>
                </div>
              </div>
              <div className="Homepage-choose-content-vector">
                <img src={assets.chooseVector} />
              </div>
            </div>
            <EnquiryForm/>
          </div>
        </li>
      </ul>
      <div className="homepage-map">
        <div className="homepage-map-head">
          <h1>global expertise</h1>
          <h2>connecting markets, bridging continents</h2>
          <p>
            From our base in Gift City IFSC, we cater to diverse global
            businesses and understand the nuance of each region’s unique
            dynamics.
          </p>
        </div>
        <img src={assets.map} alt="" />
      </div>
    </div>
  );
};

export default HomeComponents;
