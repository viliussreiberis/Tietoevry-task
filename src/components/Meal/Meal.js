import React from "react";
import styles from "./Meal.module.css";
import { AiOutlineCheck } from "react-icons/ai";

const Meal = ({ carbs, protein, title, calories, fat, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={image} alt="meal photo" />
      </div>
      <div className={styles.mealInfo}>
        <p className={styles.veg}>Skirta vegetarams</p>
        <p className={styles.title}>{title}</p>
        <div className={styles.macros}>
          <p className={styles.macro}>
            <AiOutlineCheck style={{ marginRight: "1rem" }} /> Angliavandeniai:
            {carbs}
          </p>
          <p className={styles.macro}>
            <AiOutlineCheck style={{ marginRight: "1rem" }} /> Baltymai:
            {protein}
          </p>
          <p className={styles.macro}>
            <AiOutlineCheck style={{ marginRight: "1rem" }} /> Riebalai: {fat}
          </p>
          <p className={styles.macro}>
            <AiOutlineCheck style={{ marginRight: "1rem" }} /> Kalorijos:
            {calories}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Meal;
