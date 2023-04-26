import Image from "next/image"
import Link from "next/link"
import zara3 from "../img/zara3.png"
import { BsInstagram } from "react-icons/bs"

function Footer() {
  return (
    <footer className="self-end w-full border-t-2 border-grayBedri">
        {/* flex container */}
        <div className="flex flex-col items-center justify-between py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
            {/* logo and social links container */}
            <div className="flex flex-col items-center justify-between space-y-12 md:space-y-0 md:items-start md:flex-row md:space-x-8">
                <div>
                    <Image src={zara3} width={130} className="bg-grayBedri p-3 rounded"/>
                    
                </div>
                <div>
                    <Link href="https://www.instagram.com/zara_a.s/" target="_blank">
                        <BsInstagram size={60} />
                    </Link>
                </div>
                    
            </div>
        </div>
    </footer>
  )
}

export default Footer