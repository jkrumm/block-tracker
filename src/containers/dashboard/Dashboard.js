import React from "react";
import "./Dashboard.scss";
import { ELEVATION_1 } from "@blueprintjs/core/lib/esnext/common/classes";
import Card from "../../components/card/Card";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div>
        <div>
          <Card heading="On Hold" icon="pause" intent="danger">
            Test
          </Card>
        </div>
        <div>
          <Card heading="Moving" icon="play" intent="warning">
            Test
          </Card>
        </div>
        <div>
          <Card heading="Arrived" icon="tick" intent="success">
            Test
          </Card>
        </div>
      </div>
      <div>
        <Card>Test</Card>
      </div>
    </div>
  );
}
