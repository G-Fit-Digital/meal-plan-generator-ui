import React, { useEffect } from "react";
import "./MealPlan.css";
interface FooterProp {
  plan: any;
  isMealTotal?: boolean;
  meal?: any;
}

export default ({ plan, isMealTotal, meal }: FooterProp) => {
  let calorie_differential,
    protein_differential,
    carb_differential,
    fat_differential;
  if (meal) {
    calorie_differential = (meal.calories - meal.target_calories).toFixed(0);
    protein_differential = (meal.protein - meal.target_protein).toFixed(0);
    carb_differential = (meal.carbs - meal.target_carbs).toFixed(0);
    fat_differential = (meal.fat - meal.target_fat).toFixed(0);
  }
  let calories = 0;
  let protein = 0;
  let carbs = 0;
  let fat = 0;
  const getVal = macro => {
    switch (macro) {
      case "calories":
        for (var i = 0; i < plan.meal.length; i++) {
          calories += plan.meal[i].calories;
        }
        return calories.toFixed(0);
      case "protein":
        for (var i = 0; i < plan.meal.length; i++) {
          protein += plan.meal[i].protein;
        }
        return protein.toFixed(0);
      case "fat":
        for (var i = 0; i < plan.meal.length; i++) {
          fat += plan.meal[i].fat;
        }
        return fat.toFixed(0);
      case "carbs":
        for (var i = 0; i < plan.meal.length; i++) {
          carbs += plan.meal[i].carbs;
        }
        return carbs.toFixed(0);
    }
  };
  let target_calories = 0;
  let target_protein = 0;
  let target_carbs = 0;
  let target_fat = 0;
  const getTargetTotal = macro => {
    switch (macro) {
      case "calories":
        for (var i = 0; i < plan.meal.length; i++) {
          target_calories += plan.meal[i].target_calories;
        }
        return (calories - target_calories).toFixed(0);
      case "protein":
        for (var i = 0; i < plan.meal.length; i++) {
          target_protein += plan.meal[i].target_protein;
        }
        return (protein - target_protein).toFixed(0);
      case "fat":
        for (var i = 0; i < plan.meal.length; i++) {
          target_fat += plan.meal[i].target_fat;
        }
        return (fat - target_fat).toFixed(0);
      case "carbs":
        for (var i = 0; i < plan.meal.length; i++) {
          target_carbs += plan.meal[i].target_carbs;
        }
        return (carbs - target_carbs).toFixed(0);
    }
  };
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
        {
          <span
            style={{ color: calorie_differential > 0 ? "#61ab4a" : "#d6324d" }}
          >
            {" "}
            {isMealTotal ? (
              "(" + calorie_differential + ")"
            ) : (
              <span style={{ color: "#000" }}>
                ({getTargetTotal("calories")})
              </span>
            )}
          </span>
        }
      </p>
      <p
        className={
          isMealTotal
            ? "MealPlan_NutrientName_MealTotal"
            : "MealPlan_NutrientName"
        }
      >
        {isMealTotal ? meal.protein.toFixed(0) : getVal("protein")}
        <span
          style={{ color: protein_differential > 0 ? "#61ab4a" : "#d6324d" }}
        >
          {" "}
          {isMealTotal ? (
            "(" + protein_differential + ")"
          ) : (
            <span style={{ color: "#000" }}>({getTargetTotal("protein")})</span>
          )}
        </span>
      </p>
      <p
        className={
          isMealTotal
            ? "MealPlan_NutrientName_MealTotal"
            : "MealPlan_NutrientName"
        }
      >
        {isMealTotal ? meal.carbs.toFixed(0) : getVal("carbs")}
        <span style={{ color: carb_differential > 0 ? "#61ab4a" : "#d6324d" }}>
          {" "}
          {isMealTotal ? (
            "(" + carb_differential + ")"
          ) : (
            <span style={{ color: "#000" }}>({getTargetTotal("carbs")})</span>
          )}
        </span>
      </p>
      <p
        className={
          isMealTotal
            ? "MealPlan_NutrientName_MealTotal"
            : "MealPlan_NutrientName"
        }
      >
        {isMealTotal ? meal.fat.toFixed(0) : getVal("fat")}
        <span style={{ color: fat_differential > 0 ? "#61ab4a" : "#d6324d" }}>
          {" "}
          {isMealTotal ? (
            "(" + fat_differential + ")"
          ) : (
            <span style={{ color: "#000" }}>({getTargetTotal("fat")})</span>
          )}
        </span>
      </p>
      <div>
        <p style={{ display: "none" }}></p>
      </div>
    </div>
  );
};
