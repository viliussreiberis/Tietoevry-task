import { createContext, useState } from "react";

const MealsContext = createContext();

export function MealsProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [showMeals, setShowMeals] = useState(false);
  const [showWeek, setShowWeek] = useState(false);
  const [showPartyMeals, setShowPartyMeals] = useState(false);
  const [friensdArr, setFriendsArr] = useState([]);
  const [mealsPerDay, setMealsPerDay] = useState(0);
  const [isWrongForm, setIsWrongForm] = useState(false);
  return (
    <MealsContext.Provider
      value={{
        meals,
        setMeals,
        showMeals,
        setShowMeals,
        showWeek,
        setShowWeek,
        showPartyMeals,
        setShowPartyMeals,
        friensdArr,
        setFriendsArr,
        mealsPerDay,
        setMealsPerDay,
        isWrongForm,
        setIsWrongForm,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
}

export default MealsContext;
