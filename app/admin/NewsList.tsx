'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { MdDelete, MdImage } from 'react-icons/md'

interface News {
    _id: string
    title: string
    content: string
    date: string
    image: string[]
}

interface NewsListProps {
    refreshTrigger: number
}

import { API_URL } from '@/lib/Backend/api'

const NewsList: React.FC<NewsListProps> = ({ refreshTrigger }) => {
    const [news, setNews] = useState<News[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const fetchNews = async () => {
        try {
            setLoading(true)
            const response = await fetch(`${API_URL}/api/getNews`)
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Failed to fetch news')
            }

            setNews(data.data || [])
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch news')
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this news article?')) {
            return
        }

        try {
            const response = await fetch(`${API_URL}/api/removeNews/${id}`, {
                method: 'DELETE',
                headers: {
                    'token': localStorage.getItem('adminToken') || ''
                }
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Failed to delete news')
            }

            // Refresh the list
            fetchNews()
        } catch (err) {
            alert(err instanceof Error ? err.message : 'Failed to delete news')
        }
    }

    useEffect(() => {
        fetchNews()
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

    if (news.length === 0) {
        return (
            <div className="text-center py-12">
                <MdImage className="mx-auto text-6xl text-gray-300 dark:text-gray-600 mb-4" />
                <p className="text-gray-500 dark:text-gray-400">No news articles yet. Add your first one!</p>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                All News Articles ({news.length})
            </h3>
            <div className="grid gap-4">
                {news.map((item) => (
                    <div
                        key={item._id}
                        className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow"
                    >
                        <div className="flex gap-4">
                            {/* Image Preview */}
                            {item.image && item.image.length > 0 && (
                                <Image
                                    src={item.image[0]}
                                    alt={item.title}
                                    width={96}
                                    height={96}
                                    className="w-24 h-24 object-cover rounded-lg shrink-0"
                                />
                            )}

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 truncate">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                    {new Date(item.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                                    {item.content}
                                </p>
                                {item.image && item.image.length > 1 && (
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                        +{item.image.length - 1} more image{item.image.length - 1 > 1 ? 's' : ''}
                                    </p>
                                )}
                            </div>

                            {/* Delete Button */}
                            <button
                                onClick={() => handleDelete(item._id)}
                                className="shrink-0 p-2 h-fit hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg transition-colors"
                                title="Delete news"
                            >
                                <MdDelete className="text-xl" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewsList
