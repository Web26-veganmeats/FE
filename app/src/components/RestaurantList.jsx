import React, { useState, useEffect } from "react";

import NavBar from "./NavBar";

import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 100px;
  background-color: #ffa820;
  color: #fbfceb;
  font-size: 1.25rem;
`;

const Form = styled.form`
  text-align: center;
  padding-bottom: 3%;
`;

const Input = styled.input`
  text-align: center;
  background-color: #97be11;
  font-size: 100%;
  color: #fbfceb;
  margin: 2% 0 2% 0;
  border-radius: 50px;
`;

const ListLinks = styled.a`
  text-decoration: none;
  color: #28590c;
`;

const ListDivs = styled.div`
  background-color: #dfe9ac;
  padding: 1% 0 1% 0;
  margin: 2% 10% 2% 10%;
`;

const ResturantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    const getRestaurants = () => {
      axios
        .get("https://veganmeets-buildweek.herokuapp.com/api/restaurants")
        .then(response => {
          console.log(response.data);
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

export default ResturantList;
