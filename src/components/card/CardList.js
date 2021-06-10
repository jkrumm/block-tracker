import React from "react";
import "./Card.scss";

export default function CardList(props) {
  const { list } = props;
  return (
    <div className="cardList">
      {list !== undefined &&
        list.map((item) => (
          <div key={item.id}>
            {item.id} / {item.clientId}
          </div>
        ))}
    </div>
  );
}
