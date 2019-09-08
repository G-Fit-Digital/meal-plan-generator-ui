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
  return (
    <div className="Drawer_Content_Container">
      <div className="Drawer_ProfileHeader_Container">
        <div style={{ flexDirection: "row", display: "flex" }}>
          <img
            src={require("../../assets/image_placeholder.png")}
            style={{
              backgroundColor: "#000",
              height: 50,
              width: 50,
              borderRadius: 25,
              alignSelf: "center",
            }}
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
      <div>
        <p
          onClick={() => props.history.push("/")}
          style={{ cursor: "pointer" }}
        >
          Add Menu Item
        </p>
        <p
          onClick={() => props.history.push("/generator")}
          style={{ cursor: "pointer" }}
        >
          Meal Generator
        </p>
      </div>
    </div>
  );
};
