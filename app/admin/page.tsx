'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { MdAdd, MdNewspaper, MdEvent, MdLogout } from 'react-icons/md'
import NewsForm from './NewsForm'
import EventsForm from './EventsForm'
import NewsList from './NewsList'
import EventsList from './EventsList'

type TabType = 'news' | 'events'

const AdminPage = () => {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const [activeTab, setActiveTab] = useState<TabType>('news')
    const [showForm, setShowForm] = useState(false)
    const [refreshTrigger, setRefreshTrigger] = useState(0)

    useEffect(() => {
        // Check authentication
        const token = localStorage.getItem('adminToken')

        // Defer state updates to avoid "cascading renders" warning
        const timeoutId = setTimeout(() => {
            if (!token) {
                router.push('/admin/login')
            } else {
                setIsAuthenticated(true)
            }
            setLoading(false)
        }, 0)

        return () => clearTimeout(timeoutId)
    }, [router])

    const handleLogout = () => {
        localStorage.removeItem('adminToken')
        router.push('/admin/login')
    }

    const handleFormSuccess = () => {
        setShowForm(false)
        setRefreshTrigger(prev => prev + 1) // Trigger list refresh
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        )
    }

    if (!isAuthenticated) {
        return null // Will redirect in useEffect
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            {/* Header */}
            <div className="bg-white dark:bg-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                Admin Dashboard
                            </h1>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                Manage news articles and upcoming events
                            </p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                        >
                            <MdLogout className="text-xl" />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <div className="border-b border-gray-200 dark:border-gray-700">
                        <nav className="flex -mb-px">
                            <button
                                onClick={() => {
                                    setActiveTab('news')
                                    setShowForm(false)
                                }}
                                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'news'
                                    ? 'border-primary text-primary'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                                    }`}
                            >
                                <MdNewspaper className="text-xl" />
                                News Management
                            </button>
                            <button
                                onClick={() => {
                                    setActiveTab('events')
                                    setShowForm(false)
                                }}
                                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'events'
                                    ? 'border-primary text-primary'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                                    }`}
                            >
                                <MdEvent className="text-xl" />
                                Events Management
                            </button>
                        </nav>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        {/* Add Button */}
                        {!showForm && (
                            <div className="mb-6">
                                <button
                                    onClick={() => setShowForm(true)}
                                    className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
                                >
                                    <MdAdd className="text-2xl" />
                                    <span>Add New {activeTab === 'news' ? 'News' : 'Event'}</span>
                                </button>
                            </div>
                        )}

                        {/* Forms */}
                        {showForm && (
                            <div className="mb-6">
                                {activeTab === 'news' ? (
                                    <NewsForm
                                        onSuccess={handleFormSuccess}
                                        onCancel={() => setShowForm(false)}
                                    />
                                ) : (
                                    <EventsForm
                                        onSuccess={handleFormSuccess}
                                        onCancel={() => setShowForm(false)}
                                    />
                                )}
                            </div>
                        )}

                        {/* Lists */}
                        {!showForm && (
                            <>
                                {activeTab === 'news' ? (
                                    <NewsList refreshTrigger={refreshTrigger} />
                                ) : (
                                    <EventsList refreshTrigger={refreshTrigger} />
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPage
