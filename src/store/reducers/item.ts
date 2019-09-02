import { SET_ITEM, TOGGLE_MODAL } from "../types/item";

export const initialState = {
  item: {},
  modalOpen: false
};

export default function itemReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_ITEM: {
      return {
        ...state,
        item: action.payload,
        modalOpen: true
      };
    }
    case TOGGLE_MODAL: {
      return {
        ...state,
        modalOpen: action.payload,
        item: {}
      };
    }
    default:
      return {
        ...state
      };
  }
}
