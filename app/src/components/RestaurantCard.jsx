import React,{useState, useEffect} from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import { fetchRest } from '../actions/actions';
import NavBar from './NavBar';
import salad from "./photos/salad.jpg";
import styled from "styled-components";

        const CardImg = styled.img`
            border: 2px solid green;
            padding: 10px;
        `;
        
        const Card = styled.div`
           
            background-color:#ebeee2;
        `;

        const CardBody = styled.div`
             width: 100%
            margin: 20px;

        `;

        const CardText = styled.h1`
            font-size: 1.5rem;
            font-family: 'Raleway', sans-serif;
            color: black  
        `;

        const CardSubtitle = styled.h3`
            font-size: 1.4rem;
            font-family: 'Raleway', sans-serif;
            color: black  
        `;
       

const ResturantCard = (props) => {
    console.log('Restaurant Card Props: ', props.restData)

    useEffect(() => {
      props.fetchRest()
    }, [])
  
    return (
      <div>
        {props.restData.map(rest => {
          return (
            <Card>
              <CardBody>
                <CardImg top width="20%" src= {salad} alt="food card image " />
                <CardText>{rest.name}</CardText>
                <CardSubtitle>Phone: {rest.phone}</CardSubtitle>
                <CardSubtitle>Menu Items: {rest.menuItems.map(item => {
                  return (
                    <div>{item.name}</div>
                  )
                })}</CardSubtitle>
                <CardSubtitle>Ratings: </CardSubtitle>
                <CardSubtitle>{`Located on ${rest.street_address} ${rest.city}, ${rest.state} ${rest.zip_code}`}</CardSubtitle>
              </CardBody>
            </Card>
          )
        })}
      </div>
  );
};

export default connect(state => {
  return {
    restData: state.restData,
    isFetching: state.isFetching,
    error: state.error
  }
}, {fetchRest})(ResturantCard)



// Mariela code 
{/* <div>
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
    </div> */}