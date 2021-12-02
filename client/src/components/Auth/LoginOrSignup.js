import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  Typography,
  FormControl,
  Button,
  Link,
  FormHelperText,
} from "@material-ui/core";
import TextField from "../Form/TextField";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: "8.5rem",
    margin: "auto",
    "& h4": {
      marginBottom: "1rem",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "550px",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "700px",
    },
  },
  submitContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2.5rem",
    "& button": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.white,
      boxShadow: "none",
      minWidth: "150px",
      padding: theme.button.padding,
    },
    "& button:hover": {
      backgroundColor: theme.palette.primary.focused,
    },
  },
  inputAdornmentLink: {
    color: theme.palette.primary.main,
  },
}));

/**
 * Login and registration form
 */
const LoginOrSignup = (props) => {
  const classes = useStyles();
  const {
    shouldShowLogin,
    formMessage,
    submitButtonText,
    handleSubmit,
    formErrorMessage,
  } = props;
  return (
    <Box className={classes.formContainer}>
      <Typography variant="h4" className={classes.title}>
        {formMessage}
      </Typography>
      <form onSubmit={handleSubmit}>
        {shouldShowLogin ? (
          <Grid>
            <Grid>
              <FormControl fullWidth={true} margin="normal" required>
                <TextField
                  label="Username"
                  aria-label="username"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <FormControl fullWidth={true} margin="normal" required>
              <TextField
                label="Password"
                aria-label="password"
                type="password"
                name="password"
                endAdornment={
                  <Typography className={classes.inputAdornmentLink}>
                    <Link href="#" onClick={(ev) => ev.preventDefault()}>
                      Forgot?
                    </Link>
                  </Typography>
                }
              />
            </FormControl>
          </Grid>
        ) : (
          <Grid>
            <Grid>
              <FormControl margin="normal" fullWidth={true}>
                <TextField
                  label="Username"
                  aria-label="username"
                  name="username"
                  type="text"
                  required
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl margin="normal" fullWidth={true}>
                <TextField
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                  required
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl
                margin="normal"
                fullWidth={true}
                error={
                  !!formErrorMessage.password ||
                  formErrorMessage.confirmPassword
                }
              >
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  minLength={6}
                  name="password"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword ||
                    formErrorMessage.password}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl
                margin="normal"
                fullWidth={true}
                error={!!formErrorMessage.confirmPassword}
              >
                <TextField
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  name="confirmPassword"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
        )}
        <Grid className={classes.submitContainer}>
          <Button type="submit" variant="contained" size="large">
            {submitButtonText}
          </Button>
        </Grid>
      </form>
    </Box>
  );
};

LoginOrSignup.propTypes = {
  shouldShowLogin: PropTypes.bool.isRequired,
  formMessage: PropTypes.string.isRequired,
  submitButtonText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formErrorMessage: PropTypes.object.isRequired,
};

export default LoginOrSignup;
