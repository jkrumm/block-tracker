import React, { useEffect, useState } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import { Classes } from "@blueprintjs/core";
import Dashboard from "./containers/dashboard/Dashboard";
import Add from "./containers/add/Add";
import Account from "./containers/account/Account";
import "./App.scss";
import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";
import mapData from "./utils/mapData";

const dataMock = [
  {
    id: 1,
    title: "Medicine",
    updates: [
      {
        userId: 12,
        status: "initiated",
        date: new Date("2021-06-03T03:24:00"),
        city: "San Francisco",
        latitude: 40.74676238444609,
        longitude: -73.74235291674297,
      },
      {
        userId: 12,
        status: "arrived",
        date: new Date("2021-08-03T03:24:00"),
        city: "San Francisco",
        latitude: 38.980497937436745,
        longitude: -77.12940425855089,
      },
      {
        userId: 12,
        status: "moving",
        date: new Date("2021-07-03T03:24:00"),
        city: "San Francisco",
        latitude: 39.84400567315728,
        longitude: -75.14513784491164,
      },
    ],
  },
  {
    id: 2,
    title: "Medicine",
    updates: [
      {
        userId: 12,
        status: "initiated",
        date: new Date("2021-07-03T03:24:00"),
        city: "San Francisco",
        latitude: 39.84400567315728,
        longitude: -75.14513784491164,
      },
      {
        userId: 12,
        status: "moving",
        date: new Date("2021-08-03T03:24:00"),
        city: "San Francisco",
        latitude: 33.659273803469326,
        longitude: -84.34564001143809,
      },
    ],
  },
  {
    id: 3,
    title: "Medicine",
    updates: [
      {
        userId: 12,
        status: "initiated",
        date: new Date("2021-08-03T03:24:00"),
        city: "San Francisco",
        latitude: 39.84400567315728,
        longitude: -75.14513784491164,
      },
    ],
  },
  {
    id: 4,
    title: "Medicine",
    updates: [
      {
        userId: 12,
        status: "initiated",
        date: new Date("2021-09-03T03:24:00"),
        city: "San Francisco",
        latitude: 33.968389729420146,
        longitude: -118.13366765524793,
      },
    ],
  },
  {
    id: 5,
    title: "Medicine",
    updates: [
      {
        userId: 12,
        status: "initiated",
        date: new Date("2021-09-03T03:24:00"),
        city: "San Francisco",
        latitude: 37.796885886892355,
        longitude: -122.44721838218479,
      },
    ],
  },
];

const mappedData = mapData(dataMock);

export default withRouter(function App({ location }) {
  const [headline, setHeadline] = useState("/");
  const [id, setId] = useState("/");

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/add":
        setHeadline("Neuen Tracker hinzufügen");
        break;
      case "/account":
        setHeadline("Account");
        break;
      default:
        setHeadline("Dashboard");
    }
    console.log("mappedData", mappedData);
    const url = new URL(window.location.href);
    setId(url.searchParams.get("id"));
    console.log("id", id);
  }, [location.pathname, window.location.href]);

  return (
    <div className={`wrapper ${Classes.DARK}`}>
      <Header />
      <main className="main-grid-container">
        <Headline headline={headline} />
        <Switch>
          <Route path="/" exact>
            <Dashboard data={mappedData} id={id} />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
      </main>
      <footer>
        Copyright: SS 2021 / Hochschuule München - Blockchain Seminar /
        Johannes, Trajche, Kok
      </footer>
    </div>
  );
});
