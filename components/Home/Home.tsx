import React from 'react'
import Hero from './Hero/Hero'
import Quick_resource from '../Quick-resource/Quick_resource'
import Latest_news from '../Latest-news/Latest_news'
import About_sec from '../About_sec'

const Home = () => {
  return (
    <div>
      <Hero />
      <Quick_resource />
      <Latest_news />
      <About_sec />
    </div>
  )
}

export default Home
