import { combineReducers } from "redux";
import itemReducer from "./reducers/item";
import configReducer from "./reducers/config";

const rootReducer = combineReducers({
  itemReducer,
  configReducer
});
export default rootReducer;
