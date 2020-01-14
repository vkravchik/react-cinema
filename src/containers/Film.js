import React, { useEffect } from "react";
import { connect } from "react-redux";
import FilmList from "../components/FilmList";
import { getFilmListAction } from "../actions/filmAction";

const Film = (props) => {

  const {getFilmListAction} = props;
  const {isLoading, isLoggedIn} = props.authProps;
  const {data} = props.filmProps;

  useEffect(() => {
    getFilmListAction();
  }, [getFilmListAction]);

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
    authProps: state.authReducer,
    filmProps: state.filmReducer,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFilmListAction: () => dispatch(getFilmListAction())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Film)
