import React, { Fragment } from "react";
import { connect } from "react-redux";
import RegisterForm from "../components/RegisterForm";
import { registerUserAction } from "../actions/userAction";

const Register = (props) => {

  const {isLoading, error, registerUserAction} = props;

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
