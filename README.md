# Protomaps Front-End and Tutorial

This repository shows how to create a front-end and back-end to self-host Open Street Maps data using a serverless approach with the Protomaps tile service.

## Local hosting

For the back-end, you will need to have two services. The first service is a HTTP range addressing method that index into a .pmtiles file, which is a form of **tile service** serving tiles to your client application. The second service is a simple **file hosting service** for the artifacts your tiling service needs to look pretty e.g glyphs, sprites, fonts, images etc.

### Hosting the **tile service**

1. Get the Protomaps tiles (*.pmtiles) you want to host. You can host individual region level (~100MB) map tiles to the entire planet (~70GB). Two methods could achieve this:
- Download a complete .mbtiles from Maptiler for demonstration purposes only: [https://data.maptiler.com/downloads/tileset/osm/north-america/us/](https://data.maptiler.com/downloads/tileset/osm/north-america/us/)
- Download an entire planet.mbtiles file from the free host service Humanitarian OpenStreetMap Team: [https://osmlab.github.io/osm-qa-tiles/](https://osmlab.github.io/osm-qa-tiles/)
- Convert .mbtiles to .pmtiles with the [PMTiles executable](https://github.com/protomaps/go-pmtiles/releases):
```bash
pmtiles convert INPUT.mbtiles OUTPUT.pmtiles # OUTPUT should probably be changed to what your data is e.g planet.pmtiles, or usa.pmtiles, or san-francisco.pmtiles
```


Alternatively:
- Download the entire planet .pmtiles file directly from Protomaps (NOTE: this file did not work for me): [https://protomaps.com/docs/downloads/basemaps#current-version](https://protomaps.com/docs/downloads/basemaps#current-version) OR [https://r2-public.protomaps.com/protomaps-sample-datasets/protomaps-basemap-opensource-20230408.pmtiles](https://r2-public.protomaps.com/protomaps-sample-datasets/protomaps-basemap-opensource-20230408.pmtiles)
- Download a specific region .pmtiles file that you specify: [https://app.protomaps.com/downloads/small_map](https://app.protomaps.com/downloads/small_map)  

2. Host the .pmtiles with the Protomaps HTTP range addressing service, which indexes data into your .pmtiles file directly rather than reconstructing and serving tiles inside of a large and costly PostgreSQL database (like [Planetiler](https://github.com/onthegomap/planetiler)), saving 30-99% on OpenStreetMaps hosting costs:
```bash
pmtiles serve path/to/folder/with/OUTPUT.pmtiles --cors=*
```
3. Check the tiles are served correctly by navigating to your web browser:
```bash
http://localhost:8080/OUTPUT/0/0/0.mvt # This should download an .mvt file, which is a map vector tile file that the client will use to render the maps roads, water polygons, parks, pathways, etc. OUTPUT must match your .pmtiles filename without the .pmtiles extension
```

### Hosting the **file hosting service**
1. Host the styling files (included in this repo inside the *assets* folder) with the NPM module **serve**:
```bash
npm install --global serve
serve ./assets --cors=*
```
2. Check that the styling files are hosted correctly by navigating to your browser: [http://localhost:3000/layers.js](http://localhost:3000/layers.js)

### Hosting the front-end

In this directory:
```bash
npm install
npm run dev
```

Navigate to the front-end to view your app: [http://localhost:5173](http://localhost:5173)

## AWS hosting

WIP

## References

Original guide that was loosely followed, and to find out more information on how the layers.js and map styling is configured: https://gist.github.com/mikaelhg/edf65dfad43e240fb4c483587b5e7f93