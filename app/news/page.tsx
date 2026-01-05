'use client'
import NewsHero from './NewsHero'
import NewsMainContent from './NewsMainContent'
import React, { useEffect, useState } from 'react'

interface NewsItem {
    _id: string
    image: string[]
    date: string
    title: string
    slug: string
    content: string
    isFeatured?: boolean
}

import { API_URL } from '@/lib/Backend/api'

const Page = () => {
    const [newsData, setNewsData] = useState<NewsItem[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`${API_URL}/api/getNews`)
                const data = await response.json()
                if (response.ok && data.data) {
                    setNewsData(data.data)
                }
            } catch (error) {
                console.error('Failed to fetch news:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchNews()
    }, [])

    // Find the featured story, or use the latest news as fallback
    const featuredNews = newsData.find(news => news.isFeatured) || newsData[0] || null

    return (
        <div className="bg-white dark:bg-background-dark min-h-screen">
            <NewsHero featuredNews={featuredNews} />
            <NewsMainContent newsData={newsData} loading={loading} />
        </div>
    )
}

export default Page
