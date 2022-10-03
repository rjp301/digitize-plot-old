import { useRef, useReducer, useEffect } from "react";
import reducer, { initialState } from "./reducer";
import { pan, startPan, zoom } from "./actions";

export default function usePanAndZoom() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const containerRef = useRef(null);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const onMouseMoveInWindow = (event) => {
    event.preventDefault();
    dispatch(pan(event));
  };

  const onMouseUpInWindow = () => {
    window.removeEventListener("mouseup", onMouseUpInWindow);
    window.removeEventListener("mousemove", onMouseMoveInWindow);
  };

  const onMouseDown = (event) => {
    dispatch(startPan(event));
    window.addEventListener("mouseup", onMouseUpInWindow);
    window.addEventListener("mousemove", onMouseMoveInWindow);
  };

  const onWheel = (event) => {
    if (event.deltaY !== 0 && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      dispatch(zoom(event, containerRect));
    }
  };

  return {
    ...state,
    containerRef,
    onMouseDown,
    onWheel,
  };
}