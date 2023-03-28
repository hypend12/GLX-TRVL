import React from 'react';
import Navbar from '../Navbar/Navbar';
import FooterPricing from './FooterPricing';
import HeroImage from '../hero/HeroImage';
import PricingComponent from './PricingComponent';
import './Pricing.css'


const Pricing = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='PRICING.' text='Choose your trip'  />
      
        <PricingComponent />
      
       
        <FooterPricing />
      
    </div>
  )
}

export default Pricing;
