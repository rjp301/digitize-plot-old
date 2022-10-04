import React from "react";
import { XY } from "../helpers/types";

export default function DataTable(props: {
  data: XY[];
  coordsConverter: (coords: XY) => XY;
}) {
  const { data, coordsConverter } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>X</th>
          <th>Y</th>
        </tr>
      </thead>
      <tbody>
        {data.map(coordsConverter).map((row) => (
          <tr>
            <td>{row.x}</td>
            <td>{row.y}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
