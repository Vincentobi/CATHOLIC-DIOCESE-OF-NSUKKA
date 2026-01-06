import React from 'react'

const AboutHero = () => {
    return (
        <div className="w-full bg-background-light dark:bg-background-dark">
            <div className="flex flex-col items-center justify-center p-4 py-8 md:py-12">
                <div className="w-full max-w-[1200px] min-h-[480px] rounded-xl overflow-hidden relative flex flex-col items-center justify-center text-center p-8 bg-cover bg-center" data-alt="Interior of a large cathedral with high ceilings and stained glass windows" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url('/images/interior_2.jpg')" }}>
                    <div className="flex flex-col gap-4 max-w-[800px] z-10">
                        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                            About the Diocese of Nsukka
                        </h1>
                        <h2 className="text-gray-100 text-lg md:text-xl font-normal leading-relaxed">
                            Shepherding the faithful in Enugu State, Nigeria since our foundation. A community rooted in faith, hope, and charity.
                        </h2>
                    </div>
                    <div className="mt-8 flex gap-4 z-10">
                        <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-primary/80 transition-colors cursor-pointer">
                            Our History
                        </button>
                        <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-white/20 backdrop-blur-sm text-white border border-white/40 text-base font-bold hover:bg-white/30 transition-colors cursor-pointer">
                            Leadership
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHero
