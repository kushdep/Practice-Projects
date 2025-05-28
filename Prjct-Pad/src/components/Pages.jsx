import AddprjForm from "./AddPrjForm";
import DefaultPage from "./DefaultPage";

export default function Pages({
  onChngAddPrjStt,
  addPrjvar,
  handlePrjDetails,
}) {
  return (
    <>
      <div className="justify-con">
        {!addPrjvar && <DefaultPage chngState={onChngAddPrjStt} />}
        {addPrjvar && (
          <AddprjForm
            onChngPrjData={handlePrjDetails}
            cancelState={onChngAddPrjStt}
          />
        )}
      </div>
    </>
  );
}
