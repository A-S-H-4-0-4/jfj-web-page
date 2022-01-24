// contact component


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Email from '@material-ui/icons/Email';
import Code from '@material-ui/icons/Code';


// styles
import contactStyle from "../styles/components/contact.module.css";

// components
import { Gutton } from "./gutton";
import Language from '@material-ui/icons/Language';

// icons and images
const instagram = '/icons/instagram.png'
const twitter = '/icons/twitter.png'
const whatsapp = '/icons/whatsapp.png'
const linkedin = '/icons/linkedin.png'
const facebook = '/icons/facebook.png'
const gmail = '/icons/gmail.png'


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0),
  },
}));

export const Contact = () => {
  const classes = useStyles();
  return (
    <div className={contactStyle.contact}>
      <strong className={contactStyle.contactHeading}>
        Get In Touch With #JFJ
      </strong>
      <div className={contactStyle.contactSocialMedia}>
        <div className={contactStyle.socialMediaIcon}>
          <div>    <img src={instagram} /> <strong>jaipurfoodjunction</strong> </div>
          <div>     <img src={facebook} /> <strong>jaipurfoodjunction</strong></div>
          <div>     <img src={twitter} />  <strong>jaipurfoodjunction</strong></div>
          <div>     <img src={gmail} />    <strong>jaipurfoodjunction@gmail.com</strong></div>
          <div>    <img src={whatsapp} />  <strong>7823815841</strong></div>
          <div>     <img src={linkedin} /> <strong>jaipurfoodjunction</strong></div>
        </div>

      </div>
    </div>
  )
}



// <div className={contactStyle.signup}>
//           <strong>Sign Up Here</strong>
//           <div className={classes.margin}>
//             <Grid container spacing={0} alignItems="flex-end">
//               <Grid item>
//                 <AccountCircle />
//               </Grid>
//               <Grid item>
//                 <TextField id="input-with-icon-grid" label="User Name" />
//               </Grid>
//             </Grid>
//           </div>
//           <div className={classes.margin}>
//             <Grid container spacing={0} alignItems="flex-end">
//               <Grid item>
//                 <Code />
//               </Grid>
//               <Grid item>
//                 <TextField id="input-with-icon-grid" label="Password" />
//               </Grid>
//             </Grid>
//           </div>

//           <Gutton text="Subscribe" />

//         </div>

//       </div>
