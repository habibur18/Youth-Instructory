import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CoursesMegaMenu, MoreMegaMenu } from "./MegaMenu";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [inputClick, setInputClick] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 912 ? true : false);
  const [isMobileSearchClick, setIsMobileSearchClick] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const ref = useRef(null);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const isReloading = useRef(false);

  // function to update isMobile state based on screen width

  const updateScreenWidth = () => {
    if (window.innerWidth < 912) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // add event listener to update isMobile state on window resize
  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    // clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  // if click except anywhere else then input inputClick will be false
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setInputClick(false);
        setIsMobileSearchClick(false);
        setIsSideBarOpen(false);
      }
    };
    // add the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);
    // clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to handle scroll
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setScrollingUp(isReloading.current || prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, handleScroll]);

  // Use the beforeunload event to detect page reload
  useEffect(() => {
    const handleBeforeUnload = () => {
      isReloading.current = true;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  // toggle side bar
  return (
    <nav className={`bg-[#000000] ease-in-out duration-500 transition-all ${scrollingUp ? "top-0" : "-top-32"} fixed w-full z-10`}>
      {isMobileSearchClick ? (
        <div ref={ref} className="w-full">
          <div className="relative" ref={ref}>
            <i className="absolute top-1/2 left-2 translate-y-[-50%] fa-solid fa-magnifying-glass text-white/60"></i>
            <input onClick={() => setInputClick(true)} placeholder="Search for courses" type="text" className="outline-none bg-[#000000] text-white px-8 md:pl-10 py-2 text-lg md:text-lg rounded-md w-full" />
            <i onClick={() => setIsMobileSearchClick(false)} className="absolute top-1/2 right-8 translate-y-[-50%] cursor-pointer px-2 py-2 hover:bg-gray-300/30 duration-300 text-white fa-regular fa-x"></i>
          </div>
        </div>
      ) : (
        <div className="text-[#ffffff] max-w-[1500px]  mx-auto py-4 px-2 lg:px-0">
          <div className="flex items-center justify-between  mx-auto gap-4">
            <div className="flex items-center gap-2">
              {/* menu bar */}
              {isMobile ? <i onClick={() => setIsSideBarOpen(!isSideBarOpen)} className="cursor-pointer fa-solid fa-bars text-xl"></i> : null}
              <div>
                <Link onClick={() => window.scrollTo(0, 0)} to="/" className="text-2xl cursor-pointer font-bold hover:text-[#f02c00] duration-300">
                  Domestika
                </Link>
              </div>
            </div>
            <div className={`flex gap-5 ${!isMobile ? "" : "flex-grow"}`}>
              {!isMobile ? (
                <ul className="flex gap-4 items-center justify-between font-semibold">
                  <li className="hoverable duration-300 py-2">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/courses" className="relative block hover:text-[#f02c00] ">
                      Courses
                      <span>
                        <i className="fa-regular fa-down"></i>
                      </span>
                    </Link>
                    <CoursesMegaMenu />
                  </li>
                  <Fragment>
                    {!inputClick ? (
                      <>
                        <li className="hoverable duration-300 py-2">
                          <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00]  relative block">
                            Projects
                          </Link>
                        </li>
                        <li className="hoverable duration-300 py-2">
                          <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00]  relative block">
                            Plus
                          </Link>
                        </li>
                        <li className="hoverable -mt-3 font-bold duration-300 py-4">
                          <Link onClick={() => window.scrollTo(0, 0)} className="relative block hover:text-[#f02c00]" href="#">
                            ...
                          </Link>
                          <MoreMegaMenu />
                        </li>
                      </>
                    ) : null}
                  </Fragment>
                </ul>
              ) : null}
            </div>
            {/* search bar */}
            {/* search show when screen size is less than 768px */}
            {!isMobile ? (
              <div className={` flex-grow duration-300 ${inputClick ? "w-2/4" : "w-1/3"}`}>
                <div className="relative " ref={ref}>
                  <i className="absolute top-1/2 left-2 translate-y-[-50%] fa-solid fa-magnifying-glass text-white/60"></i>
                  <input onClick={() => setInputClick(true)} placeholder="Search for courses" type="text" className="outline-none bg-[#5c5c5c] px-5 md:pl-10 py-1 text-xs md:text-lg rounded-md w-full duration-300" />
                </div>
              </div>
            ) : (
              <i className="cursor-pointer text-xl fa-solid fa-magnifying-glass text-white/60" onClick={() => setIsMobileSearchClick(true)}></i>
            )}
            <div>
              <div className="flex gap-4 items-center font-bold">
                <Link onClick={() => window.scrollTo(0, 0)} to="#" className="relative cursor-pointer">
                  <i className="fa-solid fa-cart-shopping text-xl hover:text-[#f02c00] cursor-pointer duration-300"></i>
                  <span className="absolute top-[-10px] px-2 right-[-14px]  font-light text-white bg-[#f02c00] rounded-full">0</span>
                </Link>
                <div className="flex items-center space-x-5">
                  <Link onClick={() => window.scrollTo(0, 0)} to="#" className="hover:text-[#f02c00] duration-300">
                    Log in
                  </Link>
                  <Link onClick={() => window.scrollTo(0, 0)} to="#" className="bg-[#f02c00] px-3 py-1 rounded-md hidden md:block">
                    Join for Free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isMobile ? (
        <>
          <Sidebar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
        </>
      ) : null}
    </nav>
  );
}
