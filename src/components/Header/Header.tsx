import React from "react";
import { mapDispatchActions } from "../../utils/redux";
import { toggleDrawer } from "../../store/actions/config";
import { useDispatch } from "redux-react-hook";
import { FaBars } from "react-icons/fa";
export default (props: any) => {
  const dispatch = useDispatch();
  const actions = mapDispatchActions(
    {
      toggleDrawer,
    },
    dispatch
  );
  return (
    <div
      style={{
        height: 60,
        width: "100%",
        backgroundColor: "blue",
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          marginTop: 0,
          marginBottom: 0,
          alignSelf: "center",
          cursor: "pointer",
          marginLeft: 25,
        }}
        onClick={() => actions.toggleDrawer(true)}
      >
        <FaBars color={"#FFF"} />
      </div>
      <p style={{ alignSelf: "center", marginRight: 25 }}>
        G-Fit Meal Generator
      </p>
    </div>
  );
};
