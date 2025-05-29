import { useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, refrence }) {
  return createPortal(
    <>
      <dialog
        ref={refrence}
        className="backdrop:bg-stone-900/90 rounded-md shadow-md"
      >
        {children}
        <form method="dialog">
          <button className="text-white p-2 bg-black rounded-md m-2 font-mono mx-32">
            close
          </button>
        </form>
      </dialog>
    </>,
    document.getElementById("modal-root")
  );
}
