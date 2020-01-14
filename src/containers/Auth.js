import React, { Fragment } from "react";
import { connect } from "react-redux";
import AuthForm from "../components/AuthForm";
import { loginUserAction } from "../actions/userAction";
import { Redirect, Route } from "react-router-dom";

const Auth = (props) => {

  const {isLoading, error, isLoggedIn, loginUserAction} = props;

  const authSubmit = (values) => {
    loginUserAction(values);
  };

  const getInitialValues = () => {
    return {
      username: 'vkravchik',
      password: 'qwe123qwe'
    }
  };

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
        isLoggedIn && !error &&
        <Route>
          <Redirect to='/dashboard'/>
        </Route>
      }
      {
        error &&
        <div>
          Something went wrong:
          <br/>
          {error.toString()}
        </div>
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
    loginUserAction: (user) => dispatch(loginUserAction(user)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)
