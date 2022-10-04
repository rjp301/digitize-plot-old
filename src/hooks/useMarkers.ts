import { useReducer, useRef } from "react";
import { addMarker, endDrag, removeMarker, startDrag } from "../actions/markerActions";
import { initialState } from "../reducers/initialState";
import reducer from "../reducers/markerReducer";

export default function useMarkers() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const containerRef = useRef(null);

  const onLeftClickCanvas = (event) => {
    event.evt.preventDefault();
    dispatch(addMarker(event));
  };

  const onRightClickMarker = (event) => {
    event.evt.preventDefault();
    event.evt.stopPropagation();
    dispatch(removeMarker(event));
  };

  const onDragStartMarker = (event) => {
    event.evt.preventDefault();
    event.evt.stopPropagation();
    dispatch(startDrag(event));
  };

  const onDragEndMarker = (event) => {
    event.evt.preventDefault();
    event.evt.stopPropagation();
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
