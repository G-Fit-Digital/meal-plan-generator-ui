import React, { useEffect } from "react";
import { useMappedState } from "redux-react-hook";
import "./MealPlan.css";
import Item from "./Item";

const mappedState = (state: any) => ({
  plan: state.planReducer.plan,
});

export default ({ props }: any) => {
  const { plan } = useMappedState(mappedState);
  useEffect(() => {
    if (plan.breakfast === undefined) {
      props.history.push("/");
    }
  });
  return (
    <div className="MealPlan_Container">
      {plan.breakfast && plan.breakfast.items.map(item => <Item item={item} />)}
      <div></div>
    </div>
  );
};
