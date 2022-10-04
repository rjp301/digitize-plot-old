import { MarkerAction, types } from "../actions/markerActions";

export interface Marker {
  id: string;
  x: number;
  y: number;
  colour?: string;
  label?: string;
}

export const initialMarkers: Marker[] = [];

export default function markerReducer(
  state: Marker[],
  action: MarkerAction
): Marker[] {
  switch (action.type) {
    case types.UPDATE_POSITION:
      return [
        ...state.filter((i) => i.id !== action.id),
        {
          ...state.find((i) => i.id === action.id),
          id: action.id,
          x: action.x,
          y: action.y,
        },
      ];

    case types.ADD_MARKER:
      return [
        ...state,
        {
          id: action.id,
          x: action.x,
          y: action.y,
        },
      ];

    case types.REMOVE_MARKER:
      return [...state.filter((i) => i.id !== action.id)];

    default:
      return state;
  }
}
