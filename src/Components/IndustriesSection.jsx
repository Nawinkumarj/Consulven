import React from 'react';
import '../App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
    { image:'https://www.svgrepo.com/show/532030/circle-heat.svg', content:'Strategic Planning And Market Entry Advisory' },
    { image:'https://www.svgrepo.com/show/532031/cloud-fog.svg', content:'Strategic Planning And Market Entry Advisory2' },
    { image:'https://www.svgrepo.com/show/532030/circle-heat.svg', content:'Strategic Planning And Market Entry Advisory3' },
    { image:'https://www.svgrepo.com/show/532031/cloud-fog.svg', content:'Strategic Planning And Market Entry Advisory4' },
];

const settings = {
    infinite: true,
    arrows: false,
    autoplaySpeed: 2000,
    autoplay: true,
    fade: true,
    waitForAnimate: false,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const IndustriesSection = ({smallText, mainImage, sectionTitle, sectionContentTitle, sectionContentPara, reverse, last}) => {
    return (
        <div className={`industrySection ${reverse} ${last}`}>
            {/* Left Side */}
            <div className='leftSide'>
                <div className='leftContainer'>
                    <img src={mainImage} alt="Main" />
                    <div className='below'>
                        <h3>{smallText}</h3>
                    </div>
                    <div className='carousel'>
                        <Slider {...settings}>
                            {data.map((item, index) => (
                                <div key={index} className='carouselContent'>
                                    <img src={item.image} alt="Carousel" />
                                    <p>{item.content}</p>
                                    <div className='bar'>
                                        <div className='Inbar'></div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="rightSide">
                <div className="animaText">
                    <h1>{sectionTitle}</h1>             
                    <p>{sectionTitle}</p>
                        <div className="layer1"></div>
                        <div className="layer1"></div>
                        <div className="layer1"></div>
                        <div className="layer1"></div>
                        <div className="layer1"></div>
                        <div className="layer1"></div>
                        <div className="layer1"></div>
                        <div className="layer1"></div>
                        <div className="layer1"></div>
                        <div className="layer1"></div>
                        <div className="layer1"></div>
                        <div className="layer1"></div>
                        <div className="layer1"></div>
                        <div className="layer1"></div>
                        <div className="layer1"></div>
                        <div className="layer1"></div>
                        <div className="layer1"></div>
                        <div className="layer1"></div>
                        <div className="layer1"></div>
                        <div className="layer1"></div>
                        <div className="layer1 two"></div>
                        <div className="layer1 two"></div>
                        <div className="layer1 two"></div>
                        <div className="layer1 two"></div>
                        <div className="layer1 two"></div>
                        <div className="layer1 two"></div>
                        <div className="layer1 two"></div>
                        <div className="layer1 two"></div>
                        <div className="layer1 two"></div>
                        <div className="layer1 two"></div>
                        <div className="layer1 two"></div>
                        <div className="layer1 two"></div>
                        <div className="layer1 two"></div>
                        <div className="layer1 two"></div>
                        <div className="layer1 two"></div>
                        <div className="layer1 two"></div>
                        <div className="layer1 two"></div>
                        <div className="layer1 two"></div>
                        <div className="layer1 two"></div>
                        <div className="layer1 two"></div>
                </div>

                {/* Mobile START */}
                <div className='leftContainerSm'>
                    <img src={mainImage} alt="Main" />
                    <div className='below'>
                        <h3>{smallText}</h3>
                    </div>
                    <div className='carousel'>
                        <Slider {...settings}>
                            {data.map((item, index) => (
                                <div key={index} className='carouselContent'>
                                    <img src={item.image} alt="Carousel" />
                                    <p>{item.content}</p>
                                    <div className='bar'>
                                        <div className='Inbar'></div>
                                    </div>
                                </div>
    
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* Mobile END */}

                <div className="rightContainer">
                    <div className="overlap">
                        <h1>{sectionContentTitle}</h1>
                        <div className='bar'>
                            <div className='Inbar'></div>
                        </div>
                        <p>{sectionContentPara}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndustriesSection;
