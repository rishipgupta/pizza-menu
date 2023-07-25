import React from 'react'
// import Clock from './Clock';

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className='footer'>
      {isOpen && <p>We're open till {closeHour}:00! Come visit us or Order online.</p>}
    </footer>
  )
}

export default Footer;