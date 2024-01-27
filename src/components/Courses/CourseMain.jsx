import React, { useState } from "react";
import HomeCourses from "../Home/CourseSection/HomeCourses";
import Popup from "../Home/CourseSection/Popup";
import CourseMainModal from "./CourseMainModal";
// export default function CourseMain() {
//   return (
//     <section className="my-36">
//       <div className="max-w-[1500px] mx-auto my-5 ">
//         <div className="grid grid-cols-12">
//           <div className="left-section col-span-4  sticky top-2 h-[500px] border  space-y-4 max-w-[220px] px-4">
//             {/* course one */}
//             <div>
//               <h4 className="uppercase font-semibold mb-3 ">Courses</h4>
//               <ul className="space-y-2 text-[1rem] text-[#5c5c5c]">
//                 <li>
//                   <a href="#">All Courses</a>
//                 </li>
//                 <li>
//                   <a href="#">Course bundles</a>
//                 </li>
//                 <li>
//                   <a href="#">Domestika Basics NEW</a>
//                 </li>
//                 <li>
//                   <a href="#">New courses</a>
//                 </li>
//                 <li>
//                   <a href="#">Top rated</a>
//                 </li>
//                 <li>
//                   <a href="#">Popular courses</a>
//                 </li>
//                 <li>
//                   <a href="#">New Plus courses PLUS</a>
//                 </li>
//               </ul>
//             </div>
//             <hr />
//             {/* course one */}
//             {/* gift cards start */}
//             <div className="">
//               <ul className="space-y-4 text-[1rem] text-[#5c5c5c]">
//                 <li>
//                   <a href="#">Gift ideas</a>
//                 </li>
//                 <li>
//                   <a href="#">Gift Cards</a>
//                 </li>
//               </ul>
//             </div>
//             <hr />
//             {/* gift cards end */}
//             {/* custom bundle start */}
//             <div>
//               <ul className="space-y-2 text-[1rem] text-[#5c5c5c]">
//                 <li>
//                   <a href="#">Create your own bundle</a>
//                 </li>
//               </ul>
//             </div>
//             <hr />
//             {/* custom bundle end */}
//             {/* course Category start */}
//             <div>
//               <h4 className="uppercase font-semibold mb-3 ">Categories</h4>
//               <div>
//                 <ul className="space-y-2 text-[1rem] text-[#5c5c5c]">
//                   <li>
//                     <a href="#">Illustration</a>
//                   </li>
//                   <li>
//                     <a href="#">Craft</a>
//                   </li>
//                   <li>
//                     <a href="#">Marketing & Business</a>
//                   </li>
//                   <li>
//                     <a href="#">Photography & Video</a>
//                   </li>
//                   <li>
//                     <a href="#">Design</a>
//                   </li>
//                   <li>
//                     <a href="#">3D & Animation</a>
//                   </li>
//                   <li>
//                     <a href="#">Architecture & Spaces</a>
//                   </li>
//                   <li>
//                     <a href="#">Writing</a>
//                   </li>
//                   <li>
//                     <a href="#">Fashion</a>
//                   </li>
//                   <li>
//                     <a href="#">Web & App Design</a>
//                   </li>
//                   <li>
//                     <a href="#">Calligraphy & Typography</a>
//                   </li>
//                   <li>
//                     <a href="#">Music & Audio</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <hr />
//             {/* Areas */}
//             <div>
//               <h4 className="uppercase font-semibold mb-3 ">Areas</h4>
//               <div>
//                 <ul className="space-y-2 text-[1rem] text-[#5c5c5c]">
//                   <li>
//                     <a href="#">Graphic Design</a>
//                   </li>
//                   <li>
//                     <a href="#">Fine Arts</a>
//                   </li>
//                   <li>
//                     <a href="#">Writing</a>
//                   </li>
//                   <li>
//                     <a href="#">Marketing</a>
//                   </li>
//                   <li>
//                     <a href="#">Creativity</a>
//                   </li>
//                   <li>
//                     <a href="#">Creative Writing</a>
//                   </li>
//                   <li>
//                     <a href="#">See more</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <hr />
//             {/* Areas end */}
//             {/* Software start */}
//             <div>
//               <h4 className="uppercase font-semibold mb-3 ">Software</h4>
//               <div>
//                 <ul className="space-y-2 text-[1rem] text-[#5c5c5c]">
//                   <li>
//                     <a href="#">SOFTWARE</a>
//                   </li>
//                   <li>
//                     <a href="#">Adobe Photoshop</a>
//                   </li>
//                   <li>
//                     <a href="#">Canva</a>
//                   </li>
//                   <li>
//                     <a href="#">Procreate</a>
//                   </li>
//                   <li>
//                     <a href="#">Revit Architecture</a>
//                   </li>
//                   <li>
//                     <a href="#">Adobe Illustrator</a>
//                   </li>
//                   <li>
//                     <a href="#">Ableton Live</a>
//                   </li>
//                   <li>
//                     <a href="#">+ See more</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <hr />
//             {/* Software end */}
//             {/* course Category end */}
//           </div>
//           <div className="right-section col-span-8">
//             <div className="w-full mb-10">
//               <div className="w-full">
//                 <img src="https://cdn.domestika.org/c_fill,f_auto,pg_1,w_auto,dpr_1/v1704732744/banner-covers/000/002/432/2432-original.jpg" alt="" />
//               </div>
//             </div>
//             <div className="grid gap-x-5 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//               <HomeCourses />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function CourseMain() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  // useEffect(() => {
  //   // Add an event listener to handle scroll when the modal is open
  //   const handleScroll = (e) => {
  //     if (showModal) {
  //       e.preventDefault();
  //     }
  //   };

  //   // Add the event listener when the component mounts
  //   document.body.style.overflow = showModal ? "hidden" : "auto";
  //   document.addEventListener("scroll", handleScroll, { passive: false });

  //   // Remove the event listener when the component unmounts or modal is closed
  //   return () => {
  //     document.body.style.overflow = "auto";
  //     document.removeEventListener("scroll", handleScroll);
  //   };
  // }, [showModal]);
  const handleShowModal = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setSelectedCourse(null);
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <Popup open={showModal} closeModal={handleCloseModal}>
          <CourseMainModal selectedCourse={selectedCourse} closeModal={handleCloseModal} />
        </Popup>
      )}
      <div className="min-h-screen px-5 my-20 lg:my-40">
        <main className="max-w-[1500px] mx-auto">
          {/* Use a 12-column layout */}
          <div className="flex gap-5">
            {/* Sidebar - uses 4 col span */}
            <div className="">
              <div className="sticky top-2 text-white">
                {/* course one */}
                <div>
                  <h4 className="uppercase font-semibold mb-3 ">Courses</h4>
                  <ul className="space-y-2 text-[1rem] text-[#5c5c5c]">
                    <li>
                      <a href="#">All Courses</a>
                    </li>
                    <li>
                      <a href="#">Course bundles</a>
                    </li>
                    <li>
                      <a href="#">Domestika Basics NEW</a>
                    </li>
                    <li>
                      <a href="#">New courses</a>
                    </li>
                    <li>
                      <a href="#">Top rated</a>
                    </li>
                    <li>
                      <a href="#">Popular courses</a>
                    </li>
                    <li>
                      <a href="#">New Plus courses PLUS</a>
                    </li>
                  </ul>
                </div>
                <hr />
                {/* course one */}
                {/* gift cards start */}
                <div className="">
                  <ul className="space-y-4 text-[1rem] text-[#5c5c5c]">
                    <li>
                      <a href="#">Gift ideas</a>
                    </li>
                    <li>
                      <a href="#">Gift Cards</a>
                    </li>
                  </ul>
                </div>
                <hr />
                {/* gift cards end */}
                {/* custom bundle start */}
                <div>
                  <ul className="space-y-2 text-[1rem] text-[#5c5c5c]">
                    <li>
                      <a href="#">Create your own bundle</a>
                    </li>
                  </ul>
                </div>
                <hr />
                {/* custom bundle end */}
                {/* course Category start */}
                <div>
                  <h4 className="uppercase font-semibold mb-3 ">Categories</h4>
                  <div>
                    <ul className="space-y-2 text-[1rem] text-[#5c5c5c]">
                      <li>
                        <a href="#">Illustration</a>
                      </li>
                      <li>
                        <a href="#">Craft</a>
                      </li>
                      <li>
                        <a href="#">Marketing & Business</a>
                      </li>
                      <li>
                        <a href="#">Photography & Video</a>
                      </li>
                      <li>
                        <a href="#">Design</a>
                      </li>
                      <li>
                        <a href="#">3D & Animation</a>
                      </li>
                      <li>
                        <a href="#">Architecture & Spaces</a>
                      </li>
                      <li>
                        <a href="#">Writing</a>
                      </li>
                      <li>
                        <a href="#">Fashion</a>
                      </li>
                      <li>
                        <a href="#">Web & App Design</a>
                      </li>
                      <li>
                        <a href="#">Calligraphy & Typography</a>
                      </li>
                      <li>
                        <a href="#">Music & Audio</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr />
                {/* Areas */}
                <div>
                  <h4 className="uppercase font-semibold mb-3 ">Areas</h4>
                  <div>
                    <ul className="space-y-2 text-[1rem] text-[#5c5c5c]">
                      <li>
                        <a href="#">Graphic Design</a>
                      </li>
                      <li>
                        <a href="#">Fine Arts</a>
                      </li>
                      <li>
                        <a href="#">Writing</a>
                      </li>
                      <li>
                        <a href="#">Marketing</a>
                      </li>
                      <li>
                        <a href="#">Creativity</a>
                      </li>
                      <li>
                        <a href="#">Creative Writing</a>
                      </li>
                      <li>
                        <a href="#">See more</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr />
                {/* Areas end */}
                {/* Software start */}
                <div>
                  <h4 className="uppercase font-semibold mb-3 ">Software</h4>
                  <div>
                    <ul className="space-y-2 text-[1rem] text-[#5c5c5c]">
                      <li>
                        <a href="#">SOFTWARE</a>
                      </li>
                      <li>
                        <a href="#">Adobe Photoshop</a>
                      </li>
                      <li>
                        <a href="#">Canva</a>
                      </li>
                      <li>
                        <a href="#">Procreate</a>
                      </li>
                      <li>
                        <a href="#">Revit Architecture</a>
                      </li>
                      <li>
                        <a href="#">Adobe Illustrator</a>
                      </li>
                      <li>
                        <a href="#">Ableton Live</a>
                      </li>
                      <li>
                        <a href="#">+ See more</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr />
                {/* Software end */}
                {/* course Category end */}
              </div>
            </div>
            {/* Main Content - uses 8-colspan*/}
            <div className="p-2">
              <div className="w-full mb-10">
                <div className="w-full">
                  <img src="https://cdn.domestika.org/c_fill,f_auto,pg_1,w_auto,dpr_1/v1704732744/banner-covers/000/002/432/2432-original.jpg" alt="" />
                </div>
              </div>
              <div className="grid gap-x-5 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 20 }).map((_, index) => (
                  <HomeCourses key={index} onHandleShowModal={handleShowModal} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
