import React from "react";
import { mapDispatchActions } from "../../utils/redux";
import { toggleDrawer } from "../../store/actions/config";
import { useDispatch } from "redux-react-hook";
import { FaBars } from "react-icons/fa";
import "./Header.css";
export default (props: any) => {
  const dispatch = useDispatch();
  const actions = mapDispatchActions(
    {
      toggleDrawer,
    },
    dispatch
  );
  return (
    <div className="Header_NavigationBar_Container">
      <div
        className="Header_NavigationBar_MenuIcon"
        onClick={() => actions.toggleDrawer(true)}
      >
        <FaBars color={"#FFF"} />
      </div>
      <p className="Header_NavigationBar_UserText">G-Fit Meal Generator</p>
    </div>
  );
};
