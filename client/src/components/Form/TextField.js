import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField as MaterialTextField,
  InputAdornment,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2.5rem",
    "& .MuiInputBase-input": {
      fontWeight: 500,
      padding: ".25rem .3rem .75rem",
    },
    "& .MuiInputLabel-shrink": {
      transform: "translate(0, -1.25rem) scale(0.75)",
    },
    "& .MuiFormLabel-root": {
      color: theme.palette.gray, // or black
      fontSize: "1.25rem",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "1px solid rgb(213, 223, 238)",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottom: "2px solid rgb(58, 141, 255)",
    },
  },
  inputAdornment: {
    padding: ".25rem 0.3rem 0.75rem;",
  },
}));

/**
 * Reusable input field component
 */
const TextField = (props) => {
  const { label, name, type, endAdornment, minLength } = props;
  const classes = useStyles();
  return (
    <MaterialTextField
      fullWidth={true}
      label={label}
      aria-label={label}
      name={name}
      type={type}
      className={classes.root}
      InputProps={{
        minLength: minLength,
        endAdornment: endAdornment && (
          <InputAdornment className={classes.inputAdornment} position="end">
            {endAdornment}
          </InputAdornment>
        ),
      }}
    />
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  //type of input element must be valid HTML5 input type
  type: PropTypes.string,
  //suffix or action at the end of the input
  endAdornment: PropTypes.node,
  minLength: PropTypes.number,
};

export default TextField;
