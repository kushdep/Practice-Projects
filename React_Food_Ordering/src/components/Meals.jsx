import { useEffect, useState } from "react";
import Meal from "./Meal";

export function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function getMeals() {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
        console.log("not OK");
      }
      const meals = await response.json();
      setLoadedMeals(meals);
    }
    getMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((e) => (
        <Meal key={e.id} meal={e} />
      ))}
    </ul>
  );
}
