'use client'
import React from 'react'

const UpcomingEvents_col = ({month,date,title,event,time}: {month:string,date:string,title:string,event:string,time:string}) => {


  return (
        <div className="flex flex-row gap-4 items-start pb-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-700 rounded-lg w-16 h-16 shadow-sm shrink-0 text-center p-2">
                <span className="text-xs font-bold text-red-500 uppercase">{month}</span>
                <span className="text-2xl font-black text-[#111318] dark:text-white">{date}</span>
            </div>
            <div>
                <h3 className="text-[#111318] dark:text-white text-base font-bold">{event}</h3>
                <p className="text-[#636f88] dark:text-gray-400 text-sm mt-1">{title}</p>
                <span className="inline-block mt-2 text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">{time}</span>
            </div>
        </div>
  )
}

export default UpcomingEvents_col