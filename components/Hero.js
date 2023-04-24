import Link from "next/link"
import Image from "next/image"

import zara2 from "../img/zara2.png"

function Hero() {
  return (
    <section>
        {/* flex container */}
        <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
            <div className='flex flex-col mb-32 mt-16 space-y-12 md:w-1/2'>
                <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>üstyapıdan altyapıya <span className='text-darkGrayishBlue underline'>mutluluk</span> inşa ediyoruz.</h1>
                <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                    Türkiye'nin <span className='text-veryDarkBlue'>7</span> bölgesinde, <span className='text-veryDarkBlue'>300'ü</span> aşkın personelimizle  <span>kalite</span> ve <span className='text-veryDarkBlue'>zaman</span>dan ödün vermeden durmaksızın çalışıyoruz.
                </p>
                <div className="flex justify-center md:justify-start">
                    <Link href="/projects" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Projeler</Link>
                </div>
            </div>
            <div className="mt-32 md:w-1/2">
                <Image src={zara2} alt="zara logo" width={500} />
            </div>
        </div>
    </section>
  )
}

export default Hero