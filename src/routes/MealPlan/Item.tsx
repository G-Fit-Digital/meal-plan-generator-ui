import React, { useEffect } from "react";
import "./MealPlan.css";
export default (item: any) => {
  useEffect(() => {
    console.log(item);
  });
  return (
    <div className="MealPlan_ItemContainer">
      <p className="MealPlan_NameOfFoodText">{item.item.name}</p>
      <p className="MealPlan_NutrientValue">{item.item.calories}</p>
      <p className="MealPlan_NutrientValue">{item.item.protein}</p>
      <p className="MealPlan_NutrientValue">{item.item.carbs}</p>
      <p className="MealPlan_NutrientValue">{item.item.fat}</p>
      <div className="MealPlan_DeleteContainer">
        <p className="MealPlan_DeleteIcon">x</p>
      </div>
    </div>
  );
};
