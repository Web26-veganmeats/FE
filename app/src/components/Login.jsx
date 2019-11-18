import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const validate = ({ username, password }) => {
  const errors = {};

  if (!username) {
    errors.username = "Username is required";
  }
  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 5) {
    errors.password = "Password must have at least 5 characters";
  }
  return errors;
};

const Login = () => {
  const handleSubmit = (values, tools) => {
    axiosWithAuth()
      .post("https://veganmeets-buildweek.herokuapp.com/api/auth/login", values)
      .then(response => {
        console.log(response);
        alert(response.data.message);
        tools.resetForm();
      })
      .catch(error => {
        window(error.message);
      })
      .finally(() => {
        tools.setSubmitting(false);
      });
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validate={validate}
      initialValues={{ username: "", password: "" }}
      render={props => {
        return (
          <div>
            <Form className="signup-form">
              <label htmlFor="username">Sign In</label>
              <ErrorMessage name="username" component="div" className="error" />
              <Field
                className="field"
                type="text"
                name="username"
                placeholder="Username"
              />
              <ErrorMessage name="password" component="div" className="error" />
              <Field
                className="field"
                type="password"
                name="password"
                placeholder="Password"
              />
              <button type="submit" disabled={props.isSubmitting}>
                {props.isSubmitting ? "Submitting" : "Submit"}
              </button>
            </Form>
          </div>
        );
      }}
    />
  );
};

export default Login;
