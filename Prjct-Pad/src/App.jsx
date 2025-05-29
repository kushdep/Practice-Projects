import Sidebar from "./components/Sidebar";
import Pages from "./components/Pages";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Modal from "./components/Modals";

function App() {
  const [addPrjState, setAddPrjState] = useState(false);
  const [prjData, setPrjData] = useState([]);
  const [showProject, setShowProject] = useState("");
  // const [pageIsActive,setPageIsActive]=useState(false)

  function handlePrjState() {
    console.log(addPrjState);
    setAddPrjState((prev) => {
      const newState = !prev;
      return newState;
    });
  }

  function handlePrjData(projectDetails) {
    setPrjData((prev) => {
      const newData = [...prev, projectDetails];
      return newData;
    });
    handlePrjState();
  }

  function handleAddTask(key, task) {
    const prj = prjData.filter((e) => e.key === key);
    const taskData = {
      key: uuid(),
      taskDesc: task,
    };
    setPrjData((prev) => {
      const updatedPrj = { ...prj[0], tasks: [...prj[0].tasks, taskData] };
      const updatedPrjData = prev.map((e) =>
        e.key === key ? { ...e, ...updatedPrj } : e
      );
      return updatedPrjData;
    });
  }

  function deleteTask(tasKey, prjKey) {
    setPrjData((prev) => {
      const updatedPrj = prev.map((prj) => {
        if (prj.key === prjKey) {
          const updatedTasks = prj.tasks.filter((t) => t.key !== tasKey);
          prj.tasks = updatedTasks;
          console.log("deleted task " + JSON.stringify(prj));
        }
        return prj;
      });
      return updatedPrj;
    });
  }

  function handleShowPrj(key) {
    // console.log("Key "+key)
    setShowProject(key);
  }

  function handleDeletePrj(key) {
    setPrjData((prev) => {
      const updated = prev.filter((e) => e.key !== key);
      return updated;
    });
  }

  return (
    <div className="flex flex-row h-screen mt-10">
      <section className="w-1/4 bg-black rounded-tr-lg h-full">
        <Sidebar
          // active={pageIsActive}
          onChngAddPrjStt={handlePrjState}
          addPrjvar={addPrjState}
          projects={prjData}
          openPrj={handleShowPrj}
        />
      </section>
      <section className="w-4/5 ml-10 h-full">
        <Pages
          // active={pageIsActive}
          onChngAddPrjStt={handlePrjState}
          addPrjvar={addPrjState}
          projects={prjData}
          prjKey={showProject}
          handlePrjDetails={handlePrjData}
          addTask={handleAddTask}
          delPrjFn={handleDeletePrj}
          delTaskFn={deleteTask}
        />
      </section>
    </div>
  );
}

export default App;
