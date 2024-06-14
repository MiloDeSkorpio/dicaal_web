import { Outlet } from "react-router-dom"
import { useState,  } from 'react';

//import data
import { header } from '../data'
//import icons
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi'
//import components
import MobileNav from "../views/components/MobileNav";
import Nav from '../views/components/Nav'

export default function Layout() {

  const [mobileNav, setMovileNav] = useState(false);
  //destructure header data
  const { logo } = header

  return (
    <>
      <header
        className='
               lg:top-[0px] shadow py-6 bg-[rgba(255,255,255,0.73)] lg:py-1 fixed z-10 w-full backdrop-blur-sm back'
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
              className='w-full h-12 m-0'
            />
          </a>
          
          <div
            className='hidden lg:flex'
            data-aos='fade-down'
            data-aos-delay='1200'
          >
            <Nav />
          </div>
          <button className='lg:hidden' aria-label="mobile nav" onClick={() => {
            setMovileNav(!mobileNav)
          }}>
            {mobileNav ? (
              <HiOutlineX className='text-3xl text-[#030b31]' />
            ) : (
              <HiMenuAlt4 className='text-3xl text-[#030b31]' />
            )}
          </button>
          
        </div>
      </header>
      <main >  
          <div
            className={`
              ${mobileNav
                ? 'left-0'
                : '-left-full'}
               bottom-0 w-[100vh] fixed z-20 top-0 lg:hidden     
           `}
          >
            <MobileNav />
          </div>
        <Outlet />
      </main>
    </>
  )
}
