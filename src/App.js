import "./App.css";
import MealsProvider from "./Providers/MealsProvider";
import MealsList from "./Components/MealsList";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
    </div>
  );
}

export default App;
