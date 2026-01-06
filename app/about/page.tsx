import React from 'react'
import AboutHero from './AboutHero'
import Stats from './Stats'
import Mission_Vision from './Mission_Vision'
import BishopBio from './BishopBio'
import History from './History'
import DiocesanCuria from './DiocesanCuria'

const page = () => {
    return (
        <main>
            <AboutHero />
            <Stats />
            <Mission_Vision />
            <BishopBio />
            <History />
            <DiocesanCuria />
        </main>
    )
}

export default page
