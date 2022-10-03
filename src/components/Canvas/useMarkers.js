import { useReducer, useRef } from "react";
import { addMarker, endDrag, startDrag } from "./actions";
import reducer, { initialState } from "./reducers";

export default function useMarkers() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const containerRef = useRef(null);

  const onLeftClickCanvas = (event) => {
    // event.preventDefault();
    dispatch(addMarker(event));
  };

  const onRightClickMarker = (event) => {
    event.preventDefault();
    console.log(event);
    // dispatch(removeMarker(event));
  };

  const onDragStartMarker = (event) => {
    dispatch(startDrag(event));
  };

  const onDragEndMarker = (event) => {
    dispatch(endDrag(event));
  };

  return {
    ...state,
    containerRef,
    onLeftClickCanvas,
    onRightClickMarker,
    onDragStartMarker,
    onDragEndMarker,
  };
}
