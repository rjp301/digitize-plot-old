import { useReducer } from "react";
import { mouseMove } from "../actions/mouseActions";
import mouseReducer, { initialMouse } from "../reducers/mouseReducer";

export default function useMouse() {
  const [mouseState, dispatch] = useReducer(mouseReducer, initialMouse);

  return {
    mouseState,
    onMouseMoveOverCanvas: (event: any) => {
      event.evt.preventDefault();
      console.log(event);
      dispatch(mouseMove(event));
    },
  };
}
