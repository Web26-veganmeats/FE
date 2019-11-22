import React, { useState } from "react";
import { connect } from "react-redux";
import { updateRest } from "../actions/actions";
import styled from "styled-components";
import background from "../img/cutting_board.jpg";
import NavBar from "./NavBar";

const AddDiv = styled.div`
  margin: 0 10% 0 10%;
  display: flex;
  flex-direction: column;
`;

const ItemDiv = styled.div`
  padding: 2% 10% 2% 10%;
  width: 30%;
`;

const RestDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.75);
  height: 270px;
  padding-top: 5%;
  color: #91a799;
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
  margin-top: 4vh;
`;

const initialValues = {
  name: "",
  street_address: "",
  city: "",
  state: "",
  zip_code: "",
  phone: "",
  hours: ""
};

const UpdateRestForm = props => {
  const [updateRest, setUpdateRest] = useState(initialValues);

  const handleChange = event => {
    setUpdateRest({ ...updateRest, [event.target.name]: event.target.value });
    // console.log(updateRest)
  };

  const handleSubmit = event => {
    event.preventDefault();
    // console.log('handleSubmit updateRest Object: ', updateRest)
    props.updateRest(updateRest, props.match.params.id);
    // props.history.push(`/restaurantlist`)
  };

  return (
    <div>
      <NavBar />
      <img src={background} alt="background" className="form_background" />
      <AddDiv>
        <H1>Update Restaurant</H1>
        <form onSubmit={handleSubmit}>
          <RestDiv>
            <ItemDiv>
              <label>Name: </label>

              <input
                name="name"
                placeholder="Restaurant Name"
                value={updateRest.name}
                onChange={handleChange}
              />
            </ItemDiv>
            <ItemDiv>
              <label>Address: </label>

              <input
                name="street_address"
                placeholder="Street Address"
                value={updateRest.street_address}
                onChange={handleChange}
              />
            </ItemDiv>
            <ItemDiv>
              <label>City: </label>

              <input
                name="city"
                placeholder="City"
                value={updateRest.city}
                onChange={handleChange}
              />
            </ItemDiv>
            <ItemDiv>
              <label>State: </label>

              <input
                name="state"
                placeholder="State"
                value={updateRest.state}
                onChange={handleChange}
              />
            </ItemDiv>
            <ItemDiv>
              <label>Zip: </label>

              <input
                name="zip_code"
                placeholder="Zip Code"
                value={updateRest.zip_code}
                onChange={handleChange}
              />
            </ItemDiv>
            <ItemDiv>
              <label>Phone: </label>

              <input
                name="phone"
                placeholder="Phone Number"
                value={updateRest.phone}
                onChange={handleChange}
              />
            </ItemDiv>
          </RestDiv>
          <div className="last-item">
            <label>Hours: </label>

            <input
              name="hours"
              placeholder="Hours"
              value={updateRest.hours}
              onChange={handleChange}
            />
          </div>

          <Button>Submit Changes</Button>
        </form>
      </AddDiv>
    </div>
  );
};

export default connect(
  state => {
    return {
      restData: state.restData,
      isFetching: state.isFetching,
      error: state.error
    };
  },
  { updateRest }
)(UpdateRestForm);
