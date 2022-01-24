// style
import home from "../styles/components/home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// carousel
import Slider from "react-slick";

// components
import { Card } from "../components/card";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";


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
      text: "I love pizza. I want to marry it, but it would just be to eat her family at the wedding.",
    },
    {
      image: image2,
      text: "I love pizza. I want to marry it, but it would just be to eat her family at the wedding.",
    },
    {
      image: image3,
      text: "I love pizza. I want to marry it, but it would just be to eat her family at the wedding.",
    },


  ];

  return (
    <div className={home.screen}>

      <div className={home.logo}>
        <img src={logo}></img>
      </div>

      <Contact />
      <div className={home.about}>
        <strong>#About</strong>

        <p> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus
        </p>
      </div>


      <div className={home.cardDiv}>
        <strong>#Blogs</strong>
        {cards.map((object) => {
          return <Card {...object} />
        })}
      </div>


      <Footer />


    </div>
  )
}

export default Home