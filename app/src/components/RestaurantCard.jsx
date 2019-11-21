import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRest } from "../actions/actions";
import NavBar from "./NavBar";
import salad from "./photos/salad.jpg";
import styled from "styled-components";
import background from "../img/sparse.jpg";
import Maps from "./Map";

const CardImg = styled.img`
  border: 2px solid #91a799;
  padding: 10px;
`;

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.75);
  margin: 3% 10% 3% 10%;
  padding: 3% 10% 3% 10%;
`;

const CardBody = styled.div`
             width: 100%
            margin: 20px;
            h3{
              color: #28590c;
            }
        `;

const CardText = styled.h1`
  font-size: 1.5rem;
  font-family: "Raleway", sans-serif;
  color: #819486;
`;

const CardSubtitle = styled.h3`
  font-size: 1.4rem;
  font-family: "Raleway", sans-serif;
  color: black;
`;

const ResturantCard = props => {
  console.log("Restaurant Card Props: ", props);

  useEffect(() => {
    props.fetchRest();
  }, []);

  return (
    <div>
      <NavBar />
      <img src={background} alt="background" className="form_background" />
      {props.restData.map((rest, key) => {
        if (props.match.params.id === rest.id.toString())
          return (
            <Card key={rest.id}>
              <CardBody>
                <CardImg top width="20%" src={salad} alt="food card image " />
                <CardText>{rest.name}</CardText>
                <CardSubtitle>Phone: {rest.phone}</CardSubtitle>
                <CardSubtitle>
                  Menu Items:{" "}
                  {rest.menuItems.map((item, key) => {
                    return <div key={item.id}>{item.name}</div>;
                  })}
                </CardSubtitle>
                <CardSubtitle>Ratings: </CardSubtitle>
                <CardSubtitle>{`Located on ${rest.street_address} ${rest.city}, ${rest.state} ${rest.zip_code}`}</CardSubtitle>
                <Maps key={key} rest={rest} />
              </CardBody>
            </Card>
          );
      })}
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
  { fetchRest }
)(ResturantCard);

// Mariela code
{
  /* <div>
          <NavBar />
          <Card>
            <CardBody>
              <CardImg top width="20%" src= {salad} alt="food card image " />
              <CardText>{props.restData.name}</CardText>
              <CardSubtitle>Menu Items: </CardSubtitle>
              <CardSubtitle>Price: </CardSubtitle>
              <CardSubtitle>Ratings: </CardSubtitle>
              <CardSubtitle> Location: </CardSubtitle>
            </CardBody>
          </Card>
    </div> */
}
