import React, { useContext, Fragment } from "react";
import styles from "./PartyMeals.module.css";
import MealsContext from "../../Context/MealsContext";
import PartyMeal from "../PartyMeal/PartyMeal";
import LoadingSpinner from "../LoadingSpinner.js/LoadingSpinner";

const PartyMeals = () => {
  const { friensdArr, showPartyMeals, isLoading } = useContext(MealsContext);

  return (
    <Fragment>
      {isLoading && <LoadingSpinner />}
      {showPartyMeals && !isLoading && (
        <div id="partyMeals" className={styles.grid}>
          {friensdArr.map((item, i) => {
            return (
              <PartyMeal
                key={i}
                title={item.title}
                protein={item.protein}
                fat={item.fat}
                carbs={item.carbs}
                image={item.image}
              />
            );
          })}
        </div>
      )}
    </Fragment>
  );
};

export default PartyMeals;
