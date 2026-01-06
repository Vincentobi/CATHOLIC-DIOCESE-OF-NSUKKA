'use client';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { quickResources } from '@/data/data';

const Quick_resource = () => {
  return (
    <div className='w-full flex justify-center py-12 px-4 md:px-10 bg-background-light dark:bg-background-dark'>
        <div className='max-w-1200px w-full flex flex-col gap-10'>
            <div className="flex flex-col gap-4 text-center items-center">
                <h2 className="text-[#111318] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.033em]">
                    Quick Resources
                </h2>
                <p className="text-[#636f88] dark:text-gray-400 text-lg font-normal leading-normal max-w-[720px]">
                    Essential links for parishioners and visitors to deepen their faith journey.
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {quickResources.map((resource) => (
                    <Link key={resource.title} href={resource.link} className='flex flex-col gap-4 rounded-xl border border-[#dcdfe5] dark:border-gray-700 bg-white dark:bg-[#1e2330] p-6 hover:shadow-lg transition-shadow cursor-pointer items-center text-center'>
                        <Image className="text-primary dark:text-primary text-4xl" src={resource.icon} alt={resource.title} width={40} height={40} />
                        <h3 className="text-[#111318] dark:text-white text-xl font-semibold leading-tight">
                            {resource.title}
                        </h3>
                        <p className="text-[#636f88] dark:text-gray-400 text-sm font-normal leading-normal">
                            {resource.description}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Quick_resource
