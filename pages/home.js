// style
import home from "../styles/components/home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";

// carousel
import Slider from "react-slick";
import Carousel from 'react-material-ui-carousel'

// components
import { Card } from "../components/card";
// import { Contact } from "../components/contact";
// import { Footer } from "../components/footer";
import { PictureFrame } from "../components/picF";


// logo
const logo = "/icons/jfjlogo.png"

// images
const image1 = "/images/image1.jpg";
const image2 = "/images/image2.jpg";
const image3 = "/images/image3.jpg";
// import images from './images'



export default class Home extends Component {
  render() {


    const cards = [
      {
        image: image1,
        text: "Share any adorable and tasty food image and get a shoutout",
      },
      {
        image: image2,
        text: "Share review of any restaurant you visited and let the world know",
      },
      {
        image: image3,
        text: "Share any food or restaurant related experience to the world!!",
      },
    ];

    const settings = {
      dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      // centerPadding: "60px",
      slidesToShow: 1,
      // slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      // cssEase: "linear",
      pauseOnDotsHover: true,
    };



    return (
      <div className={home.screen}>

        <div className={home.header} >
          <img src={logo} />
          <span>JAIPUR FOOD JUNCTION! </span>
        </div>


        <div className={home.card}>

          <Slider {...settings} className = {home.slider} >
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>

          </Slider>

        </div>
      </div>
    );
  }
}

