'use client'

import React, { useEffect, useState } from 'react'
import { MdDelete, MdEvent } from 'react-icons/md'

interface Event {
    _id: string
    title: string
    description: string
    date: string
}

interface EventsListProps {
    refreshTrigger: number
}

import { API_URL } from '@/lib/Backend/api'

const EventsList: React.FC<EventsListProps> = ({ refreshTrigger }) => {
    const [events, setEvents] = useState<Event[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const fetchEvents = async () => {
        try {
            setLoading(true)
            const response = await fetch(`${API_URL}/api/events/get`)
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Failed to fetch events')
            }

            setEvents(data.data || [])
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch events')
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this event?')) {
            return
        }

        try {
            const response = await fetch(`${API_URL}/api/events/remove/${id}`, {
                method: 'DELETE',
                headers: {
                    'token': localStorage.getItem('adminToken') || ''
                }
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Failed to delete event')
            }

            // Refresh the list
            fetchEvents()
        } catch (err) {
            alert(err instanceof Error ? err.message : 'Failed to delete event')
        }
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return {
            month: date.toLocaleDateString('en-US', { month: 'short' }),
            day: date.getDate(),
            full: date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
        }
    }

    useEffect(() => {
        fetchEvents()
    }, [refreshTrigger])

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-600 dark:text-red-400">{error}</p>
            </div>
        )
    }

    if (events.length === 0) {
        return (
            <div className="text-center py-12">
                <MdEvent className="mx-auto text-6xl text-gray-300 dark:text-gray-600 mb-4" />
                <p className="text-gray-500 dark:text-gray-400">No events yet. Add your first one!</p>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                All Events ({events.length})
            </h3>
            <div className="grid gap-4">
                {events.map((event) => {
                    const dateInfo = formatDate(event.date)
                    return (
                        <div
                            key={event._id}
                            className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow"
                        >
                            <div className="flex gap-4">
                                {/* Date Badge */}
                                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-700 rounded-lg w-16 h-16 shadow-sm shrink-0 text-center p-2 border border-gray-200 dark:border-gray-600">
                                    <span className="text-xs font-bold text-red-500 uppercase">
                                        {dateInfo.month}
                                    </span>
                                    <span className="text-2xl font-black text-gray-900 dark:text-white">
                                        {dateInfo.day}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                        {event.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                        {dateInfo.full}
                                    </p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                                        {event.description}
                                    </p>
                                </div>

                                {/* Delete Button */}
                                <button
                                    onClick={() => handleDelete(event._id)}
                                    className="shrink-0 p-2 h-fit hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg transition-colors"
                                    title="Delete event"
                                >
                                    <MdDelete className="text-xl" />
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default EventsList
