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
      event.preventDefault();
      dispatch(updateValue(event, id));
    },
    onCalibrationPositionUpdate: (event: any) => {
      event.preventDefault();
      dispatch(updatePosition(event));
    },
  };
}
