import React from 'react'

import HeroImage from '../hero/HeroImage';
import Navbar from '../Navbar/Navbar';
import FooterPricing from '../routes/FooterPricing';
import TrainingComponent from '../trainingComponent/TrainingComponent';
import './Training.css';


const Training = () => {
  return (
    <div>
    <Navbar />
    <HeroImage heading='TRAINING.' text='Pre-flight & In-flight Training'/>
    <TrainingComponent />
   <FooterPricing />  
    </div>
  )
}

export default Training;
