import { types } from "./actions";
import { v1 } from "uuid";

export interface XY {
  x: number;
  y: number;
  [key: string]: any;
}

export interface Calibration {
  x: number;
  y: number;
  colour: string;
  label: string;
  value: number;
}

export interface State {
  calibrations: {
    x1: Calibration;
    x2: Calibration;
    y1: Calibration;
    y2: Calibration;
  };
  mouse: XY;
  markers: XY[];
}

export const initialState: State = {
  calibrations: {
    y1: { x: 50, y: 250, colour: "red", label: "Y1", value: 0 },
    y2: { x: 50, y: 50, colour: "red", label: "Y2", value: 0 },
    x1: { x: 100, y: 300, colour: "blue", label: "X1", value: 0 },
    x2: { x: 300, y: 300, colour: "blue", label: "X2", value: 0 },
  },
  mouse: { x: 0, y: 0 },
  markers: [],
};

export default function reducer(state: State, action) {
  switch (action.type) {
    case types.DRAG_START:
      return state;

    case types.DRAG_END:
      return {
        ...state,
        markers: [
          ...state.markers.filter((i) => i.id !== action.markerId),
          {
            ...state.markers.find((i) => i.id === action.markerId),
            x: action.x,
            y: action.y,
          },
        ],
      };

    case types.ADD_MARKER:
      return {
        ...state,
        markers: [
          ...state.markers,
          {
            id: v1(),
            x: action.x,
            y: action.y,
          },
        ],
      };

    case types.REMOVE_MARKER:
      return {
        ...state,
        markers: state.markers.filter((i) => i.id !== action.markerId),
      };

    default:
      return state;
  }
}
