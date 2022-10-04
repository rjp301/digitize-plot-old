import React from "react";
import { CalibrationState } from "../reducers/calibrationReducer";

export default function Calibrate(props: {
  state: CalibrationState;
  onUpdateValue: any;
}) {
  const { state, onUpdateValue } = props;

  return (
    <div className="bg-white flex-grow p-4 flex flex-col gap-2">
      {Object.keys(state).map((id: string) => {
        const marker = (state as any)[id];
        return (
          <label
            key={id}
            htmlFor={id}
            className="flex gap-2 border-b-2 pb-1 items-center"
          >
            {id.toUpperCase()}:
            <input
              id={id}
              type="text"
              className="w-full rounded p-1"
              value={marker.value}
              onChange={(event) => onUpdateValue(event, id)}
            />
          </label>
        );
      })}
    </div>
  );
}