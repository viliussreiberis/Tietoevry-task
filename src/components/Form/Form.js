import React, { useState, useRef, useContext } from "react";
import styles from "./Form.module.css";
import {
  getMaleMacrosPerMeal,
  getFemaleMacrosPerMeal,
  getProperties,
  setDefaultValues,
  fetchData,
} from "../../utils/utils";
import MealsContext from "../../Context/MealsContext";
import { AiOutlineArrowDown } from "react-icons/ai";

const Form = () => {
  const [isMale, setIsMale] = useState(true);
  const [isFemale, setIsFemale] = useState(false);
  const [isAnimation, setIsAnimation] = useState(false);
  const ageRef = useRef();
  const heightRef = useRef();
  const weightRef = useRef();
  const mealsRef = useRef();
  const fromRef = useRef();
  const toRef = useRef();
  const seasonRef = useRef();
  const {
    setMeals,
    setShowMeals,
    setShowWeek,
    setShowPartyMeals,
    setMealsPerDay,
    setIsWrongForm,
    isWrongForm,
    setIsLoading,
    isLoading,
  } = useContext(MealsContext);

  const handleMaleState = () => {
    setIsMale(true);
    setIsFemale(false);
    setDefaultValues(
      ageRef,
      heightRef,
      weightRef,
      mealsRef,
      fromRef,
      toRef,
      seasonRef
    );
  };

  const handleFemaleState = () => {
    setIsMale(false);
    setIsFemale(true);
    setDefaultValues(
      ageRef,
      heightRef,
      weightRef,
      mealsRef,
      fromRef,
      toRef,
      seasonRef
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setMealsPerDay(mealsRef.current.value);

    if (isFemale) {
      const [age, height, weight, meals, from, to, season] = getProperties(
        ageRef,
        heightRef,
        weightRef,
        mealsRef,
        fromRef,
        toRef,
        seasonRef
      );
      const [proteins, fats, carbs] = getFemaleMacrosPerMeal(
        age,
        height,
        weight,
        meals
      );

      fetchData(from, carbs, proteins, season, to, setMeals);
    }
    if (isMale) {
      const [age, height, weight, meals, from, to, season] = getProperties(
        ageRef,
        heightRef,
        weightRef,
        mealsRef,
        fromRef,
        toRef,
        seasonRef
      );
      const [proteins, fats, carbs] = getMaleMacrosPerMeal(
        age,
        height,
        weight,
        meals
      );
      fetchData(from, carbs, proteins, season, to, setMeals);
    }
    setIsLoading(false);
    setShowMeals(true);
    setDefaultValues(
      ageRef,
      heightRef,
      weightRef,
      mealsRef,
      fromRef,
      toRef,
      seasonRef
    );
    setTimeout(() => {
      document.getElementById("mainMeals").scrollIntoView();
    }, [1000]);
    setShowWeek(false);
    setShowPartyMeals(false);
    setIsAnimation(true);
    setIsWrongForm(false);
  };

  const handleWeekendMenu = (e) => {
    setIsLoading(true);
    const [age, height, weight, meals, from, to, season] = getProperties(
      ageRef,
      heightRef,
      weightRef,
      mealsRef,
      fromRef,
      toRef,
      seasonRef
    );
    if (
      age <= 0 ||
      height <= 0 ||
      weight <= 0 ||
      meals <= 0 ||
      to <= 0 ||
      season <= 0
    ) {
      setIsWrongForm(true);
      setIsLoading(false);
      return;
    }
    handleSubmit(e);
    setShowMeals(false);
    setShowWeek(true);
    setShowPartyMeals(false);
    setIsWrongForm(false);
    setDefaultValues(
      ageRef,
      heightRef,
      weightRef,
      mealsRef,
      fromRef,
      toRef,
      seasonRef
    );
    setIsLoading(false);
    setTimeout(() => {
      document.getElementById("weekMeals").scrollIntoView();
    }, [1000]);
  };
  return (
    <div>
      <h2 className={styles.mainInfo}>Pagrindin?? informacija</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <p>Lytis</p>
          <div>
            <button
              type="button"
              className={isMale ? styles.activeMale : styles.buttonMale}
              onClick={handleMaleState}
            >
              Vyras
            </button>
            <button
              type="button"
              className={isFemale ? styles.activeFemale : styles.buttonFemale}
              onClick={handleFemaleState}
            >
              Moteris
            </button>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="age">Am??ius</label>
          <input
            placeholder="Metai"
            ref={ageRef}
            id="age"
            min={10}
            max={95}
            type="number"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="height">??gis</label>
          <input
            placeholder="cm"
            ref={heightRef}
            id="height"
            type="number"
            min={100}
            max={220}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="weight">Svoris</label>
          <input
            placeholder="kg"
            ref={weightRef}
            id="weight"
            type="number"
            required
            min={10}
            max={150}
          />
        </div>
        <div className={styles.formGroup}>
          <p>Kalorijos</p>
          <div className={styles.colories}>
            <div className={styles.from}>
              <label htmlFor="from" style={{ marginRight: "1rem" }}>
                Nuo
              </label>
              <input
                min={450}
                placeholder="kcal"
                ref={fromRef}
                id="from"
                type="number"
              />
            </div>
            <div className={styles.to}>
              <label
                htmlFor="to"
                style={{ marginRight: "1rem", marginLeft: "1rem" }}
              >
                Iki
              </label>
              <input
                max={1000}
                placeholder="kcal"
                ref={toRef}
                id="to"
                type="number"
              />
            </div>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label for="meals">Sezoni??kumas</label>
          <select required ref={seasonRef} name="meals" id="meals">
            <option value="20">Vasari??kas</option>
            <option value="25">??iemiskas</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label for="meals">Valgym?? kartai per diena</label>
          <select required ref={mealsRef} name="meals" id="meals">
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.button} type="submit">
            Ie??koti patiekal??
          </button>
          <button
            className={styles.button}
            onClick={handleWeekendMenu}
            type="button"
          >
            Sudaryti savait??s MENIU
          </button>
        </div>
      </form>
      {isWrongForm && (
        <p className={styles.alert}>
          Neteisingai u??pildyta forma. Bandykite dar kart?? !
        </p>
      )}
      {isAnimation && (
        <div className={styles.arrow}>
          <AiOutlineArrowDown />
        </div>
      )}
    </div>
  );
};

export default Form;
