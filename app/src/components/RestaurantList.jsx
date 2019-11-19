import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { fetchRest } from '../actions/actions';
import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 100px;
  background-color: #FFA820;
  color: #FBFCEB;
  font-size: 1.25rem;
`;
const Form = styled.form`
  text-align: center;
  padding-bottom: 3%;
`;
const Input = styled.input`
  text-align: center;
  background-color: #97BE11;
  font-size: 100%;
  color: #FBFCEB;
  margin: 2% 0 2% 0;
  border-radius: 50px;
`;
const ListLinks = styled.a`
  text-decoration: none;
  color: #28590C;
`;
const ListDivs = styled.div`
  background-color: #DFE9AC;
  padding: 1% 0 1% 0;
  margin: 2% 10% 2% 10%;
`;
const ResturantList = (props) => {
  console.log('Resturant List Props:', props)

  const [restaurants, setRestaurants] = useState([]); 

  useEffect(() => {
    props.fetchRest()
  }, [])

  useEffect(() => {
    const getRestaurants = () => {
      axios
        .get("https://veganmeets-buildweek.herokuapp.com/api/restaurants")
        .then(response => {
          // console.log(response.data);
          setRestaurants(response.data);
        })
        .catch(error => {
          alert(error.message);
        });
    };
    getRestaurants();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = restaurants.filter(
      descriptions =>
        descriptions.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        descriptions.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        descriptions.zip_code.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, restaurants]);

  const changeHandler = event => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  var listRender;
  if (searchTerm.length === 0) {
    listRender = (
      <section>
        {restaurants.map(restaurant => {
          return (
            <ListDivs>
              <ListLinks href={`/restaurants/${restaurant.id}`}>
                <div>
                  <h2>{restaurant.name}</h2>
                  <p>City: {restaurant.city}</p>
                  <p>Zip Code: {restaurant.zip_code}</p>
                </div>
              </ListLinks>
            </ListDivs> 
          );
        })}
      </section>
    );
  } else {
    listRender = (
      <section className="search-form">
        {searchResults.map(restaurants => {
          return (
            <ListDivs>
              <ListLinks href={`/restaurants/${restaurants.id}`}>
                <div>
                  <h2>{restaurants.name}</h2>
                  <p>City: {restaurants.city}</p>
                  <p>Zip Code: {restaurants.zip_code}</p>
                </div>
              </ListLinks>
            </ListDivs>
          );
        })}
      </section>
    );
  }
  return (
    <div>
      <Form>
        <Input
          id="search"
          type="text"
          name="searchBar"
          placeholder="Search"
          onChange={changeHandler}
          value={searchTerm}
        />
      </Form>
      <Button>Add Restaurant</Button>
      <section>{listRender}</section>
    </div>
  );
};


export default connect(state => {
  return {
    restData: state.restData,
    isFetching: state.isFetching,
    error: state.error
  }
}, {fetchRest})(ResturantList)

// export default ResturantList