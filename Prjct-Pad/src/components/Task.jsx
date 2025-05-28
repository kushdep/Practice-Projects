import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";

export default function Task() {
  const [task, setTask] = useState([]);
  const taskRef = useRef();

  function handleSetTask() {
    setTask((prev) => {
      const data = {
        key: uuid(),
        taskDesc: taskRef.current.value,
      };
      taskRef.current.value=""
      const updatedData = [...prev, data];
      return updatedData;
    });
  }

  return (
    <>
      <section className="flex flex-col">
        <div className="flex flex-col gap-5">
          <h1 className="text-black text-3xl  font-medium">Tasks</h1>
          <p className="mr-72">
            <input
              ref={taskRef}
              className="bg-stone-200 shadow-sm m-5 ml-0 mt-0 h-8 text-xl rounded-sm p-1"
              type="text"
            />
            <button
              className="text-black font-mono text-lg font-normal"
              
              onClick={handleSetTask}
            >
              Add Task
            </button>
          </p>
        </div>
      </section>
      <section className="flex flex-col">
        <ul className="grid grid-cols-2 gap-4">
          {task[0] &&
            task.map((e) => (
              <div className="flex flex-row bg-stone-100 drop-shadow-md ">
                <li className="text-lg w-4/5 font-mono  p-2 flex flex-row">
                  {e.taskDesc}
                </li>
                <button className="w-1/5 text-lg font-mono">Clear</button>
              </div>
            ))}
        </ul>
      </section>
    </>
  );
}
