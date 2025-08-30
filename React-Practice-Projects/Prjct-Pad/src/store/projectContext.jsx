import { createContext } from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export const ProjectContext = createContext({
  projects: [],
  prjctKey: "",
  prjState: false,
  addPrjData: null,
  chngPrjState: null,
  addTask: null,
  delTask: null,
  shwPrj: null,
  delPrj: null,
});

export default function ProjectContextProvider({ children }) {
  const [addPrjState, setAddPrjState] = useState(false);
  const [prjData, setPrjData] = useState([]);
  const [showProject, setShowProject] = useState("");

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
        }
        return prj;
      });
      return updatedPrj;
    });
  }

  function handleShowPrj(key) {
    setShowProject(key);
  }

  function handleDeletePrj(key) {
    setPrjData((prev) => {
      const updated = prev.filter((e) => e.key !== key);
      return updated;
    });
    handlePrjState();
  }

  const cntxVal = {
    projects: prjData,
    prjctKey: showProject,
    prjState: addPrjState,
    addPrjData: handlePrjData,
    chngPrjState: handlePrjState,
    addTask: handleAddTask,
    delTask: deleteTask,
    shwPrj: handleShowPrj,
    delPrj: handleDeletePrj,
  };

  return <ProjectContext value={cntxVal}>{children}</ProjectContext>;
}
