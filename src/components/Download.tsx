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
    <div className="flex justify-center">
      <CSVLink data={csvData} filename="digitize-plot.csv">
        <button className="py-1 px-2 border-2 flex items-center justify-center">
          Download CSV
        </button>
      </CSVLink>
    </div>
  );
}
