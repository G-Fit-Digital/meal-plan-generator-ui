import { SET_MEAL } from "../types/plan";

export const initialState = {
  plan: {},
};

export default function planReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MEAL: {
      return {
        ...state,
        plan: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
