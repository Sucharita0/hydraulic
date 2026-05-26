import React from 'react'
import Header from './components/header'
import ImageSlide from './components/imageSlide'
import AboutSection from './components/aboutSection'

import Footer from './components/footer'
import Card from './components/card'
import Faq from './components/faq'
import Map from './components/map'
import Training2 from './components/training2'
import Training from './components/training'
import Learning from './components/learning'


function Page() {
  return (
    <>
    <Header/>
    <ImageSlide/>
    <AboutSection/>
    <Training2/>
    <Training/>
    <Learning/>
     <Card/>
     <Faq/>
     <Map/>
    <Footer/>
   
    </>
  )
}

export default Page