import './globals.css'
import HomePage from './components/HeroSection';
import WhatWeDo from './components/WhatWeDo';
import Testimonial from './components/Testimonial';
import AboutUs from './components/AboutUs';
import OurTeam from './components/OurTeam';
import ContactUs from './components/ContactUs';

function Home() {
  return (
    <>
      <HomePage />
      <WhatWeDo />
      <Testimonial />
      <AboutUs />
      <OurTeam />
      <ContactUs />
    </>
  )
}
export default Home;
