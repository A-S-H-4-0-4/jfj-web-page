

// styles
import cardStyles from "../styles/components/card.module.css";

export const Card = (props)=>{

    const {image,text} = props
     
return(
    <div className={cardStyles.card}>
        <img src={image}/>
        <p>{text}</p>
    </div>
)

}