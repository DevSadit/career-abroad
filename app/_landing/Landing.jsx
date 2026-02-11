import React from "react";
import Hero from "./hero/Hero";
import CoursesSection from "./courses/CoursesSection";
import Faq from "./faq/Faq";
import Mentors from "./mentors/Mentors";
import Achivements from "./achivements/Achivements";
import PremiumCard from "../_shared/PremiumCard";
import Scolarship from "./scolarships/Scolarship";

const Landing = () => {
  return (
    <div className="">
      <Hero />
      <PremiumCard />
      <CoursesSection />
      <Mentors />
      <Achivements />
      <Scolarship />
      <Faq />
    </div>
  );
};

export default Landing;
// Most Popular Courses
