import React from 'react'
import Header from '../components/header/header'
import Nav1 from '../components/Nav/Nav'
import About from '../components/about/about'
import Technical from '../components/technical/technical'
import Service from '../components/service/service'
import Portfolio from '../components/portfolio/portfolio'
import Test from '../components/test/test'
import Contact1 from '../components/Contact/Contact'
import Footer from '../components/fooder/fooder'
import Curiculum from '../components/curiculum/curiculum'
const Home = () => {
  return (
    <>
      <Header/>
      <Nav1/>
      <About/>
      <Technical/>
      <Service/>
      <Portfolio/>
      <Curiculum/>
      <Test/>
      <Contact1/>
      <Footer/>

    </>
  )
}
export default Home