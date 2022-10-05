import React from "react";
import { XY } from "../helpers/types";

export default function DataTable(props: {
  data: XY[];
  coordsConverter: (coords: XY) => XY;
}) {
  const { data, coordsConverter } = props;

  return (
    <table>
      <thead className="border-b-2">
        <tr>
          <th>X</th>
          <th>Y</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        {data.map((row, index) => (
          <tr key={index}>
            <td className="text-center">{row.x}</td>
            <td className="text-center">{row.y}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
