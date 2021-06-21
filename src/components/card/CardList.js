import React from "react";
import "./Card.scss";
import { useHistory } from "react-router-dom";

export default function CardList(props) {
  const history = useHistory();
  const { list } = props;

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
    <div className="card-list">
      {list !== undefined &&
        list.map((item, index) => (
          <div key={index} onClick={() => setActiveTracker(item.id)}>
            <div>
              <span>{item.id}</span>
              <span>{item.city}</span>
            </div>
          </div>
        ))}
    </div>
  );
}
