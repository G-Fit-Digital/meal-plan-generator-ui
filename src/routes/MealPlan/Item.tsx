import React, { useState, useEffect } from "react";
import "./MealPlan.css";
import axios from "axios";
interface ItemProps {
  item: any;
  meal: any;
}

export default ({ item, meal }) => {
  let meal_id;
  useEffect(() => {
    meal_id = localStorage.getItem("meal_id");
  });
  const [toggle, setToggle] = useState(false);
  return (
    <div className="MealPlan_ItemContainer" onClick={() => console.log(meal)}>
      <p className="MealPlan_NameOfFoodText">{item.name}</p>
      <p className="MealPlan_NutrientValue">{item.calories}</p>
      <p className="MealPlan_NutrientValue">{item.protein}</p>
      <p className="MealPlan_NutrientValue">{item.carbs}</p>
      <p className="MealPlan_NutrientValue">{item.fat}</p>
      <div
        onClick={() => {
          axios.delete(
            `http://localhost:3000/api/meal/${meal_id}/meal/${meal}/item/${item._id}`
          );
          setToggle(!toggle);
        }}
        className="MealPlan_DeleteContainer"
      >
        <p className="MealPlan_DeleteIcon">x</p>
      </div>
    </div>
  );
};
