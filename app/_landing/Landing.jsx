import React from "react";
import Hero from "./hero/Hero";
import CoursesSection from "./courses/CoursesSection";
import Faq from "./faq/Faq";
import Mentors from "./mentors/Mentors";
import Achivements from "./achivements/Achivements";
import PremiumCard from "../_shared/PremiumCard";

const Landing = () => {
  return (
    <div className="">
      <Hero />
      <PremiumCard />
      <CoursesSection />
      <Mentors />
      <Achivements />
      <Faq />
    </div>
  );
};

export default Landing;
// Most Popular Courses
