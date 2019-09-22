import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "./MealsLanding.css";

export default ({ props }) => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/meal").then(res => {
      setMeals(res.data);
    });
  }, []);
  function navigate(id) {
    localStorage.setItem("meal_id", id);
    props.history.push("/plan");
  }
  return (
    <React.Fragment>
      {meals &&
        meals.map(el => (
          <div
            onClick={() => navigate(el._id)}
            className="MealContainer_SingleMeal"
          >
            <p>{el.client_name}</p>
            <p>{moment(el.created_on).format("MMMM Do YYYY h:mm:ss a")}</p>
          </div>
        ))}
    </React.Fragment>
  );
};
