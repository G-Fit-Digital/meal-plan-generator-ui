import React from "react";
import "./MealPlan.css";

export default () => {
  return (
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
  );
};
