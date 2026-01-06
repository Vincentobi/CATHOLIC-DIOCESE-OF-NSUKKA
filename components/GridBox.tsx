import React from 'react'

const GridBox = ({ image, name, position }: { image: string, name: string, position: string }) => {
  return (
    <div className='flex flex-col gap-2 group'>
      <div className='w-full aspect-4/5 bg-gray-200 rounded-lg overflow-hidden relative'>
        <div className='w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105' style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>
      </div>
      <div className='flex flex-col gap-1'>
        <div className='text-[#111318] dark:text-white text-lg font-bold'>{name}</div>
        <p className='text-primary text-sm font-medium'>{position}</p>
      </div>
    </div>
  )
}

export default GridBox