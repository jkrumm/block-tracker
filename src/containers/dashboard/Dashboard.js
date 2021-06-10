import React from "react";
import "./Dashboard.scss";
import Card from "../../components/card/Card";
import CardList from "../../components/card/CardList";

export default function Dashboard(props) {
  const { data } = props;
  console.log(data);

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
          <Card heading="Arrived" icon="tick" intent="success">
            <CardList list={data.arrived} />
          </Card>
        </div>
      </div>
      <div>
        <Card>Test</Card>
      </div>
    </div>
  );
}
