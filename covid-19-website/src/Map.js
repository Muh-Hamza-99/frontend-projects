import { MapContainer, TileLayer } from "react-leaflet";

import { showDataOnMap } from "./utility";
import "./Map.css";

const Map = ({ countries, casesType, center, zoom }) => {
  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  );
};

export default Map;
