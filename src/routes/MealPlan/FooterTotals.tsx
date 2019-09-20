import React, { useEffect } from "react";
import "./MealPlan.css";
interface FooterProp {
  plan: any;
  isMealTotal?: boolean;
  meal?: any;
}

export default ({ plan, isMealTotal, meal }: FooterProp) => {
  let calories,
    protein,
    carbs,
    fat = 0;
  function getVal() {
    for (var i = 0; i < plan.meal.length; i++) {
      calories += plan.meal[i].calories;
      protein += plan.meal[i].protein;
      carbs += plan.meal[i].carbs;
      fat += plan.meal[i].fat;
    }
    // return val.toFixed(0);
  }
  useEffect(() => {
    console.log(meal);
    getVal();
  }, [plan]);
  return (
    <div
      className={
        isMealTotal ? "MealPlan_ItemContainer_IsMeal" : "MealPlan_ItemContainer"
      }
    >
      <p className={isMealTotal ? "MealPlan_Totals" : "MealPlan_NutrientName"}>
        {isMealTotal ? "Meal Total" : "Totals"}
      </p>
      <p
        className={
          isMealTotal
            ? "MealPlan_NutrientName_MealTotal"
            : "MealPlan_NutrientName"
        }
      >
        {isMealTotal
          ? meal.calories.toFixed(0)
          : calories && calories.toFixed(0)}
      </p>
      <p
        className={
          isMealTotal
            ? "MealPlan_NutrientName_MealTotal"
            : "MealPlan_NutrientName"
        }
      >
        {isMealTotal ? meal.protein.toFixed(0) : protein && protein.toFixed(0)}
      </p>
      <p
        className={
          isMealTotal
            ? "MealPlan_NutrientName_MealTotal"
            : "MealPlan_NutrientName"
        }
      >
        {isMealTotal ? meal.carbs.toFixed(0) : carbs && carbs.toFixed(0)}
      </p>
      <p
        className={
          isMealTotal
            ? "MealPlan_NutrientName_MealTotal"
            : "MealPlan_NutrientName"
        }
      >
        {isMealTotal ? meal.fat.toFixed(0) : fat && fat.toFixed(0)}
      </p>
      <div>
        <p style={{ display: "none" }}></p>
      </div>
    </div>
  );
};
