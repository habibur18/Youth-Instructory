import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard/CourseCard";
import ModalDetailsPopup from "./ModalDetailsPopup";
import Popup from "./Popup";

const allCourses = [
  {
    id: 1,
    title: "Digital Artistry Masterclass",
    instructor: "Aisha Rahman",
    description: "Unlock your creativity with this comprehensive digital art masterclass.",
    imageUrl: "https://i.ibb.co/R7Q2nzv/1993-original.jpg",
    bestSeller: true,
    enrollment: 1200,
    likes: {
      percentage: 98,
      count: 2500,
    },
    discount: {
      percentage: 80,
      originalPrice: 49.99,
      discountedPrice: 9.99,
    },
  },
  {
    id: 2,
    title: "Web Development Journey",
    instructor: "Anik Dutta",
    description: "Embark on a journey to master web development from scratch.",
    imageUrl: "https://i.ibb.co/4pXFM7d/2227-original.webp",
    bestSeller: false,
    enrollment: 750,
    likes: {
      percentage: 95,
      count: 1800,
    },
    discount: {
      percentage: 70,
      originalPrice: 89.99,
      discountedPrice: 26.99,
    },
  },
  {
    id: 3,
    title: "Arabic Calligraphy Basics",
    instructor: "Yusuf Al-Farsi",
    description: "Learn the basics of Arabic calligraphy and create stunning artwork.",
    imageUrl: "https://i.ibb.co/hXGFSny/1218-original.jpg",
    bestSeller: true,
    enrollment: 950,
    likes: {
      percentage: 96,
      count: 2100,
    },
    discount: {
      percentage: 75,
      originalPrice: 39.99,
      discountedPrice: 9.99,
    },
  },
  {
    id: 4,
    title: "Indian Cooking Essentials",
    instructor: "Priya Kapoor",
    description: "Master the essentials of Indian cooking and delight your taste buds.",
    imageUrl: "https://i.ibb.co/6J1k9HC/5106-original.jpg",
    bestSeller: false,
    enrollment: 1100,
    likes: {
      percentage: 92,
      count: 1900,
    },
    discount: {
      percentage: 65,
      originalPrice: 69.99,
      discountedPrice: 24.99,
    },
  },
  {
    id: 5,
    title: "Bangladeshi Folk Art Workshop",
    instructor: "Rahim Khan",
    description: "Immerse yourself in the rich tradition of Bangladeshi folk art.",
    imageUrl: "https://i.ibb.co/WVfVNVs/4359-original.jpg",
    bestSeller: true,
    enrollment: 800,
    likes: {
      percentage: 97,
      count: 2200,
    },
    discount: {
      percentage: 85,
      originalPrice: 59.99,
      discountedPrice: 8.99,
    },
  },
  {
    id: 6,
    title: "Arabian Nights Photography",
    instructor: "Layla Ahmed",
    description: "Capture the magic of Arabian nights through the lens of your camera.",
    imageUrl: "https://i.ibb.co/QKQz9KD/1769-original.webp",
    bestSeller: false,
    enrollment: 670,
    likes: {
      percentage: 93,
      count: 1600,
    },
    discount: {
      percentage: 72,
      originalPrice: 79.99,
      discountedPrice: 22.49,
    },
  },
  {
    id: 7,
    title: "Yoga for Inner Peace",
    instructor: "Neha Sharma",
    description: "Find inner peace and balance through the practice of yoga.",
    imageUrl: "https://i.ibb.co/S7pttGc/2846-original.webp",
    bestSeller: true,
    enrollment: 900,
    likes: {
      percentage: 99,
      count: 2300,
    },
    discount: {
      percentage: 88,
      originalPrice: 44.99,
      discountedPrice: 5.39,
    },
  },
  {
    id: 8,
    title: "Sculpting Dreams: Clay Art",
    instructor: "Aryan Kapoor",
    description: "Shape your dreams into reality through the art of clay sculpting.",
    imageUrl: "https://i.ibb.co/qswcTmX/2373-original.jpg",
    bestSeller: false,
    enrollment: 820,
    likes: {
      percentage: 94,
      count: 2000,
    },
    discount: {
      percentage: 78,
      originalPrice: 54.99,
      discountedPrice: 11.99,
    },
  },
  {
    id: 9,
    title: "Bollywood Dance Fusion",
    instructor: "Isha Patel",
    description: "Experience the joy of Bollywood dance with this fusion class.",
    imageUrl: "https://i.ibb.co/KxBqmS0/1092-original.webp",
    bestSeller: true,
    enrollment: 1050,
    likes: {
      percentage: 91,
      count: 1700,
    },
    discount: {
      percentage: 68,
      originalPrice: 64.99,
      discountedPrice: 20.79,
    },
  },
  {
    id: 10,
    title: "Bangladeshi Culinary Delights",
    instructor: "Farid Ahmed",
    description: "Discover the delicious culinary delights of Bangladesh.",
    imageUrl: "https://i.ibb.co/z5J29V8/3675-original.webp",
    bestSeller: true,
    enrollment: 950,
    likes: {
      percentage: 96,
      count: 2100,
    },
    discount: {
      percentage: 75,
      originalPrice: 39.99,
      discountedPrice: 9.99,
    },
  },
];

export default function HomecoursesTest() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  useEffect(() => {
    // Add an event listener to handle scroll when the modal is open
    const handleScroll = (e) => {
      if (showModal) {
        e.preventDefault();
      }
    };

    // Add the event listener when the component mounts
    document.body.style.overflow = showModal ? "hidden" : "auto";
    document.addEventListener("scroll", handleScroll, { passive: false });

    // Remove the event listener when the component unmounts or modal is closed
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("scroll", handleScroll);
    };
  }, [showModal]);

  const handleShowModal = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setSelectedCourse(null);
    setShowModal(false);
  };
  console.log(allCourses.map((card) => card.id));
  return (
    <>
      <div className=" bg-[#f2f2f2]">
        <div className="max-w-[1500px] mx-auto py-20">
          <div className="my-5">
            <h3 className="text-3xl font-bold">Learn by doing</h3>
            <p className="text-xl text-[#848484] my-3">
              Get access to the best{" "}
              <a href="#" className="text-[#848484] font-medium hover:text-[#f02c00] duration-300">
                {" "}
                online courses for creatives
              </a>
              . Interact with the top professionals and discover the creative world's best-kept secrets.
            </p>
          </div>
          {/* main start*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-12">
            {/* course card start*/}
            {allCourses.map((course) => (
              <CourseCard key={course.id} course={course} handleShowModal={handleShowModal} />
            ))}
            {/* course card end */}
          </div>
          {/* main end */}
          <div className="group text-center mt-20 bg-[#f02d00] hover:bg-red-700 duration-300 font-bold border border-[#f02d00] text-white px-5 py-3 w-[22rem] mx-auto rounded-lg cursor-pointer">
            <button className="relative">
              See more Domestika Courses
              <i className="fa-solid fa-arrow-right ml-3 transform translate-x-0 group-hover:translate-x-5 duration-300"></i>
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <Popup open={showModal} closeModal={handleCloseModal}>
          <ModalDetailsPopup selectedCourse={selectedCourse} closeModal={handleCloseModal} />
        </Popup>
      )}
    </>
  );
}
