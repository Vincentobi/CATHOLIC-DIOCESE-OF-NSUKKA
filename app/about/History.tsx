'use client';
import { history } from '@/data/data';
import React from 'react';
import { MdDescription, MdHistoryEdu, MdCampaign, MdArrowForward } from "react-icons/md";

const History = () => {
    return (
        <div className="w-full bg-background-light dark:bg-background-dark py-16">
            <div className='max-w-[1024px] mx-auto px-4 md:px-10'>
                <div className='flex flex-col lg:flex-row gap-12'>
                    {/* History Text */}
                    <div className="flex-1 flex flex-col gap-6">
                        <h2 className="text-[#111318] dark:text-white text-3xl font-bold leading-tight">Our Journey Since Creation</h2>
                        <div className="text-[#636f88] dark:text-gray-300 text-base leading-7 flex flex-col gap-4">
                            <p>{history.para1}</p>
                            <p>{history.para2}</p>
                            <p>{history.para3}</p>
                        </div>
                    </div>
                    {/* Documents Sidebar */}
                    <div className="w-full lg:w-80 flex flex-col gap-6">
                        <div className='bg-white dark:bg-[#1a202c] p-6 rounded-xl border border-[#dcdfe5] dark:border-gray-700 shadow-sm'>
                            <h3 className="text-[#111318] dark:text-white text-lg font-bold mb-4">Foundational Documents</h3>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f0f2f4] dark:hover:bg-gray-700 group transition-colors" href="#">
                                        <MdDescription className="text-primary text-[24px]" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-[#111318] dark:text-gray-200 group-hover:text-primary">Diocesan Constitution</span>
                                            <span className="text-xs text-[#636f88]">PDF, 2.4 MB</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f0f2f4] dark:hover:bg-gray-700 group transition-colors" href="#">
                                        <MdHistoryEdu className="text-primary text-[24px]" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-[#111318] dark:text-gray-200 group-hover:text-primary">Decree of Erection</span>
                                            <span className="text-xs text-[#636f88]">PDF, 1.1 MB</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f0f2f4] dark:hover:bg-gray-700 group transition-colors" href="#">
                                        <MdCampaign className="text-primary text-[24px]" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-[#111318] dark:text-gray-200 group-hover:text-primary">2023 Pastoral Letter</span>
                                            <span className="text-xs text-[#636f88]">PDF, 500 KB</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <div className="mt-4 pt-4 border-t border-[#f0f2f4] dark:border-gray-700">
                                <a className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all" href="#">
                                    View Archive <MdArrowForward className="text-sm" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History