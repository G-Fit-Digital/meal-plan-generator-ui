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
    console.log(plan);
    if (plan.breakfast === undefined) {
      props.history.push("/");
    }
  });
  return (
    <div className="MealPlan_Container">
      <div className="MealPlan_ItemContainer">
        <p className="MealPlan_NutrientName">Item</p>
        <p className="MealPlan_NutrientName">Calories</p>
        <p className="MealPlan_NutrientName">Protein</p>
        <p className="MealPlan_NutrientName">Carbs</p>
        <p className="MealPlan_NutrientName">Fat</p>
        <div>
          <p style={{ display: "none" }}></p>
        </div>
      </div>
      {plan.breakfast && plan.breakfast.items.map(item => <Item item={item} />)}
      <div className="MealPlan_ItemContainer">
        <p className="MealPlan_NutrientName">Totals</p>
        {plan.breakfast ? (
          <>
            <input className="MealPlan_NutrientName">
              {plan.breakfast.calories.toFixed(2)}
            </input>
            <p className="MealPlan_NutrientName">
              {plan.breakfast.protein.toFixed(2)}
            </p>
            <p className="MealPlan_NutrientName">
              {plan.breakfast.carbs.toFixed(2)}
            </p>
            <p className="MealPlan_NutrientName">
              {plan.breakfast.fat.toFixed(2)}
            </p>
          </>
        ) : null}
        <div>
          <p style={{ display: "none" }}></p>
        </div>
      </div>
    </div>
  );
};
