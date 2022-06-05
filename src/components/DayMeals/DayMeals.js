import React from "react";
import styles from "./DayMeals.module.css";
import { AiOutlineCheck } from "react-icons/ai";

const DayMeals = ({ day, meals, daysArray }) => {
  function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
  }

  return (
    <div>
      <div className={styles.card}>
        <h3 style={{ marginBottom: ".5rem" }}>{day}</h3>
        <div className={styles.dayMeals}>
          {daysArray.map((item, i) => {
            return (
              <p className={styles.dayMeal} key={i}>
                <AiOutlineCheck /> {getRandomItem(meals)?.title}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DayMeals;
