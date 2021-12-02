import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "./store/utils/thunkCreators";
import { Authentication } from "./components/Auth";
import { Home, SnackbarError } from "./components";

const Routes = (props) => {
  const { user, fetchUser } = props;
  const [errorMessage, setErrorMessage] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    if (user.error) {
      // check to make sure error is what we expect, in case we get an unexpected server error object
      if (typeof user.error === "string") {
        setErrorMessage(user.error);
      } else {
        setErrorMessage("Internal Server Error. Please try again");
      }
      setSnackBarOpen(true);
    }
  }, [user.error]);

  if (props.user.isFetchingUser) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {snackBarOpen && (
        <SnackbarError
          setSnackBarOpen={setSnackBarOpen}
          errorMessage={errorMessage}
          snackBarOpen={snackBarOpen}
        />
      )}
      <Switch>
        <Route path="/login">
          <Authentication
            formMessage="Welcome back!"
            shouldShowLogin={true}
            submitButtonText="Login"
            toggleHelpText="Don't have an account?"
            toggleButtonText="Create an account"
          />
        </Route>
        <Route path="/register">
          <Authentication
            formMessage="Create an account."
            shouldShowLogin={false}
            submitButtonText="Create"
            toggleHelpText="Already have an account?"
            toggleButtonText="Login"
          />
        </Route>
        <Route
          exact
          path="/"
          render={(props) =>
            props.user?.id ? <Home /> : <Redirect to="/login" />
          }
        />
        <Route path="/home" component={Home} />
      </Switch>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser() {
      dispatch(fetchUser());
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
