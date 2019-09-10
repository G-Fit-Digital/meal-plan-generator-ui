import { SET_MEAL, REMOVE_ITEM } from "../types/plan";

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
    case REMOVE_ITEM: {
      return { ...state };
    }
    default:
      return {
        ...state,
      };
  }
}
