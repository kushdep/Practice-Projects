import { ProjectContext } from "../store/projectContext";
import { useContext } from "react";

export default function DefaultPage() {
  const { chngPrjState } = useContext(ProjectContext);

  return (
    <div className=" flex flex-col items-center gap-3 m-40 mr-72">
      <img src="/logo.png" className="w-32" />
      <h1 className="text-center font-bold text-xl text-zinc-700 ">
        No Project Selected
      </h1>
      <h1 className="text-center font-light text-xl text-zinc-700 ">
        Select a project or get started with a new one
      </h1>
      <button
        onClick={chngPrjState}
        className="text-white bg-zinc-700 w-40 h-10 rounded-md m-8 "
      >
        Create New Project
      </button>
    </div>
  );
}
