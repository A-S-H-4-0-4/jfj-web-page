// style
import home from "../styles/components/home.module.css";


// components
import { Navbar } from "../components/navbar";

// logo
const logo = "/icons/jfjlogo.png"

const Home = () => {
  return (
    <div className={home.screen}>
     
      <div className={home.logo}>
        <img src={logo}></img>
      </div>

      <Navbar />
    </div>
  )
}

export default Home