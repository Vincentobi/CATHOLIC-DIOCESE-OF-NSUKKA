'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const News_col = ({ image, date, title, content, slug }: { image: string, date: string, title: string, content: string, slug: string }) => {
    return (
        <div className="snap-start flex-none w-[300px] flex flex-col gap-4">
            <div className="w-full aspect-video rounded-lg bg-cover bg-center overflow-hidden relative group">
                <Image src={image} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/8 transition-colors"></div>
                <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-bold text-primary uppercase tracking-wide">{date}</span>
                    <Link href={`/news/${slug}`}>
                        <h3 className="text-white dark:text-white text-lg font-bold leading-tight mt-1 mb-2 hover:text-primary cursor-pointer">{title}</h3>
                    </Link>
                    <p className="text-white text-italic dark:text-white text-sm leading-normal line-clamp-2">{content}</p>
                </div>
            </div>
        </div>
    )
}

export default News_col