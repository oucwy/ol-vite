import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import BingMaps from 'ol/source/BingMaps';
import XYZ from 'ol/source/XYZ';

const styles = [
  'RoadOnDemand',
  'Aerial', // 航测
  'AerialWithLabelsOnDemand',
  'CanvasDark',
  'OrdnanceSurvey',
];

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      // source: new OSM()
      // source: new BingMaps({
      //   key: 'AhHjMmNDXvOybkJo0zbkHZyioMSaULrD_BwwV76-ApSSYkdPwYz-TmJ8iCcDBROt',
      //   imagerySet: styles[2],
      //   // use maxZoom 19 to see stretched tiles instead of the BingMaps
      //   // "no photos at this zoom level" tiles
      //   // maxZoom: 19
      // 
      // google map
      source: new XYZ({
        // url: 'http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}'
        url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
      })
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
