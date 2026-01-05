import React from 'react'
import LiturgicalCalendar from './LiturgicalCalendar'
import NewsCard from './NewsCard'
import UpcomingEvents from '@/components/Latest-news/UpcomingEvents'

interface NewsItem {
    _id: string
    image: string[]
    date: string
    title: string
    slug: string
    content: string
    isFeatured?: boolean
}

interface NewsMainContentProps {
    newsData: NewsItem[]
    loading: boolean
}

const NewsMainContent: React.FC<NewsMainContentProps> = ({ newsData, loading }) => {
    return (
        <div className="w-full max-w-[1280px] mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Left Column */}
                <div className="flex-1 flex flex-col gap-12">
                    {/* Latest News Sect */}
                    <div className="flex flex-col gap-6">
                        <div className='flex items-center justify-between'>
                            <h2 className="text-[#111318] dark:text-white text-2xl font-bold leading-tight">Latest News &amp; Updates</h2>
                        </div>

                        {loading ? (
                            <div className="flex items-center justify-center py-12">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                            </div>
                        ) : newsData.length > 0 ? (
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {newsData.map((news) => (
                                    <NewsCard
                                        key={news._id}
                                        image={news.image && news.image.length > 0 ? news.image[0] : "/images/placeholder.jpg"}
                                        category="News"
                                        title={news.title}
                                        content={news.content}
                                        date={news.date}
                                        slug={news.slug}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-gray-500 dark:text-gray-400">No news available at the moment.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Column */}
                <aside className='w-full lg:w-[360px] flex flex-col gap-8 shrink-0'>
                    <LiturgicalCalendar />
                    <UpcomingEvents />
                </aside>
            </div>
        </div>
    )
}

export default NewsMainContent