import React, { useEffect } from "react";
import { calorieMaintenanceCalculation } from "../../utils/calorieCalculator";

export default () => {
  useEffect(() => {
    let val = calorieMaintenanceCalculation(135, 25, "female", 21, 1.375, 0.5);
    console.log(val);
  });
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        style={{
          height: 48,
          marginBottom: 8,
          width: 375,
          alignSelf: "center",
          marginTop: 8,
        }}
        type="text"
        placeholder="Client Name"
      />
      <input
        style={{
          height: 48,
          marginBottom: 8,
          width: 375,
          alignSelf: "center",
          marginTop: 8,
        }}
        type="text"
        placeholder="Client Weight (Pounds)"
      />
      <input
        style={{
          height: 48,
          marginBottom: 8,
          width: 375,
          alignSelf: "center",
          marginTop: 8,
        }}
        type="text"
        placeholder="Client BF (%)"
      />
      <input
        style={{
          height: 48,
          marginBottom: 8,
          width: 375,
          alignSelf: "center",
          marginTop: 8,
        }}
        type="text"
        placeholder="Client Gender"
      />
      <input
        style={{
          height: 48,
          marginBottom: 8,
          width: 375,
          alignSelf: "center",
          marginTop: 8,
        }}
        type="text"
        placeholder="Client Age"
      />
      <input
        style={{
          height: 48,
          marginBottom: 8,
          width: 375,
          alignSelf: "center",
          marginTop: 8,
        }}
        type="text"
        placeholder="Activity Level"
      />
      <input
        style={{
          height: 48,
          marginBottom: 8,
          width: 375,
          alignSelf: "center",
          marginTop: 8,
        }}
        type="text"
        placeholder="Aggressiveness"
      />
    </div>
  );
};
