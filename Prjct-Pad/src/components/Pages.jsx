import AddprjForm from "./AddPrjForm";
import DefaultPage from "./DefaultPage";
import ShowProject from "./ShowProject";

export default function Pages({
  onChngAddPrjStt,
  addPrjvar,
  handlePrjDetails,
}) {
  return (
    <>
      <div className="">
        {!addPrjvar && <DefaultPage chngState={onChngAddPrjStt} />}
        {addPrjvar && (
          <AddprjForm
            onChngPrjData={handlePrjDetails}
            cancelState={onChngAddPrjStt}
          />
        )}
        {/* <ShowProject/> */}
      </div>
    </>
  );
}
