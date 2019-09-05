function calorieMaintenanceCalculation(
  weight,
  fat_percentage,
  gender,
  age,
  activity,
  target_weekly_loss
) {
  let obj = {
    target_daily_calories: 0,
    gender,
    lean_body_mass: 0,
    fat_mass: 0,
    calories: 0,
    protein: 0,
    protein_cals: 0,
    carb_calories: 0,
    carbs_in_grams: 0,
    fat_calories: 0,
    fat_in_grams: 0,
  };
  let gender_multiplier = gender === "male" ? 198 : 0;
  //Calculating lean body mass
  obj.lean_body_mass = (weight * (100 - fat_percentage)) / 100 / 2.2;
  //Calculating total fat mass
  obj.fat_mass = (weight * fat_percentage) / 100 / 2.2;
  //Total daily calories
  obj.calories =
    (13.587 * obj.lean_body_mass +
      9.613 * obj.fat_mass +
      gender_multiplier -
      3.351 * age +
      674) *
    activity;
  //daily calorie target factoring in loss goals.
  obj.target_daily_calories =
    obj.calories - weight * (target_weekly_loss / 100) * 385;
  //Calculate Protein Requirements
  if (target_weekly_loss > 0) {
    if (age <= 30) {
      obj.protein = 1.9 * obj.lean_body_mass;
    } else if (age <= 40) {
      obj.protein = 2.15 * obj.lean_body_mass;
    } else if (age <= 50) {
      obj.protein = 2.45 * obj.lean_body_mass;
    } else if (age <= 60) {
      obj.protein = 3.15 * obj.lean_body_mass;
    } else {
      obj.protein = 3.65 * obj.lean_body_mass;
    }
  } else {
    if (age <= 30) {
      obj.protein = 2.3 * obj.lean_body_mass;
    } else if (age <= 40) {
      obj.protein = 2.6 * obj.lean_body_mass;
    } else if (age <= 50) {
      obj.protein = 2.95 * obj.lean_body_mass;
    } else if (age <= 60) {
      obj.protein = 3.3 * obj.lean_body_mass;
    } else {
      obj.protein = 3.65 * obj.lean_body_mass;
    }
  }
  obj.protein_cals = obj.protein * 4;
  obj.carb_calories = obj.target_daily_calories - obj.protein_cals * 0.55;
  obj.carbs_in_grams = obj.carb_calories / 4;
  obj.fat_calories = obj.target_daily_calories - obj.protein_cals * 0.45;
  obj.fat_in_grams = obj.fat_calories / 9;
  return obj;
}
calorieMaintenanceCalculation(200, 13, "male", 35, 1.375, 0.7);
