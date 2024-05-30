import L from "leaflet"
import { useMap } from "react-leaflet"

const LeafletGeocoder = () => {
  const map = useMap()

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

export default LeafletGeocoder
