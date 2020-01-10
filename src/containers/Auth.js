import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import AuthForm from "../components/AuthForm";
import { toggleLoading } from "../actions/dataAction";
import { getUsersAction } from "../actions/userAction";

const Auth = (props) => {

  const {isLoading, userList, toggleLoading, getUsersAction} = props;

  useEffect(() => {
    getUsersAction();
  }, []);

  const authSubmit = (values) => {
    console.log(values);
  };

  const getInitialValues = () => {
    return {
      username: 'vkravchik',
    }
  };

  const onClickItem = (item) => {
    console.log(item);
  };

  return (
    <Fragment>
      {/*<AuthForm*/}
      {/*  onSubmit={authSubmit}*/}
      {/*  initialValues={getInitialValues()}*/}
      {/*/>*/}
      {
        isLoading ?
          <div>Loading...</div> :
          <ul>
            {userList.map(el => (
              <li key={el._id}>{el.username} <button onClick={() => onClickItem(el)}>X</button></li>
            ))}
          </ul>
      }
    </Fragment>
  )
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.userReducer.isLoading,
    userList: state.userReducer.data,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleLoading: (isLoading) => dispatch(toggleLoading(isLoading)),
    getUsersAction: () => dispatch(getUsersAction())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)
