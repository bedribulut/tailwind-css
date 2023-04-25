import React from 'react'

function Features() {
  return (
    <section id='features' className='text-grayBedri'>
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
            <div className='flex flex-col space-y-6 md:w-1/2'>
                <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                    Hakkımızda
                </h2>
                <p className="max-w-md text-center md:text-left">
                    ZARA TAAHHÜT A.Ş. 2014 yılında Yönetim Kurulu Başkanımız Sayın <span className='text-brightRed'><strong>Emre Demirci</strong></span> tarafından kamu taahhüt projelerinin yapımını gerçekleştirmek üzere kurulmuştur. ZARA Taahhüt tüm ülke çapında altyapıdan üstyapıya çeşitli inşaat projelerinin yapımını gerçekleştirir, <span className='text-brightRed'><strong>riskleri iyi yöneterek</strong></span>, ürün ve hizmetlerini taahhüt ettiği <span className='text-brightRed'><strong>kalitede</strong></span>, <span className='text-brightRed'><strong>sürede</strong></span> ve öngörülen <span className='text-brightRed'><strong>bütçede</strong></span> tamamlama hedefine daima ulaşır.
                </p>
            </div>

            <div className='flex flex-col space-y-8 md:w-1/2'>
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                        <div className="flex items-center rounded-full px-20 text-white bg-brightRed ">
                            vizyon
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features