import React from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import L from "leaflet"
import "./App.css"
import { POSITION_C } from "../constants"
import { calculatePrice } from "../utils"
import {
  LeafletFirstRoutingMachine,
  LeafletSecondRoutingMachine,
  LeafletThirdRoutingMachine,
  LeafletFourthRoutingMachine,
  LeafletGeocoder,
} from "../features"

function App() {
  // Ререндер страницы для обновления данных
  setInterval(() => {
    const cards = document.querySelectorAll(".leaflet-routing-alt")

    // Расчет цен за проезд и добавление к верстке
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

    // Оставляем только 1 возможный самый краткий маршрут
    alternatives.forEach((el) => {
      if (el.childNodes.length > 1) el.childNodes[1].remove()
    })

    const addWaypointBtns = document.querySelectorAll(
      ".leaflet-routing-add-waypoint"
    )
    // Удаление кнопок по добавлению конечной точки
    addWaypointBtns.forEach((el) => el.remove())

    // for (let i = 1; i < markers.length - 1; i += 2) {
    //   markers[i].addEventListener("mousemove", (e) => {
    //     markers.forEach((el, index) => {
    //       if (index % 2 === 1 && index !== i) {
    //         console.log(el)
    //         e.target._leaflet_pos = el._leaflet_pos
    //         // el.style.transform = e.target.style.transform
    //         // console.log(el.style.transform, e.target.style.transform)
    //       }
    //     })
    //   })
    // }
    // const markers = document.querySelectorAll(".leaflet-marker-icon")
    // const fields = document.querySelectorAll(".leaflet-routing-geocoder")

    // for (let i = 1; i < markers.length - 1; i += 2) {
    // markers[markers.length - 1].addEventListener("mousemove", () => {
    // markers.forEach((el, index) => {
    //   el.setAttribute("draggable", "true")
    //   el.setAttribute("aria-grabbed", "true")
    //   el.setAttribute("aria-dropeffect", "move")

    //   if (index % 2 === 1 && index !== markers.length - 1) {
    //     el.lat = markers[markers.length - 1].lat
    //     el.lng = markers[markers.length - 1].lng
    //     el["_leaflet_pos"] = markers[markers.length - 1]["_leaflet_pos"]
    //     el.style.transform = markers[markers.length - 1].style.transform
    //     markers[index].style.opacity = 0
    //   }
    // })
    // markers[markers.length - 1].style["z-index"] = 100000000000
    // })
    // markers.forEach((el, index) => {
    //   if (index % 2 === 1 && index !== i) {
    //     markers[i]["_leaflet_pos"] = el._leaflet_pos
    //     markers[i].style.transform = el.style.transform
    //   }
    // })
    // }
  }, 500)

  return (
    // Создание базовой обертки для работы с картами Leaflet
    <MapContainer center={POSITION_C} zoom={14} scrollWheelZoom>
      {/* Создание тайла карты */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* Добавление инструмента для поиска адреса */}
      <LeafletGeocoder />
      {/* Добавление четырех маршрутов от разных точек до завода */}
      <LeafletFirstRoutingMachine />
      <LeafletSecondRoutingMachine />
      <LeafletThirdRoutingMachine />
      <LeafletFourthRoutingMachine />
    </MapContainer>
  )
}

// Создание компонента иконки
let DefaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
})
L.Marker.prototype.options.icon = DefaultIcon
export default App
