import React from "react";
import styled from "styled-components";
import { Map, TileLayer, Marker } from "react-leaflet";
import data from "../theme/data";

const Mapping = ({ lat, long, className }) => {
  const state = {
    lat: lat || 48.856697,
    long: long || 2.351462,
    zoom: 5.4,
  };
  const position = [state.lat, state.long];

  //console.log(position);

  return (
    <div className={className}>
      <Map center={position} zoom={state.zoom} className="earth">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png"
        />
        {data.cities.map((city, i) => (
          <Marker key={i} position={[city.lat, city.lng]}></Marker>
        ))}
      </Map>
    </div>
  );
};

export default styled(Mapping)`
  .earth {
    height: 70vh;
    width: 100%;
  }
`;
