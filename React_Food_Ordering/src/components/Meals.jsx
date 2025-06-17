import { useEffect, useState } from "react";
import Meal from "./Meal";
import useHttp from "../hooks/usehttp";

const reqConfig = {}

export function Meals() {
  const {data:loadedMeals,isLoading,error}=useHttp('http://localhost:3000/meals',reqConfig,[])

  if(isLoading){
    return <p>Fetching.......</p>
  }

  return (
    <ul id="meals">
      {loadedMeals.map((e) => (
        <Meal key={e.id} meal={e} />
      ))}
    </ul>
  );
}
