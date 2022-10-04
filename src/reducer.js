import { types } from "./actions";
import { v1 } from "uuid";

export const initialState = {
  calibrations: {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0,
  },
  markers: [
    { id: "y1", x: 50, y: 250, colour: "red", label: "Y1", permanent: true },
    { id: "y2", x: 50, y: 50, colour: "red", label: "Y2", permanent: true },
    { id: "x1", x: 100, y: 300, colour: "blue", label: "X1", permanent: true },
    { id: "x2", x: 300, y: 300, colour: "blue", label: "X2", permanent: true },
  ],
};

export default function reducer(state, action) {
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
