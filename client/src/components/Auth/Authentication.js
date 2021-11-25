import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import { login, register } from "../../store/utils/thunkCreators";
import { makeStyles } from "@material-ui/core/styles";
import WelcomeImage from "./WelcomeImage";
import LoginAndRegistration from "./LoginOrSignup";
import PropTypes from "prop-types";
import userType from "../../types/user";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
  },
  authContainer: {
    padding: "3rem",
    width: "auto",
    [theme.breakpoints.down("sm")]: {
      padding: "1.5rem",
    },
  },
  toggleButtons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& button": {
      marginLeft: "1rem",
      minWidth: "200px",
      padding: theme.button.padding,
      backgroundColor: "white",
      color: theme.palette.primary.main,
    },
    "& button:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
    "& p": {
      color: theme.palette.gray,
    },
  },
}));

const Authentication = (props) => {
  const history = useHistory();
  const {
    user,
    login,
    register,
    shouldShowLogin,
    formMessage,
    submitButtonText,
    toggleHelpText,
    toggleButtonText,
  } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    if (shouldShowLogin) {
      login({ username, password });
    } else {
      const email = event.target.email.value;
      const confirmPassword = event.target.confirmPassword.value;
      if (password.length < 6) {
        setFormErrorMessage({
          password: "Password must be at least 6 characters long",
        });
        return;
      }
      if (password !== confirmPassword) {
        setFormErrorMessage({ confirmPassword: "Passwords must match" });
        return;
      }

      register({ username, email, password });
    }
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container spacing={0} className={classes.container}>
      <WelcomeImage />
      <Grid item xs={12} sm={12} md={7}>
        <Box className={classes.authContainer}>
          <Box className={classes.toggleButtons}>
            <Typography>{toggleHelpText}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                shouldShowLogin
                  ? history.push("/register")
                  : history.push("/login")
              }
            >
              {toggleButtonText}
            </Button>
          </Box>
          <LoginAndRegistration
            formErrorMessage={formErrorMessage}
            shouldShowLogin={shouldShowLogin}
            formMessage={formMessage}
            handleSubmit={handleSubmit}
            submitButtonText={submitButtonText}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

Authentication.propTypes = {
  user: PropTypes.shape(userType),
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  shouldShowLogin: PropTypes.bool.isRequired,
  formMessage: PropTypes.string.isRequired,
  submitButtonText: PropTypes.string.isRequired,
  toggleHelpText: PropTypes.string.isRequired,
  toggleButtonText: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
