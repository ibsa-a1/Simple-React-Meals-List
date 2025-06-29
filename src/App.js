import MealsProvider from "./Providers/MealsProvider";
import MealsList from "./Components/MealsList";

function App() {
  return (
    <div className="App">
      <MealsProvider>
        <MealsList />
      </MealsProvider>
    </div>
  );
}

export default App;
