import React, { Fragment } from "react";
import { connect } from "react-redux";
import AuthForm from "../components/AuthForm";
import { loginUserAction } from "../actions/authAction";
import { Redirect, Route } from "react-router-dom";

const Auth = (props) => {

  const {loginUserAction} = props;
  const {isLoading, error, isLoggedIn} = props.authProps;

  const authSubmit = (values) => {
    loginUserAction(values);
  };

  const getInitialValues = () => {
    return {
      username: 'vkravchik',
      password: 'qwe123qwe'
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
          <AuthForm
            onSubmit={authSubmit}
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
    loginUserAction: (user) => dispatch(loginUserAction(user)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)
