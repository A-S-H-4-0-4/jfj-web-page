

// styles
import cardStyles from "../styles/components/card.module.css";


// images
const image1 = "/images/image1.jpg";
const image2 = "/images/image2.jpg";
const image3 = "/images/image3.jpg";


// logo
const logo = "/icons/jfjlogo.png"


export const Card = (props) => {

    const { image, text } = props

    return (
        <div className={cardStyles.card}>
            <div className={cardStyles.dp}>
                <img src={logo} />
            </div>
            <div className={cardStyles.name}>
                Jaipurfoodjunction
                <br />
                <span>@Jaipurfoodjunction</span>
            </div>
            
            <div className={cardStyles.imgs}>
            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
            <img src={image2} />
            </div>
        </div>
    )

}