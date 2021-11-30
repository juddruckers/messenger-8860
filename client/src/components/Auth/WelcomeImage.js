import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography, Hidden } from "@material-ui/core";
import { ReactComponent as ChatBubbleSVG } from "../../assets/icons/chatBubble.svg";
import heroImage from "../../assets/images/welcomeImage.png";

const useStyles = makeStyles((theme) => ({
  welcomeImage: {
    background: `linear-gradient(rgba(58, 141, 255, .85),rgba(134, 185, 255, .85)), url(${heroImage})`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  copyContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "8rem",
    maxWidth: "26rem",
    "& svg": {
      marginBottom: "3rem",
      height: "90px",
    },
    "& h4": {
      color: theme.palette.white,
    },
  },
}));

/**
 * hero image for login and register page
 */
const WelcomeImage = () => {
  const classes = useStyles();
  return (
    <Hidden smDown>
      <Grid className={classes.welcomeImage} item sm={5}>
        <Grid className={classes.copyContainer}>
          <ChatBubbleSVG />
          <Typography variant="h4" align="center" lineHeight={10}>
            <Box lineHeight={1.5}>Converse with anyone with any language</Box>
          </Typography>
        </Grid>
      </Grid>
    </Hidden>
  );
};

export default WelcomeImage;
