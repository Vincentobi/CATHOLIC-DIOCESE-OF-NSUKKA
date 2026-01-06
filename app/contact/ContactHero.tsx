import React from 'react'

const ContactHero = () => {
  return (
    <div className="w-full">
        <div className="flex min-h-[380px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 relative" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url('/images/terbanacle_cut3.jpg')" }}>
        <div className="flex flex-col gap-4 text-center max-w-[800px] z-10">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
                Get In Touch 
            </h1>
            <h2 className="text-gray-200 text-base font-normal leading-relaxed md:text-lg max-w-[600px] mx-auto">
                We are here to answer your questions and welcome you to the catholic diocese of Nsukka. <span className='italc text-primary'>Jesus Wants To See You</span>
            </h2>
        </div>
        </div>
    </div>
  )
}

export default ContactHero