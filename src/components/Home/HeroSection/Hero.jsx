import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const handleRightClick = (event) => {
    // Prevent the default context menu behavior
    event.preventDefault();

    // Navigate to the "/courses" page
    navigate("/courses");
    window.scrollTo(0, 0);
  };

  return (
    <div onClick={handleRightClick} onContextMenu={handleRightClick} className="w-full cursor-pointer -z-10 bg-[#202020] overflow-hidden">
      <div className="max-w-[1500px] mx-auto relative">
        <img className="w-full scale-110 ml-10 sm:scale-100 sm:ml-0" src="https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto:eco,w_2000/v1704732840/home-hero-covers/en/000/011/615/11615-original.jpg" alt="" />
        <button className="absolute top-2/3 ml-3 sm:ml-0 text-white bg-[#f02c00] font-bold py-4 px-6 rounded-md cursor-pointer">Join for Free</button>
      </div>
    </div>
  );
}
