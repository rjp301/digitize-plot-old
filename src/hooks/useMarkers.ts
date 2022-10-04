import { useReducer } from "react";
import {
  addMarker,
  updatePosition,
  removeMarker,
} from "../actions/markerActions";
import markerReducer, { initialMarkers } from "../reducers/markerReducer";

export default function useMarkers() {
  const [markerState, dispatch] = useReducer(markerReducer, initialMarkers);

  return {
    markerState,
    onLeftClickCanvas: (event: any) => {
      if (event.evt.button === 0) {
        dispatch(addMarker(event));
        return;
      }
      event.cancelBubble = true;
    },

    onRightClickMarker: (event: any) => {
      dispatch(removeMarker(event));
      event.cancelBubble = true;
    },

    onDragEndMarker: (event: any) => {
      event.evt.preventDefault();
      dispatch(updatePosition(event));
    },
  };
}
