import './style.css'
import gl from 'maplibre-gl';
import './node_modules/maplibre-gl/dist/maplibre-gl.css';
import style from './osm-styles.json';

const mapOptions  = {
  container: 'map',
  style: style,
  attributionControl: false,
  minZoom: 2,
  maxZoom: 14,
  zoom: 9.3,
  center: {lng: -122.43, lat: 37.77},
  pitch: 0,
  bearing: 0
}

const map = new gl.Map(mapOptions);