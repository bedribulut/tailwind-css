"use client";

import Image from "next/image"
import Link from "next/link"
import zara3 from "../img/zara3.png"
import { RiMenu5Fill, RiCloseFill } from "react-icons/ri";
import { useState } from "react";

function NavBar() {

    const [isNavOpen, setIsNavOpen] = useState(true);

  return (
        <nav className="w-full mx-auto p-3 border-b-2 border-grayBedri">
            {/* flex container */}
            <div className="flex items-center justify-between">
                {/* logo */}
                <div className="pt-2">
                    <Link href="/">
                        <Image src={zara3} alt="zara logo" width={130} className="bg-grayBedri p-3 rounded"/>
                    </Link>
                </div>

                {/* menu items */}
                <div className="hidden space-x-6 md:flex">
                    <Link href="/about" className="hover:underline text-grayBedri">Hakkımızda</Link>
                    <Link href="/news" className="hover:underline text-grayBedri">Haberler</Link>
                    <Link href="/contact" className="hover:underline text-grayBedri">İletişim</Link>
                    <Link href="/references" className="hover:underline text-grayBedri">Referanslarımız</Link>
                    <Link href="/career" className="hover:underline text-grayBedri">Kariyer</Link>
                </div>

                <Link href="#" className="hidden p-3 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">Projeler</Link>

                <button className={isNavOpen ? "md:hidden" : "hidden"} onClick={() => {setIsNavOpen((prev) => !prev)}}>
                    <RiMenu5Fill size={50} />
                </button>
                <button className={isNavOpen ? `hidden` : ""} onClick={() => {setIsNavOpen((prev) => !prev)}}>
                    <RiCloseFill size={50} />
                </button>
                <div className={isNavOpen ? `hidden` : `flex flex-col space-y-2`}>
                    <Link href="/about" className="hover:underline text-grayBedri">Hakkımızda</Link>
                    <Link href="/news" className="hover:underline text-grayBedri">Haberler</Link>
                    <Link href="/contact" className="hover:underline text-grayBedri">İletişim</Link>
                    <Link href="/references" className="hover:underline text-grayBedri">Referanslarımız</Link>
                    <Link href="/career" className="hover:underline text-grayBedri">Kariyer</Link>
                </div>
            </div>            
        </nav>
  )
}

export default NavBar