"use client";
import React from 'react'

const DepartmentHero = () => {
    return (
    <div className="w-full">
        <div className="flex min-h-[380px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 relative" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url('/images/interior_1.jpg')" }}>
        <div className="flex flex-col gap-4 text-center max-w-[800px] z-10">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
                Departments &amp; Ministries
            </h1>
            <h2 className="text-gray-200 text-base font-normal leading-relaxed md:text-lg max-w-[600px] mx-auto">
                The operational arms of the Catholic Diocese of Nsukka, dedicated to pastoral care, effective administration, education, and social development.
            </h2>
        </div>
        {/* Optional Quick Action */}
        <div className="flex gap-4 z-10 mt-2">
            <button onClick={() => window.location.href = "/departments/Admin"} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white text-primary hover:bg-gray-100 transition-colors text-base font-bold leading-normal">
                <span>Contact Chancery</span>
            </button>
        </div>
        </div>
    </div>
    )
}

export default DepartmentHero