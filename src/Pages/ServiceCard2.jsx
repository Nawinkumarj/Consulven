import React, { useState } from "react";
import { FaChartLine, FaCogs, FaIndustry } from "react-icons/fa";
import ServiceMainSection from "../components/serviceMainSection";
import { assets } from "../assets/assets";
import Header from "../Components/Header";
import service2Data from "../data/service2Data";
import EnquiryForm from "../Components/EnquiryForm"

const ServiceCard2 = () => {
  return (
    <div className="ServiceCard-container">
      <Header
        title="LOREM IPSUM"
        para="Excellence at the Intersection of Strategy and Compliance"
        image={
          "https://images.pexels.com/photos/27509020/pexels-photo-27509020/free-photo-of-b-w-pentax.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />
      <div className="ServiceCard-main">
        <div className="ServiceCard-1">
          <div className="ServiceCard-1-main">
            <img src={assets.service1} alt="" />
            <p>lorem ipsum</p>
          </div>
          <div className="ServiceCard-2">
            <div className="ServiceCard2-head">
              <img src={assets.serviceCircle} alt="" />
              <h1>GENERAL MANAGEMENT CONSULTING SERVICE</h1>
              <p>
                Our management consulting services focus on driving measurable
                improvements across your organization’s strategic and
                operational dimensions. We work closely with clients to identify
                key opportunities for growth, streamline processes, and optimize
                business performance.
              </p>
            </div>
            <div className="ServiceCard2-img">
              <img src={assets.service2} alt="" />
            </div>
          </div>
        </div>
        <div className="ServiceCard-list">
          {service2Data.map((service) => (
            <ServiceMainSection
              key={service.id}
              image={service.image}
              icon={service.icon}
              heading={service.heading}
              content={service.content}
              para1={service.para1}
              para2={service.para2}
              para3={service.para3}
              para4={service.para4}
            />
          ))}
        </div>
         <div className="enquiry-form">
        <EnquiryForm/>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard2;
