import HeroSection from '../components/home/HeroSection'
import SelectedProjectsSection from '../components/home/SelectedProjectsSection'
import AboutSection from '../components/home/AboutSection'
import ExpertiseSection from '../components/home/ExpertiseSection'
import ContactSection from '../components/home/ContactSection'

import Divider from '../components/ui/Divider'

import PageMetadata from '../components/seo/PageMetadata'

import { PAGE_METADATA } from '../data/seo'

function Home() {
  return (
    <>
      <PageMetadata {...PAGE_METADATA.home} />

      <HeroSection />
      <Divider />
      <SelectedProjectsSection />
      <Divider />
      <AboutSection />
      <Divider />
      <ExpertiseSection />
      <Divider />
      <ContactSection />
    </>
  )
}

export default Home
