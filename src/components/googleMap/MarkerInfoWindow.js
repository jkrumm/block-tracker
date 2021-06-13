/* eslint-disable */
import React, { Component } from "react";

// examples:
import GoogleMap from "./GoogleMap";

import USA_CENTER from "../../constants/usa_center";

// InfoWindow component
const InfoWindow = (props) => {
  const { key, lat, lang, type } = props;
  const infoWindowStyle = {
    position: "relative",
    bottom: 150,
    left: "-45px",
    width: 220,
    backgroundColor: "#293742",
    boxShadow: "0 2px 7px 1px rgba(0, 0, 0, 0.3)",
    padding: 10,
    fontSize: 14,
    zIndex: 100,
  };

  return (
    <div style={infoWindowStyle}>
      <div style={{ fontSize: 16 }}>{key}</div>
      <div style={{ fontSize: 16 }}>{lat}</div>
      <div style={{ fontSize: 16 }}>{lang}</div>
      <div style={{ fontSize: 16 }}>{type}</div>
    </div>
  );
};

// Marker component
const Marker = ({ show, key, lat, long, type }) => {
  let backgroundColor = "black";

  switch (type) {
    case "initiated":
      backgroundColor = "#db3737";
      break;
    case "moving":
      backgroundColor = "#d9822b";
      break;
    case "arrived":
      backgroundColor = "#0f9960";
      break;
  }

  const markerStyle = {
    border: "1px solid black",
    borderRadius: "50%",
    height: 15,
    width: 15,
    backgroundColor: backgroundColor,
    cursor: "pointer",
    zIndex: 10,
  };

  return (
    <>
      <div style={markerStyle} title={key} />
      {show && <InfoWindow key={key} lat={lat} lang={long} type={type} />}
    </>
  );
};

class MarkerInfoWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: props.places,
    };
  }

  // onChildClick callback can take two arguments: key and childProps
  onChildClickCallback = (key) => {
    this.setState((state) => {
      const index = state.places.findIndex((e) => e.id === key) + 1;
      console.log(index, state.places);
      state.places[index].show = !state.places[index].show;
      return { places: state.places };
    });
  };

  render() {
    const { places } = this.state;
    console.log("places", places);
    return (
      <>
        {places.length > 0 && (
          <GoogleMap
            defaultZoom={4}
            defaultCenter={USA_CENTER}
            bootstrapURLKeys={{
              key: process.env.REACT_APP_MAPS_API_KEY,
            }}
            onChildClick={this.onChildClickCallback}
          >
            {places.map((place) => (
              <Marker
                key={place.id}
                lat={place.latitude}
                lng={place.longitude}
                type={place.type}
                show={place.show}
              />
            ))}
          </GoogleMap>
        )}
      </>
    );
  }
}

export default MarkerInfoWindow;
