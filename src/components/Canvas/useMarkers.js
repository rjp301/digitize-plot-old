import { useReducer, useRef } from "react";
import { addMarker, startDrag } from "./actions";
import reducer, { initialState } from "./reducers";

export default function useMarkers() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const containerRef = useRef(null);

  const onLeftClick = (event) => {
    // event.preventDefault();
    dispatch(addMarker(event));
  };

  const onRightClick = (event) => {
    event.preventDefault();
    console.log(event)
    // dispatch(removeMarker(event));
  };

  const onDragStart = (event) => {
    event.preventDefault();
    dispatch(startDrag(event))
  }

  return {
    ...state,
    containerRef,
    onLeftClick,
    onRightClick,
  };
}
