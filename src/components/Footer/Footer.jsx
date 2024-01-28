import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const courseData = {
  CATEGORIES: ["Illustration courses", "Craft courses", "Marketing & Business courses", "Photography & Video courses", "Design courses", "3D & Animation courses", "Architecture & Spaces courses", "Writing courses", "Fashion courses", "Web & App Design courses", "Calligraphy & Typography courses", "Music & Audio courses"],
  AREAS: ["Traditional Illustration courses", "Digital Illustration courses", "Drawing courses", "Arts & Crafts courses", "Graphic Design courses", "Fine Arts courses", "DIY courses", "Textile Design courses", "Design courses"],
  SOFTWARE: ["Adobe Photoshop courses", "Adobe Illustrator courses", "Procreate courses", "Adobe After Effects courses", "Adobe Lightroom courses", "Cinema 4D courses", "Adobe InDesign courses", "Adobe Premiere courses", "Camera Raw courses"],
  LISTS: ["New courses", "Top rated", "Popular courses", "Courses on sale", "Course bundles"],
};

const data = {
  SECTIONS: [{ name: "Courses" }, { name: "Projects" }, { name: "Jobs" }, { name: "Creatives" }, { name: "Schools" }, { name: "Domestika Live" }, { name: "Domestika Podcasts" }, { name: "Domestika Plus" }],
  INFO: [{ name: "Domestika Contact" }, { name: "Blog" }, { name: "Support", color: "red" }, { name: "Affiliates" }, { name: "Businesses" }, { name: "Teachers" }],
};

const socialMediaData = {
  socialConnect: {
    networks: [
      { name: "Facebook", icon: "fa-brands fa-facebook", link: "https://www.facebook.com/" },
      { name: "Twitter", icon: "fa-brands fa-x-twitter", link: "https://twitter.com/" },
      { name: "Pinterest", icon: "fa-brands fa-pinterest", link: "https://www.pinterest.com/" },
      { name: "Instagram", icon: "fa-brands fa-square-instagram", link: "https://www.instagram.com/" },
      { name: "Vimeo", icon: "fa-brands fa-square-vimeo", link: "https://vimeo.com/" },
      { name: "YouTube", icon: "fa-brands fa-youtube", link: "https://www.youtube.com/" },
    ],
    follow: { text: "Follow Domestika" },
    description: { text: "Stay updated with Domestika's latest news and creative content." },
  },
};

// console.log(
//   Object.entries(socialMediaData).map(([key, value]) => {
//     // console.log(key, value);
//     console.log(value.map((item) => item.map((i) => i.name)));
//   })
// );

export default function Footer() {
  return (
    <footer>
      <hr />
      <div className="max-w-[1200px] mx-auto px-7 xl:px-0 my-16">
        <h3 className="text-3xl font-semibold my-7">Domestika courses</h3>
        <div className="flex gap-10 flex-wrap">
          {Object.entries(courseData).map(([category, courses]) => (
            <div key={category}>
              <h4 className="text-xl font-medium uppercase">{category}</h4>
              <div>
                <ul>
                  {courses.map((course) => (
                    <li key={course}>
                      <Link onClick={() => window.scrollTo(0, 0)} to="#" className="text-[#161616] text-sm" href="#">
                        {course}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div>
            <h3 className="text-xl font-bold uppercase">Fancy a cool newsletter?</h3>
            <p>Be teh first to get Domestika's latest courses</p>
            <form className="lg:flex lg:gap-3 my-3">
              <div className="relative">
                <input className="my-3 lg:my-0 w-full pl-10 py-1 focus:c focus:placeholder-transparent border-2 bg-[#f2f2f2] outline-none focus:ring-2 duration-300 ring-[#f02c00] rounded-sm" type="email" name="" id="" placeholder="Enter your email" />
                <i className="absolute top-1/2 transform -translate-y-1/2 left-3 fa-regular fa-envelope"></i>
              </div>
              <button className="bg-[#f02c00] text-white px-7 py-1 font-semibold rounded-sm" type="submit">
                Subscribe
              </button>
            </form>
            <div className="my-6">
              <h4 className="text-xl font-bold">DOWNLOAD THE DOMESTIKA APP</h4>
              <div className="flex gap-4 my-3">
                <Link onClick={() => window.scrollTo(0, 0)} to="#">
                  <img src="https://i.ibb.co/bJ9R7tL/appstore.png" alt="appstore" border="0" />
                </Link>
                <Link onClick={() => window.scrollTo(0, 0)} to="#">
                  <img src="https://i.ibb.co/mSFDX1t/playstore.png" alt="playstore" border="0" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Last section */}
      <div style={{ backgroundColor: "hsla(0,0%,91%,.5)" }} className="mt-16 text-[#b0b0b0] py-10">
        <div className="max-w-[1200px] mx-auto px-7 xl:px-0">
          <div className="flex lg:gap-12 justify-between flex-wrap lg:flex-nowrap">
            {Object.entries(data).map(([key, value]) => (
              <div key={key}>
                <h4 className="text-xl font-medium uppercase mb-3">{key}</h4>
                <ul className="flex gap-4 flex-wrap">
                  {value.map((val) => (
                    <li className={val.color && "text-[#f02c00]"} key={val.name}>
                      <Link onClick={() => window.scrollTo(0, 0)} to="#" className={` text-sm`} href="#">
                        {val.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h4 className="text-xl font-medium uppercase mb-3">Language</h4>
              <p className="text-sm text-[#b0b0b0] bg-[#fff] px-3 py-1 rounded-sm">English</p>
            </div>
            <div>
              <h4 className="text-xl font-medium uppercase mb-3">Connect</h4>
              <ul className="flex gap-2 text-2xl">
                {socialMediaData.socialConnect.networks.map((network, index) => (
                  <Fragment key={index}>
                    <li className="hover:text-[#f02c00] duration-300">
                      <Link onClick={() => window.scrollTo(0, 0)} to={network.link}>
                        <i className={network.icon}></i>
                      </Link>
                    </li>
                  </Fragment>
                ))}
              </ul>

              <h4 className="bg-[#848484] text-[#f2f2f2] text-[12px] text-center my-2 uppercase  px-px py-1 rounded-sm">
                <span>
                  <i className="fa-regular fa-plus"></i>{" "}
                </span>
                {socialMediaData.socialConnect.follow.text}
              </h4>
            </div>
          </div>
          <div className="mt-7">
            <ul className="flex gap-5">
              <li>&copy; Domestika 2024</li>
              <li className="underline hover:text-[#f02c00] duration-300">
                <Link onClick={() => window.scrollTo(0, 0)} to="#">
                  Terms of Use
                </Link>
              </li>
              <li className="underline hover:text-[#f02c00] duration-300">
                <Link onClick={() => window.scrollTo(0, 0)} to="#">
                  Privacy Policy
                </Link>
              </li>
              <li className="underline hover:text-[#f02c00] duration-300">
                <Link onClick={() => window.scrollTo(0, 0)} to="#">
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
