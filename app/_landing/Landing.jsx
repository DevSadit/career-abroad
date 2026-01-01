import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import CoursesSection from "./courses/CoursesSection";
import Faq from "./faq/Faq";
const Landing = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <CoursesSection />
      <Faq />
    </div>
  );
};

export default Landing;
