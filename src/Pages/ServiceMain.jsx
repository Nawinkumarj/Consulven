import React from 'react'
import ServiceSection from '../Components/ServiceSection'
import Header from '../Components/Header'
import SectionTitle from "../Components/SectionTitle";
import { assets } from "../assets/assets";
import EnquiryForm from "../Components/EnquiryForm"


const ServiceMain = () => {
  return (
    <div className='ServiceMain-container'>
          <Header title='LOREM IPSUM' para='Excellence at the Intersection of Strategy and Compliance' image={"https://images.pexels.com/photos/27509020/pexels-photo-27509020/free-photo-of-b-w-pentax.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
        <div className='ServiceMain-main'>
            <div className='ServiceMain-head'>
            <SectionTitle sectionTitle={"OUR SERVICE"}  />
            </div>
            <div className='ServiceMain1'>
                <div className='serviceMain1-content1'>
                    <div  className='serviceMain1-content1-heading'>
                        <div className='serviceMain1-vector1'></div>
                        
                   <h2>lorem inpsum</h2>
                   <h1>dummy text</h1>
                   <div className='serviceMain1-vector2'></div>
                   </div>
                   <p>Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown </p>
                </div>
                <div className='serviceMain1-content2'>
                    <img src={assets.serviceImg} alt="Consulven" />
                </div>
            </div>
            <div className='ServiceMain2' >
                <ServiceSection
                icon={"https://fakeimg.pl/150x100"}
                mainImg={"https://fakeimg.pl/300x200"}
                number={"01"}
                heading={"COMPLIANCE & SECRETARIAL"}
                content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"}
                path="/service/Card1"
                 />


                <ServiceSection
                icon={"https://fakeimg.pl/150x100"}
                mainImg={"https://fakeimg.pl/300x200"}
                number={"02"}
                heading={"COMPLIANCE & SECRETARIAL"}
                content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"}  
                path="/service/Card2"
                 />
            </div>
            <div className="enquiry-form">
            <EnquiryForm/>
            </div>
        </div>

    </div>
  )
}

export default ServiceMain