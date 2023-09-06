import Navbar from '@/components/Navbar'
import Carousel from '@/components/Carousel'
import Card from "@/components/Card"
import FAQ from '@/components/Faq'
import Footer from '@/components/Footer'

import CardPict1 from '../../public/img/card/1.svg'
import CardPict2 from '../../public/img/card/2.svg'
import CardPict3 from '../../public/img/card/3.svg'

import {HiMiniCheck, HiOutlineUser, HiOutlineSparkles, HiOutlineRocketLaunch,HiOutlineRectangleStack,HiOutlineDevicePhoneMobile,HiOutlineCurrencyDollar } from 'react-icons/hi2'


export default function Home() {
  return (
    <>
      <Navbar />
      <div className='w-full md:w-6/12 p-8 md:mx-auto'>
        <div className='flex flex-col items-center justify-center gap-8'>
          <div className='w-full text-center'>
            <h1 className='text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-800 to-black mb-2 md:mb-8'>BK8 – Situs judi online terbaik di Indonesia</h1>
            <p className='md:text-2xl md:mb-8'>Nikmati berbagai permainan judi online seperti slot, taruhan bola, dan live casino. Daftar sekarang dan dapatkan welcome bonus hingga Rp 20.000.000!</p>
            <div className='flex flex-row items-center justify-center mt-2'>
              <div className='w-full md:w-2/12'>
                <button className='w-10/12 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium rounded-md h-[40px]'>
                  Daftar
                </button>
              </div>
              <div className='w-full md:w-2/12'>
                <button className='w-10/12 bg-blue-100 rounded-md h-[40px] text-blue-800'>
                  Login
                </button>
              </div>
            </div>
          </div>
          <div className='w-full h-full z-[0]'>
            <div className='flex flex-col items-center justify-between gap-4'>
              <Carousel />
              <h2 className='text-3xl font-bold mt-4'>Mengapa Memilih BK8?</h2>
              <div className='flex flex-col  gap-4 md:flex-row md:items-center md:justify-between md:gap-4'>
                <Card 
                  image={CardPict1} 
                  productName={'card1'} 
                  productDescription={'Aman terpercaya'} 
                  productPara={'Menggunakan teknologi enkripsi 128-bit dan autentikasi dua faktor untuk keamanan data pemain. BK8 juga memiliki lisensi dan regulasi resmi dari pemerintah Curacao. '}
                />
                <Card 
                  image={CardPict2} 
                  productName={'card1'} 
                  productDescription={'Permainan terlengkap'} 
                  productPara={'Menyediakan ratusan permainan terbaik dengan tingkat kemenangan yang tinggi. Mulai dari mesin slot online, esports, live casino hingga taruhan olahraga.'}
                />
                <Card 
                  image={CardPict3} 
                  productName={'card1'} 
                  productDescription={'Bonus terbesar'} 
                  productPara={'Menawarkan bonus melimpah hingga puluhan juta rupiah setiap harinya. Mulai dari bonus cashback slot, sportsbook, rebate instant hingga welcome bonus.'}
                />
              </div>
            </div>
          </div>
          <div className='w-full h-full'>
            <div className='flex flex-col items-center justify-between gap-4'>
              <div className='w-full p-4 bg-white'>
                  <h3 className='text-2xl font-bold'>33K <span className='text-base font-normal text-gray-500'>Pemain</span></h3>
              </div>
              <div className='w-full p-4 bg-white'>
                  <h3 className='text-2xl font-bold'>300 <span className='text-base font-normal text-gray-500'>Permainan</span></h3>
              </div>
              <div className='w-full p-4 bg-white'>
                  <h3 className='text-2xl font-bold'>100% <span className='text-base font-normal text-gray-500'>Bonus Deposit</span></h3>
              </div>
            </div>

          </div>
          <div className='w-full h-full'>
            <div className='flex flex-col items-center justify-between gap-8'>
              <div className='w-full flex flex-col items-start justify-between gap-4'>
                <span className='text-blue-400'>BK8 Casino</span>
                <h1 className='text-2xl font-bold'>Permainan Real-Time bersama live dealer</h1>
                <p>Rasakan sensasi bermain live casino seperti Blackjack, Roulette, dan Baccarat langsung dengan live dealer.</p>
                <div className='flex flex-col items-center justify-between gap-2'>
                    <div className='flex flex-row items-center justify-start gap-2 w-full'>
                      <HiMiniCheck />
                      <p>30+ permainan casino</p>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-2 w-full'>
                      <HiMiniCheck />
                      <p>Dealer professional</p>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-2 w-full'>
                      <HiMiniCheck />
                      <p>Permainan fair play</p>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-2 w-full'>
                      <HiMiniCheck />
                      <p>Berbagai pilihan taruhan</p>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-2 w-full'>
                      <HiMiniCheck />
                      <p>Streaming HD</p>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-2 w-full'>
                      <HiMiniCheck />
                      <p>Interaksi langsung</p>
                    </div>
                    <div className='w-full md:w-10/12'>
                      <button className='w-10/12 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium rounded-md h-[40px]'>
                        Daftar
                      </button>
                    </div>
                </div>
              </div>
              <div className='w-full flex flex-col items-start justify-between gap-4'>
                <span className='text-blue-400'>BK8 Slot</span>
                <h1 className='text-2xl font-bold'>Mesin slot online dengan RTP tinggi</h1>
                <p>Mainkan ratusan mesin slot online dengan tema unik dan fitur bonus yang menarik di BK8.</p>
                <div className='flex flex-col items-center justify-between gap-2'>
                    <div className='flex flex-row items-center justify-start gap-2 w-full'>
                      <HiMiniCheck />
                      <p>200+ mesin slot</p>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-2 w-full'>
                      <HiMiniCheck />
                      <p>RTP di atas 90%</p>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-2 w-full'>
                      <HiMiniCheck />
                      <p>Fitur bonus</p>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-2 w-full'>
                      <HiMiniCheck />
                      <p>Provider terkemuka</p>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-2 w-full'>
                      <HiMiniCheck />
                      <p>Selalu update</p>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-2 w-full'>
                      <HiMiniCheck />
                      <p>Tema unik</p>
                    </div>
                    <div className='w-full md:w-10/12'>
                      <button className='w-10/12 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium rounded-md h-[40px]'>
                        Daftar
                      </button>
                    </div>
                </div>
              </div>
              <div className='w-full flex flex-col items-start justify-between gap-4'>
                <span className='text-blue-400'>BK8 Sports</span>
                <h1 className='text-2xl font-bold'>Taruhan olahraga dengan odds terbaik</h1>
                <p>Pasang taruhan Anda pada berbagai jenis olahraga dan kompetisi di seluruh dunia di BK8.</p>
                <div className='flex flex-col items-center justify-between gap-2'>
                    <div className='flex flex-row items-center justify-start gap-2 w-full'>
                      <HiMiniCheck />
                      <p>20+ jenis olahraga</p>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-2 w-full'>
                      <HiMiniCheck />
                      <p>Odds kompetitif</p>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-2 w-full'>
                      <HiMiniCheck />
                      <p>Live streaming</p>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-2 w-full'>
                      <HiMiniCheck />
                      <p>Real time skor & statistik</p>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-2 w-full'>
                      <HiMiniCheck />
                      <p>Taruhan pra-tanding</p>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-2 w-full'>
                      <HiMiniCheck />
                      <p>Bonus cashback</p>
                    </div>
                    <div className='w-full md:w-10/12'>
                      <button className='w-10/12 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium rounded-md h-[40px]'>
                        Daftar
                      </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-full'>
            <div className='w-full'>
              <h1 className='text-2xl font-bold  md:mb-4'>Fitur dan keunggulan</h1>
              <p className='text-xs md:text-base'>Save time and improve productivity with a customizable workflow, allowing you to automate repetitive tasks and focus on what matters most.</p>
              <div className='flex flex-col md:grid md:grid-cols-3 items-center justify-between gap-4 mt-8'>
                <div className='w-full flex-col items-center justify-start gap-8 bg-white p-4 rounded-md'>
                  <HiOutlineRocketLaunch className='text-4xl text-blue-600'/>
                  <div className='mt-2'>
                    <h3 className='text-2xl font-bold'>Kecepatan transaksi</h3>
                    <p className='text-xs mt-2'>Nikmati proses deposit dan withdraw dalam hitungan menit.</p>
                  </div>
                </div>
                <div className='w-full flex-col items-center justify-start gap-8 bg-white p-4 rounded-md'>
                  <HiOutlineCurrencyDollar className='text-4xl text-blue-600'/>
                  <div className='mt-2'>
                    <h3 className='text-2xl font-bold'>Keamanan data</h3>
                    <p className='text-xs mt-2'>Platform kami menggunakan teknologi enkripsi SSL 128-bit.</p>
                  </div>
                </div>
                <div className='w-full flex-col items-center justify-start gap-8 bg-white p-4 rounded-md'>
                  <HiOutlineRectangleStack className='text-4xl text-blue-600'/>
                  <div className='mt-2'>
                    <h3 className='text-2xl font-bold'>Pilihan permainan</h3>
                    <p className='text-xs mt-2'>Dari slot, taruhan bola, hingga live casino, kami memiliki semuanya.</p>
                  </div>
                </div>
                <div className='w-full flex-col items-center justify-start gap-8 bg-white p-4 rounded-md'>
                  <HiOutlineUser className='text-4xl text-blue-600'/>
                  <div className='mt-2'>
                    <h3 className='text-2xl font-bold'>Layanan pelanggan</h3>
                    <p className='text-xs mt-2'>Dapatkan bantuan 24/7 dari tim layanan pelanggan profesional.</p>
                  </div>
                </div>
                <div className='w-full flex-col items-center justify-start gap-8 bg-white p-4 rounded-md'>
                  <HiOutlineDevicePhoneMobile className='text-4xl text-blue-600'/>
                  <div className='mt-2'>
                    <h3 className='text-2xl font-bold'>Aksesibilitas mobile</h3>
                    <p className='text-xs mt-2'>Bermain di mana saja dan kapan saja melalui aplikasi mobile.</p>
                  </div>
                </div>
                <div className='w-full flex-col items-center justify-start gap-8 bg-white p-4 rounded-md'>
                  <HiOutlineSparkles className='text-4xl text-blue-600'/>
                  <div className='mt-2'>
                    <h3 className='text-2xl font-bold'>Bonus dan promosi</h3>
                    <p className='text-xs mt-2'>Berbagai bonus, promosi dan event menarik setiap harinya.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-full mt-8'>
            <div className='w-full mx-auto'>
              <h1 className='text-2xl font-bold'>Pertanyaan yang paling sering di ajukan (FAQ) </h1>
              <div className='flex flex-col items-center justify-between gap-2'>
                <FAQ question={'1. Apakah BK8 memiliki lisensi resmi?'} answer={'Ya, BK8 diatur dan dilisensikan oleh Pemerintah Curacao, beroperasi di bawah ‘Master License of Gaming Services Provider, N.V. #365/JAZ’. Ini menjamin bahwa situs kami beroperasi sesuai dengan standar dan regulasi internasional.'} />
                <FAQ question={'2. Bagaimana cara mendaftar dan bermain di BK8?'} answer={'Untuk mendaftar, klik tombol ‘DAFTAR’ di situs web kami, lalu isi informasi yang diperlukan. Setelah verifikasi, Anda dapat melakukan deposit dan mulai bermain.Perlu diingat bahwa, nama akun dan nama di rekening bank Anda harus sama agar transaksi deposit maupun withdraw dapat diproses.'} />
                <FAQ question={'3. Apa itu Welcome Bonus dan bagaimana cara mendapatkannya?'} answer={'Bonus selamat datang (Welcome Bonus) adalah bonus khusus untuk pemain baru yang mendaftar dan melakukan deposit pertama. Ini adalah bentuk apresiasi kami kepada member baru. '} />
                <FAQ question={'4. Apakah aman bermain di BK8?'} answer={'Tentu saja. Keamanan adalah prioritas utama kami. Kami menggunakan enkripsi data SSL tingkat lanjut untuk melindungi data pribadi dan transaksi Anda. Selain itu, kami memiliki fitur autentikasi dua faktor (2-FA) untuk mencegah akses yang tidak sah ke akun Anda. Sistem kami secara rutin diperiksa dan diperbarui untuk menjamin keamanan yang maksimal. '} />
                <FAQ question={'5. Bagaimana cara melakukan deposit dan penarikan dana?'} answer={'Kami menyediakan berbagai metode, termasuk transfer bank lokal, e-wallet, dan mata uang kripto seperti Bitcoin (BTC), Ethereum (ETH) dan Tether (USDT). Prosesnya cepat dan aman, tanpa potongan biaya. '} />
                <FAQ question={'6. Mengapa saya harus memilih BK8?'} answer={'BK8 menawarkan variasi permainan yang lengkap dan berkualitas, promosi menarik, layanan pelanggan 24/7, dan platform yang mudah digunakan baik di PC, tablet maupun mobile. '} />
                <FAQ question={'7. Apakah saya bisa bermain judi bola di BK8?'} answerY={'Tentu saja! Judi bola adalah salah satu layanan taruhan yang paling populer di situs kami, dengan odds terbaik dan pilihan pertandingan yang beragam. Mulai dari pertandingan lokal hingga mancanegara. '} />
                <FAQ question={'8. Apakah BK8 penipu?'} answer={'Tidak, BK8 adalah platform judi online yang sah dan terlisensi resmi. Kami berkomitmen untuk menyediakan lingkungan permainan yang adil dan aman untuk semua pemain kami. '} />
                <FAQ question={'9. Bagaimana jika saya mengalami masalah saat bermain?'} answer={'Kami memiliki tim dukungan pelanggan yang siap membantu Anda 24/7. Anda bisa menghubungi kami melalui live chat, email, atau telepon. '} />
                <FAQ question={'10. Apakah BK8 memiliki aplikasi mobile?'} answer={'Ya, kami menawarkan aplikasi mobile yang kompatibel dengan perangkat Android dan iOS, memungkinkan Anda untuk bermain kapanpun dan dimanapun. '} />
                <FAQ question={'11. Bagaimana BK8 menjaga keamanan data pribadi saya?'} answer={'Kami menggunakan teknologi keamanan terkini, seperti enkripsi data SSL dan firewall yang kuat, untuk melindungi informasi pribadi dan transaks pemain kami. '} />
              </div>
            </div>
          </div>
          <div className='w-full h-full mt-2'>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
