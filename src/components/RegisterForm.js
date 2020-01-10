import React  from "react";
import { Field, reduxForm } from "redux-form";
import { myInput } from "./Fields";
import { requiredInput, correctEmail, matchInput, passwordLength } from "../Validation";

const RegisterForm = (props) => {
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
        <label>Email</label>
        <div>
          <Field
            name="email"
            component={myInput}
            type="email"
            placeholder="Email"
            validate={[requiredInput, correctEmail]}
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
            validate={[requiredInput, passwordLength]}
          />
        </div>
      </div>

      <div>
        <label>Confirm Password</label>
        <div>
          <Field
            name="confirmPassword"
            component={myInput}
            type="password"
            placeholder="Confirm Password"
            validate={[requiredInput, matchInput]}
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
  form: 'registration'
})(RegisterForm);
