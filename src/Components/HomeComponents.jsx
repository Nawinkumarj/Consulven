import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import CustomCursor from "../Components/cursorMain.jsx";
import EnquiryForm from "./EnquiryForm.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomeComponents = () => {
  const [isMoving, setIsMoving] = useState(false);

  const handleMouseHover = () => setIsMoving(true);
  const handleMouseMove = () => setIsMoving(false);

  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 1000) {
      gsap.registerPlugin(ScrollTrigger);

      const el1 = sectionRef1.current;
      const el2 = sectionRef2.current;
      if (el1) {
        gsap.to(el1, {
          scale: 0.8,
          filter: "blur(10px)",
          opacity: 0.4,
          scrollTrigger: {
            trigger: el1,
            start: "top -10%",
            end: "bottom center",
            scrub: true,
          },
        });
      }
      if (el2) {
        gsap.to(el2, {
          scale: 0.8,
          filter: "blur(10px)",
          scrollTrigger: {
            trigger: el2,
            start: "top -5%",
            end: "bottom center",
            scrub: true,
          },
        });
      }
    }
  }, []);

  return (
    <div className="Homepage-about-container">
      <img className="Homepage-about-dotcircle" src={assets.dotcircle} alt="" />
      <img className="Homepage-about-linevector" src={assets.linevec} alt=""/>
      <img className="Homepage-about-linevector2" src={assets.linevec} alt=""/>

      {/* <img className="Homepage-about-linevec" src={assets.linevec} /> */}
      <ul id="Homepage-cards">
        <li className="Homepage-card" id="Homepage-card_1" ref={sectionRef1}>
          <div className="Homepage-about-main">
            <img className="Homepage-about-linevector3" src={assets.linevec} alt=""/>
            <img className="Homepage-about-linevector4" src={assets.linevec} alt=""/>

            <div className="Homepage-about-img">
              {isMoving && (
                <CustomCursor
                  cursorImage={assets.logoWhite}
                  cursorSize={{ width: 180, height: 180 }}
                />
              )}
              <img
                className="Homepage-about-img-main"
                src={assets.aboutImg_1}
                alt="About-us"
                onMouseEnter={handleMouseHover}
                onMouseLeave={handleMouseMove}
              />

              <img className="Homepage-about-logo" src={assets.abouticon} alt=""/>
            </div>
            <div className="Homepage-about-content">
              <div className="Homepage-about-content-head">
                <p>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ color: "#228b22" }}
                  />
                  About us
                </p>
              </div>
              <div className="Homepage-about-content-main">
                <h1>who are we</h1>
                <p>
                  We at Consulven IFSC specialize in creating adaptive solutions
                  that respond to your business’s specific challenges. Offering
                  a full spectrum of consulting, compliance, and secretarial
                  services, we drive growth and foster transformation. Merging
                  global knowledge with local insights, we empower businesses to
                  reach today’s goals and prepare for tomorrow’s successes.
                </p>

                <div className="Homepage-about-content-flip">
                  <img src={assets.logo} alt=""/>
                  <div>
                    <h1>Multifaceted Approach to Success</h1>
                    <p>
                    We believe in a holistic approach, aligning operational, financial, and compliance frameworks to create specific
                     solutions that deliver measurable, long-term value for our clients.
                    </p>
                  </div>
                </div>
                <div className="Homepage-about-content-flip">
                  <img src={assets.logo} alt=""/>
                  <div>
                    <h1>Strategic Global Presence</h1>
                    <p>
                    Headquartered in GIFT City, we leverage its strategic advantages to provide businesses with seamless access 
                    to international markets, fostering growth and expanding global footprints.
                    </p>
                  </div>
                </div>
                <div className="Homepage-about-content-button">
                  <Link to="/about">
                    <button>
                      <FontAwesomeIcon
                        className="Homepage-about-content-button-icon"
                        icon={faArrowRight}
                        // size="s"
                        style={{ color: "#000000" }}
                      />
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="Homepage-about-dot">
              <img className="Homepage-about-dot" src={assets.dotvec} alt=""/>
            </div>
          </div>
        </li>
        <li className="Homepage-card" id="Homepage-card_2" >
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
            <div className="Homepage-choose-content" ref={sectionRef2}>
              <div className="Homepage-choose-dot">
                <img className="Homepage-choose-dot" src={assets.dotvec} alt=""/>
              </div>
              <div className="Homepage-choose-content-l">
                <div className="Homepage-choose-content-left">
                  <h2>Distinctive Highlights</h2>
                  {/* <h1>SIMPLE TEXT</h1> */}
                  <p>
                  Unique strategies and innovation driving sustainable success.
                  </p>
                  <img src={assets.chooseus} alt="" />
                </div>
                <div className="Homepage-about-border"></div>
              </div>
              <div className="Homepage-choose-content-r">
                <div className="Homepage-choose-content-main">
                  <img src={assets.abouticon} alt=""/>
                  <div className="Homepage-choose-content-text">
                    <h1>Customer-Focused Strategies</h1>
                    <p>
                      We provide results-driven solutions thatpredict and
                      address risks in dynamic markets, offering personalized
                      careand accuracy throughout every phase of the process.
                    </p>
                  </div>
                </div>
                <div className="Homepage-choose-content-main">
                  <img src={assets.abouticon} alt=""/>
                  <div className="Homepage-choose-content-text">
                    <h1>Holistic Integration:</h1>
                    <p>
                      By aligning operational, financial, and
                      complianceframeworks, we create unified solutions designed
                      to offer sustainable valueover the long term.
                    </p>
                  </div>
                </div>
                <div className="Homepage-choose-content-main">
                  <img src={assets.abouticon} alt=""/>
                  <div className="Homepage-choose-content-text">
                    <h1>Regulatory and Industry Expertise</h1>
                    <p>
                      With innovation at the forefront, weprovide strategic
                      guidance built on deep market knowledge and
                      regulatoryproficiency.
                    </p>
                  </div>
                </div>
              </div>
              <div className="Homepage-choose-content-vector">
                <img src={assets.chooseVector} alt=""/>
              </div>
            </div>
            <EnquiryForm />
          </div>
        </li>
      </ul>
      <div className="homepage-map">
        <div className="homepage-map-head">
          <h1>global expertise</h1>
          <h2>connecting markets, bridging continents</h2>
          <p>
            Headquartered in Gift City IFSC, we work with international
            businesses, acknowledgingthe specific challenges and opportunities
            within each regional landscape.
          </p>
          <h5>Discover our key markets.</h5>
        </div>
        <img src={assets.map} alt="" />
      </div>
    </div>
  );
};

export default HomeComponents;
