import React, { useRef, useContext } from "react";
import styles from "./PartyForm.module.css";
import MealsContext from "../../Context/MealsContext";

const PartyForm = () => {
  const {
    setShowMeals,
    setShowWeek,
    setShowPartyMeals,
    setFriendsArr,
    setIsWrongForm,
    setIsLoading,
  } = useContext(MealsContext);
  const friendNumRef = useRef();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowMeals(false);
    setShowWeek(false);
    let friendsNum = friendNumRef.current.value;

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(
      `https://api.spoonacular.com/recipes/findByNutrients?apiKey=6949198e884a4ce0b2e2d6b1d035ec32&minCarbs=10&number=${friendsNum}&diet=vegetarian`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setFriendsArr(response);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
      });

    setShowPartyMeals(true);
    setIsWrongForm(false);
    friendNumRef.current.value = "";
    setTimeout(() => {
      document.getElementById("partyMeals").scrollIntoView();
    }, [1000]);
  };

  return (
    <div className={styles.partyContainer}>
      <h1 className={styles.partyTitle}>
        O gal nori surengti vegetarišką vakarėlį ?
      </h1>
      <form className={styles.partyForm} onSubmit={handleSubmitForm}>
        <div className={styles.overlay}>
          <div>
            <label className={styles.label} htmlFor="friends">
              Įvesk draugų kiekį, kurie ragaus vegetarišką maistą!
            </label>
          </div>
          <input
            ref={friendNumRef}
            type="number"
            max={25}
            min={2}
            name="friends"
            id="friends"
            className={styles.input}
          />
          <button className={styles.button} type="submit">
            Ieškoti patiekalų
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartyForm;
