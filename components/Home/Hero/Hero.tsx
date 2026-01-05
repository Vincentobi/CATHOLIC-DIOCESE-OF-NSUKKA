import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className="w-full flex justify-center bg-white dark:bg-[#1e2330]">
            <div className="w-full max-w-360 @container">
                <div className="@[480px]:p-4">
                    <div id='hero'
                        className="flex min-h-140 flex-col gap-6 @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-8 text-center relative overflow-hidden group"
                    >
                        <Image
                            src="/images/heroBg.jpg"
                            alt="Cathedral church of St. Theresa, Nsukka"
                            fill
                            priority
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/60 z-1"></div>

                        <div className="flex flex-col gap-4 max-w-200 z-10">
                            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black md:text-6xl drop-shadow-lg font-display">
                                Welcome to the Catholic Diocese of Nsukka
                            </h1>
                            <h2 className="text-white/90 text-lg font-normal leading-normal @[480px]:text-xl md:text-2xl drop-shadow-md">
                                To restore all things in Christ. Faith, Hope, and Charity in Nsukka.
                            </h2>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center z-10 mt-4">
                            <button className="flex min-w-21 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-primary/90 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all transform hover:scale-105 shadow-lg">
                                <span className="truncate"><Link href="/parishes">Mass Times</Link></span>
                            </button>
                            <button className="flex min-w-21 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white hover:bg-gray-100 text-primary text-base font-bold leading-normal tracking-[0.015em] transition-all transform hover:scale-105 shadow-lg">
                                <span className="truncate"><Link href="/about">Learn More</Link></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
