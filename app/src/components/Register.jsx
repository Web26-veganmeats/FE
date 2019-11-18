import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const SignupDiv = styled.div`
  margin-top: 20vh;
`;

const P = styled.p`
  font-style: italic;
`;

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

const Register = () => {
  const handleSubmit = (values, tools) => {
    axios
      .post(
        "https://veganmeets-buildweek.herokuapp.com/api/auth/register",
        values
      )
      .then(response => {
        console.log(response);
        tools.resetForm();
      })
      .catch(error => {
        alert(error.message);
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
          <SignupDiv>
            <h1>Vegan Meets</h1>
            <h2>Sign up to find vegan food in your area</h2>
            <Form className="signup-form">
              <label htmlFor="username">Sign Up</label>
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
            <P>or</P>
          </SignupDiv>
        );
      }}
    />
  );
};

export default Register;
