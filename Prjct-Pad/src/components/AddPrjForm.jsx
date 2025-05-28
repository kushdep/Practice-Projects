import { useRef } from "react";

export default function AddprjForm({ onChngPrjData, cancelState }) {
  const title = useRef();
  const desc = useRef();
  const date = useRef();

  return (
    <>
      <div className="flex justify-end mt-5">
        <button
          onClick={cancelState}
          className="text-black text-xl w-20 h-10 rounded-md m-2"
        >
          Cancel
        </button>
        <button
          onClick={() =>
            onChngPrjData({
              title: title.current.value,
              desc: desc.current.value,
              date: date.current.value,
            })
          }
          className="text-white text-xl bg-black w-20 h-10 rounded-md m-2"
        >
          Save
        </button>
      </div>
      <form className="flex flex-col">
        <label htmlFor="title" className="text-2xl text-left">
          TITLE
        </label>
        <input
          ref={title}
          className="bg-stone-200 shadow-md m-5 ml-0 mt-0 h-10 text-xl rounded-sm"
          type="text"
          id="title"
          name="title"
        />

        <label htmlFor="description" className="text-2xl text-left">
          DESCRIPTION
        </label>
        <textarea
          ref={desc}
          name="description"
          className="bg-stone-200 shadow-md m-5 ml-0 mt-0 text-xl rounded-sm"
          id="description"
        ></textarea>

        <label htmlFor="date" className="text-2xl text-left">
          DATE
        </label>
        <input
          ref={date}
          className="bg-stone-200 shadow-md m-5 ml-0 mt-0 h-10 text-xl rounded-sm"
          type="date"
          id="date"
          name="date"
        />
      </form>
    </>
  );
}
