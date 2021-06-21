import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import Card from "../../components/card/Card";
import CardList from "../../components/card/CardList";
import Map from "../../components/map/Map";

export default function Dashboard(props) {
  const [active, setActive] = useState({});
  const [hasId, setHasId] = useState(false);
  const { data, id } = props;

  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get("id")) {
      setActive(data.all.filter((item) => item.id === parseInt(id, 10))[0]);
      setHasId(true);
    } else {
      setHasId(false);
    }
  }, [id]);

  return (
    <div className="dashboard">
      <div>
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
            <Card
              heading="Arrived"
              icon="tick"
              intent="success"
              padding={false}
            >
              <CardList list={data.arrived} />
            </Card>
          </div>
        </div>
        <div>
          <Card heading="Map" icon="map">
            <Map data={data} />
          </Card>
        </div>
      </div>
      {hasId && (
        <div>
          <Card heading="Aktueller Tracker" icon="play" intent="success">
            {active.title}
            <br />
            {active.status}
            <br />
            {active.city}
            <br />
            {active.latitude}
            <br />
            {active.longitude}
            <br />
          </Card>
        </div>
      )}
    </div>
  );
}
