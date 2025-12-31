import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (

  <section className="mt-4 md:mt-0 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Right Side - Image (appears first on mobile) */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg order-1 lg:order-2">
            <div className="relative">
              {/* Decorative blob background */}
              <div className="absolute inset-0 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform duration-500">
                <Image src="/hero.jpg" width={100} height={100}
                  alt="Students studying abroad" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0  from-black/20 to-transparent"></div>
              </div>
              
            </div>
          </div>
          
          {/* Left Side - Content (appears second on mobile) */}
          <div className="flex-1 space-y-6 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your global{" "}
              <span className=" text-[#364bc5] bg-clip-text">
                education journey
              </span>{" "}
              starts here.
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
              Discover limitless opportunities to study abroad and transform your future. 
              We connect ambitious students with world-class universities across the globe, 
              providing comprehensive support from application to graduation.
            </p>
            
            <div className="pt-4">
              <button className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-full border-2 border-gray-300 hover:border-blue-600 transition-all duration-300 hover:shadow-lg">
                Learn More
              </button>
            </div>
            
            {/* Stats or Features */}
            <div className="flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start pt-8">
              <div className="text-center lg:text-left transform hover:scale-110 transition-all duration-300 hover:-translate-y-1">
                <p className="text-3xl font-bold text-gray-900 transition-colors duration-300 hover:text-[#364bc5]">500+</p>
                <p className="text-sm text-gray-600">Universities</p>
              </div>
              <div className="text-center lg:text-left transform hover:scale-110 transition-all duration-300 hover:-translate-y-1 delay-75">
                <p className="text-3xl font-bold text-gray-900 transition-colors duration-300 hover:text-[#364bc5]">10+</p>
                <p className="text-sm text-gray-600">Countries</p>
              </div>
              <div className="text-center lg:text-left transform hover:scale-110 transition-all duration-300 hover:-translate-y-1 delay-150">
                <p className="text-3xl font-bold text-gray-900 transition-colors duration-300 hover:text-[#364bc5]">1000+</p>
                <p className="text-sm text-gray-600">Students</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Hero