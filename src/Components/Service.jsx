import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Buttons from "./SmallComponents/Buttons";
import Img from "../img"
import "./Services.css";
import Cards from "./SmallComponents/Cards";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
        <div className="mainServices">
            <div className="container">
                <div className="text-center pb-3">
                    <h2><strong>OUR SPECIALTY & SERVICES</strong></h2>

                </div>
                <div className="mainSlideBOx border p-3">
                    <Slider {...settings}>
                        <div>
                             <Cards imgSrc={Img.Facility.f1} 
                             title="TIP TRAILERS"
                             Desc="Jagdambatrailers Pvt. Ltd offers a wide range of Tip Trailers ranging from 24 cum to 44 cum for various trucks."/>
                        </div>
                        <div>
                             <Cards imgSrc={Img.Facility.f2}
                             title="TIPPERS"
                             Desc="We offer a wide range of tippers ranging from 14 cum to 24 cum for mounting on the chassis of various trucks,"/>
                        </div>
                        <div>
                             <Cards imgSrc={Img.Facility.f3}
                             title="SIDEWALL TRAILERS"
                             Desc="We offer Side Wall Trailers from 26 feet length to 40 feet length in both double axle and triple axle as per customer requirement."/>
                        </div>
                        <div>
                            <Cards imgSrc={Img.Facility.f4}
                            title="Flat Bed Trailers"
                            Desc="Jagdambatrailers Pvt. Ltd offers a wide range of Tip Trailers ranging from 24 cum to 44 cum for various trucks."/>
                        </div>
                        <div>
                            <Cards imgSrc={Img.Facility.f5}
                            title="Rock Body"
                            Desc="These are Heavy Duty Tippers designed for Heavy materials like Rock & Lime Stone. These Tippers are normally made of very high Tensile Hardox steel."/>
                        </div>                        
                    </Slider>
                    <br/>
                </div>
            </div>
        </div>
        
      </>
    );
  }
}