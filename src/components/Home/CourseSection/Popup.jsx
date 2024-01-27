const Popup = ({ open, children, closeModal }) => {
  return (
    <div onClick={() => closeModal()} className={`w-full mx-auto flex justify-center items-center min-h-[100vh] fixed top-0 left-0 right-0 bottom-0 z-50 bg-[#262a32] bg-opacity-50 `}>
      <div onClick={() => closeModal()} className=" max-w-[900px] mx-auto">
        <div onClick={(e) => e.stopPropagation()} className=" max-w-[900px] mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
