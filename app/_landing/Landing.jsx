import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import CoursesSection from "./courses/CoursesSection";
import Faq from "./faq/Faq";
import Mentors from "./mentors/Mentors";
const Landing = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <CoursesSection />
      <Mentors />
      <Faq />
    </div>
  );
};

export default Landing;
