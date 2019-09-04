import React from "react";
import { mapDispatchActions } from "../../utils/redux";
import { toggleDrawer } from "../../store/actions/config";
import { useDispatch } from "redux-react-hook";

export default ({ props }: any) => {
  const dispatch = useDispatch();
  const actions = mapDispatchActions(
    {
      toggleDrawer
    },
    dispatch
  );
  return (
    <div
      style={{
        width: 275,
        backgroundColor: "red",
        height: "100vh",
        padding: 15
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <h1 style={{ marginTop: 0, marginBottom: 0 }}>123</h1>
        <p
          onClick={() => actions.toggleDrawer(false)}
          style={{
            color: "#FFF",
            fontSize: 30,
            marginTop: 0,
            marginBottom: 0,
            cursor: "pointer"
          }}
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
