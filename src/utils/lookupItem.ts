import axios from "axios";

export function lookUpItem(
  item: any,
  setServing: Function,
  setProtein: Function,
  setFat: Function,
  setCarbs: Function,
  setCalories: Function,
  setFibre: Function
) {
  if (item.ndbno) {
    axios
      .get(`http://localhost:3000/select/${item.ndbno}`)
      .then(res => {
        setServing(res.data.report.food.nutrients[0].measures[0].label);
        console.log(res.data.report.food.nutrients);
        for (var i = 0; i < res.data.report.food.nutrients.length; i++) {
          switch (res.data.report.food.nutrients[i].name) {
            case "Protein":
              setProtein(res.data.report.food.nutrients[i].measures[0].value);
              break;
            case "Total lipid (fat)":
              setFat(res.data.report.food.nutrients[i].measures[0].value);
              break;
            case "Carbohydrate, by difference":
              setCarbs(res.data.report.food.nutrients[i].measures[0].value);
              break;
            case "Energy":
              setCalories(res.data.report.food.nutrients[i].measures[0].value);
              break;
            case "Fiber, total dietary":
              setFibre(res.data.report.food.nutrients[i].measures[0].value);
              break;
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
}
