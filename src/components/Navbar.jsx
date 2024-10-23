import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 bg-fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" 
          className='flex items-center gap-2' 
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt='Joshitha TN Logo' className='w-9 h-9 object-contain'/>         
          <p className='text-white text-[18px] font-bold cursor-pointer'>
            Joshitha T.N<span className='sm:block hidden'> | Design Is Thinking Made Visual.</span>
          </p>
        </Link>       

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } font-poppins font-medium cursor-pointer text-[16px] hover:text-white`}
              onClick={() => {
                setActive(link.title);
              }}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu} 
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer' 
            onClick={() => setToggle(!toggle)} 
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {toggle && (
        <div className='fixed top-0 left-0 w-full h-screen bg-primary flex flex-col p-4'>
          <div className='flex justify-end mb-4'>
            <img 
              src={close} 
              alt="close menu"
              className='w-[28px] h-[28px] object-contain cursor-pointer' 
              onClick={() => setToggle(false)} 
            />
          </div>
          <ul className='list-none flex flex-col gap-4'>
            {navLinks.map((link) => (
              <li key={link.id} className='text-white text-[16px] hover:text-secondary'>
                <a 
                  href={`#${link.id}`} 
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false); // Close menu on item click
                  }}
                >
                  <div className='border border-white p-2 rounded-md'>
                    {link.title}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
