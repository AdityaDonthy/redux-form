import React from "react";
import { Field, reduxForm } from "redux-form";
import { customInput, customSelect } from "./fields";
import { required, minLength, maxLength, matchesPassword, asyncValidate } from "./../validators";
import './RegisterForm.css';
function RegisterFormComponent({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={customInput}
        name="firstname"
        type="text"
        label="First Name"
        validate={[required]}
      />
      <Field
        component={customInput}
        name="lastname"
        type="text"
        label="Last Name"
        validate={[required]}
      />
      <Field
        component={customInput}
        name="username"
        type="text"
        label="Username"
        validate={[required, minLength, maxLength]}
      />
    <Field
        name="password"
        component={customInput}
        type="password"
        label="Password"
        validate={[required]}
    />
    <Field
        name="confirmPassword"
        component={customInput}
        type="password"
        label="Confirm Password"
        validate={[required, matchesPassword]}
    />
      <Field
        name="preference"
        component={customSelect}
        label="Preferred Spacing"
      />

      <Field
        component={customInput}
        type="checkbox"
        name="signUp"
        label="Wanna be connected to me? Sign up"
      />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

const RegisterForm = reduxForm({
  form: "register form",
  asyncValidate,
  asyncBlurFields: ['username']
})(RegisterFormComponent);

export default RegisterForm;
