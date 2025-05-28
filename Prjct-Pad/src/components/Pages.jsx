import AddprjForm from "./AddPrjForm";
import DefaultPage from "./DefaultPage";
import ShowProject from "./ShowProject";

export default function Pages({
  onChngAddPrjStt,
  addPrjvar,
  handlePrjDetails,
  projects,
  prjKey,
  active
}) {
  const projectData=projects.filter((e)=> prjKey===e.key)
  console.log(projectData)
  console.log(projectData[0])
  return (
    <>
      <div className="">
        {(!addPrjvar && !prjKey) && <DefaultPage chngState={onChngAddPrjStt} />}
        {addPrjvar && (
          <AddprjForm
            onChngPrjData={handlePrjDetails}
            cancelState={onChngAddPrjStt}
          />
        )}
        {projectData[0] && <ShowProject project={projectData[0]} />}
      </div>
    </>
  );
}
