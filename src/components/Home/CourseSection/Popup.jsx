import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Popup = ({ open, children, closeModal }) => {
  const [shouldOverflow, setShouldOverflow] = useState(false);
  const contentRef = useRef();

  useEffect(() => {
    const checkOverflow = () => {
      const contentHeight = contentRef.current.scrollHeight;
      const windowHeight = window.innerHeight;

      setShouldOverflow(contentHeight > windowHeight);
    };

    if (open) {
      checkOverflow();
      window.addEventListener("resize", checkOverflow);

      return () => {
        window.removeEventListener("resize", checkOverflow);
      };
    }
  }, [open, children]);

  const modalClassName = shouldOverflow ? "overflow-y-scroll" : "";

  return createPortal(
    <div className={`fixed inset-0 z-[999999999999] bg-[#262a32] bg-opacity-50 ${modalClassName}`}>
      <div ref={contentRef}>
        <div className="flex min-h-screen justify-center items-center">{children}</div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Popup;
