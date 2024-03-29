import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ isSideBarOpen, setIsSideBarOpen }) {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const ref = useRef(null);
  const courseRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (courseRef.current && !courseRef.current.contains(event.target) && ref.current && !ref.current.contains(event.target)) {
        setIsCoursesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target) && courseRef.current && !courseRef.current.contains(event.target)) {
        setIsSideBarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <div className={`z-50 fixed  transition-opacity duration-700 ${isSideBarOpen ? "opacity-100 bg-gray-800/80  inset-0" : "pointer-events-none min-h-0 min-w-0"}`}>
      <div ref={ref} className={`main-sidebar fixed inset-y-0 w-3/6 bg-[#212529]  transition-transform duration-700 ${isSideBarOpen ? "transform translate-x-0" : "transform -translate-x-full"}`}>
        <i onClick={() => setIsSideBarOpen(!isSideBarOpen)} className="absolute top-3  right-4 hover:bg-gray-400 duration-300 px-2 py-2  rounded-md cursor-pointer fa-solid fa-xmark text-white/60"></i>
        <div className="flex flex-col px-6 text-2xl mt-12">
          <ul>
            <li onClick={() => setIsCoursesOpen(true)}>
              <Link onClick={() => window.scrollTo(0, 0)} to="#" className="text-white hover:text-[#f02c00] duration-300 mb-4">
                Courses <i className="fa-solid fa-arrow-right ml-3"></i>
              </Link>
            </li>
            <li>
              <Link onClick={() => window.scrollTo(0, 0)} to="#" className="text-white hover:text-[#f02c00] mb-4">
                Projects
              </Link>
            </li>
            <li>
              <Link onClick={() => window.scrollTo(0, 0)} to="#" className="text-white hover:text-[#f02c00] mb-4">
                Plus
              </Link>
            </li>
            <li>
              <Link onClick={() => window.scrollTo(0, 0)} to="#" className="text-white hover:text-[#f02c00] mb-4">
                Blog
              </Link>
            </li>
            <li>
              <Link onClick={() => window.scrollTo(0, 0)} to="#" className="text-white hover:text-[#f02c00] mb-4">
                Creatives
              </Link>
            </li>
            <li>
              <Link onClick={() => window.scrollTo(0, 0)} to="#" className="text-white hover:text-[#f02c00] mb-4">
                Domestika Live
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col px-6 text-xl mt-8 space-y-4">
          <Link onClick={() => window.scrollTo(0, 0)} to="#" className="text-white border w-full border-[#f02c00]  py-1 rounded-md bg-[#f02c00] text-center">
            Join for Free
          </Link>
          <Link onClick={() => window.scrollTo(0, 0)} to="#" className="text-white hover:text-[#f02c00] duration-300 border w-full border-gray-600 py-1 rounded-md transparent text-center">
            Login
          </Link>
        </div>
      </div>
      {/* show onclick course from right to left side */}
      <div ref={courseRef} className={`fixed inset-y-0 w-3/6 bg-[#212529] transition-transform duration-700 ${isCoursesOpen ? "transform translate-x-0" : "transform -translate-x-full"}`}>
        <i onClick={() => setIsCoursesOpen(false)} className="absolute top-3  right-4 hover:bg-gray-400 duration-300 px-2 py-2  rounded-md cursor-pointer fa-solid fa-xmark text-white/60"></i>
        <div className="">
          <div className="text-xl my-10">
            <ul className="space-y-2 text-white p-3">
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  Illustration
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  Craft
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  Marketing & Business
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  Photography & Video
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  Design
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  3D & Animation
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  Architechture & Spaces
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  Writing
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  Fashion
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  Web & App Desgin
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  Calligraphy & TypoGraphy
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  Music & Audio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
