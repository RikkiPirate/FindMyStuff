import React, { useState } from "react";
import { map_key } from "./../Constants/apiUrl";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { read } from "fs";

const mapStyles = {
  width: "20%",
  height: "20%"
};
const coordenate = { lat: 47.49855629475769, log: -122.14184416996333 };

function ShowMap(props) {
  const [coord, setCoord] = useState(coordenate);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      return <h1>"Geolocation is not supported by this browser."</h1>;
    }
  }
  getLocation();
  function showPosition(position) {
    setCoord({
      ...coord,
      lat: position.coords.latitude,
      log: position.coords.longitude
    });
  }
  debugger;
  console.log("map_key", process.env.REACT_APP_API_MAPS);
  console.log(coordenate);
  console.log(props);

  return (
    <div>
      <Map
        google={props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: coordenate.lat, lng: coordenate.log }}
        //   initialCenter={{ lat: lat, lng: long }}
      >
        <Marker
          position={{ lat: 47.49855629475769, lng: -122.14184416996333 }}
        />
        {/* <Marker position={{ lat: props.lat, lng: props.long }} /> */}
      </Map>
      {}
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: map_key
})(ShowMap);
