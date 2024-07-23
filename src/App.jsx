import { useState } from 'react'
import './App.css'
import './index.css'
import Nav from './components/Nav'
import Carousel from './components/Carrosel'
import ProductListing from './components/ProductListing'
import Footer from './components/Footer'
import OfertaESpecial from  './components/OfertaESpecial'

function App() {

  return (
    <>
      <Nav/>
      <Carousel/>
      <ProductListing/>
      <OfertaESpecial />
      <Footer/>
    </>
  )
}

export default App
