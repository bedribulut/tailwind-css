import Image from "next/image"
import Link from "next/link"
import zara3 from "../img/zara3.png"
import { BsInstagram } from "react-icons/bs"

function Footer() {
  return (
    <footer className="self-end w-full border-t-2 border-grayBedri">
        {/* flex container */}
        <div className="flex flex-col-reverse items-center justify-between py-10 px-8 mx-auto md:flex-row md:space-y-0">
            {/* logo and social links container */}
            <div className="flex flex-col-reverse items-center justify-between space-y-6 md:flex-col md:items-center md:space-y-2">
                <div className="mx-auto my-4 text-center text-white md:hidden">
                    <p>
                        &copy; 2023 Zara Taahhüt A.Ş.
                    </p>
                    <p>
                        Tüm Hakları Saklıdır
                    </p>
                    <p className="text-sm mt-3">
                        designed and developed by <Link href="https://github.com/bedribulut" target="_blank" className="text-brightRed hover:underline">bedribulut</Link>
                    </p>
                </div>
                <div>
                    <Image src={zara3} width={130} className="bg-grayBedri p-3 rounded" alt=""/>
                    
                </div>
                <div className="md:text-center">
                    <Link href="https://www.instagram.com/zara_a.s/" target="_blank">
                        <BsInstagram size={40} />
                    </Link>
                </div>         
            </div>
            {/* list container */}
            <div className="flex justify-around space-x-16">
                <div className="flex flex-col space-y-3 text-white">
                    <Link href="/" className="hover:underline ">Ana Sayfa</Link>
                    <Link href="/about" className="hover:underline ">Hakkımızda</Link>
                    <Link href="/projects" className="hover:underline ">Projeler</Link>
                    
                    
                </div>
                <div className="flex flex-col space-y-3 text-white">
                    <Link href="/contact" className="hover:underline ">İletişim</Link>
                    <Link href="/references" className="hover:underline ">Referanslarımız</Link>
                </div>
            </div>
            <div className="hidden text-white md:block">
                <p>
                    &copy; 2023 Zara Taahhüt A.Ş.
                </p>
                <p>
                    Tüm Hakları Saklıdır
                </p>
                <p className="text-sm mt-3">
                    designed and developed by <Link href="https://github.com/bedribulut" target="_blank" className="text-brightRed hover:underline">bedribulut</Link>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer