import Image from "next/image"
import Link from "next/link"
import zara3 from "../img/zara3.png"

function NavBar() {
  return (
        <nav className="relative container bg-red-500 mx-auto p-6">
            {/* flex container */}
            <div className="flex items-center justify-between">
                {/* logo */}
                <div className="pt-2">
                    <Link href="/">
                        <Image src={zara3} alt="zara logo" width={130}/>
                    </Link>

                </div>
                {/* menu items */}
                <div className="hidden space-x-6 md:flex">
                    <Link href="/about" className="hover:text-darkGrayishBlue">Hakkımızda</Link>
                    <Link href="/news" className="hover:text-darkGrayishBlue">Haberler</Link>
                    <Link href="/contact" className="hover:text-darkGrayishBlue">İletişim</Link>
                    <Link href="/references" className="hover:text-darkGrayishBlue">Referanslarımız</Link>
                    <Link href="/career" className="hover:text-darkGrayishBlue">Kariyer</Link>
                </div>
                <Link href="#" className="hidden p-3 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">Projeler</Link>
            </div>            
        </nav>
  )
}

export default NavBar