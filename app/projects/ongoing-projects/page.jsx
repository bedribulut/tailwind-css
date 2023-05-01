"use client";

import dsiLogo from "../../../img/corporate-logo/logo-dsi.png"
import kgmLogo from "../../../img/corporate-logo/logo-kgm.png"
import askiLogo from "../../../img/corporate-logo/logo-aski.png"
import icisleriLogo from "../../../img/corporate-logo/logo-icisleri.png"
import boluLogo from "../../../img/corporate-logo/logo-bolu.png"
import istanbulLogo from "../../../img/corporate-logo/logo-istanbul-valilik.png"
import elazigLogo from "../../../img/corporate-logo/logo-elazig.png"


import Image from "next/image"


const ongoingProjects = [
  {
    name: 'Ankara İli Gölbaşı-Bala İlçeleri Merkez Mahallerde Atıksu ve Yağmursuyu Hatları Yapım İşi',
    author: 'ASKİ',
    year: '2021',
    id: '1',
    imgSrc: 'https://images.unsplash.com/photo-1575281923032-f40d94ef6160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    logo: askiLogo,
  },
  {
    name: 'Gümüşhane Kelkit Sütveren Barajı İkmali 2Kısım',
    author: 'DSİ 22. BÖLGE',
    year: '2023',
    id: '2',
    imgSrc: 'https://images.unsplash.com/photo-1569918190173-6a5792908184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80',
    logo: dsiLogo,
  },
  {
    name: 'Bolu Merkez 100 Yataklı Uygulama Oteli Binası İnşaatı Yapım İşi',
    author: 'ÖZEL İDARE BOLU',
    year: '2023',
    id: '3',
    imgSrc: 'https://images.unsplash.com/photo-1583248483203-555f3d850303?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    logo: boluLogo,
  },
  {
    name: 'KGM 16. Bölge Dahili Yollarında Bilgi Levhası Ve Konstrüksiyon Yapılması İşi ',
    author: 'KGM 16. BÖLGE',
    year: '2023',
    id: '4',
    imgSrc: 'https://images.unsplash.com/photo-1501459522532-9f67219c9c7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    logo: kgmLogo,
  },
  {
    name: ' İstanbul Ataşehir Polis Merkezi Amirliği Yapım İşi',
    author: 'YİKOB İSTANBUL',
    year: '2023',
    id: '5',
    imgSrc: 'https://images.unsplash.com/photo-1559750008-0e880c81d4b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    logo: istanbulLogo,
  },
  {
    name: 'Tunceli - Pülümür Heyelan Islahı Yapım İşi',
    author: 'KGM 8. BÖLGE',
    year: '2016',
    id: '6',
    imgSrc: 'https://images.unsplash.com/photo-1603814929877-d5d927322656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    logo: kgmLogo,
  },
  {
    name: 'Eğiste Hadim Viyadüğü ve Bağlantı Yolu Çevre Düzenlemesi ve Peyzaj İşleri Yapılması',
    author: 'KGM 3. BÖLGE',
    year: '2022',
    id: '7',
    imgSrc: 'https://images.unsplash.com/photo-1609183091878-e8f47a9fac2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    logo: kgmLogo,
  },
  {
    name: 'Baskil Hükümet Konağı Yapım İşi',
    author: 'ÖZEL İDARE ELAZIĞ',
    year: '2022',
    id: '8',
    imgSrc: 'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    logo: elazigLogo,
  },
  {
    name: 'Karayolları 8 Bölge Müdürlüğü Kaplama Üstü Levha Taşıyıcı Konstrüksiyonu, Bilgi Levhaları İmali ve Yerine Konulması ve Levha Montajı Yapımı İşi',
    author: 'KGM 8. BÖLGE',
    year: '2022',
    id: '9',
    imgSrc: 'https://images.unsplash.com/photo-1618492184911-693a1eadeb82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
    logo: kgmLogo,
  },
  {
    name: 'Karayolları 8. Bölge Müdürlüğü İstenilen Tiplerde Mıcır, Temel ve Plent Malzemesi Temini, Nakli ve Figüre Edilmesi Yapım İşi',
    author: 'KGM 8. BÖLGE',
    year: '2022',
    id: '10',
    imgSrc: 'https://images.unsplash.com/photo-1583156551472-05072507d558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    logo: kgmLogo,
  },
  {
    name: 'KGM 4 Bölge Müdürlüğü Yaya Üstgeçitlerinin Bakım Ve Onarım İşlerinin Yapılması İşi ',
    author: 'KGM 4. BÖLGE',
    year: '2023',
    id: '11',
    imgSrc: 'https://plus.unsplash.com/premium_photo-1664443297267-4eddc85b78ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
    logo: kgmLogo,
  },
]

function OnGoingProjects() {
  return (
    <div className="flex flex-col items-stretch px-3 justify-between mb-6 md:grid md:gap-4 md:grid-cols-3 md:grid-rows-3 md:px-0">
      {ongoingProjects.map((project) => (
        <div key={project.id} className="relative flex flex-col mt-6 items-center justify-between w-full h-screen bg-cover bg-center bg-opacity-50 rounded-lg hover:bg-white overflow-auto" style={{ backgroundImage: `url(${project.imgSrc})`}}>
          <h2 className="text-white text-3xl text-center p-6 font-bold z-40 leading-relaxed bg-black/50">{project.name}</h2>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center z-40 mb-6 rounded-full w-36 h-36 bg-black/50">
              <p className="text-xl font-bold">{project.year}</p>
              <h3 className="text-2xl font-bold text-center">{project.author}</h3>
            </div>
            <Image className="z-40 mb-6" src={project.logo} alt="dsi" width={100}/>
          </div>
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/30" />
        </div>
      ))}
    </div>
  )
}

export default OnGoingProjects