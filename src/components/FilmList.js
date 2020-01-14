import React from "react";

const FilmList = (props) => {
  const {data, onFilmClick} = props;

  return (
    <div>
      Hello
      <ul>
        {
          data.map(el => (
            <li key={el._id} onClick={() => onFilmClick(el)}>{el.name}</li>
          ))
        }
      </ul>
    </div>
  )
};

export default FilmList;
