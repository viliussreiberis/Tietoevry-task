import Form from "./components/Form/Form";
import Meals from "./components/Meals/Meals";
import WeekMeals from "./components/WeekMeals/WeekMeals";
import { MealsProvider } from "./Context/MealsContext";
import PartyForm from "./components/PartyForm/PartyForm";
import PartyMeals from "./components/PartyMeals/PartyMeals";

function App() {
  return (
    <MealsProvider>
      <div className="container">
        <h1 className="title">
          Išsirink savo mėgstamą vegetarišką patiekalą, sudaryk savaitės meniu
          ir surenk vegetarišką vakarėlį!
        </h1>
        <div className="main-grid">
          <Form />
          <PartyForm />
        </div>
        <div className="mealsContainer">
          <Meals />
          <WeekMeals />
          <PartyMeals />
        </div>
      </div>
    </MealsProvider>
  );
}

export default App;
