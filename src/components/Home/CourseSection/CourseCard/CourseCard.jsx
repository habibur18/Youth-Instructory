import React from "react";

function CourseCard({ course, setShowModal, setSelectedCourse }) {
  return (
    <div className="shadow-xl hoverableCard border-2 transition-transform transform bg-[#f2f2f2]">
      <div className="bg-[#fff]">
        <div
          onClick={() => {
            setShowModal(true);
            setSelectedCourse(courseInfo[0]);
          }}
          className="relative cursor-pointer hover:filter hover:brightness-90"
        >
          <img className="w-full " src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_157,pg_1,t_base_params,w_280/v1660805427/course-covers/000/001/057/1057-original.jpg" alt="" />
          <div className="absolute top-2 left-2 text-center text-white">
            <p className="bg-[#f02c00]  px-1">Best Seller</p>
          </div>
          <div className="absolute top-1/2 bg-gray-800/60 w-10 h-10 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <i className="flex justify-center items-center mt-3 text-white fa-solid fa-play "></i>
          </div>
        </div>
        <div className="px-3 mt-3 space-y-4 py-5">
          {/* course info  start*/}
          <div className="space-y-2">
            <a href="#" className="cursor-pointer text-xl font-semibold">
              Digital Fantasy Portraits with Photoshop
            </a>
            <p className="text-sm font-medium">A course by Karmen Loh (Bearbrickjia)</p>
            <p className="text-[#848484]">Learn how to create enchanting narratives in your digital portraits</p>
          </div>
          {/* course info end */}
          {/* course enrollment and people like start */}
          <div className="flex gap-7 text-[#848484]">
            <p>
              <i className="fa-regular fa-user"></i> 1,000
            </p>
            <p>
              <i className="fa-regular fa-thumbs-up"></i> <span>99% (2.2k)</span>
            </p>
          </div>
          {/* course enrollment and people like end */}
          {/* show price and discount */}
          <div className="text-[#f02c00]">
            <p>
              85% Disc. <span className="line-through font-bold">$59.99 USD</span>
            </p>
          </div>
          <button className="text-2xl font-semibold text-white px-3 py-2 w-full bg-[#00b2bd] rounded-sm">
            <i className="fa-solid fa-cart-shopping"></i> <span>$49.99</span>
          </button>
        </div>
        <div className="addCart  space-x-2 text-[#f02c00] py-2">
          <button className="group relative">
            <span className="group-hover:underline duration-300">
              <i className="fa-solid fa-plus font-thin group-hover:underline duration-300"></i> Add To a List
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
