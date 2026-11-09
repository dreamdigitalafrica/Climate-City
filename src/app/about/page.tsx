import { Metadata } from 'next'
import AboutInfo from './components/AboutInfo'
import CtaMarquee from './components/CtaMarquee'
import Hero from './components/Hero'
import MissionVision from './components/MissionVision'
import Team from './components/Team'

export const metadata: Metadata = {
  title: 'About',
}

const Page = () => {
  return (
    <>
      <Hero />
      <div id="vision"><AboutInfo /></div>
      <div id="sustainable-design"><MissionVision /></div>
      <Team />
      <CtaMarquee />
    </>
  )
}

export default Page
