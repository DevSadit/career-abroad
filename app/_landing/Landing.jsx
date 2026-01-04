import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import CoursesSection from "./courses/CoursesSection";
import Faq from "./faq/Faq";
import Mentors from "./mentors/Mentors";
import Achivements from "./achivements/Achivements";
import VipCard from "./vipCard/VipCard";
import VipCourseSection from "./vipCard/VipCourseSection";
const Landing = () => {
  return (
    <div className="">
      <Hero />
      <CoursesSection />
      <VipCourseSection />
      <Mentors />
      <Achivements />
      <Faq />
    </div>
  );
};

export default Landing;
// Most Popular Courses
