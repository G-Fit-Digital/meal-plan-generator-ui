import React from "react";
import Item from "./Item";
import AddItemInput from "./AddItemInput";
import FooterTotals from "./FooterTotals";

export default ({ el, meal, fetchData }) => {
  return (
    <React.Fragment>
      <React.Fragment>
        <p className="MealPlan_MealName">
          {el.meal.substring(0, 1).toUpperCase() + el.meal.substring(1)}
        </p>
        {meal.meal &&
          el.items.map(ex => (
            <Item meal={el._id} fetchData={fetchData} item={ex} />
          ))}
        <AddItemInput meal={el._id} fetchData={fetchData} />
      </React.Fragment>
      <FooterTotals meal={el} isMealTotal plan={meal} />
    </React.Fragment>
  );
};
