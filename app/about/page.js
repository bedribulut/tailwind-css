"use client";

import { RocketLaunchIcon, MapIcon } from '@heroicons/react/24/outline'

const features = [


  {
    name: 'misyon',
    description:
      'Tüm projelerimizde sözümüzü tutar, işimizi iyi yapar ve itibarımızı sürekli yükseltiriz. Projelerimizi fark yaratacak bir biçimde gerçekleştirmeye gayret ederiz. ZARA Taahhüt başladığı her projeyi bitirme azmi gösteren, açık, saydam, bilgi işleyerek karar veren, yenilikçi, estetik tutum sergileyen bir şirkettir. Faaliyet gösterdiği bölgelerin tarihine, geleneklerine, örf ve âdetlerine ve doğasına saygılıdır, duyarlıdır.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'vizyon',
    description:
      'ZARA Taahhüt üstlenmiş olduğu projelerin tamamında, Türkiye’nin kalkınmasını, müşterilerinin, çalışanlarının, ortaklarının memnuniyetini ve şirket değerlerini en ön planda gözetir. ZARA Taahhüt, faaliyetlerini ilkesel ve kurumsal değerlere uygun şekilde sürdürme sorumluluğunda olduğunun bilincindedir. Yüklendiği her projede ülke çapında saygın olma hedefinin bilinciyle çalışır ve bu hedefine ulaşır. ZARA Taahhüt, yüklendiği tüm işleri ve tüm faaliyetlerini, net artı değer üretecek ve fark yaratacak biçimde gerçekleştirir.',
    icon: MapIcon,
  },
]


function About() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-2xl text-center font-semibold leading-7 text-brightRed">Hakkımızda</h2>
          <p className="mt-6 text-lg leading-8 text-center text-grayBedri">
            ZARA TAAHHÜT A.Ş. 2014 yılında Yönetim Kurulu Başkanımız Sayın <span className='text-brightRed'><strong>Emre Demirci</strong></span> tarafından kamu taahhüt projelerinin yapımını gerçekleştirmek üzere kurulmuştur. ZARA Taahhüt tüm ülke çapında altyapıdan üstyapıya çeşitli inşaat projelerinin yapımını gerçekleştirir, <span className='text-brightRed'><strong>riskleri iyi yöneterek</strong></span>, ürün ve hizmetlerini taahhüt ettiği <span className='text-brightRed'><strong>kalitede</strong></span>, <span className='text-brightRed'><strong>sürede</strong></span> ve öngörülen <span className='text-brightRed'><strong>bütçede</strong></span> tamamlama hedefine daima ulaşır.<br/>
            Tüm faaliyetlerinde Türkiye’nin kalkınmasını; müşterilerinin, çalışanlarının ve ortaklarının memnuniyetini ve şirket değerlerini en ön planda tutan Zara Taahhüt; doğanın gösterdiği çözüm yollarından ilham alarak 
            <strong>
              <span className='text-brightRed'> bilgi ve teknolojiye</span>, 
            </strong>
            <strong>
              <span className='text-brightRed'> insan kaynaklarına</span>
            </strong>  ve
            <strong>
              <span className='text-brightRed'> yeni yönetim sistemlerine </span>
            </strong>
            sürekli yatırım yapar.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-center font-semibold leading-7 text-brightRed">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                    <feature.icon className="h-6 w-6 text-brightRed" aria-hidden="true" />
                  </div>
                  <strong>{feature.name}</strong>                
                </dt>
                <dd className="mt-2 text-base leading-7 text-grayBedri">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default About