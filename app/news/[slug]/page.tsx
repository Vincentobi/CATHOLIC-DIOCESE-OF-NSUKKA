import Image from "next/image"

interface PageProps {
    params: Promise<{ slug: string }>
}

import { API_URL } from "@/lib/Backend/api"

async function getNews(slug: string) {
    const res = await fetch(`${API_URL}/api/news/${slug}`, {
        cache: 'no-store'
    })

    if (!res.ok) return null
    return res.json()
}

export default async function NewsPage({ params }: PageProps) {
    const { slug } = await params;
    const news = await getNews(slug)

    if (!news) {
        return <div className="text-center py-20">News not found</div>
    }

    return (
        <article className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold">{news.title}</h1>

            <p className="text-sm text-gray-500 mt-2">
                {new Date(news.date).toDateString()}
            </p>

            {news.image?.[0] && (
                <div className="relative w-full aspect-video my-6">
                    <Image
                        src={news.image[0]}
                        alt={news.title}
                        fill
                        className="rounded-xl object-cover"
                    />
                </div>
            )}

            <div className="prose max-w-none">
                {news.content.split('\n').map((p: string, i: number) => (
                    <p key={i}>{p}</p>
                ))}
            </div>
        </article>
    )
}
