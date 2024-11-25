import React from "react";
import Slider from "react-slick";
import "../App.css";
import {assets} from "../assets/assets.js"

const HomePageSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image:
        "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.webp?b=1&s=612x612&w=0&k=20&c=81f5HaMtoPNUrdfa4hnS8NcwEgD9tH2nnTUBu25Msug=",
      text: "Shaping opportunities into outcomes",
      textpara:"Propelling your business forward with expert insights, visionary solutions, and constant encouragement.",
      textPosition: "left",
    },
    {
      image:
        "https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2150787850.jpg?size=626&ext=jpg",
      text: "Positioning Your Business for Future Growth",
      textpara:"Access our cross-border financial insights and well-crafted strategies to nurture enduring progress.",
      textPosition: "center",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_640.jpg",
      text: "Tackling Complexity with Determination",
      textpara:" Align with Consulven IFSC to strengthen your compliance strategy and fine-tune operations to thrive in any jurisdiction.",
      textPosition: "right",
    },
  ];

  return (
    <div className="Home-container">
      <div className="Home-main">
        <div className="carousel-container">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="carousel-slide"
                
              >
                <img src={slide.image} alt={`Slide ${index}`}  />
                <div className={`carousel-text ${slide.textPosition}`}>
                  <h3>{slide.text}</h3>
                  <p>{slide.textpara}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomePageSlider;
