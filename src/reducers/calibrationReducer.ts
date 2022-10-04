import { CalibrationAction, types } from "../actions/calibrateActions";

export interface CalibrationMarker {
  x: number;
  y: number;
  colour: string;
  label: string;
  value: number;
}

export interface CalibrationState {
  x1: CalibrationMarker;
  x2: CalibrationMarker;
  y1: CalibrationMarker;
  y2: CalibrationMarker;
}

export const initialCalibrationState: CalibrationState = {
  y1: { x: 50, y: 250, colour: "red", label: "Y1", value: 0 },
  y2: { x: 50, y: 50, colour: "red", label: "Y2", value: 0 },
  x1: { x: 100, y: 300, colour: "blue", label: "X1", value: 0 },
  x2: { x: 300, y: 300, colour: "blue", label: "X2", value: 0 },
};

export default function calibrationReducer(
  state: CalibrationState,
  action: CalibrationAction
): CalibrationState {
  switch (action.type) {
    case types.UPDATE_POSITION:
      return {
        ...state,
        [action.id]: { ...(state as any)[action.id], x: action.x, y: action.y },
      };

    case types.UPDATE_VALUE:
      return {
        ...state,
        [action.id]: { ...(state as any)[action.id], value: action.value },
      };
    
    default:
      return state;
  }
}
