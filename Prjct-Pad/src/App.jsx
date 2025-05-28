import Sidebar from "./components/Sidebar";
import Pages from "./components/Pages";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { use } from "react";


function App() {
  const [addPrjState, setAddPrjState] = useState(false);
  const [prjData, setPrjData] = useState([]);
  const [showProject, setShowProject] = useState("");
  const [pageIsActive,setPageIsActive]=useState(false)

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
      const data = {...projectDetails,key:uuid()}
      const newData = [...prev,data];
      return newData;
    });
    handlePrjState();
  }

  function handleShowPrj(key) {
    // console.log("Key "+key)
    setShowProject(key)
  }


  return (
    <div className="flex flex-row h-screen mt-10">
      <section className="w-1/4 bg-black rounded-tr-lg h-full">
        <Sidebar
        active={pageIsActive}
          onChngAddPrjStt={handlePrjState}
          addPrjvar={addPrjState}
          projects={prjData}
          openPrj={handleShowPrj}
        />
      </section>
      <section className="w-4/5 ml-10 h-full">
        <Pages
          active={pageIsActive}
          onChngAddPrjStt={handlePrjState}
          addPrjvar={addPrjState}
          projects={prjData}
          prjKey={showProject}
          handlePrjDetails={handlePrjData}
        />
      </section>
    </div>
  );
}

export default App;
