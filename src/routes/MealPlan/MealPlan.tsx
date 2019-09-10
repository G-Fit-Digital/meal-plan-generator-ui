import React, { useEffect } from "react";
import { useMappedState } from "redux-react-hook";
import "./MealPlan.css";

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
      {plan.breakfast === undefined
        ? null
        : plan.breakfast.items.map(el => (
            <div className="MealPlan_ItemContainer">
              <p className="MealPlan_NameOfFoodText">{el.name}</p>
              <div className="MealPlan_DeleteContainer">
                <p className="MealPlan_DeleteIcon">x</p>
              </div>
            </div>
          ))}
    </div>
  );
};
