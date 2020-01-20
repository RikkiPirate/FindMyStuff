import React from "react";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "20%",
  height: "20%"
};
const coordenate = { lat: 47.49855629475769, log: -122.14184416996333 };

function ShowMap(props) {
  console.log(coordenate);
  console.log(props);
  return (
    <Map
      google={props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: coordenate.lat, lng: coordenate.long }}
      //   initialCenter={{ lat: lat, lng: long }}
    >
      <Marker position={{ lat: 47.49855629475769, lng: -122.14184416996333 }} />
      {/* <Marker position={{ lat: props.lat, lng: props.long }} /> */}
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDlHVTgZ4eMfXiMIRy6VUn_yIAlnKc2JEs"
})(ShowMap);
