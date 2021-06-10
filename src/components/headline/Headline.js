import React from "react";
import "./Headline.scss";
import { Button, ButtonGroup, Divider } from "@blueprintjs/core";

export default function Headline(props) {
  const { headline } = props;
  return (
    <div className="headline">
      <div>
        <h1>{headline}</h1>
      </div>
      <div>
        <div>
          clientId: <span>clientId</span>
        </div>
        <div>
          <ButtonGroup minimal>
            <Button text="5" icon="pause" intent="danger" />
            <Divider />
            <Button text="2" icon="play" intent="warning" />
            <Divider />
            <Button text="12" icon="tick" intent="success" />
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}
