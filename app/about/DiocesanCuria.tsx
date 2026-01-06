import GridBox from '@/components/GridBox'
import { diocese_curia } from "@/data/data";
import React from 'react'

const DiocesanCuria = () => {
  return (
    <div className='w-full bg-white dark:bg-[#1a202c] py-16'>
        <div className='max-w-[1200px] mx-auto px-4 md:px-10 flex flex-col gap-10'>
            <div className="flex flex-col gap-2">
                <h2 className="text-[#111318] dark:text-white text-3xl font-bold leading-tight">Diocesan Leadership</h2>
                <p className="text-[#636f88] dark:text-gray-400">Key personnel serving the administration of the Diocese.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {diocese_curia.map((item, index)=>(
                    <GridBox 
                        key={index}
                        image={item.profile}
                        name={item.name}
                        position={item.position}
                    />
                ))}
            </div>
        </div>
    </div>
  )
  
}

export default DiocesanCuria