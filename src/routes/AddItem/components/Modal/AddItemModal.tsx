import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { mapDispatchActions } from "../../../../utils/redux";
import { useDispatch, useMappedState } from "redux-react-hook";
import { toggleModal } from "../../../../store/actions/item";
import "./AddItemModal.css";
import {
  nutrients,
  dietaryRestrictions,
  foodCategory,
  mealCategory
} from "../../../../utils/data";
import { lookUpItem } from "../../../../utils/lookupItem";
import Select from "react-dropdown-select";

const mappedState = (state: any) => ({
  item: state.itemReducer.item
});

export default ({ isOpen }: any) => {
  const [dietaryConcerns, setDietaryConcerns] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const [mealCategories, setMealCategories] = useState([]);
  const [value, setValue] = useState("");
  const [response, setResponse] = useState();
  const [servingIndex, setServingIndex] = useState(0);
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
      servingIndex,
      item,
      setServing,
      setProtein,
      setFat,
      setCarbs,
      setCalories,
      setFibre,
      setResponse
    );
  }, [item, servingIndex]);
  function updateIndex(value: any) {
    if (value[0]) {
      for (
        var i = 0;
        i < response.report.food.nutrients[0].measures.length;
        i++
      ) {
        if (
          response.report.food.nutrients[0].measures[i].label === value[0].label
        ) {
          setServingIndex(i);
        }
      }
    }
  }
  return (
    <Modal isOpen={isOpen}>
      <div className="AddItemModal_Container">
        <div>
          <h1>{item.name}</h1>
          <div className="AddItemModal_ServingSize">
            <h3>Serving Size: </h3>
            {response && (
              <Select
                placeholder={
                  response.report.food.nutrients[0].measures[0].label
                }
                valueField={response.report.food.nutrients[0].measures[value]}
                values={[]}
                onChange={value => {
                  updateIndex(value);
                }}
                options={response.report.food.nutrients[0].measures}
              />
            )}
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
      <div className="AddItemModal_DropDownContainer">
        <div className="AddItemModal_DropDownWrapper">
          <h3>Serving Size: </h3>
          <Select
            multi
            onChange={concern => {
              setDietaryConcerns(concern);
            }}
            values={[]}
            options={dietaryRestrictions}
            placeholder="Dietary Restriction"
          />
        </div>
        <div className="AddItemModal_DropDownWrapper">
          <h3>Serving Size: </h3>
          <Select
            multi
            onChange={category => {
              setFoodCategories(category);
            }}
            values={[]}
            options={foodCategory}
            placeholder="Food Category"
          />
        </div>
        <div className="AddItemModal_DropDownWrapper">
          <h3>Serving Size: </h3>
          <Select
            multi
            onChange={category => {
              setMealCategories(category);
            }}
            values={[]}
            options={mealCategory}
            placeholder="Meal Category"
          />
        </div>
      </div>
    </Modal>
  );
};
