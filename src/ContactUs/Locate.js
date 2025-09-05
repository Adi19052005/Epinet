import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function Locate() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [73.01583143791812, 19.11160794523556],
      zoom: 14,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    const el = document.createElement("div");
    el.className = "custom-marker";
    el.title = "epinet";

    new mapboxgl.Marker(el)
      .setLngLat([73.01583143791812, 19.11160794523556])
      .setPopup(
        new mapboxgl.Popup().setHTML(`
          <div style="
            background: #fff;
            padding: 12px 18px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            text-align: center;
            font-family: 'Segoe UI', Tahoma, sans-serif;
          ">
            <h3 style="color: #000; margin: 0; font-size: 18px;">Epinet Info Pvt.Ltd</h3>
            <p style="color: #555; margin: 5px 0 0; font-size: 14px;">
              Your trusted partner in tech
            </p>
          </div>
        `)
      )
      .addTo(map.current);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mt-5 mb-3">
          <h1 style={{ color: "#ffaa00", fontWeight: "bold" }}>Find us here!</h1>
        </div>
      </div>
      <div className="row mb-5 border-bottom">
        <div
          ref={mapContainer}
          style={{
            width: "100%",
            height: "500px",
            borderRadius: "12px",
          }}
        />
      </div>

      <style>
        {`
          .custom-marker {
            width: 25px;
            height: 25px;
            background-color: red;
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}

export default Locate;
