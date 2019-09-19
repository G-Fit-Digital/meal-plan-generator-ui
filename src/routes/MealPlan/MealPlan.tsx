import React, { useEffect, useState } from "react";
import "./MealPlan.css";
import Item from "./Item";
import Header from "./Header";
import FooterTotals from "./FooterTotals";
import axios from "axios";

export default ({ props }: any) => {
  const meal_id = localStorage.getItem("meal_id");
  const [meal, setMeal] = useState({ _id: "", meal: [] });
  async function fetchData() {
    await axios.get(`http://localhost:3000/api/meal/${meal_id}`).then(res => {
      setMeal(res.data);
      console.log(res.data);
    });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div onClick={() => fetchData()} className="MealPlan_Container">
      <Header />
      {meal.meal.map(el => (
        <>
          <>
            <p
              style={{
                fontWeight: "bold",
                backgroundColor: "#076694",
                padding: 7.5,
                paddingLeft: 15,
                marginLeft: -15,
                marginRight: -15,
                color: "#FFF",
                marginTop: 0,
              }}
            >
              {el.meal.substring(0, 1).toUpperCase() + el.meal.substring(1)}
            </p>
            {meal.meal && el.items.map(ex => <Item meal={el._id} item={ex} />)}
          </>
          <FooterTotals meal={el} isMealTotal plan={meal} />
        </>
      ))}
      <FooterTotals plan={meal} />
    </div>
  );
};
