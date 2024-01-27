import React from "react";

const courseInfo = [
  {
    courseId: 1,

    name: "Architectural Sketching with Watercolor and Ink",

    author: "Alex Hillkurtz",

    sellerLevel: "Best seller",

    shortDetails: "Bring vivid wildlife compositions to life by exploring modern methods of watercolor painting",

    details: ["Architectural sketching is a wonderful way to truly experience a place, discovering new details in each glance. Renowned storyboard artist Alex Hillkurtz finds a sense of fulfillment in discovering the hidden corners of the city that sketching allows. You can find some of his storyboarding work in films like Argo, Almost Famous, and It's Complicated, among many others.", "In this course, Alex will show you his approach to capturing the depth and feeling of a place using watercolor and ink and translating that onto your page, because it’s one thing to depict a scene accurately and another entirely to portray the character and mood of a place. Learn to sketch and use watercolors to infuse your paintings with new life."],

    price: 7.99,

    discount: 58.99,

    courseDetails: {
      level: "Beginner",

      duration: "2 hours",

      language: "English",

      lessons: { count: 18, hours: "3h 14m" },

      studentEnrolled: 51732,

      review: { positivity: 99, reviewCount: "3333K" },

      courseType: "online",

      courseRating: 4.8,

      courseImage: "https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_157,pg_1,t_base_params,w_280/v1660805427/course-covers/000/001/057/1057-original.jpg",

      courseVideo: "https://www.youtube.com/embed/UpsF9qknlvQ",
    },
  },
];
export default function HomeCourses({ onHandleShowModal }) {
  const handleOpenModal = (course) => {
    onHandleShowModal(course);
  };
  return (
    <div className="hoverableCard">
      <div className="bg-[#fff]">
        <div onClick={() => handleOpenModal(courseInfo[0])} className="relative cursor-pointer">
          <img className="w-full hover:filter hover:brightness-90 duration-300" src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_157,pg_1,t_base_params,w_280/v1660805427/course-covers/000/001/057/1057-original.jpg" alt="" />
          <div className="absolute top-2 left-2 text-center text-white">
            <p className="bg-[#f02c00] px-1">Best Seller</p>
          </div>
          <div className="absolute top-1/2 bg-gray-800/60 w-10 h-10 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <i className="flex justify-center items-center h-full text-white fa-solid fa-play "></i>
          </div>
        </div>
        <div className="px-3 mt-3 space-y-4">
          {/* course info  start*/}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Digital Fantasy Portraits with Photoshop</h3>
            <div className="hidden sm:block">
              <p className="text-sm font-medium">A course by Karmen Loh (Bearbrickjia)</p>
              <p className="text-[#848484]">Learn how to create enchanting narratives in your digital portraits</p>
            </div>
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
