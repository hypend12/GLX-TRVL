import React from 'react';
import './Footer.css';
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem' }} />
          
          <div>
            <p>123 acne street</p>
            <h4>Houston, Tx</h4>
           
          </div>
        </div>
        <div className='phone'>
          <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem' }} />
            1-800-760-4127
          </h4>
          </div>
          <div className='email'>
            <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem' }} /> trips@galaxy.com</h4>
          </div>
        </div>
        <div className='right'>
          <h4>About the Company</h4>
          <p>Welcome to Galaxy Travel, the premier passenger space travel company for those seeking the ultimate adventure. Our company was founded in 2030 with a vision to offer people the opportunity to explore the wonders of space in a safe and luxurious manner.

Our team is made up of some of the brightest minds in the industry, including experienced space engineers, pilots, and customer service professionals who are dedicated to providing you with an unparalleled travel experience. We utilize the latest technology and equipment to ensure your journey is both comfortable and safe.

At Galactic Journeys, we offer a variety of space travel packages tailored to your specific interests and needs. Whether you want to take a short trip to experience weightlessness, see the beauty of Earth from space, or embark on a longer journey to explore other planets, we have the perfect package for you.

Our state-of-the-art spacecraft are designed to provide a luxurious and unforgettable experience, with amenities such as private cabins, gourmet meals, and breathtaking views of the cosmos.</p>

<div className='social' >
<FaFacebook size={30} style={{color: '#ffffff', marginRight: '1rem' }} />
<FaTwitter size={30} style={{color: '#ffffff', marginRight: '1rem' }} />
<FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem' }} />
</div>

        </div>
      </div>
      
    </div>
  )
}

export default Footer;
