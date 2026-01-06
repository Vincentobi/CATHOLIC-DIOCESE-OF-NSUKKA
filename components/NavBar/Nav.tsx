import { navLinks } from '@/constants/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {

    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 90) {
                setNavBg(true);
            } else {
                setNavBg(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <div className={`whitespace-nowrap border-b border-solid border-b-[#f0f2f4] dark:border-gray-800 px-4 py-3 md:px-10 sticky top-0 z-50 transition-all duration-300 ${navBg ? 'bg-white/80 dark:bg-[#1e2330]/80 backdrop-blur-md shadow-md' : 'bg-white dark:bg-[#1e2330]'}`}>
            <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
                {/* Logo */}
                <div className='rounded-full shadow-md shadow-primary/20 p-2'>
                    <Image src={"/IHS_Logo.svg"} alt="IHS logo" width={50} height={20} />
                </div>
                {/* Nav Links */}
                <div className="hidden lg:flex space-x-8">
                    {navLinks.map((link) => {
                        return (<Link key={link.name} href={link.href} className="text-black font-semibold dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                            {link.name}
                        </Link>)
                    })}
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/donate">
                        <button className="flex min-w-84px cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-primary/80 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
                            <span className="truncate">Donate</span>
                        </button>
                    </Link>
                    {/* Burger Menu */}
                    <HiBars3BottomRight className='w-8 h-8 cursor-pointer text-gray-400 lg:hidden hover:text-primary' onClick={openNav} />
                </div>

            </div>
        </div>
    )
}

export default Nav