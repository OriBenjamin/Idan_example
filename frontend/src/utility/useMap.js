import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
function useMap() {
  const mapRef = useRef(null);
  const API_KEY = "AIzaSyD4J0LPRji3WKllVxLji7YDbd5LSt6HA7o"; //For now - AIzaSyD4J0LPRji3WKllVxLji7YDbd5LSt6HA7o
  const [loaded, setLoaded] = useState(false);
  // TODO: find a way to combine map styling with MAP-ID and markers
  useEffect(() => {
    if (loaded) return;
    setLoaded(true);
    const loader = new Loader({
      apiKey: API_KEY,
      version: "weekly",
    });
    let map;
    loader.importLibrary("maps").then(async (mapsLibrary) => {
      if (mapsLibrary && mapRef.current) {
        const { Map } = mapsLibrary;
        map = new Map(mapRef.current, {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
          visible: true,
          fullscreenControl: false,
          disableDefaultUI: true,
          motionTracking: false,
          motionTrackingControl: false,
          mapId: "8e0a97af9386fef",
          styles: [
            {
              featureType: "all",
              elementType: "all",
              stylers: [
                {
                  visibility: "on",
                },
              ],
            },
            {
              featureType: "all",
              elementType: "labels",
              stylers: [
                {
                  visibility: "on",
                },
                {
                  saturation: "-100",
                },
              ],
            },
            {
              featureType: "all",
              elementType: "labels.text.fill",
              stylers: [
                {
                  saturation: 36,
                },
                {
                  color: "#000000",
                },
                {
                  lightness: 40,
                },
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "all",
              elementType: "labels.text.stroke",
              stylers: [
                {
                  visibility: "off",
                },
                {
                  color: "#000000",
                },
                {
                  lightness: 16,
                },
              ],
            },
            {
              featureType: "all",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "administrative",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 20,
                },
              ],
            },
            {
              featureType: "administrative",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 17,
                },
                {
                  weight: 1.2,
                },
              ],
            },
            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 20,
                },
              ],
            },
            {
              featureType: "landscape",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#4d6059",
                },
              ],
            },
            {
              featureType: "landscape",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#4d6059",
                },
              ],
            },
            {
              featureType: "landscape.natural",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#4d6059",
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [
                {
                  lightness: 21,
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#4d6059",
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#4d6059",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [
                {
                  visibility: "on",
                },
                {
                  color: "#7f8d89",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#7f8d89",
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#7f8d89",
                },
                {
                  lightness: 17,
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#7f8d89",
                },
                {
                  lightness: 29,
                },
                {
                  weight: 0.2,
                },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "geometry",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 18,
                },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#7f8d89",
                },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#7f8d89",
                },
              ],
            },
            {
              featureType: "road.local",
              elementType: "geometry",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 16,
                },
              ],
            },
            {
              featureType: "road.local",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#7f8d89",
                },
              ],
            },
            {
              featureType: "road.local",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#7f8d89",
                },
              ],
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 19,
                },
              ],
            },
            {
              featureType: "water",
              elementType: "all",
              stylers: [
                {
                  color: "#2b3638",
                },
                {
                  visibility: "on",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [
                {
                  color: "#2b3638",
                },
                {
                  lightness: 17,
                },
              ],
            },
            {
              featureType: "water",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#24282b",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#24282b",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "labels",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "labels.text",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
          ],
        });

        loader.importLibrary("marker").then(async (markerLibrary) => {
          if (markerLibrary && mapRef.current) {
            let { AdvancedMarkerElement } = markerLibrary;
            const marker = new AdvancedMarkerElement({
              map: map,
              position: { lat: -34.397, lng: 150.644 },
              title: "Uluru",
              
            });
          }
        });
      }
    });
  }, []);

  return mapRef;
}

function Map() {
  const mapRef = useMap();
  return <div ref={mapRef} style={{ height: "100vh", width: "100%" }}></div>;
}
export { useMap, Map };
