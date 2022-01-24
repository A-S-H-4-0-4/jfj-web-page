// footer component


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Email from '@material-ui/icons/Email';
import Code from '@material-ui/icons/Code';
import Globe from '@material-ui/icons/Language';
import WatchLater from '@material-ui/icons/WatchLater';

// styles
import footerStyle from "../styles/components/footer.module.css";

// components
import { Gutton } from "../components/gradientButton";
import Language from '@material-ui/icons/Language';

// icons and images
const instagram = '/icons/instagram.png'
const telegram = '/icons/telegram.png'
const twitter = '/icons/twitter.png'
const whatsapp = '/icons/whatsapp.png'
const linkedin = '/icons/linkedin.png'
const facebook = '/icons/facebook.png'
const meet = '/icons/meet.png'
const gmail = '/icons/gmail.png'


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

export const Footer = () => {
    const classes = useStyles();
    return(
        <div className={footerStyle.footer}>
            <strong className={footerStyle.footerHeading}>
                Get In Touch With #JFJ
            </strong>
            <div className={footerStyle.footerSocialMedia}>
            <div className={footerStyle.socialMediaIcon}>
                    <img src={instagram}/>         
                    <img src={facebook}/>         
                    <img src={twitter}/>         
                    <img src={meet}/>         
                    <img src={gmail}/>         
                    <img src={whatsapp}/>         
                    <img src={linkedin}/>         
                    <img src={telegram}/>         
                </div>
          
            <div className={footerStyle.signup}>
                <strong>Sign Up Here</strong>
            <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="User Name" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Email />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Email" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Code />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Password" />
          </Grid>
        </Grid>
      </div>
           
        <Gutton text="Subscribe"/>

            </div>

            </div>
           <div className={footerStyle.footerBottom}>
               <div>
                   <Globe/>
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
        </div>
    )
}
