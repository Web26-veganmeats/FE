import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const AddDiv = styled.div`
  margin-top: 10vh;
`;

const ItemDiv = styled.div`
  padding: 0 2% 0 2%;
`;

const RestDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 5%;
  width: 100%;
  height: 250px;
`;

const MenuDescDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const Textarea = styled.textarea`
  width: 100%;
`;

const Button = styled.button`
  border-radius: 100px;
  background-color: #ffa820;
  color: #fbfceb;
  font-size: 1.25rem;
  margin: 2% 0 2% 0;
  padding: 0.5% 3% 0.5% 3%;
`;

const H1 = styled.h1`
  color: #29590d;
`;

const Label = styled.label`
  color: #29590d;
`;

const validate = ({ name, address, city, zip_code, phone }) => {
  const errors = {};

  if (!name) {
    errors.name = "Restaurant name is required";
  }
  if (!address) {
    errors.address = "Address is required";
  }
  if (!phone) {
    errors.phone = "Phone number is required";
  }
  if (!city) {
    errors.city = "City is required";
  }
  if (!zip_code) {
    errors.zip_code = "Zip Code is required";
  }
  return errors;
};

const AddRestForm = props => {
  const handleSubmit = (values, tools) => {
    console.log("hello, world!");
    axios
      .post(
        "https://veganmeets-buildweek.herokuapp.com/api/restaurants/new",
        values
      )
      .then(response => {
        console.log(response);
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

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        validate={validate}
        initialValues={{
          name: "",
          address: "",
          city: "",
          zip_code: "",
          phone: "",
          hours: "",
          menu: "",
          menu_price: "",
          menu_description: ""
        }}
        render={props => {
          return (
            <AddDiv>
              <H1>Add a Restaurant</H1>
              <Form className="add-form">
                <RestDiv>
                  <ItemDiv>
                    <Label htmlFor="name">Name: </Label>
                    <Field
                      className="field"
                      type="text"
                      name="name"
                      placeholder="Restaurant Name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                    />
                  </ItemDiv>
                  <ItemDiv>
                    <Label htmlFor="address">Address: </Label>
                    <Field
                      className="field"
                      type="text"
                      name="address"
                      placeholder="Address"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="error"
                    />
                  </ItemDiv>
                  <ItemDiv>
                    <Label htmlFor="city">City: </Label>
                    <Field
                      className="field"
                      type="text"
                      name="city"
                      placeholder="City"
                    />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="error"
                    />
                  </ItemDiv>
                  <ItemDiv>
                    <Label htmlFor="zip_code">Zip Code: </Label>
                    <Field
                      className="field"
                      type="text"
                      name="zip_code"
                      placeholder="Zip Code"
                    />
                    <ErrorMessage
                      name="zip_code"
                      component="div"
                      className="error"
                    />
                  </ItemDiv>
                  <ItemDiv>
                    <Label htmlFor="hours">Hours: </Label>
                    <Field
                      className="field"
                      type="text"
                      name="hours"
                      placeholder="Hours"
                    />
                  </ItemDiv>
                  <ItemDiv>
                    <Label htmlFor="menu">Menu Item: </Label>
                    <Field
                      className="field"
                      type="text"
                      name="menu"
                      placeholder="Menu Item"
                    />
                  </ItemDiv>
                  <ItemDiv>
                    <Label htmlFor="menu_price">Menu Item Price: </Label>
                    <Field
                      className="field"
                      type="text"
                      name="menu_price"
                      placeholder="Menu Item Price"
                    />
                  </ItemDiv>
                </RestDiv>
                <MenuDescDiv>
                  <div>
                    <Label htmlFor="menu_description">
                      Menu Item Description:{" "}
                    </Label>
                    <Textarea
                      className="field"
                      type="textarea"
                      name="menu_description"
                      placeholder="Menu Item Description"
                    />
                    <Button type="submit">Submit</Button>
                  </div>
                </MenuDescDiv>
              </Form>
            </AddDiv>
          );
        }}
      />
    </div>
  );
};

export default AddRestForm;
