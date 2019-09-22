import React, { useEffect, useState } from "react";
import "./MealPlan.css";
import Item from "./Item";
import Header from "./Header";
import FooterTotals from "./FooterTotals";
import axios from "axios";
import AddItemInput from "./AddItemInput";
import html2canvas from "html2canvas";
import * as jsPDF from "jspdf";
import Meal from "./Meal";

export default ({ props }: any) => {
  const meal_id = localStorage.getItem("meal_id");
  const [meal, setMeal] = useState({ _id: "", meal: [] });
  async function fetchData() {
    await axios.get(`http://localhost:3000/api/meal/${meal_id}`).then(res => {
      setMeal(res.data);
    });
  }
  function generatePDF() {
    const input = document.getElementById("ToPrint");
    html2canvas(input).then(canvas => {
      const imageData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(
        imageData,
        "PNG",
        0,
        0,
        pdf.internal.pageSize.getWidth(),
        pdf.internal.pageSize.getHeight()
      );
      pdf.save("download.pdf");
    });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div id="ToPrint" className="MealPlan_Container">
      <Header />
      {meal.meal.map(el => (
        <Meal el={el} meal={meal} fetchData={fetchData} />
      ))}
      <FooterTotals plan={meal} />
      <button onClick={() => generatePDF()}>Generate PDF</button>
    </div>
  );
};
