import { v4 as uuid } from "uuid";
import Modal from "./Modals";
import { ProjectContext } from "../store/projectContext";
import { useContext, useRef } from "react";

export default function AddprjForm() {
  const { addPrjData, chngPrjState } = useContext(ProjectContext);

  const title = useRef();
  const desc = useRef();
  const date = useRef();
  const modal = useRef();

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
      <div className="flex justify-end mt-5 font-mono">
        <button
          onClick={chngPrjState}
          className="text-black text-xl w-20 h-10 rounded-md m-2"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            if (
              title.current.value.trim() === "" ||
              date.current.value.trim() === ""
            ) {
              openModal();
            } else {
              addPrjData({
                key: uuid(),
                title: title.current.value,
                desc: desc.current.value,
                date: date.current.value,
                tasks: [],
              });
            }
          }}
          className="text-white text-xl bg-black w-20 h-10 rounded-md m-2 font-mono"
        >
          Save
        </button>
      </div>
      <form className="flex flex-col">
        <label htmlFor="title" className="text-2xl text-left font-mono">
          TITLE
        </label>
        <input
          ref={title}
          className="bg-stone-200 shadow-md m-5 ml-0 mt-0 h-10 text-xl rounded-sm font-mono p-2"
          type="text"
          id="title"
          name="title"
        />

        <label htmlFor="description" className="text-2xl text-left font-mono">
          DESCRIPTION
        </label>
        <textarea
          ref={desc}
          name="description"
          className="bg-stone-200 shadow-md m-5 ml-0 mt-0 text-xl rounded-sm font-mono p-2"
          id="description"
        ></textarea>

        <label htmlFor="date" className="text-2xl text-left font-mono">
          DATE
        </label>
        <input
          ref={date}
          className="bg-stone-200 shadow-md m-5 ml-0 mt-0 h-10 text-xl rounded-sm font-mono p-2"
          type="date"
          id="date"
          name="date"
        />
      </form>
    </>
  );
}
