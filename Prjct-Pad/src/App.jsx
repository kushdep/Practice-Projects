import Sidebar from "./components/Sidebar";
import Pages from "./components/Pages";
import { useState } from "react";

const PRJ_DATA = [];

function App() {
  const [addPrjState, setAddPrjState] = useState(false);
  const [prjData, setPrjData] = useState([]);

  function handlePrjState() {
    console.log(addPrjState);
    setAddPrjState((prev) => {
      const newState = !prev;
      console.log("2 " + newState);
      return newState;
    });
  }

  function handlePrjData(projectDetails) {
    setPrjData((prev) => {
      const newData = [...prev, projectDetails];
      PRJ_DATA.push(newData);
      return newData;
    });
    handlePrjState();
  }

  console.log(
    "APP " + JSON.stringify(prjData) + "PRJ " + JSON.stringify(PRJ_DATA)
  );

  return (
    <div className="flex flex-row h-screen mt-10">
      <section className="w-1/4 bg-black rounded-tr-lg h-full">
        <Sidebar
          onChngAddPrjStt={handlePrjState}
          addPrjvar={addPrjState}
          projectsTitle={prjData}
        />
      </section>
      <section className="w-4/5 ml-10 h-full">
        <Pages
          onChngAddPrjStt={handlePrjState}
          addPrjvar={addPrjState}
          projects={PRJ_DATA}
          handlePrjDetails={handlePrjData}
        />
      </section>
    </div>
  );
}

export default App;
