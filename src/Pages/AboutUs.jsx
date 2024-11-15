import React from "react";
import Header from "../Components/Header";
import SectionTitle from "../Components/SectionTitle";
import { assets } from "../assets/assets";

const AboutUs = () => {
  return (
    <div>
      <Header
        title="LOREM IPSUM"
        para="Excellence at the Intersection of Strategy and Compliance"
        image={
          "https://images.pexels.com/photos/15205160/pexels-photo-15205160/free-photo-of-photograph-of-a-black-vintage-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />

      <div className="paraSlide">
        {/* Section 1 */}
        <div className="section">
          <SectionTitle sectionTitle={"WHO WE ARE?"} sectionPara={"ABOUT US"} />

          <div className="aboutUs">
            {/* LeftSide */}
            <div className="leftSide">
              <div className="leftSideGrid">
                <div>
                  <img src={assets.aboutImg_1} alt="" />
                </div>
                <div>
                  <img src={assets.aboutImg_2} alt="" />
                  <img src={assets.aboutImg_3} alt="" />
                </div>
              </div>
            </div>

            {/* RightSide */}
            <div className="rightSide">
              <p>
                Consulven IFSC Pvt Ltd is A Pioneering Advisory And Compliance
                Firm Based In The Heart Of Gujarat Guft City IFSC. With Our
                Bespoke Suite Of Management Consulting, Compliance And
                Secretarial Solutions, We Specialize In Helping Organizations
                Across A Broad Range Of Sectors Enhance Their Strategic
                Positioning. Streamline Operations, And Navigate Comples
                Regulatory Environments.
              </p>

              <p>
                Our Team Of Experts Deep Industry Expertise, Coupled With Our
                String Network In Markets Across Asia, The Middle East, And
                Africa, Enable Us To Provide Tailored Solutions That Deliver
                Measurable Impact. Whether Supporting Business Transformations,
                Ensuring Regulatory Compliance, Or Guiding Strategic
                Investments, Consulven Is Committed To Unlocking Value And
                Driving Sustainable Growth For Our Clients.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="section">
          <SectionTitle sectionTitle={"OUR MISSION & VISION"} />

          <div className="bgGradient">
            <div className="vision">
              <h1>LOREM IPSUM</h1>
              <p>
                To be the partner of choice for businesse aiming to achieve
                excellence in governance, compilance, and strategy in today's
                rapidly evolving international markets.
              </p>

              <div className="visionImg">
                <img
                  src="https://images.pexels.com/photos/29032415/pexels-photo-29032415/free-photo-of-red-swedish-house-decorated-for-halloween.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>

              <div className="mission">
                <h1>LOREM IPSUM</h1>
                <p>
                  To be the partner of choice for businesse aiming to achieve
                  excellence in governance, compilance, and strategy in today's
                  rapidly evolving international markets.
                </p>

                <img src={assets.arrow} className="arrow" />

                <div className="animaBlack"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="section last">
          <SectionTitle sectionTitle={"OUR VALUES"} />

          <div class="card-container">
            <div class="card">
              <div class="bg">
                <img src={assets.sample} alt="" />
                <h2>INTEGRITY</h2>
                <p>Upholding the highest standards of transparency, ethics, and responsibility in all our engagements.</p>
              </div>
              <div class="blob"></div>
            </div>
            <div class="card">
              <div class="bg">
              <img src={assets.sample} alt="" />
                <h2>CLIENT-CENTRICITY</h2>
                <p>We place our clients at the center of everything we do, ensuring tailored, actionable solutions that address their specific challenges and goals.</p>
              </div>
              <div class="blob"></div>
            </div>
            <div class="card">
              <div class="bg">
              <img src={assets.sample} alt="" />
                <h2>INNOVATION</h2>
                <p>Embracing the latest technologies, methodologies, and frameworks to solve today’s most complex business challenges.</p>
              </div>
              <div class="blob"></div>
            </div>
            <div class="card">
              <div class="bg">
              <img src={assets.sample} alt="" />
                <h2>AGILITY</h2>
                <p>We adapt quickly to the changing regulatory and market landscapes, ensuring our clients stay ahead of the curve.</p>
              </div>
              <div class="blob"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
