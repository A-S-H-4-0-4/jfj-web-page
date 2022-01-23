// style
import home from "../styles/components/home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// carousel
import Carousel from 'react-material-ui-carousel'
import Slider from "react-slick";

// components
import { Navbar } from "../components/navbar";
import { Card } from "../components/card";

// logo
const logo = "/icons/jfjlogo.png"

// images
const image1 = "/images/image1.jpg";
const image2 = "/images/image2.jpg";
const image3 = "/images/image3.jpg";



const Home = () => {


  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    // slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
    pauseOnDotsHover: true,
  };

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

  return (
    <div className={home.screen}>

      <div className={home.logo}>
        <img src={logo}></img>
      </div>


      <div className={home.cardDiv}>
        <strong>#IMAGES</strong>
        {cards.map((object) => {
          return <Card {...object} />
        })}
      </div>


      <Navbar />
    </div>
  )
}

export default Home