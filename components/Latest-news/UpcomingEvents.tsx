'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import UpcomingEvents_col from '../UpcomingEvents_col'


interface EventItem {
    _id: string
    title: string
    description: string
    date: string
}

const UpcomingEvents = () => {
    const [eventsData, setEventsData] = useState<EventItem[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/events/get')
                const data = await response.json()

                if (response.ok && data.data) {
                    // Limit to 4 most recent events
                    setEventsData(data.data.slice(0, 4))
                }
            } catch (error) {
                console.error('Failed to fetch events:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchEvents()
    }, [])

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return {
            month: date.toLocaleDateString('en-US', { month: 'short' }),
            day: date.getDate().toString()
        }
    }

    return (
        <div className="flex flex-col flex-1 gap-6 min-w-[300px]">
            <div className='flex items-center justify-between'>
                <h2 className="text-[#111318] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Upcoming Events</h2>
                <Link className="text-primary font-bold text-sm hover:underline" href={"/events"}>Full Calendar</Link>
            </div>
            <div className='flex flex-col gap-4 bg-background-light dark:bg-gray-800/50 p-6 rounded-xl'>
                {loading ? (
                    <div className="flex items-center justify-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                ) : eventsData.length > 0 ? (
                    eventsData.map((event) => {
                        const dateInfo = formatDate(event.date)
                        return (
                            <UpcomingEvents_col
                                key={event._id}
                                month={dateInfo.month}
                                date={dateInfo.day}
                                title={event.description}
                                event={event.title}
                                time="" // Time not stored in current model
                            />
                        )
                    })
                ) : (
                    <div className="text-center py-8">
                        <p className="text-gray-500 dark:text-gray-400">No upcoming events at the moment.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default UpcomingEvents