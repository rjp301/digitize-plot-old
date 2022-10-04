import { useReducer, useRef } from "react";
import {
  addMarker,
  updatePosition,
  removeMarker,
} from "../actions/markerActions";
import markerReducer from "../reducers/markerReducer";
import { initialMarkers } from "../reducers/markerReducer";

export default function useMarkers() {
  const [state, dispatch] = useReducer(markerReducer, initialMarkers);
  const containerRef = useRef(null);

  const onLeftClickCanvas = (event: any) => {
    event.evt.preventDefault();
    dispatch(addMarker(event));
  };

  const onRightClickMarker = (event: any) => {
    event.evt.preventDefault();
    dispatch(removeMarker(event));
  };

  const onDragEndMarker = (event: any) => {
    event.evt.preventDefault();
    dispatch(updatePosition(event));
  };

  return {
    onLeftClickCanvas,
    onRightClickMarker,
    onDragEndMarker,
  };
}
