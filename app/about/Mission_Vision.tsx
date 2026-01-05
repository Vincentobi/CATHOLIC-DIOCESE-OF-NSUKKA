import React from 'react'

import { MdVolunteerActivism, MdLightMode } from "react-icons/md";

const Mission_Vision = () => {
    return (
        <div>
            <div className="w-full bg-background-light dark:bg-background-dark py-16">
                <div className="max-w-[960px] mx-auto px-4 md:px-10 flex flex-col gap-10">
                    <div className="flex flex-col gap-4 text-center items-center">
                        <h2 className="text-[#111318] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                            Who We Are
                        </h2>
                        <p className="text-[#636f88] dark:text-gray-300 text-lg font-normal leading-relaxed max-w-[720px]">
                            Guided by the Holy Spirit, we strive to build a diocese rooted in the love of Christ, dedicated to the service of God and humanity.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* <!-- Mission Card --> */}
                        <div className="flex gap-4 rounded-xl border border-[#dcdfe5] dark:border-gray-700 bg-white dark:bg-[#1a202c] p-8 flex-col shadow-sm hover:shadow-md transition-shadow">
                            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                <MdVolunteerActivism className="text-[28px]" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[#111318] dark:text-white text-xl font-bold leading-tight">Our Mission</h3>
                                <p className="text-[#636f88] dark:text-gray-300 text-base font-normal leading-relaxed">
                                    To evangelize the people of God through the teachings of Christ and the Church, fostering spiritual growth, unity, and social development within our community.
                                </p>
                            </div>
                        </div>
                        {/* <!-- Vision Card --> */}
                        <div className="flex gap-4 rounded-xl border border-[#dcdfe5] dark:border-gray-700 bg-white dark:bg-[#1a202c] p-8 flex-col shadow-sm hover:shadow-md transition-shadow">
                            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                <MdLightMode className="text-[28px]" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[#111318] dark:text-white text-xl font-bold leading-tight">Our Vision</h3>
                                <p className="text-[#636f88] dark:text-gray-300 text-base font-normal leading-relaxed">
                                    To be a vibrant community of faith, hope, and charity, radiating the light of Christ to all corners of the Diocese and beyond, serving as a beacon of moral integrity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission_Vision