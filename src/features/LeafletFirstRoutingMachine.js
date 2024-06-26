import L from "leaflet"
import "leaflet-routing-machine"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"
import { createControlComponent } from "@react-leaflet/core"
import { POSITION_A, POSITION_C } from "../constants"

// Создание маршрута №1
const createFirstRoutineMachineLayer = () => {
  const instance = L.Routing.control({
    // Стартовые точки
    waypoints: [
      L.latLng(POSITION_A[0], POSITION_A[1]),
      L.latLng(POSITION_C[0], POSITION_C[1]),
    ],
    // Добавление полей ввода для маршрутов
    geocoder: L.Control.Geocoder.nominatim(),
    // Параметры стилизации линии маршрута
    lineOptions: {
      styles: [{ color: "blue", weight: 4 }],
    },
    show: true,
    // Включена возможность ввода адреса в поля
    addWaypoints: true,
    // Включена возможность отображать предварительный маршрут при передвижении точек
    routeWhileDragging: true,
    // Включена возможность двигать мышкой точки
    draggableWaypoints: true,
  })

  return instance
}

export const LeafletFirstRoutingMachine = createControlComponent(
  createFirstRoutineMachineLayer
)
