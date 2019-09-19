import React, { useState, useEffect } from "react";
import "./MealPlan.css";
import axios from "axios";

export default (item, meal, fetchData: any) => {
  let meal_id;
  useEffect(() => {
    meal_id = localStorage.getItem("meal_id");
  });
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className="MealPlan_ItemContainer"
      onClick={() => console.log(localStorage.getItem("meal_meal_id"))}
    >
      <p className="MealPlan_NameOfFoodText">{item.item.name}</p>
      <p className="MealPlan_NutrientValue">{item.item.calories}</p>
      <p className="MealPlan_NutrientValue">{item.item.protein}</p>
      <p className="MealPlan_NutrientValue">{item.item.carbs}</p>
      <p className="MealPlan_NutrientValue">{item.item.fat}</p>
      <div
        onClick={() => {
          let meal_meal_id = localStorage.getItem("meal_meal_id");
          axios
            .delete(
              `http://localhost:3000/api/meal/${meal_id}/meal/${meal_meal_id}/item/${item.item._id}`
            )
            .then(() => {
              // fetchData();
            });
          window.location.reload();
          setToggle(!toggle);
        }}
        className="MealPlan_DeleteContainer"
      >
        <p className="MealPlan_DeleteIcon">x</p>
      </div>
    </div>
  );
};
