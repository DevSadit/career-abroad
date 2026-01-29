import Image from "next/image";
import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <div className="text-center flex flex-col justify-center mb-6 md:mb-10">
      <p className="text-indigo-600 font-semibold text-xs md:text-sm uppercase tracking-widest">
        {title}
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
        {subtitle}
      </h2>

      <div className="flex justify-center items-center">
        <Image src="/title.svg" alt="title" width={200} height={100} />
      </div>
    </div>
  );
};

export default Title;
