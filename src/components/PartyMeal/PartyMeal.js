import React from "react";
import styles from "./PartyMeal.module.css";
import { AiOutlineCheck } from "react-icons/ai";

const PartyMeal = ({ title, protein, carbs, fat, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={image} alt="image" />
      </div>
      <div className={styles.mealInfo}>
        <h4>Tavo draugas valgys {title}</h4>
        <p className={styles.text}>kuriame yra:</p>
        <div className={styles.macroInfo}>
          <p className={styles.macro}>
            <AiOutlineCheck style={{ marginRight: "1rem" }} />
            {protein} baltymų
          </p>
          <p className={styles.macro}>
            <AiOutlineCheck style={{ marginRight: "1rem" }} />
            {carbs} angliavandenių
          </p>
          <p className={styles.macro}>
            <AiOutlineCheck style={{ marginRight: "1rem" }} />
            {fat} riebalų
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartyMeal;
