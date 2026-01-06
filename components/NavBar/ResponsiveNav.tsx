'use client';
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNavShow = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false);
  return (
    <>
      <Nav openNav={handleNavShow} />
      <MobileNav ShowNav={showNav} closeNav={handleCloseNav} />
    </>
  )
}

export default ResponsiveNav