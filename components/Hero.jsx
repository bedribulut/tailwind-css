import Link from "next/link"
import Image from "next/image"

import zara2 from "../img/zara2.png"

function Hero() {
  return (
    <section id="hero" className="bg-black text-grayBedri mt-6">
        {/* flex container */}
        <div className="flex flex-col-reverse items-center px-6 mx-auto mb-16 space-y-0 md:space-y-0 md:flex-row md:mb-6">
            <div className='flex flex-col mt-6 space-y-12 md:w-1/2 md:mb-24'>
                <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
                    yapımını üstlendiğimiz altyapı ve üstyapı projeleri ile
                    <span className='text-brightRed'> mutluluk </span>
                    inşa ediyoruz.
                </h1>
                <p className="max-w-md text-center md:text-left">
                    Türkiye'nin
                    <span className='text-brightRed'> 7 </span>
                    bölgesinde,
                    <span className='text-brightRed'> 300</span>
                    'ü aşkın personelimizle
                    <span className="text-brightRed"> kalite</span> ve <span className='text-brightRed'>zaman</span>
                    dan ödün vermeden daha
                    <span className="text-brightRed"> modern </span>
                    ve
                    <span className="text-brightRed"> müreffeh </span>
                    bir Türkiye'nin inşası için durmaksızın çalışıyoruz.
                </p>
            </div>
            <div className="md:w-1/2 bg-grayBedri rounded-md">
                <Image src={zara2} alt="zara logo" width={200} className="p-6 md:w-full" />
            </div>
        </div>
    </section>
  )
}

export default Hero