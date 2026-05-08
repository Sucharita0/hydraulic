import React from 'react'
import Header from './components/header'
import ImageSlide from './components/imageSlide'
import AboutSection from './components/aboutSection'
import Training from './components/training'
import Footer from './components/footer'
import Card from './components/card'
import Faq from './components/faq'
import Map from './components/map'

function Page() {
  return (
    <>
    <Header/>
    <ImageSlide/>
    <AboutSection/>
    <Training/>
     <Card/>
     <Faq/>
     <Map/>
    <Footer/>
   
    </>
  )
}

export default Page