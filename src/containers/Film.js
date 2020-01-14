import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserListAction } from "../actions/userAction";
import FilmList from "../components/FilmList";

const Film = (props) => {

  const {isLoading, isLoggedIn, data, getUserListAction} = props;

  useEffect(() => {
    getUserListAction();
  }, [getUserListAction]);

  const onFilmClick = (el) => {
    console.log(el);
  };

  return (
    <div>
      {
        isLoading &&
        <div>
          Loading...
        </div>
      }
      {
        !isLoading && isLoggedIn && data.length &&
        <FilmList
          data={data}
          onFilmClick={onFilmClick}
        />
      }
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.authReducer.isLoading,
    error: state.authReducer.error,
    isLoggedIn: state.authReducer.isLoggedIn,
    data: state.userReducer.data,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUserListAction: () => dispatch(getUserListAction())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Film)
