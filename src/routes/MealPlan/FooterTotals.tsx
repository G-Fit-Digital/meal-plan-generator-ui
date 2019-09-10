import React from "react";
import "./MealPlan.css";

export default ({ plan }: any) => {
  return (
    <div className="MealPlan_ItemContainer">
      <p className="MealPlan_NutrientName">Totals</p>
      {plan.breakfast ? (
        <>
          <p className="MealPlan_NutrientName">
            {plan.breakfast.calories.toFixed(2)}
          </p>
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
  );
};
