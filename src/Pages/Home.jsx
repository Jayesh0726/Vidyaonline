import {   HeroSection,Expertise, CaseStudies, ExperienceSection,TestimonialsOverview, AIAgent, Steps, Integration, FAQ, CTA } from "../Components";
import React from 'react'

function Home() {
  return (
    <div>       
        <HeroSection />
        <Steps />
        <AIAgent />
        <ExperienceSection />
          <CaseStudies />
        <Integration />
        <Expertise />
        <CTA />
        <TestimonialsOverview />
        <FAQ />
    </div>
  )
}

export default Home