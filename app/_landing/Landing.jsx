import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import CoursesSection from "./courses/CoursesSection";
import Faq from "./faq/Faq";
import Mentors from "./mentors/Mentors";
import Achivements from "./achivements/Achivements";
const Landing = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <CoursesSection />
      <Mentors />
      <Achivements />
      <Faq />
    </div>
  );
};

export default Landing;
