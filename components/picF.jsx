// component for displaying image in a old style picture frame

// styles
import pfStyles from "../styles/components/pictureFrame.module.css";

const pizza  = '/images/dalBati.jpg'


export const PictureFrame = ()=>{

    return(
        <div className={pfStyles.frame}>
            <img src={pizza} />
        </div>
    )


}
