import React, { useEffect } from "react";
import { useMappedState } from "redux-react-hook";
import "./MealPlan.css";
import Item from "./Item";
import Header from "./Header";
import FooterTotals from "./FooterTotals";

const mappedState = (state: any) => ({
  plan: state.planReducer.plan,
});

export default ({ props }: any) => {
  const { plan } = useMappedState(mappedState);
  useEffect(() => {
    console.log(plan);
    if (plan.breakfast === undefined) {
      props.history.push("/");
    }
  });
  return (
    <div className="MealPlan_Container">
      <>
        <Header />
      </>
      {plan.breakfast && plan.breakfast.items.map(item => <Item item={item} />)}
      <FooterTotals plan={plan} />
    </div>
  );
};
