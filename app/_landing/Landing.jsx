import React from 'react'
import Hero from './hero/Hero'
import About from './about/About'
import CoursesSection from './courses/CoursesSection'
const Landing = () => {
  return (
    <div className="">
      <Hero/>
      <About/>
      <CoursesSection/>
    </div>
  )
}

export default Landing