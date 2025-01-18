import React from 'react';
import NavBar from '../components/NavBar';
import Shop from '../components/Shop'
import Home from '../components/Home';
import Footer from '../components/Footer';
import Reserve from '../components/Reserve';
import Offer from '../components/Offer';

import Brand from '../components/Brand';
import FAQ from '@/components/FAQ';
import Cart from '@/components/Cart';
import Contact from '@/components/Contact';
import Products from '@/components/Products';
import About from './about/page';

export default function page() {
  return (
   <div> 
    <NavBar />
    <Home/>
    <Shop  />
    <Products />
    
    <Offer />
    <Brand />
    <Cart />
    <Reserve />
    <FAQ/>
    
    <About />
    <Contact />
    <Footer/>
    
   

   </div>
  );
}
