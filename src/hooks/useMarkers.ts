import { useReducer} from "react";
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
      event.evt.preventDefault();
      dispatch(addMarker(event));
    },
    
    onRightClickMarker: (event: any) => {
      event.evt.preventDefault();
      dispatch(removeMarker(event));
    },

    onDragEndMarker: (event: any) => {
      event.evt.preventDefault();
      dispatch(updatePosition(event));
    },
  };
}
