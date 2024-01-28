import React from "react";
import { Link } from "react-router-dom";

export const CoursesMegaMenu = () => {
  return (
    <div className="z-50 pl-6 top-12 py-12 mega-menu mb-16 sm:mb-0 shadow-xl bg-[#000000]">
      <div className="max-w-[1200px] lg:max-w-8xl xl:max-w-[67rem] 2xl:max-w-[71rem] mx-auto py-5">
        {/* three columns */}
        <div className="flex gap-10">
          {/* courses category */}
          <div className="text-2xl">
            <ul className="space-y-4">
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="/courses" className="hover:text-[#f02c00] duration-300">
                  All Courses
                </Link>{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </li>
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
          {/* end courses category */}

          {/* featured courses */}
          <div className="flex-grow">
            <ul className="font-extralight text-xl space-y-2">
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  Course bundles
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  Domestika Basics
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  New courses
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  Top rated
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  Popular courses
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  New Plus Courses
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  Gift ideas
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  Certifictes
                </Link>
              </li>
            </ul>
          </div>
          {/* end featured courses  */}
          {/* show right image */}
          <Link onClick={() => window.scrollTo(0, 0)} to="/">
            <img className=" max-w-[450px]  overflow-hidden" src="https://i.ibb.co/5j6Wd7z/5692-original.jpg" alt="5692-original" border="0" />
          </Link>
          {/* end show right image */}
        </div>
      </div>
    </div>
  );
};

export const MoreMegaMenu = () => {
  const blogDetails = "Today I want to share with you something that has taken me some time to learn and that I consider essential in the world of design and artistic creation: respect for copyright.";
  return (
    <div className="z-50 px-6 pl-6 top-12 py-12 mega-menu mb-16 sm:mb-0 shadow-xl bg-[#000000]">
      <div className="max-w-[1200px] lg:max-w-8xl xl:max-w-[67rem] 2xl:max-w-[71rem] mx-auto">
        {/* three columns */}
        <div className="flex gap-10">
          {/* basic community link start */}
          <div className="text-2xl">
            <ul className="space-y-4">
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  Creatives
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  Schools
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  Domestica Live
                </Link>
              </li>
            </ul>
          </div>
          {/* basic community link end */}
          {/* help */}
          <div className="flex-grow ml-3">
            <ul className="font-extralight text-xl space-y-2">
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                  Help
                </Link>
              </li>
            </ul>
          </div>
          {/* end help */}
          <div className="flex gap-10 max-w-[450px]">
            <div>
              <Link onClick={() => window.scrollTo(0, 0)} className="cursor-pointer" href="/">
                <img className="w-[650px]" src="https://i.ibb.co/W3Snntk/12317-original.webp" alt="12317-original" border="0" />
              </Link>
            </div>
            <div className="text-xl space-y-5">
              <div className="space-y-3">
                <p className="text-sm font-bold">Latest blog post</p>
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="cursor-pointer hover:text-[#f02c00] duration-300">
                  Copyright in Artistic Creation: A Guide for Designers
                </Link>
                <div className="mt-3">
                  <p className="text-sm font-light">{blogDetails.length > 133 ? blogDetails.slice(0, 133) + "..." : blogDetails}</p>
                </div>
              </div>
            </div>
          </div>
          {/* blog  */}
        </div>
      </div>
    </div>
  );
};
