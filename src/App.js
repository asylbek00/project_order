import "./App.css";
import Header from "./components/Layout/Header";
// import AvailableMeals from "./components/Meals/AvailableMeals";
import Meals from "./components/Meals/Meals";
// import { MealsSummary } from "./components/Meals/MealsSummary";

function App() {
  return (
    <div className="App">
      <Header />
      <Meals />
    </div>
  );
}

export default App;
