export const getMaleMacrosPerMeal = (age, height, weight, meals) => {
  const BEE = 66.47 + 13.75 * weight + 5 * height - 6.8 * age;
  const calories = BEE * 1.2;
  const proteins = +(weight * 1).toFixed(2);
  const carbs = +((calories * 0.2) / 4).toFixed(2);
  const fat = +((calories * 0.3) / 9).toFixed(2);
  const proteinsPerMeal = +(proteins / meals).toFixed(2);
  const fatPerMeal = +(fat / meals).toFixed(2);
  const carbsPerMeal = +(carbs / meals).toFixed(2);
  return [
    parseInt(proteinsPerMeal).toString(),
    parseInt(carbsPerMeal).toString(),
    parseInt(fatPerMeal).toString(),
  ];
};

export const getFemaleMacrosPerMeal = (age, height, weight, meals) => {
  const BEE = 655.1 + 9.6 * weight + 1.9 * height - 4.7 * age;
  const calories = BEE * 1.2;
  const proteins = +(weight * 0.8).toFixed(2);
  const carbs = +((calories * 0.2) / 4).toFixed(2);
  const fat = +((calories * 0.3) / 9).toFixed(2);

  const proteinsPerMeal = +(proteins / meals).toFixed(2);
  const fatPerMeal = +(fat / meals).toFixed(2);
  const carbsPerMeal = +(carbs / meals).toFixed(2);
  return [
    parseInt(proteinsPerMeal).toString(),
    parseInt(fatPerMeal).toString(),
    parseInt(carbsPerMeal).toString(),
  ];
};

export const getProperties = (
  ageRef,
  heightRef,
  weightRef,
  mealsRef,
  fromRef,
  toRef,
  seasonRef
) => {
  const age = +ageRef.current?.value;
  const height = +heightRef.current?.value;
  const weight = +weightRef.current?.value;
  const meals = +mealsRef.current?.value;
  const from = +fromRef.current?.value;
  const to = +toRef.current?.value;
  const season = +seasonRef.current?.value;
  return [
    age,
    height,
    weight,
    meals,
    parseInt(from).toString(),
    parseInt(to).toString(),
    parseInt(season).toString(),
  ];
};

export const setDefaultValues = (
  ageRef,
  heightRef,
  weightRef,
  mealsRef,
  fromRef,
  toRef,
  seasonRef
) => {
  ageRef.current.value = "";
  heightRef.current.value = "";
  weightRef.current.value = "";
  mealsRef.current.value = "";
  fromRef.current.value = "";
  toRef.current.value = "";
  seasonRef.current.value = "";
};

export const fetchData = (from, carbs, proteins, season, to, setMeals) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(
    `https://api.spoonacular.com/recipes/findByNutrients?apiKey=6949198e884a4ce0b2e2d6b1d035ec32&minCalories=${from}&minCarbs=${carbs}&minProtein=${proteins}&minFat=${season}&maxCalories=${to}&diet=vegetarian`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      setMeals(response);
    })
    .catch((err) => console.error(err));
};
