import { navLinks } from '@/constants/constants';
import Link from 'next/link';
import React from 'react'
import { CgClose } from 'react-icons/cg';


type Props = {
    ShowNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ShowNav, closeNav}: Props) => {

    const mobileNavStyle = ShowNav ? 'translate-x-0' : '-translate-x-full';
    
  return (
    <div className={`fixed ${mobileNavStyle} inset-0 transform transition-all duration-500 z-1000 bg-black opacity-70 w-full h-screen`}>
        <div className={`text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-primary/90 space-y-6 z-1056 ${mobileNavStyle}`}>
            {navLinks.map((link)=>{
                return (
                    <Link className='hover:scale-105 transition-all duration-300' key={link.name} href={link.href} onClick={closeNav}>
                       <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>{link.name}</p> 
                    </Link>
                )
            })}
            {/* Close Button */}
                <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8  hover:scale-150 sm:h-8 w-6 h-6 cursor-pointer transition-all duration-300' />
    </div>
    </div>
    
  )
}

export default MobileNav
