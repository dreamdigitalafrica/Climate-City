import { Metadata } from 'next'
import Blog from './components/Blog'
import CaseStudies from './components/CaseStudies'
import ClientMarquee from './components/ClientMarquee'
import Cta from './components/Cta'
import DrivingChange from './components/DrivingChange'
import Hero from './components/Hero'
import Industries from './components/Industries'
import Services from './components/Services'
import SustainabilityNumbers from './components/SustainabilityNumbers'
import Technology from './components/Technology'
import Testimonials from './components/Testimonials'
import WhyChooseUs from './components/WhyChooseUs'

export const metadata: Metadata = {
  title: 'Home',
}

const Page = () => {
  return (
    <>
      <Hero />
      <DrivingChange />
      <Industries />
      <Services />
      <WhyChooseUs />
      <SustainabilityNumbers />
      <Technology />
      <Testimonials />
      <CaseStudies />
      <Cta />
      <Blog />
      <ClientMarquee />
    </>
  )
}

export default Page
