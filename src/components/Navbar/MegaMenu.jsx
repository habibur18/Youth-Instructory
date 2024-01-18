import React from "react";

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
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  All Courses
                </a>{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </li>
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  Illustration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  Craft
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  Marketing & Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  Photography & Video
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  3D & Animation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  Architechture & Spaces
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  Writing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  Fashion
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  Web & App Desgin
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  Calligraphy & TypoGraphy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  Music & Audio
                </a>
              </li>
            </ul>
          </div>
          {/* end courses category */}

          {/* featured courses */}
          <div className="flex-grow">
            <ul className="font-extralight text-xl space-y-2">
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  Course bundles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  Domestika Basics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  New courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  Top rated
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  Popular courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  New Plus Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  Gift ideas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  Certifictes
                </a>
              </li>
            </ul>
          </div>
          {/* end featured courses  */}
          {/* show right image */}
          <a href="/">
            <img className=" max-w-[450px]  overflow-hidden" src="https://i.ibb.co/5j6Wd7z/5692-original.jpg" alt="5692-original" border="0" />
          </a>
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
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  Creatives
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  Schools
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  Domestica Live
                </a>
              </li>
            </ul>
          </div>
          {/* basic community link end */}
          {/* help */}
          <div className="flex-grow ml-3">
            <ul className="font-extralight text-xl space-y-2">
              <li>
                <a href="#" className="hover:text-[#f02c00] duration-300">
                  Help
                </a>
              </li>
            </ul>
          </div>
          {/* end help */}
          <div className="flex gap-10 max-w-[450px]">
            <div>
              <a className="cursor-pointer" href="/">
                <img className="w-[650px]" src="https://i.ibb.co/W3Snntk/12317-original.webp" alt="12317-original" border="0" />
              </a>
            </div>
            <div className="text-xl space-y-5">
              <div className="space-y-3">
                <p className="text-sm font-bold">Latest blog post</p>
                <a href="#" className="cursor-pointer hover:text-[#f02c00] duration-300">
                  Copyright in Artistic Creation: A Guide for Designers
                </a>
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
