import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import RegisterForm from "../components/RegisterForm";
import { addUserAction } from "../actions/userAction";
import { toggleLoading } from "../actions/dataAction";

const Register = (props) => {

  const {isLoading, addUserAction, toggleLoading} = props;

  useEffect(() => {

  }, [isLoading]);

  const registerSubmit = (values) => {
    addUserAction(values);
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
    </Fragment>
  )
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.dataReducer.isLoading
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addUserAction: (user) => dispatch(addUserAction(user)),
    toggleLoading: (isLoading) => dispatch(toggleLoading(isLoading))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
