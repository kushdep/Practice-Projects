import { ProjectContext } from "../store/projectContext";
import { useContext } from "react";

export default function Sidebar() {
  const { prjState, chngPrjState, projects, shwPrj } =
    useContext(ProjectContext);

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-white  tracking-tighter text-3xl font-bold text-left pl-7 pt-8">
          YOUR PROJECTS
        </h1>
        {!prjState && (
          <button
            className="text-white font-mono bg-zinc-700 w-36 h-10 rounded-md m-8"
            onClick={chngPrjState}
          >
            + Add Project
          </button>
        )}
      </div>

      <ul className="flex flex-col gap-5">
        {projects.map((e) => (
          <button
            key={e.key}
            onClick={() => shwPrj(e.key)}
            className="text-zinc-500 text-2xl text-left ml-10 font-mono "
          >
            <li className="hover:bg-white">{e.title}</li>
          </button>
        ))}
      </ul>
    </div>
  );
}
