import React, { Fragment } from "react";
import { connect } from "react-redux";
import RegisterForm from "../components/RegisterForm";
import { registerUserAction } from "../actions/userAction";
import { Redirect, Route } from "react-router-dom";

const Register = (props) => {

  const {isLoading, error, isLoggedIn, registerUserAction} = props;

  const registerSubmit = (values) => {
    registerUserAction(values);
  };

  const getInitialValues = () => {
    return {
      username: 'vkravchik',
      email: 'vkravchik@gmail.com',
      password: '123321',
      confirmPassword: '123321'
    }
  };

  const canOpen = () => (
    isLoggedIn && !error &&
    <Route>
      <Redirect to='/dashboard'/>
    </Route>
  );

  const haveError = () => (
    error &&
    <div>
      Something went wrong:
      <br/>
      {error.toString()}
    </div>
  );

  return (
    <Fragment>
      {
        isLoading ?
          <div>
            Loading...
          </div> :
          <RegisterForm
            onSubmit={registerSubmit}
            initialValues={getInitialValues()}
          />
      }
      {
        canOpen()
      }
      {
        haveError()
      }
    </Fragment>
  )
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.authReducer.isLoading,
    error: state.authReducer.error,
    isLoggedIn: state.authReducer.isLoggedIn,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    registerUserAction: (user) => dispatch(registerUserAction(user))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
