import React from "react";
import { Link } from "react-router-dom";

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
function CourseCard({ course, handleShowModal }) {
  const { id, title, instructor, description, imageUrl, bestSeller, enrollment, likes, discount } = course;
  return (
    <div key={id} className="shadow-md hoverableCard border-2 transition-transform transform bg-[#f2f2f2]">
      <div className="bg-[#fff]">
        <div onClick={() => handleShowModal(courseInfo[0])} className="relative cursor-pointer hover:filter hover:brightness-90">
          <img className="w-full" onError={(e) => (e.target.src = "https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_157,pg_1,t_base_params,w_280/v1615191430/course-covers/000/001/102/1102-original.jpg")} src={imageUrl} alt="" />
          <div className="absolute top-2 left-2 text-center text-white">{bestSeller && <p className="bg-[#f02c00] px-1">Best Seller</p>}</div>
          <div className="absolute top-1/2 bg-gray-800/60 w-10 h-10 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <i className="flex justify-center items-center mt-3 text-white fa-solid fa-play "></i>
          </div>
        </div>
        <div className="px-3 mt-3 space-y-4 py-5">
          <div className="space-y-2">
            <Link to="/courseDetails" onClick={() => window.scrollTo(0, 0)} className="cursor-pointer text-xl font-semibold">
              {title}
            </Link>
            <p className="text-sm font-medium">A course by {instructor}</p>
            <p className="text-[#848484]">{description}</p>
          </div>
          <div className="flex gap-7 text-[#848484]">
            <p>
              <i className="fa-regular fa-user"></i> {enrollment}
            </p>
            <p>
              <i className="fa-regular fa-thumbs-up"></i>{" "}
              <span>
                {likes.percentage}% ({likes.count})
              </span>
            </p>
          </div>
          <div className="text-[#f02c00]">
            <p>
              {discount.percentage}% Disc. <span className="line-through font-bold">${discount.originalPrice} USD</span>
            </p>
          </div>
          <button className="text-2xl font-semibold text-white px-3 py-2 w-full bg-[#00b2bd] rounded-sm">
            <i className="fa-solid fa-cart-shopping"></i> <span>${discount.discountedPrice}</span>
          </button>
        </div>
        <div className="addCart space-x-2 text-[#f02c00] py-2">
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
