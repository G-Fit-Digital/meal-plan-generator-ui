import React, { useEffect } from "react";
import "./MealPlan.css";
import axios from "axios";
interface ItemProps {
  item: any;
  meal: any;
  fetchData: any;
}

export default ({ item, meal, fetchData }: ItemProps) => {
  function deleteItem() {
    axios
      .delete(
        `http://localhost:3000/api/meal/${meal_id}/meal/${meal}/item/${item._id}`
      )
      .then(() => {
        fetchData();
      });
  }
  let meal_id;
  useEffect(() => {
    meal_id = localStorage.getItem("meal_id");
  });
  return (
    <div className="MealPlan_ItemContainer">
      <p className="MealPlan_NameOfFoodText">{item.name}</p>
      <p className="MealPlan_NutrientValue">{item.calories}</p>
      <p className="MealPlan_NutrientValue">{item.protein}</p>
      <p className="MealPlan_NutrientValue">{item.carbs}</p>
      <p className="MealPlan_NutrientValue">{item.fat}</p>
      <div
        onClick={() => {
          deleteItem();
        }}
        className="MealPlan_DeleteContainer"
      >
        <p className="MealPlan_DeleteIcon">x</p>
      </div>
    </div>
  );
};
