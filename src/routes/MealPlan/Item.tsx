import React, { useEffect } from "react";
import "./MealPlan.css";
import axios from "axios";
interface ItemProps {
  item: any;
  meal: any;
  fetchData: any;
  counts?: any;
}

export default ({ item, meal, fetchData, counts }: ItemProps) => {
  let meal_id;
  useEffect(() => {
    meal_id = localStorage.getItem("meal_id");
  });
  function deleteItem() {
    axios
      .delete(
        `http://3.16.31.235:3000/api/meal/${meal_id}/meal/${meal}/item/${item._id}`
      )
      .then(() => {
        fetchData();
      });
  }
  function addItem() {
    axios
      .post(
        `http://3.16.31.235:3000/api/meal/${meal_id}/meal/${meal}/item/${item._id}`
      )
      .then(() => {
        fetchData();
      });
  }
  return (
    <div className="MealPlan_ItemContainer">
      <p>{item.count}</p>
      <p className="MealPlan_NameOfFoodText">{item.name}</p>
      <p className="MealPlan_NutrientValue">{item.calories}</p>
      <p className="MealPlan_NutrientValue">{item.protein}</p>
      <p className="MealPlan_NutrientValue">{item.carbs}</p>
      <p className="MealPlan_NutrientValue">{item.fat}</p>
      <div className="MealPlan_DeleteContainer">
        <div>
          <p
            onClick={() => {
              deleteItem();
            }}
            className="MealPlan_DeleteIcon"
          >
            -
          </p>
          {/* <p
            onClick={() => {
              addItem();
            }}
            className="MealPlan_DeleteIcon"
          >
            +
          </p> */}
        </div>
      </div>
    </div>
  );
};
