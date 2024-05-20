import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";


const LeafletRoutingMachine = () => {
  const map = useMap();
  map.on("click", function (e) {
      // setMarkers(prev => [...new Set([...prev, [e.latlng.lat, e.latlng.lng]])])
      // L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);

      L.Routing.control({
        waypoints: [
          L.latLng(55.751244, 37.618423),
          L.latLng(e.latlng.lat, e.latlng.lng),
        ],
        lineOptions: {
          styles: [
            {
              color: 'white',
              weight: 4,
              opacity: 0.7,
            },
          ],
        },
        routeWhileDragging: false,
        geocoder: L.Control.Geocoder.nominatim(),
        draggableWaypoints: true,
        addWaypoints: true,
        fitSelectedRoutes: false,
        showAlternatives: false,
      }).addTo(map);

  });
};

export default LeafletRoutingMachine;
