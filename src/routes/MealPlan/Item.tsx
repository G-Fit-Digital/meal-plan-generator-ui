import React, { useEffect } from "react";
import "./MealPlan.css";
import { mapDispatchActions } from "../../utils/redux";
import { useDispatch, useMappedState } from "redux-react-hook";
import { removeItem } from "../../store/actions/plan";
const mappedState = (state: any) => ({
  plan: state.planReducer.plan,
});
export default (item: any) => {
  const { plan } = useMappedState(mappedState);
  const dispatch = useDispatch();
  const actions = mapDispatchActions({ removeItem }, dispatch);
  return (
    <div className="MealPlan_ItemContainer">
      <p className="MealPlan_NameOfFoodText">{item.item.name}</p>
      <p className="MealPlan_NutrientValue">{item.item.calories}</p>
      <p className="MealPlan_NutrientValue">{item.item.protein}</p>
      <p className="MealPlan_NutrientValue">{item.item.carbs}</p>
      <p className="MealPlan_NutrientValue">{item.item.fat}</p>
      <div
        // onClick={() => actions.removeItem(item.item.name)}
        onClick={() => {
          for (var i = 0; i < plan.breakfast.items.length; i++) {
            if (item.item.name === plan.breakfast.items[i].name) {
              console.log(i);
            }
          }
        }}
        className="MealPlan_DeleteContainer"
      >
        <p className="MealPlan_DeleteIcon">x</p>
      </div>
    </div>
  );
};
