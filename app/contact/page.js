import React from 'react'

function Contact() {
  return (
    <div className='flex flex-col min-h-screen py-6 space-y-6 md:flex-row md:space-x-12 md:space-y-0'>
      <div className='h-screen w-full overflow-auto md:w-1/2'>
        <h2 className='text-center p-3 mt-3 text-brightRed font-bold text-4xl border-b-2 border-grayBedri w-1/2 m-auto'>Merkez Elazığ</h2>
        <address className='not-italic text-center pt-3'>
          Abdullahpaşa Mah. Hamzet Sok. No:29/2<br/>
          Merkez/Elazığ<br/>
          Tel-Fax: <a href='tel:+904242335100'>0 (424) 233 51 00</a> <br/>
          Mail: <a href='mailto:info@zarataahhut.com'>info@zarataahhut.com</a> 
        </address>
        <div className='map mt-3'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.392012218818!2d39.15449807569322!3d38.662857960509335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4076ea844e587ebb%3A0x275dde023a30403d!2zQWJkdWxsYWggUGHFn2EsIEhhbXpldCBTay4gTm86MjkgRDoyLCAyMzI3MCBFbMOiesSxxJ8gTWVya2V6L0VsYXrEscSf!5e0!3m2!1sen!2str!4v1682935289697!5m2!1sen!2str"  width="300" height="150" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='m-auto rounded-xl'
          />
        </div>
        <h2 className='text-center p-3 mt-6 text-brightRed font-bold text-4xl border-b-2 border-grayBedri w-1/2 m-auto'>Şube Ankara</h2>
        <address className='not-italic text-center pt-3'>
          Kızılırmak Mah. 1450. Sok. No:16/57<br/>
          Hayat Plaza Çankaya/Ankara<br/>
          Tel-Fax: <a href='tel:+903125444800'>0 (312) 544 48 00</a> <br/>
          Mail: <a href='mailto:info@zarataahhut.com'>info@zarataahhut.com</a> 
        </address>
        <div className='map mt-3'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.8002185242312!2d32.808628384847076!3d39.901105013460146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f0d6aff9631%3A0x70faf93f3982ad1c!2sHayat%20Plaza!5e0!3m2!1sen!2str!4v1682936067953!5m2!1sen!2str"  width="300" height="150" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='m-auto rounded-xl'
          />
        </div>
      </div>
      <div className='h-screen w-full overflow-auto md:w-1/2'>
          <section class="">
            <div class="py-3 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 p-3 text-4xl tracking-tight font-extrabold text-center text-brightRed border-b-2 border-grayBedri">İletişim Formu</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-grayBedri sm:text-xl">İster iş başvuruları için, ister şirketimizle alakalı görüşmek istediğiniz diğer konular hakkında iletişime geçmek için bu formu doldurabilirsiniz.</p>
            <form action="#" class="space-y-8">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-brightRed">Mail Adresiniz</label>
                    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="abc@abc.com" required />
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-sm font-medium text-brightRed">Konu</label>
                    <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Size nasıl yardımcı olabiliriz?" required />
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-brightRed">Mesajınız</label>
                    <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Lütfen mesajınızı buraya yazınız..."></textarea>
                </div>
                <div className='text-center'>
                  <button type="submit" class="py-3 px-5 text-2xl font-medium text-center text-brightRed rounded-lg sm:w-fit hover:bg-grayBedri focus:ring-4 focus:outline-none focus:ring-primary-300">Mesajınızı Gönderin</button>
                </div>
           
            </form>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Contact