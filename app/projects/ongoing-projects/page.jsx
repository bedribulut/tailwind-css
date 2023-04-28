"use client";

import Example from "../components/CardExample";
import CardExample from "../components/CardExample";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const myProjects = [
  {
    name: 'ANKARA İLİ GÖLBAŞI-BALA İLÇELERİ MERKEZ MAHALLERDE ATIKSU VE YAĞMURSUYU HATLARI YAPIM İŞİ',
    author: 'ASKİ',
    year: '2021',
    id: '1',
    imgSrc: 'https://images.unsplash.com/photo-1575281923032-f40d94ef6160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Gümüşhane Kelkit Sütveren Barajı İkmali 2Kısım',
    author: 'DSİ 22. BÖLGE',
    year: '2023',
    id: '2',
    imgSrc: 'https://images.unsplash.com/photo-1507415710579-79b32edf8a78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
  },
  {
    name: 'Bolu Merkez 100 Yataklı Uygulama Oteli Binası İnşaatı Yapım İşi',
    author: 'ÖZEL İDARE BOLU',
    year: '2023',
    id: '3',
    imgSrc: 'https://images.unsplash.com/photo-1507415710579-79b32edf8a78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
  },
  {
    name: 'Karayolları 16. Bölge Müdürlüğü Dahili Yollarında Muhtelif Miktarda Bilgi Levhası Ve Konstrüksiyon Yapılması İşi ',
    author: 'KGM 16. BÖLGE',
    year: '2023',
    id: '4',
    imgSrc: 'https://images.unsplash.com/photo-1507415710579-79b32edf8a78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
  },
  {
    name: ' İstanbul İli Ataşehir İlçesi İçerenköy Mahallesi (913 Ada 257 Parsel) Polis Merkezi Amirliği Yapım İşi',
    author: 'YİKOB İSTANBUL',
    year: '2023',
    id: '5',
    imgSrc: 'https://images.unsplash.com/photo-1507415710579-79b32edf8a78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
  },
  {
    name: 'akdkfskd',
    author: 'üplgtkhth',
    year: '2016',
    id: '6',
    imgSrc: 'https://images.unsplash.com/photo-1507415710579-79b32edf8a78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
  },
  {
    name: 'akdkfskd',
    author: 'üplgtkhth',
    year: '2016',
    id: '7',
    imgSrc: 'https://images.unsplash.com/photo-1507415710579-79b32edf8a78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
  },
]

function Projects() {
  return (
    <div classname="flex flex-col items-center p-3 space-y-6 md:flex-row md:justify-between">
      {myProjects.map((project) => (
        <div className="w-full md:w-1/5">
          <Example key={project.id} name={project.name} author={project.author} year={project.year} imgSrc={project.imgSrc} />
        </div>
        )
      )}
    </div>
  )
}

export default Projects

{/* <ul className="flex flex-col space-y-6 m-auto p-2 items-center md:justify-between md:flex-row md:flex-wrap md:p-0 md:space-x-3">
      {myProjects.map((project) => (
      <li className="w-full md:w-1/3">
        <Example key={project.id} name={project.name} author={project.author} year={project.year} imgSrc={project.imgSrc} />
      </li>))}
    </ul> */}