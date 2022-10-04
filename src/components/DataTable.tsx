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
          <th>I</th>
          <th>X</th>
          <th>Y</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.id.substring(10,5)}</td>
            <td>{row.x}</td>
            <td>{row.y}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
