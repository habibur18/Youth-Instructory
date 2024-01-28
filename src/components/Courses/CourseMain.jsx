import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeCourses from "../Home/CourseSection/HomeCourses";
import Popup from "../Home/CourseSection/Popup";
import CourseMainModal from "./CourseMainModal";

export default function CourseMain() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

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
                      <Link onClick={() => window.scrollTo(0, 0)} to="#">
                        All Courses
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => window.scrollTo(0, 0)} to="#">
                        Course bundles
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => window.scrollTo(0, 0)} to="#">
                        Domestika Basics NEW
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => window.scrollTo(0, 0)} to="#">
                        New courses
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => window.scrollTo(0, 0)} to="#">
                        Top rated
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => window.scrollTo(0, 0)} to="#">
                        Popular courses
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => window.scrollTo(0, 0)} to="#">
                        New Plus courses PLUS
                      </Link>
                    </li>
                  </ul>
                </div>
                <hr />
                {/* course one */}
                {/* gift cards start */}
                <div className="">
                  <ul className="space-y-4 text-[1rem] text-[#5c5c5c]">
                    <li>
                      <Link onClick={() => window.scrollTo(0, 0)} to="#">
                        Gift ideas
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => window.scrollTo(0, 0)} to="#">
                        Gift Cards
                      </Link>
                    </li>
                  </ul>
                </div>
                <hr />
                {/* gift cards end */}
                {/* custom bundle start */}
                <div>
                  <ul className="space-y-2 text-[1rem] text-[#5c5c5c]">
                    <li>
                      <Link onClick={() => window.scrollTo(0, 0)} to="#">
                        Create your own bundle
                      </Link>
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
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Illustration
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Craft
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Marketing & Business
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Photography & Video
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Design
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          3D & Animation
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Architecture & Spaces
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Writing
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Fashion
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Web & App Design
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Calligraphy & Typography
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Music & Audio
                        </Link>
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
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Graphic Design
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Fine Arts
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Writing
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Marketing
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Creativity
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Creative Writing
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          See more
                        </Link>
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
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          SOFTWARE
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Adobe Photoshop
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Canva
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Procreate
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Revit Architecture
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Adobe Illustrator
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          Ableton Live
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => window.scrollTo(0, 0)} to="#">
                          + See more
                        </Link>
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
