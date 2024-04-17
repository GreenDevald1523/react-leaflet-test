import { useEffect} from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";


const LeafletRoutingMachine = () => {
  const map = useMap();
 
  useEffect(() => {
    map.on("click", function (e) {
      L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
      
      L.Routing.control({
        waypoints: [
          L.latLng(55.751244, 37.618423),
          L.latLng(e.latlng.lat, e.latlng.lng),
        ],
        lineOptions: {
          styles: [
           
            {
              color: 'purple',
              weight: 4,
              opacity: 0.7,
            },
          ],
        },
        routeWhileDragging: true,
        geocoder: L.Control.Geocoder.nominatim(),
        addWaypoints: true,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        showAlternatives: true,
      }).addTo(map);
    });
  }, []);
};

export default LeafletRoutingMachine;
