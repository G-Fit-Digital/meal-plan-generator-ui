import { SET_ITEM } from "../types/item";

export const initialState = {
  item: {}
};

export default function itemReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_ITEM: {
      return {
        ...state,
        item: action.payload
      };
    }
    default:
      return {
        ...state
      };
  }
}
