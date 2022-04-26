import React, {useEffect} from 'react'
import Faqs from '../Layouts/Dashboard/faqs'
import Roadmap from '../Layouts/Dashboard/roadmap'
import Mints from '../Layouts/Dashboard/mint'
import Header from '../Layouts/Dashboard/header'
import Hero from '../Layouts/Dashboard/hero'
import Meet from '../Layouts/Dashboard/meet'
import Story from '../Layouts/Dashboard/story'
import Team from '../Layouts/Dashboard/teams'
import Footer from '../Layouts/Dashboard/footer'
import Aos from 'aos'
import "aos/dist/aos.css"
export default function Index() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div>
      <Header />
       <Hero />
       <Meet />
    <Story />
     <Mints />
       <Roadmap />
       <Faqs />
     <Team />
      <Footer />
    </div>
  )
}
