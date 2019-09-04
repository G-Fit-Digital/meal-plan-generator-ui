function calorieMaintenanceCalculation(
  weight,
  fat_percentage,
  gender,
  age,
  activity,
  target_weekly_loss
) {
  let gender_multiplier = gender === "male" ? 198 : 0;
  //Calculating lean body mass
  let lean_body_mass = (weight * (100 - fat_percentage)) / 100 / 2.2;
  //Calculating total fat mass
  let fat_mass = (weight * fat_percentage) / 100 / 2.2;
  //Total daily calories
  let calories =
    (13.587 * lean_body_mass +
      9.613 * fat_mass +
      gender_multiplier -
      3.351 * age +
      674) *
    activity;
  //daily calorie target factoring in loss goals.
  let target_daily_calories =
    calories - weight * (target_weekly_loss / 100) * 385;
  return target_daily_calories;
}

calorieMaintenanceCalculation(200, 13, "male", 35, 1.375, 0.7);
