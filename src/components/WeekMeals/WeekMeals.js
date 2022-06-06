import React, { useContext } from "react";
import styles from "./WeekMeals.module.css";
import MealsContext from "../../Context/MealsContext";
import DayMeals from "../DayMeals/DayMeals";
import LoadingSpinner from "../LoadingSpinner.js/LoadingSpinner";

const WeekMeals = () => {
  const { meals, showWeek, mealsPerDay, isLoading } = useContext(MealsContext);
  const weekDays = [
    "Pirmadienis",
    "Antradienis",
    "Trečiadienis",
    "Ketvirtadienis",
    "Penktadienis",
    "Šeštadienis",
    "Sekmadienis",
  ];

  let daysArray = [];

  for (let i = 0; i < +mealsPerDay; i++) {
    daysArray.push(i + 1);
  }

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {showWeek && !isLoading && (
        <div id="weekMeals">
          <h2 className={styles.weekMealsTitle}>Savaitės meniu</h2>
          {meals?.length === 0 ? (
            <p>Pagal Jūsų užklausą rezultatų nėra</p>
          ) : (
            <div className={styles.grid}>
              {weekDays.map((day, i) => {
                return (
                  <DayMeals
                    key={i}
                    day={day}
                    meals={meals}
                    daysArray={daysArray}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default WeekMeals;
