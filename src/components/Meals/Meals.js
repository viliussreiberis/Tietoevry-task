import React, { useContext, Fragment } from "react";
import Meal from "../Meal/Meal";
import styles from "./Meals.module.css";
import MealsContext from "../../Context/MealsContext";
import LoadingSpinner from "../LoadingSpinner.js/LoadingSpinner";
const Meals = () => {
  const { meals, showMeals, isLoading } = useContext(MealsContext);

  return (
    <Fragment>
      {isLoading && <LoadingSpinner />}
      {showMeals && !isLoading && (
        <div id="mainMeals">
          <h1>Patiekalai</h1>
          <div className={styles.grid}>
            {meals.map((item, i) => {
              return (
                <Meal
                  key={i}
                  protein={item.protein}
                  carbs={item.carbs}
                  title={item.title}
                  calories={item.calories}
                  fat={item.fat}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Meals;
