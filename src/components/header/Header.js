import React from "react";
import { Alignment, Button, Navbar } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <Navbar>
      <div>
        <Navbar.Group align={Alignment.LEFT}>
          <Link to="/">
            <Navbar.Heading>Block-Tracker</Navbar.Heading>
          </Link>
        </Navbar.Group>
        <Navbar.Group align={Alignment.Right}>
          <Link to="/">
            <Button className="bp3-minimal" icon="home" text="Dashboard" />
          </Link>
          <Navbar.Divider />
          <Link to="/add">
            <Button className="bp3-minimal" icon="add" text="Neuer Tracker" />
          </Link>
          {/*<Navbar.Divider />*/}
          {/*<Link to="/account">*/}
          {/*  <Button className="bp3-minimal" icon="person" text="Account" />*/}
          {/*</Link>*/}
          {/*<Navbar.Divider />*/}
          {/*<Link to="/logout">*/}
          {/*  <Button className="bp3-minimal" icon="log-out" text="Logout" />*/}
          {/*</Link>*/}
        </Navbar.Group>
      </div>
    </Navbar>
  );
}
