import L from "leaflet"
import "leaflet-routing-machine"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"
import { createControlComponent } from "@react-leaflet/core"
import { POSITION_A, POSITION_C } from "../constants"
import { calculatePrice } from "./calculatePrice"

const createFirstRoutineMachineLayer = () => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(POSITION_A[0], POSITION_A[1]),
      L.latLng(POSITION_C[0], POSITION_C[1]),
    ],
    geocoder: L.Control.Geocoder.nominatim(),
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }],
    },
    show: true,
    addWaypoints: true,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
  })

  setInterval(() => {
    const cards = document.querySelectorAll(".leaflet-routing-alt")
    cards.forEach((card) => {
      if (!card.childNodes[1].textContent.includes("rub")) {
        if (!card.childNodes[1].textContent.includes("km"))
          card.childNodes[1].textContent += `, ${calculatePrice(
            card.childNodes[1].textContent.split("m")[0] / 1000
          )} rub (fuel consumption)`
        else
          card.childNodes[1].textContent += `, ${calculatePrice(
            card.childNodes[1].textContent.split("km")[0]
          )} rub (fuel consumption)`
      }
    })

    const alternatives = document.querySelectorAll(
      ".leaflet-routing-alternatives-container"
    )
    alternatives.forEach((el) => {
      if (el.childNodes.length > 1) el.childNodes[1].remove()
    })
  }, 500)

  return instance
}

const LeafletFirstRoutingMachine = createControlComponent(
  createFirstRoutineMachineLayer
)

export default LeafletFirstRoutingMachine
