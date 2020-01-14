import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import RegisterForm from "../components/RegisterForm";
import { registerUserAction } from "../actions/userAction";

const Register = (props) => {

  const {isLoading, data, error, registerUserAction} = props;

  useEffect(() => {

  }, []);

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
        !data.length && error &&
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
    isLoading: state.userReducer.isLoading,
    data: state.userReducer.data,
    error: state.userReducer.error,
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
