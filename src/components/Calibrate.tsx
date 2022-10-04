import React from "react";
import { updateValue } from "../actions/calibrateActions";
import { State } from "../reducers/initialState";

const calibrations = ["x1", "x2", "y1", "y2"];

export default function Calibrate(props: { state: State; dispatch: any }) {
  const { state, dispatch } = props;

  return (
    <div className="bg-white flex-grow p-4 flex flex-col gap-2">
      {calibrations.map((id) => {
        const marker = state.markers.find((i) => i.id === "x1");
        return (
          <label
            htmlFor={id}
            className="flex gap-2 border-b-2 pb-1 items-center"
          >
            {id.toUpperCase()}:
            <input
              id={id}
              type="text"
              className="w-full rounded p-1"
              value={marker?.value}
              onChange={(event) => dispatch(updateValue(event, id))}
            />
          </label>
        );
      })}
    </div>
  );
}
