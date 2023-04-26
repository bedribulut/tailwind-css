import Image from "next/image"
import Link from "next/link"
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

function Projects() {
  return (
    <section id='projects' className="mb-12 px-3">
        <div className="mb-6 text-4xl font-bold border-b-2 border-grayBedri max-w-sm m-auto rounded md:min-w-">
            <h2 className="text-center py-4">Başlıca Projeler</h2>
        </div>
        <div className="flex flex-col space-y-8 items-center m-auto mb-6 md:flex-row md:items-stretch md:justify-between md:space-y-0 md:space-x-4">
            <div className="hover:bg-brightRed hover:text-black flex flex-col border-2 border-grayBedri rounded-lg p-4 items-center text-center md:w-1/3">
                <Image src='https://images.unsplash.com/photo-1570106230673-3bab9f2f3c63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' className="rounded" width={300} height={200} alt="hey" />
                <h3 className="text-2xl font-bold my-3 text-brightRed">
                    KESTELEK BARAJI
                </h3>
                <p className="px-3">
                    Yaklaşık 137.500m boyunda 30cm çapında ıslak derin karıştırma kolonu imalatı yapılarak baraj gövdesi iyileştirme yapımı işi.
                </p>
            </div>
            <div className="hover:bg-brightRed hover:text-black flex flex-col border-2 border-grayBedri rounded-lg p-4 items-center text-center md:w-1/3">
                <Image src='https://images.unsplash.com/photo-1546533982-b0ff2d0325e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' className="rounded" width={300} height={400} alt="hey" />
                <h3 className="text-2xl font-bold my-3 text-brightRed">
                    MADEN KÖPRÜSÜ VE BAĞLANTI YOLLARI
                </h3>
                <p className="px-3">
                    5 adet toprak işleri , 19 adet köprü ve sanat yapıları işleri ve 3 adet üst yapı işlerl 
                </p>
            </div>
            <div className="hover:bg-brightRed hover:text-black flex flex-col border-2 border-grayBedri rounded-lg p-4 items-center text-center md:w-1/3">
                <Image src='https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=779&q=80' className="rounded" width={220} height={300} alt="hey" />
                <h3 className="text-2xl font-bold my-3 text-brightRed">
                    BİNGÖL ÜNİVERSİTESİ İLAHİYAT FAKÜLTESİ
                </h3>
                <p className="px-3">
                    Yaklaşık 12.000 m² İlahiyat Fakültesi Binası ve Çevre Düzenlemesi / Betonarme
                </p>
            </div>
        </div>
        <div className="text-center text-2xl font-bold border-2 border-grayBedri max-w-sm mx-auto rounded-lg py-2 hover:bg-brightRed hover:text-black">
            <Link href="/projects">
                <h3 className="">
                    Tüm Projeler <BsFillArrowUpRightSquareFill className="inline-block"/>
                </h3>
            </Link>
        </div>
    </section>
  )
}

export default Projects