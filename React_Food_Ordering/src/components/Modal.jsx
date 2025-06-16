import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, cssClass = "" }) {
  const modal = useRef();
  useEffect(() => {
    const dialog = modal.current;

    if (open) {
      dialog.showModal();
    }

    return () => dialog.close();
  }, [open]);

  return createPortal(
    <dialog className={`modal ${cssClass}`} ref={modal}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
