const layers = [
    {
      "id": "background",
      "type": "background",
      "paint": {"background-color": "#fff"}
    },
    {
      "id": "landcover_wood",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": ["==", "class", "wood"],
      "paint": {
        "fill-color": "rgba(218, 218, 218, 0.51)",
        "fill-opacity": {"base": 1, "stops": [[8, 0.6], [22, 1]]}
      }
    },
    {
      "id": "landcover-grass",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": ["==", "class", "grass"],
      "paint": {"fill-color": "rgba(236, 235, 235, 1)", "fill-opacity": 1}
    },
    {
      "id": "water",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "water",
      "layout": {"visibility": "visible"},
      "paint": {}
    },
    {
      "id": "building",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "building",
      "layout": {"visibility": "visible"},
      "paint": {
        "fill-color": {
          "base": 1,
          "stops": [
            [15.5, "rgba(241, 240, 240, 1)"],
            [16, "rgba(212, 212, 212, 1)"]
          ]
        },
        "fill-antialias": true
      }
    },
    {
      "id": "building-top",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "building",
      "layout": {"visibility": "visible"},
      "paint": {
        "fill-translate": {"base": 1, "stops": [[14, [0, 0]], [16, [-2, -2]]]},
        "fill-outline-color": "rgba(181, 180, 179, 1)",
        "fill-color": "rgba(249, 249, 249, 1)",
        "fill-opacity": {"base": 1, "stops": [[13, 0], [16, 1]]}
      }
    },
    {
      "id": "boundary-admin2",
      "type": "line",
      "metadata": {},
      "source": "openmaptiles",
      "source-layer": "boundary",
      "filter": ["==", "admin_level", 2],
      "layout": {"visibility": "visible"},
      "paint": {"line-width": 0.5}
    },
    {
      "id": "transportation",
      "type": "line",
      "metadata": {},
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": ["all", ["==", "$type", "LineString"], ["!=", "class", "pier"]],
      "layout": {"visibility": "visible"},
      "paint": {
        "line-width": {"stops": [[12, 0.5], [16, 1], [17, 3]]},
        "line-color": {
          "stops": [[12, "rgba(212, 209, 209, 1)"], [16, "rgba(8, 8, 8, 1)"]]
        }
      }
    },
    {
      "id": "road_area_pier",
      "type": "fill",
      "metadata": {},
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": ["all", ["==", "$type", "Polygon"], ["==", "class", "pier"]],
      "layout": {"visibility": "visible"},
      "paint": {
        "fill-color": "rgb(242,243,240)",
        "fill-antialias": true,
        "fill-opacity": 1
      }
    },
    {
      "id": "road_pier",
      "type": "line",
      "metadata": {},
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": ["all", ["==", "$type", "LineString"], ["in", "class", "pier"]],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "rgb(242,243,240)",
        "line-width": {"base": 1.2, "stops": [[15, 1], [17, 4]]}
      }
    },
    {
      "id": "place_label_other",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 8,
      "filter": [
        "all",
        ["==", "$type", "Point"],
        ["!in", "class", "city", "state", "country", "continent"]
      ],
      "layout": {
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": ["Noto Sans Regular"],
        "text-max-width": 6,
        "text-size": {"stops": [[6, 10], [12, 14]]},
        "visibility": "visible",
        "text-anchor": "center"
      },
      "paint": {
        "text-color": "hsl(0, 10%, 25%)",
        "text-halo-color": "hsl(0, 0%, 100%)",
        "text-halo-blur": 0,
        "text-halo-width": 2
      }
    },
    {
      "id": "highway-name-minor",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", "$type", "LineString"],
        ["in", "class", "minor", "service", "track"]
      ],
      "layout": {
        "text-size": {"base": 1, "stops": [[13, 12], [14, 13]]},
        "text-font": ["Noto Sans Regular"],
        "text-field": "{name:latin} {name:nonlatin}",
        "symbol-placement": "line",
        "text-rotation-alignment": "map",
        "visibility": "visible"
      },
      "paint": {
        "text-halo-blur": 0.5,
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-width": 1,
        "text-halo-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "highway-name-major",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 12.2,
      "filter": ["in", "class", "primary", "secondary", "tertiary", "trunk"],
      "layout": {
        "text-size": {"base": 1, "stops": [[13, 12], [14, 13]]},
        "text-font": ["Noto Sans Regular"],
        "text-field": "{name:latin} {name:nonlatin}",
        "symbol-placement": "line",
        "text-rotation-alignment": "map"
      },
      "paint": {
        "text-halo-blur": 0.5,
        "text-color": "rgba(0, 0, 0, 1)",
        "text-halo-width": 1,
        "text-halo-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "place_label_city",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "maxzoom": 16,
      "filter": ["all", ["==", "$type", "Point"], ["==", "class", "city"]],
      "layout": {
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-font": ["Noto Sans Regular"],
        "text-max-width": 10,
        "text-size": {"stops": [[3, 12], [8, 16]]}
      },
      "paint": {
        "text-color": "hsl(0, 0%, 0%)",
        "text-halo-color": "hsla(0, 0%, 100%, 0.75)",
        "text-halo-blur": 0,
        "text-halo-width": 2
      }
    },
    {
      "id": "place-continent",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "filter": ["==", "class", "continent"],
      "layout": {
        "visibility": "visible",
        "text-field": "{name:latin}",
        "text-font": ["Metropolis Extra Bold Italic"],
        "text-max-width": 4,
        "text-size": 13,
        "text-line-height": 1.5
      },
      "paint": {"text-halo-color": "#fff", "text-halo-width": 2}
    },
    {
      "id": "place-country",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "filter": ["==", "class", "country"],
      "layout": {
        "visibility": "visible",
        "text-field": "{name:latin}",
        "text-font": ["Noto Sans Bold"],
        "text-size": 12
      },
      "paint": {"text-halo-color": "#fff", "text-halo-width": 1.5}
    },
    {
      "id": "poi-level-1",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "poi",
      "minzoom": 14,
      "filter": [
        "all",
        ["==", "$type", "Point"],
        ["<=", "rank", 14],
        ["has", "name"]
      ],
      "layout": {
        "text-padding": 2,
        "text-font": ["Noto Sans Italic"],
        "text-anchor": "top",
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-offset": [0, 0.6],
        "text-size": 12,
        "text-max-width": 9
      },
      "paint": {
        "text-halo-blur": 0.8,
        "text-color": "rgba(72, 71, 71, 1)",
        "text-halo-width": 1,
        "text-halo-color": "#ffffff"
      }
    },
    {
      "id": "waterway-name",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "waterway",
      "minzoom": 13,
      "filter": ["all", ["==", "$type", "LineString"], ["has", "name"]],
      "layout": {
        "text-font": ["Noto Sans Italic"],
        "text-size": 14,
        "text-field": "{name:latin} {name:nonlatin}",
        "text-max-width": 5,
        "text-rotation-alignment": "map",
        "symbol-placement": "line",
        "text-letter-spacing": 0.2,
        "symbol-spacing": 350
      },
      "paint": {
        "text-color": "rgba(6, 6, 6, 1)",
        "text-halo-width": 1.5,
        "text-halo-color": "rgba(245, 242, 242, 0.83)"
      }
    },
    {
      "id": "water-name-lakeline",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "water_name",
      "filter": ["==", "$type", "LineString"],
      "layout": {
        "text-font": ["Noto Sans Italic"],
        "text-size": 14,
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-max-width": 5,
        "text-rotation-alignment": "map",
        "symbol-placement": "line",
        "symbol-spacing": 350,
        "text-letter-spacing": 0.2
      },
      "paint": {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1.5,
        "text-halo-color": "rgba(255, 255, 255, 0)"
      }
    },
    {
      "id": "water-name-ocean",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "water_name",
      "filter": ["all", ["==", "$type", "Point"], ["==", "class", "ocean"]],
      "layout": {
        "text-font": ["Noto Sans Italic"],
        "text-size": 14,
        "text-field": "{name:latin}",
        "text-max-width": 5,
        "text-rotation-alignment": "map",
        "symbol-placement": "point",
        "symbol-spacing": 350,
        "text-letter-spacing": 0.2,
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1.5,
        "text-halo-color": "rgba(255, 255, 255, 0)"
      }
    },
    {
      "id": "water-name-other",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "water_name",
      "filter": ["all", ["==", "$type", "Point"], ["!in", "class", "ocean"]],
      "layout": {
        "text-font": ["Noto Sans Italic"],
        "text-size": {"stops": [[0, 10], [6, 14]]},
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-max-width": 5,
        "text-rotation-alignment": "map",
        "symbol-placement": "point",
        "symbol-spacing": 350,
        "text-letter-spacing": 0.2,
        "visibility": "visible"
      },
      "paint": {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1.5,
        "text-halo-color": "rgba(255, 255, 255, 0)"
      }
    },
    {
      "id": "boundary_state",
      "type": "line",
      "metadata": {"mapbox:group": "a14c9607bc7954ba1df7205bf660433f"},
      "source": "openmaptiles",
      "source-layer": "boundary",
      "filter": ["==", "admin_level", 4],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(72, 70, 70, 1)",
        "line-width": {"base": 1.3, "stops": [[3, 1], [22, 15]]},
        "line-blur": 0.4,
        "line-dasharray": [0.5, 2],
        "line-opacity": 1
      }
    },
    {
      "id": "boundary_country",
      "type": "line",
      "metadata": {"mapbox:group": "a14c9607bc7954ba1df7205bf660433f"},
      "source": "openmaptiles",
      "source-layer": "boundary",
      "filter": ["==", "admin_level", 2],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(82, 81, 81, 1)",
        "line-width": {"base": 1.1, "stops": [[3, 1], [22, 20]]},
        "line-blur": {"base": 1, "stops": [[0, 0.4], [22, 4]]},
        "line-opacity": 1
      }
    }
  ];