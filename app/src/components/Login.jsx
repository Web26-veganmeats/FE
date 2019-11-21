import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

const SigninDiv = styled.div`
  margin-top: 15vh;

  h2 {
    font-size: 1.75rem;
    color: #507657;
  }
  h1 {
    font-size: 3.25rem;
    background: -webkit-linear-gradient(
      305deg,
      #ffa05e,
      #ffa05e,
      #ffa05e,
      #91a799,
      #ffa05e,
      #ffa05e,
      #ffa05e
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  button {
    background-color: #f9ae40;
    border-radius: 100px;
    color: #fbfceb;
    font-size: 0.95rem;
    margin: 2% 0 2% 0;
    padding: 0.25% 2.5% 0.25% 2.5%;

    :hover {
      background-color: #ffa05e;
      transition: 0.75s;
    }
  }
  label {
    color: #507657;
    padding-bottom: 1%;
    font-size: 1.25rem;
  }
`;

const P = styled.p`
  font-style: italic;
  margin-top: 6%;
  color: #91a799;
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

const Login = props => {
  // console.log('Login Component Props: ', props)

  const handleSubmit = (values, tools) => {
    axiosWithAuth()
      .post("https://veganmeets-buildweek.herokuapp.com/api/auth/login", values)
      .then(response => {
        // console.log(response);
        alert(response.data.message);
        localStorage.setItem("token", response.data.token);
        props.history.push("/restaurantlist");
        tools.resetForm();
      })
      .catch(error => {
        alert(error.message);
      })
      .finally(() => {
        tools.setSubmitting(false);
      });
  };

  const routeChange = () => {
    props.history.push("/register");
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validate={validate}
      initialValues={{ username: "", password: "" }}
      render={props => {
        // console.log("login props", props);
        return (
          <SigninDiv>
            <h1>Vegan Meets</h1>
            <h2>Sign in to find vegan food in your area</h2>
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
            <P>or</P>
            <button onClick={routeChange}>Create New Account</button>
          </SigninDiv>
        );
      }}
    />
  );
};

export default Login;
