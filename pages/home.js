// style
import home from "../styles/components/home.module.css";


// components
import { Navbar } from "../components/navbar";



const Home = () => {
  return (
    <div className={home.screen}>
   {/* <a href="https://instagram.com/jaipurfoodjunction?utm_medium=copy_link"> </a>
   <a href=""> </a>
   <a href=""> </a> */}
   <Navbar/>
    </div>
  )
}

export default Home