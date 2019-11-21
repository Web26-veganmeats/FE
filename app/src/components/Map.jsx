import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import axios from "axios";

var mapStyles = {
  width: "55%",
  height: "400px",
  marginTop: "5%"
};

const Maps = props => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  console.log(lat, lng);

  const addressStr = `${props.rest.street_address
    .split(" ")
    .join("+")},+${props.rest.city.split(" ").join("+")},+${props.rest.state}`;

  useEffect(() => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${addressStr}&key=AIzaSyBgIzCkaMx7LAt5OG8l3q7UuJZLW7yhysM`
      )
      .then(response => {
        console.log("response", response.data.results[0].geometry.location);
        setLat(response.data.results["0"].geometry.location.lat);
        setLng(response.data.results["0"].geometry.location.lng);
      })
      .catch(error => {
        alert(error.message);
      });
  }, []);

  const latNum = parseFloat(lat);
  const lngNum = parseFloat(lng);

  return (
    <Map
      google={props.google}
      zoom={12}
      style={mapStyles}
      initialCenter={{ lat: { latNum }, lng: { lngNum } }}
    >
      <Marker position={{ lat: { latNum }, lng: { lngNum } }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBgIzCkaMx7LAt5OG8l3q7UuJZLW7yhysM"
})(Maps);
