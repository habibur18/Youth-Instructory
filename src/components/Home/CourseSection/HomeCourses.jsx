import React from "react";

export default function HomeCourses() {
  return (
    <div className="max-w-[1200px] mx-auto bg-[#f2f2f2]">
      <div className="py-20">
        <div className="my-5">
          <h3 className="text-2xl font-bold">Learn by doing</h3>
          <p className="text-xl text-[#848484]">
            Get access to the best{" "}
            <a href="#" className="text-[#848484] font-medium hover:text-[#f02c00] duration-300">
              {" "}
              online courses for creatives
            </a>
            . Interact with the top professionals and discover the creative world's best-kept secrets.
          </p>
        </div>
        {/* main */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {/* course card start*/}
          <div className="hoverable border-2 w-[300px] border-[#f02c00]">
            <div className="bg-[#fff]">
              <div className="relative">
                <img className="w-full" src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_157,pg_1,t_base_params,w_280/v1660805427/course-covers/000/001/057/1057-original.jpg" alt="" />
                <div className="absolute top-2 left-2 text-center text-white">
                  <p className="bg-[#f02c00]  px-1">Best Seller</p>
                </div>
                <div className="absolute top-1/2 bg-gray-800/60 w-10 h-10 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <i className="flex justify-center items-center mt-3 text-white fa-solid fa-play "></i>
                </div>
              </div>
              <div className="px-3 mt-3 space-y-4">
                {/* course info  start*/}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Digital Fantasy Portraits with Photoshop</h3>
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
                <button className="text-white px-3 py-2 w-full bg-[#00b2bd] rounded-sm">
                  <i className="fa-solid fa-cart-shopping"></i> <span>$49.99</span>
                </button>
              </div>
              <div className="mega-menu  space-x-2 text-[#f02c00] py-2">
                <button className="group relative">
                  <span className="group-hover:underline duration-300">
                    <i className="fa-solid fa-plus font-thin group-hover:underline duration-300"></i> Add To a List
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* course card end */}
        </div>
      </div>
    </div>
  );
}
