import React, { useEffect, useState } from "react";
import ModalDetailsPopup from "./ModalDetailsPopup";
import Popup from "./Popup";

const courseCards = [
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
            {courseCards.map((course) => {
              const { id, title, instructor, description, imageUrl, bestSeller, enrollment, likes, discount } = course;
              return (
                <div key={id} className="shadow-md hoverableCard border-2 transition-transform transform bg-[#f2f2f2]">
                  <div className="bg-[#fff]">
                    <div
                      onClick={() => {
                        setShowModal(true);
                        setSelectedCourse(courseInfo[0]);
                      }}
                      className="relative cursor-pointer hover:filter hover:brightness-90"
                    >
                      <img className="w-full" onError={(e) => (e.target.src = "https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_157,pg_1,t_base_params,w_280/v1615191430/course-covers/000/001/102/1102-original.jpg")} src={imageUrl} alt="" />
                      <div className="absolute top-2 left-2 text-center text-white">{bestSeller && <p className="bg-[#f02c00] px-1">Best Seller</p>}</div>
                      <div className="absolute top-1/2 bg-gray-800/60 w-10 h-10 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <i className="flex justify-center items-center mt-3 text-white fa-solid fa-play "></i>
                      </div>
                    </div>
                    <div className="px-3 mt-3 space-y-4 py-5">
                      <div className="space-y-2">
                        <a href="#" className="cursor-pointer text-xl font-semibold">
                          {title}
                        </a>
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
            })}
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
        <Popup open={showModal} closeModal={() => setShowModal(false)}>
          <ModalDetailsPopup selectedCourse={selectedCourse} closeModal={() => setShowModal(false)} />
        </Popup>
      )}
    </>
  );
}
