import React, { Fragment } from "react";
import { connect } from "react-redux";
import RegisterForm from "../components/RegisterForm";
import { registerUserAction } from "../actions/authAction";
import { Redirect, Route } from "react-router-dom";

const Register = (props) => {

  const {registerUserAction} = props;
  const {isLoading, error, isLoggedIn} = props.authProps;

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
    authProps: state.authReducer
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
