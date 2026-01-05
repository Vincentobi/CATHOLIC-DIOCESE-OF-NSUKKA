import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocationOn, MdCall, MdMail } from 'react-icons/md';

const Footer = () => {

  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-primary dark:bg-[#0d1017] text-white py-16 px-4 md:px-10'>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* <!-- Branding --> */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-white">
              <span className=" ">
                <Image src="/IHS_Logo.svg" width={40} height={40} alt="Logo" />
              </span>
              <span className="text-xl font-bold">Diocese of Nsukka</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-[280px]">
              To restore all things in Christ through Faith, Hope, and Charity in Enugu State, Nigeria.
            </p>
            <div className="flex gap-4 mt-2">
              <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" href="#">
                {/* <!-- Social Icon Placeholder (using text for now as specific SVG not provided) --> */}
                <span className="text-xs"><FaFacebook /></span>
              </a>
              <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" href="#">
                <span className="text-xs"><FaTwitter /></span>
              </a>
              <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" href="#">
                <span className="text-xs"><FaYoutube /></span>
              </a>
            </div>
          </div>
          {/* <!-- Quick Links --> */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <div className="flex flex-col gap-2 text-white/80 text-sm">
              <a className="hover:text-white transition-colors" href="/home">Home</a>
              <a className="hover:text-white transition-colors" href="/about">About Us</a>
              <a className="hover:text-white transition-colors" href="/mass-schedule">Mass Schedule</a>
              <a className="hover:text-white transition-colors" href="/events">Events Calendar</a>
              <a className="hover:text-white transition-colors" href="/donate">Donate</a>
            </div>
          </div>
          {/* <!-- Departments --> */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Departments</h3>
            <div className="flex flex-col gap-2 text-white/80 text-sm">
              <a className="hover:text-white transition-colors" href = "/departments/Admin">Administration</a>
              <a className="hover:text-white transition-colors" href = "/departments/Pastoral">Pastoral</a>
              <a className="hover:text-white transition-colors" href = "/departments/Education">Education</a>
              <a className="hover:text-white transition-colors" href = "/departments/Health">Health</a>
              <a className="hover:text-white transition-colors" href = "/departments/Social Services">Social Services</a>
            </div>
          </div>
          {/* <!-- Contact --> */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="flex flex-col gap-3 text-white/80 text-sm">
              <div className="flex gap-3 items-start">
                <MdLocationOn className="text-lg mt-0.5" />
                <span>Catholic Secretariat,<br />P.O. Box 32, Nsukka,<br />Enugu State, Nigeria</span>
              </div>
              <div className="flex gap-3 items-center">
                <MdCall className="text-lg" />
                <span>+234 800 123 4567</span>
              </div>
              <div className="flex gap-3 items-center">
                <MdMail className="text-lg" />
                <span>info@nsukkacatholicdiocese.org</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <p>© {currentYear} Catholic Diocese of Nsukka. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-white" href="#">Privacy Policy</a>
            <a className="hover:text-white" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer