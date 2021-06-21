import * as React from "react";
import { useState } from "react";
import "./Add.scss";
import { Button, InputGroup } from "@blueprintjs/core";

export default function Add() {
  const [ethLogistic, setEthLogistic] = useState("");
  const [ethTarget, setEthTarget] = useState("");
  const [startGeo, setStartGeo] = useState({ lat: "", lng: "" });
  const [targetGeo, setTargetGeo] = useState({ lat: "", lng: "" });

  return (
    <div className="add">
      <h3>Ethereum Adresse des Logistikers</h3>
      <InputGroup
        large
        onChange={(val) => setEthLogistic(val.target.value)}
        placeholder="ETH Adresse"
        value={ethLogistic}
      />
      <br />
      <h3>Ethereum Adresse des Empfängers</h3>
      <InputGroup
        large
        onChange={(val) => setEthTarget(val.target.value)}
        placeholder="ETH Adresse"
        value={ethTarget}
      />
      <br />
      <h3>Geolocation des Senders</h3>
      <InputGroup
        large
        onChange={(val) =>
          setStartGeo({ lat: val.target.value, lng: startGeo.lng })
        }
        placeholder="Latitude"
        value={startGeo.lat}
      />
      <br />
      <InputGroup
        large
        onChange={(val) =>
          setStartGeo({ lat: startGeo.lat, lng: val.target.value })
        }
        placeholder="Longitude"
        value={startGeo.lng}
      />
      <br />
      <h3>Geolocation des Empfängers</h3>
      <InputGroup
        large
        onChange={(val) =>
          setTargetGeo({ lat: val.target.value, lng: targetGeo.lng })
        }
        placeholder="Latitude"
        value={targetGeo.lat}
      />
      <br />
      <InputGroup
        large
        onChange={(val) =>
          setTargetGeo({ lat: targetGeo.lat, lng: val.target.value })
        }
        placeholder="Longitude"
        value={targetGeo.lng}
      />
      <br />
      <br />
      <Button intent="success" fill large>
        Neuen Tracker hinzufügen
      </Button>
    </div>
  );
}
