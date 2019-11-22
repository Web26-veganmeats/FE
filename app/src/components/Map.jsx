// import React, { useState } from "react";
// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
// import Geocode from "react-geocode";

// Geocode.setLanguage("en");
// Geocode.setRegion("us");
// Geocode.setApiKey("AIzaSyBgIzCkaMx7LAt5OG8l3q7UuJZLW7yhysM");

// var mapStyles = {
//   width: "55%",
//   height: "400px",
//   marginTop: "70px"
// };

// const Maps = props => {
//   const [lat, setLat] = useState(null);
//   const [lng, setLng] = useState(null);

//   Geocode.fromAddress(props.rest.street_address).then(
//     response => {
//       const { lat, lng } = response.results[0].geometry.location;
//       console.log(lat, lng);
//       setLat(lat);
//       setLng(lng);
//     },
//     error => {
//       console.error(error);
//     }
//   );

//   console.log(lat, lng);

//   return (
//     <Map
//       google={props.google}
//       zoom={8}
//       style={mapStyles}
//       initialCenter={{ lat: { lat }, lng: { lng } }}
//     >
//       <Marker position={{ lat: { lat }, lng: { lng } }} />
//     </Map>
//   );
// };

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyBgIzCkaMx7LAt5OG8l3q7UuJZLW7yhysM"
// })(Maps);
