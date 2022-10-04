import { Action, types } from "../actions/markerActions";
import { v1 } from "uuid";
import { State } from "./initialState";

export default function markerReducer(state: State, action: Action): State {
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
