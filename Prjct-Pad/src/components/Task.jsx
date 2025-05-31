import { useState, useRef, useContext } from "react";
import Modal from "./Modals";
import { ProjectContext } from "../store/projectContext";

export default function Task({ prj }) {
  const { addTask, delTask } = useContext(ProjectContext);

  const [task, setTask] = useState("");
  const modal = useRef();

  function handleSetTask(event) {
    setTask(event.target.value);
  }

  function openModal() {
    modal.current.showModal();
  }

  return (
    <>
      <Modal refrence={modal}>
        <div className="bg-black">
          <h1 className="text-center font-bold text-xl p-4 text-white font-mono">
            Invalid Input!!
          </h1>
        </div>
        <p className="font-thin text-black font-mono p-10">
          please check your input field.
        </p>
      </Modal>
      <section className="flex flex-col">
        <div className="flex flex-col gap-5">
          <h1 className="text-black text-3xl  font-medium">Tasks</h1>
          <p className="mr-72">
            <input
              className="bg-stone-200 shadow-sm m-5 ml-0 mt-0 h-8 text-xl rounded-sm p-1"
              type="text"
              onChange={handleSetTask}
              value={task}
            />
            <button
              className="text-black font-mono text-lg font-normal"
              onClick={() => {
                if (task === "") {
                  openModal();
                } else {
                  addTask(prj.key, task);
                  setTask("");
                }
              }}
            >
              Add Task
            </button>
          </p>
        </div>
      </section>
      <section className="flex flex-col">
        <ul className="grid grid-cols-2 gap-4">
          {prj &&
            prj.tasks.map((e) => (
              <div
                key={e.key}
                className="flex flex-row bg-stone-100 drop-shadow-md "
              >
                <li className="text-lg w-4/5 font-mono  p-2 flex flex-row">
                  {e.taskDesc}
                </li>
                <button
                  onClick={() => delTask(e.key, prj.key)}
                  className="w-1/5 text-lg font-mono"
                >
                  Clear
                </button>
              </div>
            ))}
        </ul>
      </section>
    </>
  );
}
