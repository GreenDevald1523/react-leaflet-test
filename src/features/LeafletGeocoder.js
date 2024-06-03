import L from "leaflet"
import { useMap } from "react-leaflet"

export const LeafletGeocoder = () => {
  // Создание экземпляра карты
  const map = useMap()

  // Создание кнопки с функционалом поиска адреса
  L.Control.geocoder({
    defaultMarkGeocode: false,
  })
    .on("markgeocode", function (e) {
      const latlng = e.geocode.center
      L.marker(latlng).addTo(map).bindPopup(e.geocode.name).openPopup()
      map.fitBounds(e.geocode.bbox)
    })
    .addTo(map)
  return null
}
