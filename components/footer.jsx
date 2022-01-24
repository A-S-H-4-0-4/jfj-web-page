// style
import footerStyle from "../styles/components/footer.module.css";

// contact component
import WatchLater from '@material-ui/icons/WatchLater';
import React from 'react';
import Email from '@material-ui/icons/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';




export const Footer = () => {
  return (
    <div className={footerStyle.footerBottom}>
               <div>
                   <LocationOnIcon/>
                   <small>http://localhost:3000/</small>
               </div>
               <div>
               <Email/>
                  <small>jaipurfoodj@gmail.com</small>
               </div>
               <div>
                   <WatchLater/>
                   <small>from 7:00 am to 12:00 pm</small>
               </div>
           </div>
  )
}