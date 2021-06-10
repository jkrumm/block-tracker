/* eslint-disable */
import React from "react";
import GoogleMapReact from "google-map-react";
import GoogleMapStyle from "./GoogleMapStyle";

const mapStyle = GoogleMapStyle.mapStyle;

const GoogleMap = ({ children, ...props }) => (
  <GoogleMapReact
    bootstrapURLKeys={{
      key: process.env.REACT_APP_MAPS_API_KEY,
    }}
    options={{ styles: mapStyle }}
    {...props}
  >
    {children}
  </GoogleMapReact>
);

export default GoogleMap;
