import { Outlet } from "react-router-dom"
import { useState, useEffect } from 'react';

//import data
import { header } from '../data'
//import icons
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi'
//import components
import MobileNav from "../views/components/MobileNav";
import Nav from '../views/components/Nav'

export default function Layout() {

  const [mobileNav, setMovileNav] = useState(false);
  // header state
  const [isActive, setisActive] = useState(false);
  //destructure header data
  const { logo, btnText } = header
  //scroll event 
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setisActive(true) : setisActive(false)
    })
  })
  return (
    <>
      <header
        className={`
            ${isActive ? 'bg-white shadow-2xl' : 'lg:top-[60px]'}
              py-6 lg:py-2 fixed w-full transition-all z-10
            `}
      >
        <div className='container mx-auto flex justify-between items-center'>
          
          <a
            href='/'
            data-aos='fade-down'
            data-aos-delay='1000'
          >
            <img
              src={logo}
              alt='logo'
              className='w-40 h-28 m-0'
            />
          </a>
          
          <div
            className='hidden lg:flex'
            data-aos='fade-down'
            data-aos-delay='1200'
          >
            <Nav />
          </div>
         
          <a
            className='btn btn-sm btn-outline hidden lg:flex'
            data-aos='fade-down'
            data-aos-delay='1400'
            href='#contacto'
          >
            {btnText}
          </a>
          
          <button className='lg:hidden' aria-label="mobile nav" onClick={() => {
            setMovileNav(!mobileNav)
          }}>
            {mobileNav ? (
              <HiOutlineX className='text-3xl text-blue-700' />
            ) : (
              <HiMenuAlt4 className='text-3xl text-blue-700' />
            )}
          </button>
          
          <div
            className={`
              ${mobileNav
                ? 'left-0'
                : '-left-full'}
              fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all bg-blue-500    
           `}
          >
            <MobileNav />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  )
}
