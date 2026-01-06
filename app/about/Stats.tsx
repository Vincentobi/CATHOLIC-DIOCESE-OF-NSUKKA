import React from 'react'

const Stats = () => {
  return (
    <div className="w-full bg-white dark:bg-[#1a202c] py-10 border-y border-[#f0f2f4] dark:border-gray-700">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
            <div className="flex flex-wrap gap-4 justify-between">
                <div className="flex flex-1 min-w-[140px] flex-col gap-1 items-center md:items-start p-4">
                    <p className="text-primary text-3xl md:text-4xl font-black leading-tight">186</p>
                    <p className="text-[#636f88] text-sm font-medium uppercase tracking-wide">Parishes</p>
                </div>
                <div className="w-px h-auto bg-gray-200 hidden md:block"></div>
                <div className="flex flex-1 min-w-[140px] flex-col gap-1 items-center md:items-start p-4">
                    <p className="text-primary text-3xl md:text-4xl font-black leading-tight">350+</p>
                    <p className="text-[#636f88] text-sm font-medium uppercase tracking-wide">Priests</p>
                </div>
                <div className="w-px h-auto bg-gray-200 hidden md:block"></div>
                <div className="flex flex-1 min-w-[140px] flex-col gap-1 items-center md:items-start p-4">
                    <p className="text-primary text-3xl md:text-4xl font-black leading-tight">200+</p>
                    <p className="text-[#636f88] text-sm font-medium uppercase tracking-wide">Seminarians</p>
                </div>
                <div className="w-px h-auto bg-gray-200 hidden md:block"></div>
                <div className="flex flex-1 min-w-[140px] flex-col gap-1 items-center md:items-start p-4">
                    <p className="text-primary text-3xl md:text-4xl font-black leading-tight">50+</p>
                    <p className="text-[#636f88] text-sm font-medium uppercase tracking-wide">Institutions</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stats