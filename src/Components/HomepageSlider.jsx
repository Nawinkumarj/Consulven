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
      text: "Lorem ipsum dolor sit amet consectetur adipisicing",
      textpara:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum, consectetur alias suscipit laborum repellat aut porro ab similique et necessitatibus nam enim minima unde mollitia sapiente voluptatem saepe. Amet.",
      textPosition: "left",
    },
    {
      image:
        "https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2150787850.jpg?size=626&ext=jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing",
      textpara:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum, consectetur alias suscipit laborum repellat aut porro ab similique et necessitatibus nam enim minima unde mollitia sapiente voluptatem saepe. Amet.",
      textPosition: "center",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_640.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing",
      textpara:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum, consectetur alias suscipit laborum repellat aut porro ab similique et necessitatibus nam enim minima unde mollitia sapiente voluptatem saepe. Amet.",
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
