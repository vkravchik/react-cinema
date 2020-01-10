import React  from "react";
import { Field, reduxForm } from "redux-form";
import { myInput } from "./Fields";
import { requiredInput } from "../Validation";

const AuthForm = (props) => {
  const {handleSubmit} = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <div>
          <Field
            name="username"
            component={myInput}
            type="text"
            placeholder="Username"
            validate={[requiredInput]}
          />
        </div>
      </div>

      <div>
        <label>Password</label>
        <div>
          <Field
            name="password"
            component={myInput}
            type="password"
            placeholder="Password"
            validate={[requiredInput]}
          />
        </div>
      </div>

      <div>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  )
};

export default reduxForm({
  form: 'auth'
})(AuthForm);
