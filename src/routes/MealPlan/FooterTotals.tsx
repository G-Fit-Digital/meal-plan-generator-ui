import React, { useEffect } from "react";
import "./MealPlan.css";
interface FooterProp {
  plan: any;
  isMealTotal?: boolean;
  meal?: any;
}

export default ({ plan, isMealTotal, meal }: FooterProp) => {
  useEffect(() => {
    console.log("MEAL");
    console.log(meal);
  });
  function getVal(macro) {
    let val = 0;
    for (var i = 0; i < plan.meal.length; i++) {
      switch (macro) {
        case "calories":
          val += plan.meal[i].calories;
          break;
        case "protein":
          val += plan.meal[i].protein;
          break;
        case "carbs":
          val += plan.meal[i].carbs;
          break;
        case "fat":
          val += plan.meal[i].fat;
      }
    }
    return val.toFixed(0);
  }
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
        {isMealTotal ? meal.calories.toFixed(0) : getVal("calories")}
      </p>
      <p
        className={
          isMealTotal
            ? "MealPlan_NutrientName_MealTotal"
            : "MealPlan_NutrientName"
        }
      >
        {isMealTotal ? meal.protein.toFixed(0) : getVal("protein")}
      </p>
      <p
        className={
          isMealTotal
            ? "MealPlan_NutrientName_MealTotal"
            : "MealPlan_NutrientName"
        }
      >
        {isMealTotal ? meal.carbs.toFixed(0) : getVal("carbs")}
      </p>
      <p
        className={
          isMealTotal
            ? "MealPlan_NutrientName_MealTotal"
            : "MealPlan_NutrientName"
        }
      >
        {isMealTotal ? meal.fat.toFixed(0) : getVal("fat")}
      </p>
      <div>
        <p style={{ display: "none" }}></p>
      </div>
    </div>
  );
};
