import React from 'react'
import Section2 from '../Section2/Section2'
import Section3 from '../Section3/Section3'
import Section5 from '../Section5/Section5'
import Section8 from '../Section8/Section8'
import Section7 from "../Section7/Section7"
import Navbar from '../Navbar/Navbar'

function About() {
  return (
    <div>
      <Navbar />
      <Section8 />
      <Section2 />
      <Section3 />
      <Section5 />
      <Section7 />
    </div>
  )
}

export default About