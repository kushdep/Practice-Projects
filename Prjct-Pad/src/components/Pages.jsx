import AddprjForm from "./AddPrjForm";
import DefaultPage from "./DefaultPage";
import ShowProject from "./ShowProject";
import { ProjectContext } from "../store/projectContext";
import { useContext } from "react";

export default function Pages() {
  const { prjState, projects, prjctKey } = useContext(ProjectContext);

  const projectData = projects.filter((e) => prjctKey === e.key);
  console.log(projectData);
  console.log(projectData[0]);
  return (
    <>
      <div className="">
        {!prjState && !prjctKey && <DefaultPage />}
        {prjState && <AddprjForm />}
        {projectData[0] && !prjState && (
          <ShowProject project={projectData[0]} />
        )}
      </div>
    </>
  );
}
