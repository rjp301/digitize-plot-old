import { types } from "./actions";
import { v1 } from "uuid";

export const initialState = {
  markers: [],
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
            id: action.markerId,
            isDragging: false,
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
            isDragging: false,
          },
        ],
      };

    default:
      return state;
  }
}
