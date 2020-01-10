import React, { Fragment } from "react";

export const myInput = props => {
  const {type, placeholder, meta} = props;

  return (
    <Fragment>
      <input {...props.input} type={type} placeholder={placeholder}/>
      {
        meta.error &&
        meta.touched &&
        <div>
          {meta.error}
        </div>
      }
    </Fragment>

  )
};
