import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import L from "leaflet"
import "./App.css"
import LeafletFirstRoutingMachine from "./features/LeafletFirstRoutingMachine"
import LeafletGeocoder from "./features/LeafletGeocoder"
import React from "react"
import { POSITION_C } from "./constants"
import LeafletSecondRoutingMachine from "./features/LeafletSecondRoutingMachine"

function App() {
  return (
    <MapContainer center={POSITION_C} zoom={14} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LeafletGeocoder />
      <LeafletFirstRoutingMachine />
      <LeafletSecondRoutingMachine />
    </MapContainer>
  )
}

let DefaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
})
L.Marker.prototype.options.icon = DefaultIcon
export default App
