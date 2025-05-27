import Sidebar from "./components/Sidebar";
import Pages from "./components/Pages";
import { useState } from "react";

function App() {
  const [addPrjState,setAddPrjState]= useState(false)

  function handlePrjState() {
    console.log(addPrjState);
    setAddPrjState((prev) => {
      const newState = !prev;
      console.log("2 " + newState);
      return newState;
    });
  }


  return (
    <div className="flex flex-row h-screen mt-10">
      <section className="w-1/4 bg-black rounded-tr-lg h-full">
        <Sidebar onChngAddPrjStt={handlePrjState} addPrjvar={addPrjState}/>
      </section>
      <section className="w-4/5 ml-10 h-full">
        <Pages onChngAddPrjStt={handlePrjState} addPrjvar={addPrjState}/>
      </section>
    </div>
  );
}

export default App;
