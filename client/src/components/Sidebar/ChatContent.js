import React from "react";
import { Box, Typography, Badge, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 20,
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
    fontWeight: 500,
  },
  unreadText: {
    color: "black",
  },
  badge: {
    marginRight: 20,
    backgroundColor: theme.palette.primary.main,
  },
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation } = props;
  const { latestMessageText, otherUser, unreadMessages } = conversation;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography
          className={`${classes.previewText} ${
            unreadMessages > 0 && classes.unreadText
          }
          }`}
        >
          {latestMessageText}
        </Typography>
      </Box>
      <Badge
        className={classes.badge}
        badgeContent={unreadMessages}
        color="primary"
      />
    </Box>
  );
};

export default ChatContent;
