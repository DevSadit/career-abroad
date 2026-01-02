"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Autoplay from "swiper/css/autoplay";
import Pagination from "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";
import Slider from "./Slider";

const students = [
  {
    name: "Imran Uddin",
    image: "/students/imran.jpg",
    desc: "Masters in Smart Grid at Grenoble INP, France. Dedicated to sustainable energy research.",
  },
  {
    name: "Aminul Islam Rifat",
    image: "/students/rifat.jpg",
    desc: "Erasmus Mundus Scholar 2025, focusing on international engineering programs.",
  },
  {
    name: "Anamul Hasan",
    image: "/students/anamul.jpg",
    desc: "Masters in Photonics at University of Ghent, Belgium.",
  },
  {
    name: "MD Mubarak",
    image: "/students/mubarak.jpg",
    desc: "Masters in Wireless IC at University Grenoble Alpes, France.",
  },
  {
    name: "Tanzina Kona",
    image: "/students/tanzina.jpg",
    desc: "Masters in Wireless IC with strong research background.",
  },
  {
    name: "Syeda Jafri Shahrin",
    image: "/students/shahrin.jpg",
    desc: "Pursuing higher studies abroad with outstanding academic excellence.",
  },
];

const Achivements = () => {
  return (
    <section className="pt-8 md:pt-12 lg:pt-26 xl:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* head title */}
        <div className="text-center flex flex-col justify-center mb-12 md:mb-16">
          <p className="text-indigo-600 font-semibold text-xs md:text-sm uppercase tracking-widest">
            Achivements
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Our Latest Achievements
          </h2>

          <div className="flex justify-center items-center">
            <Image src="/title.svg" alt="title" width={200} height={100} />
          </div>
        </div>

        {/* swiperjs slider */}
      </div>
    </section>
  );
};

export default Achivements;
