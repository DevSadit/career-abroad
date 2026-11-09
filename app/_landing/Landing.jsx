import React from "react";
import Hero from "./hero/Hero";
import Faq from "./faq/Faq";
import Mentors from "./mentors/Mentors";
import Achivements from "./achivements/Achivements";
import PremiumCard from "../_shared/PremiumCard";
import Scolarship from "./scolarships/Scolarship";
import ProfileEvaluator from "./faq/ProfileEvaluator";

const Landing = () => {
  return (
    <div className="">
      <Hero />
      <PremiumCard />
      <Mentors />
      <Achivements />
      <Scolarship />
      <ProfileEvaluator />
      <Faq />
    </div>
  );
};

export default Landing;
