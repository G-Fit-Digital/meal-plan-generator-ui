import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { mapDispatchActions } from "../../../../utils/redux";
import { useDispatch, useMappedState } from "redux-react-hook";
import { toggleModal } from "../../../../store/actions/item";
import "./AddItemModal.css";
import { nutrients } from "../../../../utils/data";
import { lookUpItem } from "../../../../utils/lookupItem";

const mappedState = (state: any) => ({
  item: state.itemReducer.item
});

export default ({ isOpen }: any) => {
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [calories, setCalories] = useState(0);
  const [fibre, setFibre] = useState(0);
  const [serving, setServing] = useState("");
  const { item } = useMappedState(mappedState);
  const dispatch = useDispatch();
  const actions = mapDispatchActions(
    {
      toggleModal
    },
    dispatch
  );
  useEffect(() => {
    lookUpItem(
      item,
      setServing,
      setProtein,
      setFat,
      setCarbs,
      setCalories,
      setFibre
    );
  }, [item]);
  return (
    <Modal style={{}} isOpen={isOpen}>
      <div className="AddItemModal_Container">
        <div>
          <h1>{item.name}</h1>
          <div style={{ flexDirection: "column" }}>
            <h3>
              Serving Size:{" "}
              {serving.substring(0, 1).toUpperCase() + serving.substring(1)}
            </h3>
          </div>
        </div>
        <h1
          onClick={() => actions.toggleModal(false)}
          className="AddItemModal_Exit"
        >
          X
        </h1>
      </div>
      {nutrients.map(el => (
        <div className="AddItemModal_NutritionRow">
          <p>{el.string}</p>
          <p>{eval(el.value)} grams</p>
        </div>
      ))}
    </Modal>
  );
};
