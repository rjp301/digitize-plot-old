import React from "react";
import { XY } from "../reducers/initialState";

export default function DataTable(props: { data: XY[] }) {
  const { data } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>X</th>
          <th>Y</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            <td>{row.x}</td>
            <td>{row.y}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
