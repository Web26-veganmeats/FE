import React, { useState } from "react";

import { connect } from "react-redux";
import { createRest } from "../actions/actions";
import background from "../img/cutting_board.jpg";
import styled from "styled-components";
import NavBar from "./NavBar";

const AddDiv = styled.div`
  margin: 0 10% 0 10%;
  display: flex;
  flex-direction: column;
`;

const ItemDiv = styled.div`
  padding: 2% 10% 2% 10%;
`;

const RestDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.75);
  height: 250px;
  padding-top: 5%;
  color: #91a799;
`;

const Button = styled.button`
  border-radius: 100px;
  background-color: #ffa820;
  color: #fbfceb;
  font-size: 1.25rem;
  margin: 3% 0 2% 0;
  padding: 0.5% 3% 0.5% 3%;
`;

const H1 = styled.h1`
  color: #29590d;
  margin-top: 10vh;
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

const AddRestForm = props => {
  // console.log('AddRestForm Props: ', props)

  const [newRest, setNewRest] = useState(initialValues);

  const handleChange = event => {
    setNewRest({ ...newRest, [event.target.name]: event.target.value });
    // console.log(newRest)
  };

  const handleSubmit = event => {
    event.preventDefault();
    // console.log('Submit Working')
    props.createRest(newRest);
    // props.history.push('/restaurantlist')
  };

  return (
    <div>
      <NavBar />

      <img src={background} alt="background" className="form_background" />
      <AddDiv>
        <H1>Add a Restaurant</H1>
        <form onSubmit={handleSubmit}>
          <RestDiv>
            <ItemDiv>
              <label>Name: </label>

              <input
                name="name"
                placeholder="Restaurant Name"
                value={newRest.name}
                onChange={handleChange}
              />
            </ItemDiv>
            <ItemDiv>
              <label>Address: </label>

              <input
                name="street_address"
                placeholder="Street Address"
                value={newRest.street_address}
                onChange={handleChange}
              />
            </ItemDiv>
            <ItemDiv>
              <label>City: </label>

              <input
                name="city"
                placeholder="City"
                value={newRest.city}
                onChange={handleChange}
              />
            </ItemDiv>
            <ItemDiv>
              <label>State: </label>

              <input
                name="state"
                placeholder="State"
                value={newRest.state}
                onChange={handleChange}
              />
            </ItemDiv>
            <ItemDiv>
              <label>Zip: </label>

              <input
                name="zip_code"
                placeholder="Zip Code"
                value={newRest.zip_code}
                onChange={handleChange}
              />
            </ItemDiv>
            <ItemDiv>
              <label>Phone: </label>

              <input
                name="phone"
                placeholder="Phone Number"
                value={newRest.phone}
                onChange={handleChange}
              />
            </ItemDiv>
          </RestDiv>
          <div className="last-item">
            <label>Hours: </label>

            <input
              name="hours"
              placeholder="Hours"
              value={newRest.hours}
              onChange={handleChange}
            />
          </div>

          <Button type="submit">Submit</Button>
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
  { createRest }
)(AddRestForm);


//           );
//         }}
//       />
//     </div>
//   );
// };
