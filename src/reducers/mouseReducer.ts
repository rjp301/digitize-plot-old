import { Action, types } from "../actions/mouseActions";
import { State } from "./initialState";

export default function mouseReducer(state: State, action: Action): State {
  switch (action.type) {
    case types.MOUSE_MOVE:
      return { ...state, mouse: { x: action.x, y: action.y } };

    default:
      return state;
  }
}
