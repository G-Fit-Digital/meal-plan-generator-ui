import React from "react";

export default ({
  results,
  setCalories,
  setProtein,
  setCarbs,
  setFat,
  setId,
  setResults,
}: any) => {
  return (
    <>
      <div
        style={{ display: results.length > 0 ? "flex" : "none" }}
        className="MealPlan_ResultsContainer"
      >
        {results.map(el => (
          <p
            onClick={() => {
              setResults([]);
              setId(el._id);
              setCalories(el.calories);
              setProtein(el.protein);
              setCarbs(el.carbs);
              setFat(el.fat);
            }}
            className="MealPlan_ResultText"
          >
            {el.name}
          </p>
        ))}
      </div>
    </>
  );
};
