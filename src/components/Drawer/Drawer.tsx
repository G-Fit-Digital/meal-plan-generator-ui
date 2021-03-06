import React from "react";
import { mapDispatchActions } from "../../utils/redux";
import { toggleDrawer } from "../../store/actions/config";
import { useDispatch } from "redux-react-hook";
import "./Drawer.css";

export default ({ props }: any) => {
  const dispatch = useDispatch();
  const actions = mapDispatchActions(
    {
      toggleDrawer,
    },
    dispatch
  );
  function navigate(route) {
    props.history.push(route);
    actions.toggleDrawer(false);
  }
  return (
    <div className="Drawer_Content_Container">
      <div className="Drawer_ProfileHeader_Container">
        <div style={{ flexDirection: "row", display: "flex" }}>
          <img
            src={require("../../assets/image_placeholder.png")}
            className="Drawer_ProfileImage"
          />
          <h1 className="Drawer_NameText">Grant Reid</h1>
        </div>
        <p
          onClick={() => actions.toggleDrawer(false)}
          className="Drawer_ExitIcon"
        >
          x
        </p>
      </div>
      <div
        onClick={() => {
          navigate("/");
        }}
        className="Drawer_Option_Container"
      >
        <p className="Drawer_Option_Text">Add Menu Item</p>
      </div>
      <div
        onClick={() => {
          navigate("/generator");
        }}
        className="Drawer_Option_Container"
      >
        <p className="Drawer_Option_Text">Meal Generator</p>
      </div>
      <div
        onClick={() => {
          navigate("/meal");
        }}
        className="Drawer_Option_Container"
      >
        <p className="Drawer_Option_Text">Meals</p>
      </div>
    </div>
  );
};
