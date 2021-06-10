import React from "react";
import { Card as CardBlueprint, H4, Icon } from "@blueprintjs/core";
import "./Card.scss";
import {} from "@blueprintjs/core/lib/esnext/common/classes";

export default function Card(props) {
  const { heading, icon, intent, padding, children } = props;

  return (
    <div className={padding ? "card" : "card card-no-padding"}>
      <CardBlueprint elevation="1">
        <div className={`card-heading ${intent}`}>
          <Icon icon={icon} className="headline-icon" iconSize={22} />
          <H4>{heading}</H4>
        </div>
        {children}
      </CardBlueprint>
    </div>
  );
}
