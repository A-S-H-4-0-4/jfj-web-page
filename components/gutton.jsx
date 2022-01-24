// button for gradient

// styles
import gStyle from "../styles/components/gutton.module.css";

export const Gutton= (props)=>{
const {text} = props

return(
    <div className={gStyle.gutton}>
        {text}
    </div>
)


}