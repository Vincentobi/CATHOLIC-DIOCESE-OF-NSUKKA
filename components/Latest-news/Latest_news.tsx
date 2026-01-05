'use client'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import News_col from '@/components/News_col'
import UpcomingEvents from './UpcomingEvents'
import Link from 'next/link'



const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        SlideToSide: 1,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 }, // Adjusted min for desktop
        items: 3,
        SlideToSide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 }, // Adjusted breakpoints
        items: 2,
        SlideToSide: 1,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
        SlideToSide: 1,
    }
}

import { motion } from 'framer-motion'

interface NewsItem {
    _id: string
    image: string[]
    date: string
    title: string
    slug: string
    content: string
}

import { API_URL } from '@/lib/Backend/api'

const Latest_news = () => {
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

    return (
        <div className="w-full flex justify-center items-center py-12 px-4 md:px-10 bg-white dark:bg-[#1e2330] overflow-hidden">
            <div className="max-w-[1200px] w-full flex flex-col gap-10">
                {/* Latest News Col */}
                <div className='flex flex-col flex-2 gap-6 w-full'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className='flex items-center justify-between'
                    >
                        <h2 className='text-[#111318] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]'>Latest News</h2>
                        <Link className='text-primary font-bold text-sm hover:underline' href="/news">View All News</Link>
                    </motion.div>
                    {loading ? (
                        <div className="flex items-center justify-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {newsData.filter(news => news.image && news.image.length > 0).length > 0 ? (
                                <Carousel
                                    responsive={responsive}
                                    infinite
                                    autoPlay={true}
                                    autoPlaySpeed={5000}
                                    keyBoardControl={true}
                                    customTransition="all 0.5s ease-in-out"
                                    transitionDuration={500}
                                    containerClass="carousel-container"
                                    dotListClass="custom-dot-list-style"
                                    itemClass="carousel-item-padding-40-px px-2"
                                >
                                    {newsData
                                        .filter(news => news.image && news.image.length > 0)
                                        .map((news) => (
                                            <News_col
                                                key={news._id}
                                                image={news.image[0]}
                                                date={new Date(news.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric'
                                                })}
                                                title={news.title}
                                                content={news.content}
                                                slug={news.slug}
                                            />
                                        ))}
                                </Carousel>
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-gray-500 dark:text-gray-400">No news available at the moment.</p>
                                </div>
                            )}
                        </motion.div>
                    )}
                </div>
                {/* UpComing Events */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <UpcomingEvents />
                </motion.div>
            </div>
        </div>
    )
}

export default Latest_news