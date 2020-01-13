import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import AuthForm from "../components/AuthForm";

const Auth = (props) => {

  const { } = props;

  const authSubmit = (values) => {
    console.log(values);
  };

  const getInitialValues = () => {
    return {
      username: 'vkravchik',
      password: 'qwe123qwe'
    }
  };

  return (
    <Fragment>
      <AuthForm
        onSubmit={authSubmit}
        initialValues={getInitialValues()}
      />
    </Fragment>
  )
};

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)
