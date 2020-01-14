import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import AuthForm from "../components/AuthForm";
import { loginUserAction } from "../actions/userAction";
import { Redirect, Route } from "react-router-dom";

const Auth = (props) => {

  const {isLoading, data, error, isLoggedIn, loginUserAction} = props;

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
        isLoggedIn &&
        <Route>
          <Redirect to='/dashboard'/>
        </Route>
      }
    </Fragment>
  )
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.userReducer.isLoading,
    data: state.userReducer.data,
    error: state.userReducer.error,
    isLoggedIn: state.userReducer.isLoggedIn,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginUserAction: async (user) => dispatch(loginUserAction(user))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)
