import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/contact/Contact';
import Home from './components/routes/Home';
import Pricing from './components/routes/Pricing';
import Training from './components/training/Training';



function App() {
  return (
    <div>
      
      <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/Pricing' element={<Pricing />} />
      <Route path='/Training' element={<Training />} />
      <Route path='/Training' element={<Training />} />
      <Route path='/Contact' element={<Contact />} />
    
      </Routes>
     
    </div>
   
  );
}

export default App;
