import { useReducer } from "react";
import { updatePosition, updateValue } from "../actions/calibrateActions";
import calibrationReducer, {
  initialCalibrationState,
} from "../reducers/calibrationReducer";

export default function useCalibration() {
  const [calibrationState, dispatch] = useReducer(
    calibrationReducer,
    initialCalibrationState
  );

  return {
    calibrationState,
    onCalibrationValueUpdate: (event: any, id: string) => {
      dispatch(updateValue(event, id));
    },

    onCalibrationPositionUpdate: (event: any) => {
      dispatch(updatePosition(event));
      event.cancelBubble = true;
    },
  };
}
