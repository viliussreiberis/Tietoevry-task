import React, { useContext, Fragment } from "react";
import styles from "./PartyMeals.module.css";
import MealsContext from "../../Context/MealsContext";
import PartyMeal from "../PartyMeal/PartyMeal";

const PartyMeals = () => {
  const { friensdArr, showPartyMeals } = useContext(MealsContext);

  return (
    <Fragment>
      {!friensdArr && <p>Loading...</p>}
      {showPartyMeals && (
        <div className={styles.grid}>
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
