import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BishopBio = () => {
  return (
    <div className="w-full bg-white dark:bg-[#1a202c] py-16 border-y border-[#f0f2f4] dark:border-gray-700">
      <div className="max-w-[960px] mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="bg-center bg-no-repeat bg-cover rounded-xl shadow-lg w-64 h-80 md:w-full md:h-[400px]">
              <Image src={ '/images/fadaBishop_1.jpg' } alt="" width={400} height={500} />
            </div>
          </div>
    <div className="w-full md:w-2/3 flex flex-col gap-6">
      <div>
<span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">Nna-Anyi Bishop</span>
<h2 className="text-[#111318] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
                                His Lordship, Most Rev. Godfrey Igwebuike Onah
                            </h2>
<p className="text-primary text-lg font-medium mt-1">Catholic Bishop of Nsukka</p>
      </div>
        <div className="prose dark:prose-invert text-[#636f88] dark:text-gray-300 text-base leading-relaxed">
<p className="mb-4">
                                Appointed by Pope Francis in 2013, Bishop Onah leads with a heart for education, spiritual renewal, and community development. Known for his intellectual depth and pastoral zeal, he has been a guiding light for the faithful of Nsukka.
                            </p>
<p>
                                Prior to his appointment, he served as the Vice Rector of the Pontifical Urban University in Rome. His episcopacy has been marked by a strong emphasis on the formation of priests and the empowerment of the laity.
                            </p>
        </div>
        <div className="pt-2">
        <Link href={"#"} className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-primary/80 transition-colors w-fit">
            Read Full Biography
        </Link>
      </div>
        </div>
          </div>
            </div>
              </div>
  )
}

export default BishopBio