import { useState } from 'react'
import './App.css'
import './index.css'
import Nav from './components/Nav'
import ProductListing from './components/ProductListing'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Nav/>
      <ProductListing/>
      <Footer/>
    </>
  )
}

export default App
