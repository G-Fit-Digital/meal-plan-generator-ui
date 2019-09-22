import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "./MealsLanding.css";

export default ({ props }) => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/meal").then(res => {
      console.log(res.data);
      setMeals(res.data);
    });
  }, []);
  return (
    <React.Fragment>
      {meals &&
        meals.map(el => (
          <div className="MealContainer_SingleMeal">
            <p>{el.client_name}</p>
            <p>{moment(el.created_on).format("MMMM Do YYYY h:mm:ss a")}</p>
          </div>
        ))}
    </React.Fragment>
  );
};
