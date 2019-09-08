import React, { useEffect } from "react";
import { useMappedState } from "redux-react-hook";

const mappedState = (state: any) => ({
  plan: state.planReducer.plan,
});

export default ({ props }: any) => {
  const { plan } = useMappedState(mappedState);
  useEffect(() => {
    if (plan.breakfast === undefined) {
      props.history.push("/");
    }
  });
  return (
    <div>
      {plan.breakfast === undefined
        ? "No Plan Generated"
        : plan.breakfast.items.map(el => <p>{el.name}</p>)}
    </div>
  );
};
