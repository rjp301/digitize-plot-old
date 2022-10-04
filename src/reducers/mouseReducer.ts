import { mouseAction, types } from "../actions/mouseActions";

export interface MouseState {
  x: number;
  y: number;
}

export const initialMouse: MouseState = { x: 0, y: 0 };

export default function mouseReducer(
  state: MouseState,
  action: mouseAction
): MouseState {
  switch (action.type) {
    case types.MOUSE_MOVE:
      return { ...state, x: action.x, y: action.y };

    default:
      return state;
  }
}
