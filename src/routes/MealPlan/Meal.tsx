import React, { useEffect, useState } from "react";
import Item from "./Item";
import AddItemInput from "./AddItemInput";
import FooterTotals from "./FooterTotals";

export default ({ el, meal, fetchData }) => {
  const [finalArr, setFinalArr] = useState([]);
  let arr;
  useEffect(() => {
    arr = el.items;
    for (var i = 0; i < el.items.length; i++) {
      arr[i].count = 0;
      for (var j = 0; j < el.items.length; j++) {
        if (arr[i].name === el.items[j].name) {
          arr[i].count++;
        }
      }
    }
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (arr[i].name === arr[j].name && arr[i].count > 1) {
          arr.splice(j, 1);
        }
      }
    }
    setFinalArr(arr);
  });
  return (
    <React.Fragment>
      <React.Fragment>
        <p className="MealPlan_MealName">
          {el.meal.substring(0, 1).toUpperCase() + el.meal.substring(1)}
        </p>
        {finalArr.map(ex => (
          <Item meal={el._id} fetchData={fetchData} item={ex} />
        ))}
        <AddItemInput meal={el._id} fetchData={fetchData} />
      </React.Fragment>
      <FooterTotals meal={el} isMealTotal plan={meal} />
    </React.Fragment>
  );
};
