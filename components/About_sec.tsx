'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowForward } from 'react-icons/md';
import { motion } from 'framer-motion';

const About_sec = () => {
    return (
        <div className='w-full flex justify-center py-16 px-4 md:px-10 bg-background-light dark:bg-background-dark overflow-hidden'>
            <div className="max-w-[1000px] w-full flex flex-col md:flex-row items-center gap-10">
                {/* ImageCol */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full md:w-1/2"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/5 max-w-[400px] mx-auto">
                        <Image
                            src={'/images/fadaBishop_0.jpg'}
                            width={400}
                            height={500}
                            alt="A smiling Bishop in clerical clothing speaking to people"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/80 to-transparent p-6">
                            <p className="text-white font-bold text-lg">Most Rev. Godfrey Igwebuike Onah</p>
                            <p className="text-white/80 text-sm">Catholic Bishop of Nsukka</p>
                        </div>
                    </div>
                </motion.div>
                {/* TextCol */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="w-full md:w-1/2 flex flex-col gap-6"
                >
                    <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm">
                        <span className="w-8 h-[2px] bg-primary"></span>
                        About the Diocese
                    </div>
                    <h2 className="text-[#111318] dark:text-white text-3xl md:text-4xl font-bold leading-tight">
                        A Community of Faith, Love, and Service
                    </h2>
                    <p className="text-[#636f88] dark:text-gray-400 text-lg leading-relaxed">
                        Since its erection, the Catholic Diocese of Nsukka has been a beacon of hope in Enugu State. We are committed to evangelization, education, and social development, driven by the Gospel values of our Lord Jesus Christ.
                    </p>
                    <p className="text-[#636f88] dark:text-gray-400 text-lg leading-relaxed">
                        Join us as we strive to build a community that reflects God&apos;s kingdom on earth, fostering unity and charity among all people.
                    </p>
                    <div className="pt-4">
                        <Link className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all" href="/about">
                            Read History
                            <MdArrowForward className="text-sm" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About_sec