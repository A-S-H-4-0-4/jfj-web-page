
import { Card } from "../components/card";

const Testing = ()=>{

const styles= {
    height:"100vh",
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    
    // background:"hotPink"

}

// console.log(callAPI("review/1"));

    return(

        <div style={styles}>
           {/* <TestImage/> */}
           {<Card/>}
        </div>
    )
}

export default Testing
