import { TOGGLE_DRAWER } from "../types/config";

export const initialState = {
  drawerOpen: false
};

export default function configReducer(state = initialState, action: any) {
  switch (action.type) {
    case TOGGLE_DRAWER: {
      return {
        ...state,
        drawerOpen: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
