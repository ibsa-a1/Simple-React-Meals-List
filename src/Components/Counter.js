import { useMealsListContext } from "../Providers/MealsProvider";

const Counter = () => {
    const {meals} = useMealsListContext();
    return (
        <div>
            <h1>Number of meals today: {meals.length}</h1>
        </div>
    )
}

export default Counter