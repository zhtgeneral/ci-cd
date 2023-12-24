'use client'

import React, { useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader"

const Map = () => {
  useEffect(() => {
    const initMap = async () => {

      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY || '',
        version: "weekly",
      });

      loader.importLibrary("maps").then(({ Map, FeatureType }) => {      
        const map = new Map(
          document.getElementById('map') as HTMLElement, {
            center: { lat: 49.26594635460253, lng: -123.25404364869289 },
            zoom: 15,
            mapTypeControl: false,
            minZoom: 1,
            maxZoom: 17,
            streetViewControl: false,
            fullscreenControl: true,
            mapId: '6833101661be6977'
          }
        );  

        const markers: [google.maps.LatLngLiteral, string][] = [
          [{ lat: 49.26253920614481, lng: -123.25543317104778}, "The West Parkade"],
          [{ lat: 49.26758275597024, lng: -123.25269941641704}, "Good ol IKB"]
        ]

        markers.forEach(([position, title], i) => {
          const marker = new google.maps.Marker({
            position: position,
            map: map,
            title: title,
            animation: google.maps.Animation.DROP,
            label: ``,
            optimized: false
          })
        })


        // const featureLayer = map.getFeatureLayer('LOCALITY' as google.maps.FeatureType);
        // const featureLayer = map.getFeatureLayer(google.maps.FeatureType.LOCALITY);
        const featureLayer = map.getFeatureLayer(FeatureType.ADMINISTRATIVE_AREA_LEVEL_1);

        const featureStyleOptions: google.maps.FeatureStyleOptions = {
          strokeColor: '#810FCB',
          strokeOpacity: 1.0,
          strokeWeight: 3.0,
          fillColor: '#810FCB',
          fillOpacity: 0.5
        };
      });
    };
    initMap();
  }, []);

  return (
    <div>
      <div id='map' style={{ width: '600px', height: '300px', position: 'relative'}} />
    </div>
  )
};

export default Map;
