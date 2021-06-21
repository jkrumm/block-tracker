import * as React from "react";
import { useState } from "react";
import MapGL from "react-map-gl";
import { useHistory } from "react-router-dom";

import Pins from "./pins";

const TOKEN = process.env.REACT_APP_MAPBOX_API_KEY;

export default function Map(props) {
  const history = useHistory();
  const { data } = props;
  const [viewport, setViewport] = useState({
    latitude: 39,
    longitude: -96,
    zoom: 3,
    bearing: 0,
    pitch: 0,
  });

  const setActiveTracker = (id) => {
    const url = new URL(window.location.href);
    if (url.searchParams.get("id") === id.toString()) {
      history.push({ search: null });
    } else {
      const params = new URLSearchParams();
      params.append("id", id);
      history.push({ search: params.toString() });
    }
  };

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
        <Pins data={data.all} onClick={setActiveTracker} />
      </MapGL>
    </>
  );
}
