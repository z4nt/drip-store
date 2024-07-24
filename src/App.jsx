import { useState } from 'react'
import './App.css'
import './index.css'
import Nav from './components/Nav'
import Carousel from './components/Carrosel'
import ProductListing from './components/ProductListing'
import Footer from './components/Footer'
import OfertaESpecial from  './components/OfertaESpecial'
import ColecoesEmDestaque from './components/ColecoesEmDestaque'

export default function Colecoes() {

  return (
    <>
      <Nav/>
      <Carousel/>
      <ColecoesEmDestaque/>
      <ProductListing/>
      <OfertaESpecial />
      <Footer/>
    </>
  )
}

 
