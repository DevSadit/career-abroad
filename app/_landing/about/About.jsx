"use client"
import Image from 'next/image';
import React from 'react';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

const About = () => {
  const features = [
    { text: 'Best Mentor & Programs' },
    { text: 'Trusted by Students' },
    { text: 'Online Mentorship' },
    { text: 'Live One on One Classes' },
    { text: 'Amazing Support System' }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 xl:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Image Section */}
          <div className="relative w-full h-auto">
            {/* Container for images with proper responsive sizing */}
            <div className="relative mx-auto" style={{ width: '100%', maxWidth: '600px', aspectRatio: '1' }}>
              
              {/* Wave decoration - top left */}
              <div className="absolute -top-8 -left-8 opacity-20 hidden sm:block z-0">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <path d="M10 20 Q 15 10, 20 20 T 30 20 T 40 20" stroke="#6366f1" strokeWidth="2"/>
                  <path d="M10 35 Q 15 25, 20 35 T 30 35 T 40 35" stroke="#6366f1" strokeWidth="2"/>
                  <path d="M10 50 Q 15 40, 20 50 T 30 50 T 40 50" stroke="#6366f1" strokeWidth="2"/>
                </svg>
              </div>

              {/* Love text - top right */}
              <div className="absolute top-2 right-4 md:top-4 md:right-8 z-20 hidden sm:block">
                <svg width="100" height="60" viewBox="0 0 100 60">
                  <text x="0" y="30" fill="#ec4899" fontSize="24" fontFamily="cursive" fontStyle="italic">love</text>
                  <line x1="75" y1="15" x2="85" y2="25" stroke="#14b8a6" strokeWidth="2"/>
                  <line x1="85" y1="25" x2="75" y2="28" stroke="#14b8a6" strokeWidth="2"/>
                </svg>
              </div>

              {/* Left image - rectangular with rounded corners */}
              <div className="absolute left-0 top-0 w-2/5 h-3/5 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg z-20">
                <Image 
                  width={400}
                  height={400}
                  src="/3.jpg"
                  alt="Students collaborating" 
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Right image - circular with teal background */}
              <div className="absolute right-0 bottom-0 w-3/5 h-3/5">
                {/* Teal circle background */}
                <div className="absolute inset-0 bg-teal-400 rounded-full"></div>
                
                {/* Image inside circle */}
                <div className="absolute inset-2 md:inset-3 rounded-full overflow-hidden border-4 md:border-6 border-white shadow-xl">
                  <Image 
                    width={400}
                    height={400}
                    src="/4.jpg"
                    alt="Student with books" 
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Yellow accent - bottom right */}
              <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-yellow-400 rounded-tl-full opacity-60 -z-10"></div>

              {/* Dots decoration - bottom left */}
              <div className="absolute -bottom-4 -left-4 opacity-15 hidden sm:block z-0">
                <svg width="120" height="120" viewBox="0 0 120 120">
                  {[...Array(30)].map((_, i) => (
                    <circle 
                      key={i}
                      cx={(i % 6) * 20 + 10} 
                      cy={Math.floor(i / 6) * 20 + 10} 
                      r="3" 
                      fill="#6366f1"
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 md:space-y-8">
            {/* Title */}
            <div className="space-y-4 md:space-y-6">
              <span className="text-indigo-600 font-semibold text-xs md:text-sm uppercase tracking-widest">
                ABOUT US
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Your path to higher studies abroad.
              </h2>
              {/* Underline decoration */}
              <div className="w-20 md:w-28 h-1 bg-indigo-600 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio minima natus, ullam quisquam voluptatem nemo beatae explicabo architecto aperiam maiores officia rerum tempore eum totam adipisci non odit, aliquam voluptates neque repudiandae veritatis. Iusto ipsam a, ex numquam nemo similique.
            </p>

            {/* Features Grid - 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-5 py-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 md:h-6 md:w-6 rounded-full bg-indigo-600">
                      <FaCheck className="h-2.5 w-2.5 md:h-3 md:w-3 text-white" />
                    </div>
                  </div>
                  <span className="text-gray-700 text-sm md:text-base font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4 md:pt-6">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2 md:gap-3">
                View All Program
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;