import React from "react";
import { CSVLink } from "react-csv";
import { Marker } from "../reducers/markerReducer";
import XY from "../types/XY";

export default function Download({
  data,
  coordsConverter,
}: {
  data: Marker[];
  coordsConverter: (coords: XY) => XY;
}) {
  const csvData = data
    .map(coordsConverter)
    .map((marker) => ({ X: marker.x, Y: marker.y }));

  return (
    <div>
      <CSVLink data={csvData} filename="digitize-plot.csv">
        Download CSV
      </CSVLink>
    </div>
  );
}
