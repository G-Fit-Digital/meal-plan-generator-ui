import React, { useState, CSSProperties } from "react";
import { calorieMaintenanceCalculation } from "../../utils/calorieCalculator";
import "./DietGenerator.css";
import Select from "react-dropdown-select";
import {
  genders,
  activityLevelOptions,
  aggressivenessOptions,
  dietaryRestrictions,
} from "../../utils/data";
import axios from "axios";
import { mapDispatchActions } from "../../utils/redux";
import { useDispatch } from "redux-react-hook";
import { setMeal } from "../../store/actions/plan";
import styled from "styled-components";

export default ({ props }) => {
  const dispatch = useDispatch();
  const actions = mapDispatchActions({ setMeal }, dispatch);
  const [clientName, setClientName] = useState("");
  const [weight, setWeight] = useState(0.0);
  const [bodyfat, setBodyFat] = useState(0.0);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [activityLevel, setActivityLevel] = useState(0.0);
  const [aggressiveness, setAggressiveness] = useState(0.0);
  const [restrictions, setRestrictions] = useState([]);
  function generateMeal() {
    let response = calorieMaintenanceCalculation(
      weight,
      bodyfat,
      gender,
      age,
      activityLevel,
      aggressiveness
    );
    axios
      .get(
        `http://localhost:3000/api/meal/calories/${response.target_daily_calories}/protein/${response.protein}/carb/${response.carbs_in_grams}/fat/${response.fat_in_grams}`,
        {
          params: {
            restrictions: restrictions,
          },
        }
      )
      .then(res => {
        actions.setMeal(res.data);
        props.history.push("/plan");
        console.log(res);
      });
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        onChange={e => setClientName(e.target.value)}
        className="DietGenerator_TextInputField"
        type="text"
        placeholder="Client Name"
      />
      <input
        onChange={e => setWeight(parseInt(e.target.value))}
        className="DietGenerator_TextInputField"
        type="text"
        placeholder="Client Weight (Pounds)"
      />
      <input
        onChange={e => setBodyFat(parseInt(e.target.value))}
        className="DietGenerator_TextInputField"
        type="text"
        placeholder="Client BF (%)"
      />
      <div className="DietGenerator_TextInputField">
        <StyledSelect
          onChange={sex => {
            if (sex[0]) {
              sex = sex[0].value;
            }
            setGender(sex);
          }}
          placeholder="Client Gender"
          values={[]}
          options={genders}
        />
      </div>
      <input
        onChange={e => setAge(parseInt(e.target.value))}
        className="DietGenerator_TextInputField"
        type="text"
        placeholder="Client Age"
      />
      <div className="DietGenerator_TextInputField">
        <StyledSelect
          onChange={activity => {
            if (activity[0]) {
              activity = activity[0].value;
            }
            setActivityLevel(activity);
          }}
          placeholder="Activity Level"
          values={[]}
          options={activityLevelOptions}
        />
      </div>
      <div className="DietGenerator_TextInputField">
        <StyledSelect
          onChange={agg => {
            if (agg[0]) {
              agg = agg[0].value;
            }
            setAggressiveness(agg);
          }}
          placeholder="Aggressiveness Of Regime"
          values={[]}
          options={aggressivenessOptions}
        />
      </div>
      <div className="DietGenerator_DropDownField">
        <StyledSelect
          multi
          onChange={agg => {
            if (agg[0]) {
              agg = agg[0].value;
            }
            setRestrictions(agg);
          }}
          placeholder="Dietary Restrictions"
          values={[]}
          options={dietaryRestrictions}
        />
      </div>
      <button
        onClick={() => {
          generateMeal();
        }}
        className="DietGenerator_FilledInButton"
      >
        Generate Plan
      </button>
    </div>
  );
};

const StyledSelect = styled(Select)`
  border: none !important;
`;
