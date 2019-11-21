import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRest } from '../actions/actions';
import { deleteRest } from '../actions/actions';
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
    console.log('Restaurant Card Props: ', props)

    useEffect(() => {
      props.fetchRest()
    }, [])

    const deleteRestaurant = (event, id) => {
      event.preventDefault();
      console.log('Props.match.params.id: ', props.match.params.id)
      props.deleteRest(props.match.params.id);
      props.history.push('/restaurantlist')
    }
  
    return (
      <div>
        <NavBar />
        {props.restData.map((rest, key) => {
          if(props.match.params.id === rest.id.toString())
          return (
            <Card key={rest.id}>
              <CardBody>
                <CardImg top width="20%" src= {salad} alt="food card image " />
                <CardText>{rest.name}</CardText>
                <CardSubtitle>Phone: {rest.phone}</CardSubtitle>
                <CardSubtitle>Menu Items: {rest.menuItems.map((item, key) => {
                  return (
                    <div key={item.id}>{item.name}</div>
                  )
                })}</CardSubtitle>
                <CardSubtitle>Ratings: </CardSubtitle>
                <CardSubtitle>{`Located on ${rest.street_address} ${rest.city}, ${rest.state} ${rest.zip_code}`}</CardSubtitle>
              </CardBody>
              <button onClick={deleteRestaurant}>Delete Restaurant</button>
              <Link to={`/updaterestform/${props.match.params.id}`}><button>Edit Restaurant</button></Link>
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
}, {fetchRest, deleteRest})(ResturantCard)



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