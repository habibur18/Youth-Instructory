import React from "react";
import HomecoursesTest from "../CourseSection/HomecoursesTest";
import FacultySection from "../FacultySection/FacultySection";
import FeaturesList from "../FeaturesList/FeaturesList";
import Hero from "../HeroSection/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <HomeCourses /> */}
      <HomecoursesTest />
      {/* FeaturesList 3rd section */}
      <FeaturesList />
      {/* faculty 4th section */}
      <FacultySection />
      {/* footer section 5th section */}
    </>
  );
};

export default Home;
