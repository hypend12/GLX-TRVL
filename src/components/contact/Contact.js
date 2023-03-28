import React from 'react';
import HeroImage from '../hero/HeroImage';
import Navbar from '../Navbar/Navbar';
import FooterPricing from '../routes/FooterPricing';
import './Contact.css';
import Form from './Form';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='CONTACT' text='Contact GLX TRVL ' />
      <Form />
      <FooterPricing />
    </div>
  )
}

export default Contact;
