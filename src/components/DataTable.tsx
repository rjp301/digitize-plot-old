import React from "react";
import XY from "../types/XY";

export default function DataTable(props: {
  data: XY[];
  coordsConverter: (coords: XY) => XY;
}) {
  const { data, coordsConverter } = props;
  const toString = (num: number) =>
    num.toLocaleString(undefined, { minimumFractionDigits: 2 });

  return (
    <table>
      <thead className="border-b-2">
        <tr>
          <th>X</th>
          <th>Y</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        {data.map((row, index) => {
          const { x, y } = coordsConverter(row);
          return (
            <tr key={index}>
              <td className="text-center">{toString(x)}</td>
              <td className="text-center">{toString(y)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
