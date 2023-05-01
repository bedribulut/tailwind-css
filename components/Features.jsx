
function Features() {
  return (
    <section id='features' className='text-grayBedri'>
        <div className="flex flex-col px-4 mx-auto space-y-12 mb-12 md:space-y-0 md:flex-row">
            <div className='flex flex-col space-y-6 md:w-1/2'>
                <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                    Hakkımızda
                </h2>
                <p className="max-w-md text-center md:text-left">
                    ZARA TAAHHÜT A.Ş. 2014 yılında Yönetim Kurulu Başkanımız Sayın <span className='text-brightRed'><strong>Emre Demirci</strong></span> tarafından kamu taahhüt projelerinin yapımını gerçekleştirmek üzere kurulmuştur. ZARA Taahhüt tüm ülke çapında altyapıdan üstyapıya çeşitli inşaat projelerinin yapımını gerçekleştirir, <span className='text-brightRed'><strong>riskleri iyi yöneterek</strong></span>, ürün ve hizmetlerini taahhüt ettiği <span className='text-brightRed'><strong>kalitede</strong></span>, <span className='text-brightRed'><strong>sürede</strong></span> ve öngörülen <span className='text-brightRed'><strong>bütçede</strong></span> tamamlama hedefine daima ulaşır.
                </p>
            </div>

            <div className='flex flex-col space-y-8 md:w-1/2'>
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-4 md:flex-row">
                    <div className='md:w-1/2'>
                        <h3 className='font-bold text-brightRed border-b-2 border-grayBedri text-center rounded max-w-sm m-auto py-3 mb-3 md:max-w-sm md:m-auto md:mb-3'>misyon</h3>
                        <p className='text-center md:text-left'>Tüm projelerimizde sözümüzü tutar, işimizi iyi yapar ve itibarımızı sürekli yükseltiriz. Projelerimizi fark yaratacak bir biçimde gerçekleştirmeye gayret ederiz.</p>
                    </div>
                    <div className='md:w-1/2'>
                        <h3 className='font-bold text-brightRed border-b-2 border-grayBedri text-center rounded max-w-sm m-auto py-3 mb-3 md:max-w-sm md:m-auto md:mb-3'>
                            vizyon
                        </h3>
                        <p className='text-center md:text-left'>
                            ZARA Taahhüt üstlenmiş olduğu projelerin tamamında, Türkiye’nin kalkınmasını, müşterilerinin, çalışanlarının, ortaklarının memnuniyetini ve şirket değerlerini en ön planda gözetir.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features