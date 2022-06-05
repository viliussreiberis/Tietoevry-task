import React, { useContext } from "react";
import Meal from "../Meal/Meal";
import styles from "./Meals.module.css";
import MealsContext from "../../Context/MealsContext";

const Meals = () => {
  const { meals, showMeals } = useContext(MealsContext);
  return (
    <>
      {showMeals && (
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
      )}
    </>
  );
};

export default Meals;
