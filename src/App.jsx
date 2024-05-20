import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import "./App.css";
import LeafletRoutingMachine from "./features/LeafletRoutingMachine";
import LeafletGeocoder from "./features/LeafletGeocoder";
import React from "react";
import { PickTransport } from "./features/PickTransport";

function App() {
  const position = [55.751244, 37.618423];
  return (
    <div className="App">
      <MapContainer center={position} zoom={15} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Стартовая точка
          </Popup>
        </Marker>
        <LeafletGeocoder />
        <LeafletRoutingMachine />
        {/* <PickTransport /> */}
      </MapContainer>
    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;
export default App;
