import React from "react";
import "./Dashboard.scss";
import Card from "../../components/card/Card";
import CardList from "../../components/card/CardList";
import MarkerInfoWindow from "../../components/googleMap/MarkerInfoWindow";
import Map from "../../components/map/Map";

export default function Dashboard(props) {
  const { data } = props;
  return (
    <div className="dashboard">
      <div>
        <div>
          <Card heading="On Hold" icon="pause" intent="danger">
            <CardList list={data.initiated} />
          </Card>
        </div>
        <div>
          <Card heading="Moving" icon="play" intent="warning">
            <CardList list={data.moving} />
          </Card>
        </div>
        <div>
          <Card heading="Arrived" icon="tick" intent="success" padding={false}>
            <CardList list={data.arrived} />
          </Card>
        </div>
      </div>
      <div>
        <Card heading="Map" icon="map">
          <Map />
        </Card>
      </div>
    </div>
  );
}
