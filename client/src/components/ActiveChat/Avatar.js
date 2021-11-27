import React from "react";
import { Avatar as MaterialAvatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  sender: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  read: {
    marginTop: 10,
    height: 25,
    width: 25,
  },
}));
const Avatar = (props) => {
  const { alt, src, readVersion } = props;
  const classes = useStyles();

  return (
    <MaterialAvatar
      alt={alt}
      src={src}
      className={readVersion ? classes.read : classes.sender}
    ></MaterialAvatar>
  );
};

Avatar.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  //determine if avatar should use styles for avatar use case of all messages read by other user
  readVersion: PropTypes.bool,
};

export default Avatar;
