import React, { useState, useEffect } from "react";
import "./MealPlan.css";
import SearchResults from "./SearchResults";
import axios from "axios";

export default ({ meal, fetchData }) => {
  const [results, setResults] = useState([]);
  const [id, setId] = useState("");
  const [query, setQuery] = useState("");
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fat, setFat] = useState(0);
  useEffect(() => {
    axios.get(`http://3.16.31.235:3000/api/item/search/${query}`).then(res => {
      setResults(res.data);
    });
  }, [query]);
  function addItem() {
    let meal_id = localStorage.getItem("meal_id");
    axios
      .post(
        `http://3.16.31.235:3000/api/meal/${meal_id}/meal/${meal}/item/${id}`
      )
      .then(() => {
        fetchData();
        setQuery("");
        setResults([]);
        setCalories(0);
        setProtein(0);
        setCarbs(0);
        setFat(0);
      });
  }
  return (
    <div className="MealPlan_ItemContainer">
      <input
        onChange={e => setQuery(e.target.value)}
        className="MealPlan_AddItemInput"
        type="text"
        placeholder="Add Item"
        value={query}
      />
      <SearchResults
        setId={setId}
        setCalories={setCalories}
        setProtein={setProtein}
        setCarbs={setCarbs}
        setFat={setFat}
        results={results}
        setResults={setResults}
      />
      <p className="MealPlan_NutrientName">{calories}</p>
      <p className="MealPlan_NutrientName">{protein}</p>
      <p className="MealPlan_NutrientName">{carbs}</p>
      <p className="MealPlan_NutrientName">{fat}</p>
      <p
        style={{ color: "#61ab4a", fontSize: 20, padding: 5 }}
        onClick={() => addItem()}
        className="MealPlan_AddItemText"
      >
        +
      </p>
    </div>
  );
};
