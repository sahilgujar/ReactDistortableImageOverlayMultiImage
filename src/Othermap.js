import React, { useRef, useEffect, useState } from "react";
import ReactMapGL from "react-map-gl";

import ReactDistortableImageOverlay from "react-leaflet-distortable-imageoverlay";

// import { Map, TileLayer } from "react-leaflet";

export default function Othermap(props) {
  const geolocateStyle = {
    top: 0,
    left: 0,
    margin: 10,
  };
  const positionOptions = { enableHighAccuracy: true };

  let [viewport, setViewport] = React.useState({
    latitude: 23.362224,
    longitude: 70.059919,
    zoom: 14,
    width: window.innerWidth,
    height: window.innerHeight,
  });
  console.log(props.state.imageUrl1);

  return (
    <div id="map">
      <ReactMapGL
        mapStyle="mapbox://styles/airprobe/cklxlkolw3py017o5w9bxjt63"
        mapboxApiAccessToken={
          "pk.eyJ1IjoiYWlycHJvYmUiLCJhIjoiY2tkcmVqbDF2MDVqbzJ0b3FmeTcxcHFrZSJ9.YQR_ZeBEF43y8pV2KKvHcg"
        }
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {/* <TileLayer
          noWrap={true}
          attribution=""
          url="https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
        /> */}
      </ReactMapGL>
    </div>
  );
}
