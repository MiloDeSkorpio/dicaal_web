import { Outlet } from "react-router-dom"
import { useState,  } from 'react';

//import data
import { header, footer } from '../data'
//import icons
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi'
//import components
import MobileNav from "../views/components/MobileNav";
import Nav from '../views/components/Nav'

export default function Layout() {

  const [mobileNav, setMovileNav] = useState(false);
  //destructure header data
  const { logo } = header
  const { logoF,contacto,dir,ico1,ico2} = footer
  return (
    <>
      <header
        className='
               lg:top-[0px] shadow-xl p-2 bg-[rgba(255,255,255,0.73)] lg:py-1 fixed z-10 w-full backdrop-blur-sm back'
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
                : 'hidden '}
               bottom-0 w-[100vh] fixed z-20 top-16 lg:hidden     
           `}
          >
            <MobileNav />
          </div>
        <Outlet />
      </main>
      <footer className="flex flex-col p-2 lg:flex-row space-y-4 justify-center items-center lg:justify-between">
        <div className="mt-2">
          <img src={logoF} alt="" className="h-56 w-auto" />
        </div>
        <div className="text-white p-3">
          <p>{dir}</p>
          <p>{contacto}</p>
        </div>
        <div>
          <p className="text-white p-3">Nuestras Redes Sociales</p>
          <div className="flex justify-center items-center gap-2">
            <a href="https://www.facebook.com/people/DICAAL/61553810441591/">
            <img src={ico1} alt="" />
            </a>
            <a href="https://www.instagram.com/dicaal.mx/">
            <img src={ico2} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
