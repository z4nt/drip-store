import { useState } from 'react'
import './App.css'
import './index.css'
import Nav from './components/Nav'
import Carousel from './components/Carrosel'
import ProductListing from './components/ProductListing'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Nav/>
      <Carousel/>
      <ProductListing/>
      <Footer/>
    </>
  )
}

export default App
