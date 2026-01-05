'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface NewsItem {
    _id: string
    title: string
    slug: string
    content: string
    image: string[]
    date: string
}

const NewsHero = ({ featuredNews }: { featuredNews: NewsItem | null }) => {
    if (!featuredNews) return null;

    return (
        <div className="relative w-full bg-white dark:bg-background-dark overflow-hidden">
            <div className='w-full max-w-[1440px] mx-auto'>
                <div className='@container'>
                    <div className='p-4 md:p-10'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="flex min-h-[440px] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-4 pb-10 md:px-10 md:pb-12 shadow-md relative overflow-hidden group"
                            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%), url('${featuredNews.image?.[0] || '/images/bishop+youth.jpg'}')` }}
                        >
                            <div className="relative z-10 flex flex-col gap-4 text-left text-wrap max-w-3xl">
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className="inline-block px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-bold uppercase tracking-wider w-fit"
                                >
                                    Featured Story
                                </motion.span>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                    className="text-white text-3xl font-black leading-tight tracking-[-0.033em] md:text-5xl drop-shadow-sm"
                                >
                                    {featuredNews.title}
                                </motion.h1>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.6 }}
                                    className="text-gray-100 text-base font-medium leading-normal md:text-lg max-w-2xl drop-shadow-sm line-clamp-3"
                                >
                                    {featuredNews.content}
                                </motion.h2>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9, duration: 0.5 }}
                                    className="pt-2"
                                >
                                    <button className="flex items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white hover:bg-gray-100 text-primary text-base font-bold leading-normal tracking-[0.015em] transition-all hover:scale-105 shadow-sm active:scale-95">
                                        <Link href={`/news/${featuredNews.slug}`} className="truncate">Read Full Story</Link>
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsHero