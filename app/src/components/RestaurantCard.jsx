import React,{useState, useEffect} from 'react';
import axios from "axios";
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
    const {id, name, Description, Price, Ratings, Location, MenuItems } = props;
    const [foodCard, setFoodCard] = useState([])

     useEffect(()=>{
        Promise.all(
          foodCard.map(function(element){
            return axios.get(element)
              .then(res =>{
                return res.data;
              })
          }))
          .then(res1 => {
            setFoodCard(res1)
          })
    },)
  
    return (
        <div key={id}>
          <NavBar />
      <Card>
        <CardBody>
          <CardImg top width="20%" src= {salad} alt="food card image " />
          <CardText>  Description: {Description} </CardText>
          <CardSubtitle>MenuItems: {MenuItems} </CardSubtitle>
          <CardSubtitle>Price: {Price}</CardSubtitle>
          <CardSubtitle>Ratings: {Ratings}</CardSubtitle>
          <CardSubtitle> Location: {Location} </CardSubtitle>
        </CardBody>
      
      </Card>
    </div>
  );
};

export default ResturantCard; 