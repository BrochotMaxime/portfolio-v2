import HeroSection from '../components/home/HeroSection'
import SelectedProjectsSection from '../components/home/SelectedProjectsSection'
import AboutSection from '../components/home/AboutSection'
import ExpertiseSection from '../components/home/ExpertiseSection'
import ContactSection from '../components/home/ContactSection'

import Divider from '../components/ui/Divider'

function Home() {
  return (
    <>
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
