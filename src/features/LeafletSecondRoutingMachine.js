import L from "leaflet"
import "leaflet-routing-machine"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"
import { createControlComponent } from "@react-leaflet/core"
import { POSITION_B, POSITION_C } from "../constants"

const createSecondRoutineMachineLayer = () => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(POSITION_B[0], POSITION_B[1]),
      L.latLng(POSITION_C[0], POSITION_C[1]),
    ],
    geocoder: L.Control.Geocoder.nominatim(),
    lineOptions: {
      styles: [{ color: "red", weight: 4 }],
    },
    show: true,
    addWaypoints: true,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  })

  return instance
}

const LeafletSecondRoutingMachine = createControlComponent(
  createSecondRoutineMachineLayer
)

export default LeafletSecondRoutingMachine
