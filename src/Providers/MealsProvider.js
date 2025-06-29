import React from 'react'
import {useState} from 'react'

const MealsContext = React.createContext();
const todaysMeals = ["Baked Beans", "Baked Sweet Potatoes", "Roasted Chicken", "Baked Potatoes"]

const MealsProvider = ({children}) => {
    const [meals, setMealsList] = useState(todaysMeals);
  return (
    <div>
      <MealsContext.Provider value={{meals}}>
        {children}
      </MealsContext.Provider>
    </div>
  )
}

export const useMealsListContext = () => React.useContext(MealsContext);
export default MealsProvider
