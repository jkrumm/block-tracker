import * as React from "react";
import { useState } from "react";
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

import ControlPanel from "./control-panel";
import Pins from "./pins";
import CityInfo from "./city-info";

import CITIES from "./cities.json";

const TOKEN = process.env.REACT_APP_MAPBOX_API_KEY;

const geolocateStyle = {
  top: 0,
  left: 0,
  padding: "10px",
};

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: "10px",
};

const navStyle = {
  top: 72,
  left: 0,
  padding: "10px",
};

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: "10px",
};

export default function Map(props) {
  const [viewport, setViewport] = useState({
    latitude: 39,
    longitude: -96,
    zoom: 3,
    bearing: 0,
    pitch: 0,
  });
  const [popupInfo, setPopupInfo] = useState(null);

  return (
    <>
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}
      >
        <Pins data={CITIES} onClick={setPopupInfo} />

        {popupInfo && (
          <Popup
            tipSize={5}
            anchor="top"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeOnClick={false}
            onClose={setPopupInfo}
          >
            <CityInfo info={popupInfo} />
          </Popup>
        )}

        <GeolocateControl style={geolocateStyle} />
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </MapGL>
    </>
  );
}
