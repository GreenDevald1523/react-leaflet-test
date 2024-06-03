import L from "leaflet"
import "leaflet-routing-machine"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"
import { createControlComponent } from "@react-leaflet/core"
import { POSITION_B1, POSITION_C } from "../constants"

// Создание маршрута №4
const createFourthRoutineMachineLayer = () => {
  const instance = L.Routing.control({
    // Стартовые точки
    waypoints: [
      L.latLng(POSITION_B1[0], POSITION_B1[1]),
      L.latLng(POSITION_C[0], POSITION_C[1]),
    ],
    // Добавление полей ввода для маршрутов
    geocoder: L.Control.Geocoder.nominatim(),
    // Параметры стилизации линии маршрута
    lineOptions: {
      styles: [{ color: "yellow", weight: 4 }],
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

export const LeafletFourthRoutingMachine = createControlComponent(
  createFourthRoutineMachineLayer
)
