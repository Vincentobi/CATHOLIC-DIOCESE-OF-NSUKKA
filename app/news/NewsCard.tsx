'use client';
import Image from 'next/image'
import React from 'react'
import IconMapper from '../components/IconMapper'
import Link from 'next/link'
import { motion } from 'framer-motion'

const NewsCard = ({ image, category, title, content, date, slug }: { image: string, category: string, title: string, content: string, date?: string, slug: string }) => {
    const formattedDate = date ? new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent';

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-3 rounded-xl border border-[#dcdfe5] dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden hover:shadow-lg transition-shadow group h-full"
        >
            <div className="relative h-48 w-full overflow-hidden">
                <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-2 text-xs font-medium text-[#636f88] dark:text-gray-400">
                    <IconMapper iconName="calendar_today" />
                    <span>{formattedDate}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span className="text-primary">{category}</span>
                </div>
                <h3 className="text-[#111318] dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">{title}</h3>
                <p className="text-[#636f88] dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {content}
                </p>
                <Link href={`/news/${slug}`} className="mt-auto pt-2 group/link">
                    <span className="text-sm font-bold text-primary flex items-center gap-1 group-hover/link:underline">
                        Read Story <IconMapper iconName="chevron_right" />
                    </span>
                </Link>
            </div>
        </motion.article>
    )
}

export default NewsCard