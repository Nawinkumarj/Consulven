import React from 'react'
import {FaArrowRight} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ServiceSection = ({icon, number, mainImg, heading, content, path}) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(path); 
    };


  return (
    <div className='serviceSection-main'>
        <div className='serviceSection1'>
            <div className='serviceSection1-content'>
                <img src={icon} alt="icon" />
                <h1>{number}</h1>
            </div>
            <div className='serviceSection1-content-right'>
                <img src={mainImg} alt="" />
            </div>
        </div>
        <div className='serviceSection2'>
            <div className='serviceSection2-head'>
                <h1>{heading}</h1>
                <p>{content}</p>
            </div>
        </div>
        <div className='serviceSection3' onClick={handleClick}>
            <p>Read more<FaArrowRight/></p>
        </div>
    </div>
  )
}

export default ServiceSection