import { bindActionCreators } from "redux";

export const mapDispatchActions = (actions: any, dispatch: any) =>
  bindActionCreators(actions, dispatch);
