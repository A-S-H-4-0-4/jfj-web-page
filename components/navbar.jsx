// navbar component

// styles
import navStyles from "../styles/components/navbar.module.css";

// next components
import Link from "next/link";


// icons
const twitter = "/icons/twitter.png"
const instagram = "/icons/instagram.png"
const facebook = "/icons/facebook.png"
const youtube = "/icons/youtube.png"

export const Navbar = () => {


  return (<div className={navStyles.navbar}>

    <Link href="https://instagram.com/jaipurfoodjunction?utm_medium=copy_link">
      <div>
        <img src={instagram} ></img>
      </div>
    </Link>
    <Link href="https://www.facebook.com/jaipurfoodj/">
      <div>
        <img src={facebook} ></img>
      </div>
    </Link>
    <Link href="https://twitter.com/jaipur_food?t=_lMc3W6PY8-TSJz6iuoTRA&s=09">
      <div>
        <img src={twitter} ></img>
      </div>
    </Link>



  </div>)

}