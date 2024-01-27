import React, { useEffect, useState } from "react";

export default function CourseMainModal({ selectedCourse, closeModal }) {
  // console.log(selectedCourse);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640 ? true : false);
  const { name, author, shortDetails, sellerLevel, details, price, discount, courseDetails } = selectedCourse;
  const { courseImage, courseVideo } = courseDetails;

  // Check if there is at least one details section
  const firstDetailsSection = details.length > 0 ? details[0] : "";

  // Limit the displayed characters to 300 for the first details section
  const truncatedDetails = firstDetailsSection.length > 200 ? firstDetailsSection.substring(0, 200) + "..." : firstDetailsSection;
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640 ? true : false);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`bg-white p-7 rounded-md overflow-y-auto ${isMobile ? "h-screen sm:h-auto" : "h-full"}`}>
      <div className="max-w-[700px] mx-auto modal-content">
        <div className="border relative">
          <iframe className="rounded-md w-full h-[300px] max-w-[400px] sm:max-w-[800px] sm:w-[600px] sm:h-96 md:w-[625px] lg:w-[700px] mx-auto" src={courseVideo}></iframe>
          <i
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            className="absolute top-0 right-0 z-50 text-white bg-gray-800/80 px-4 py-2 rounded-tr-xl text-xl hover:bg-gray-900 duration-300 cursor-pointer fa-solid fa-xmark"
          ></i>
        </div>
        <div className={`flex flex-wrap sm:flex-nowrap gap-9 ${isMobile ? "my-5" : "my-10"}`}>
          <div className="max-w-[460px]">
            <div>
              <p className={`${isMobile ? "text-sm" : "text-lg"} bg-yellow-500 w-24 px-1 rounded-sm`}>{sellerLevel}</p>
              <div className="space-y-2">
                <a href="#" className={`cursor-pointer ${isMobile ? "font-medium" : "text-2xl"} font-semibold`}>
                  {name}
                </a>
                <p className="text-sm font-medium text-[#848484]">A course by By {author}</p>
                {!isMobile ? (
                  <>
                    <p className="text-[#848484] text-xl">{shortDetails}</p>
                    <div>
                      <p className="my-3">{truncatedDetails}</p>
                    </div>
                  </>
                ) : null}
                <a href="#" className="font-bold group hover:text-[#f02c00]">
                  <span>Learn more</span> <i className="fa-solid fa-arrow-right transform translate-x-0 group-hover:translate-x-2 duration-300"></i>
                </a>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="w-full">
            <div className="space-y-3">
              <button className={`${isMobile ? "text-sm" : "text-2xl"} font-semibold text-white px-3 py-2 w-full bg-[#00b2bd] rounded-sm`}>
                <i className="fa-solid fa-cart-shopping"></i> <span>$49.99</span>
              </button>
              <div className="text-[#f02c00]">
                <p className={`my-3 ${isMobile ? "text-sm" : "text-lg"}`}>
                  85% Disc. <span className={`line-through font-bold ${isMobile ? "text-sm" : "text-lg"}`}>$59.99 USD</span>
                </p>
              </div>
            </div>
            <div>
              {/* course details */}
              <div className="text-[#848484] space-y-1">
                <div>
                  <i className="fa-regular fa-star mr-3 w-3"></i> <span>Level:</span> <span className="bg-yellow-500 text-white px-1 text-sm">{courseDetails.level}</span>
                </div>
                <div>
                  <i className="fa-solid fa-book mr-3 w-4"></i>
                  <span>{courseDetails.lessons.count} lessons</span> <span>({courseDetails.lessons.hours})</span>
                </div>
                <div>
                  <i className="fa-regular fa-user mr-3 w-4"></i>
                  <span>{courseDetails.studentEnrolled} Students</span>
                </div>
                <div>
                  <i className="fa-regular fa-thumbs-up mr-3 w-4"></i>
                  <span>
                    {courseDetails.review.positivity} positive review <span>({courseDetails.review.reviewCount})</span>
                  </span>
                </div>
                <div>
                  <i className="fa-regular fa-face-smile  mr-3 w-4"></i>
                  <span>Location Type:</span> <span className="bg-yellow-500 text-white px-1 text-sm">{courseDetails.courseType} </span>
                </div>
                <div>
                  <i className="fa-solid fa-volume-high mr-3 w-4"></i>
                  <span>Language:</span> <span className="bg-yellow-500 text-white px-1 text-sm">{courseDetails.language}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
