import Image from "next/image";
import React from "react";

const Faq = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 xl:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* head text */}
        <div className="text-center flex flex-col justify-center">
          <p className="text-indigo-600 font-semibold text-xs md:text-sm uppercase tracking-widest">
            Faq
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Based On Countries
          </h2>

          <div className="flex justify-center items-center">
            <Image src="/title.svg" alt="title" width={200} height={100} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
