"use client"

import Image from "next/image"
import AsvLogo from "../../../public/img/mitra/1.svg"
import CurLogo from "../../../public/img/mitra/2.svg"

import BmmLogo from "../../../public/img/lisensi/1.svg"
import ItechLogo from "../../../public/img/lisensi/2.svg"
import GliLogo from "../../../public/img/lisensi/3.svg"
import TstLogo from "../../../public/img/lisensi/4.svg"
import GoLogo from "../../../public/img/lisensi/5.svg"

import BtcLogo from "../../../public/img/payment/1.svg"
import UsdLogo from "../../../public/img/payment/2.svg"
import EteLogo from "../../../public/img/payment/3.svg"
import CimbLogo from "../../../public/img/payment/4.svg"
import ManLogo from "../../../public/img/payment/5.svg"
import BniLogo from "../../../public/img/payment/6.svg"
import BcaLogo from "../../../public/img/payment/7.svg"
import BriLogo from "../../../public/img/payment/8.svg"
import EziLogo from "../../../public/img/payment/9.svg"
import HelpLogo from "../../../public/img/payment/10.svg"
import DraLogo from "../../../public/img/payment/11.svg"

import FbLogo from "../../../public/img/ourmedia/1.svg"
import IgLogo from "../../../public/img/ourmedia/2.svg"
import YtLogo from "../../../public/img/ourmedia/3.svg"
import TwitLogo from "../../../public/img/ourmedia/4.svg"

import IonLogo from "../../../public/img/security/1.svg"
import MetLogo from "../../../public/img/security/2.svg"

import Logo18 from "../../../public/img/responsible/1.svg"
import GamecLogo from "../../../public/img/responsible/1.svg"
import BeLogo from "../../../public/img/responsible/3.svg"

const index = () => {
  return (
    <footer>
      <div className="w-full h-full mt-8 mb-20">
        <div className="w-full mx-auto">
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="w-full border-b-2 p-2">  
              <h1 className="text-base mb-2 font-bold">Mitra Klub Resmi 2022/23</h1>
              <Image src={AsvLogo} width={50} height={70}/>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between border-b-2 p-2">
              <div className="w-full md:w-full">
                <h1 className="font-semibold">Lisensi Permainan</h1>
                <Image src={CurLogo} width={120} height={60} className="mb-2 mt-2"/>
              </div>
              <div className="w-full flex flex-col md:flex-col items-start md:items-center justify-between">
                <ul className="md:w-full">  
                  <li>
                    <h1 className="font-semibold">Permainan</h1>
                  </li>
                  <li>Sports</li>
                  <li>E-Sports</li>
                  <li>Kasino</li>
                  <li>Slot</li>
                  <li>Fishing</li>
                  <li>Lotre</li>
                </ul>
              </div>
              <div className="w-full flex flex-col md:flex-col items-start md:items-center justify-between">    
                  <ul className="md:w-full">
                    <li>
                      <h1 className="font-semibold mb-2 mt-2 md:mb-0 md:mt-0">Informasi</h1>
                    </li>
                    <li>Tentang Kami</li>
                    <li>VIP</li>
                    <li>Papan Peringkat</li>
                    <li>Hubungi Kami</li>
                    <li>Affiliasi</li>
                    <li>Pusat Info</li>
                    <li>Syarat & Ketentuan</li>
                  </ul>
              </div>  
            </div>
            <div className="w-full flex flex-col items-center justify-between gap-2 mt-4">
              <div className="w-full">
                <h1 className="font-bold mb-2">Metode Pembayaran</h1>
                <div className="grid grid-rows-4 grid-flow-col md:flex md:flex-row items-start justify-start gap-4">
                  <Image src={BtcLogo} width={35}  height={35}/>
                  <Image src={UsdLogo} width={35}  height={35}/>
                  <Image src={EteLogo} width={35}  height={35}/>
                  <Image src={CimbLogo} width={123}  height={35}/>
                  <Image src={ManLogo} width={71}  height={35}/>
                  <Image src={BniLogo} width={74}  height={35}/>
                  <Image src={BcaLogo} width={66}  height={35}/>
                  <Image src={BriLogo} width={83}  height={35}/>
                  <Image src={EziLogo} width={105}  height={35}/>
                  <Image src={HelpLogo} width={70}  height={35}/>
                  <Image src={DraLogo} width={102}  height={35}/>
                </div>
              </div>
              <div className="w-full">
                <h1 className="font-bold mb-2">Lisensi</h1>
                <div className="grid grid-rows-2 grid-flow-col md:flex md:flex-row items-start justify-start gap-4">
                  <Image src={BmmLogo} width={67}  height={35}/>
                  <Image src={ItechLogo} width={35}  height={35}/>
                  <Image src={GliLogo} width={102}  height={35}/>
                  <Image src={TstLogo} width={32}  height={35}/>
                  <Image src={GoLogo} width={102}  height={35}/>
                </div>  
              </div>
              <div className="w-full">
                <h1 className="font-bold mb-2">Ikuti Kami</h1>
                  <div className="flex flex-row items-start justify-start gap-4">  
                    <Image src={FbLogo} width={35}  height={35}/>
                    <Image src={IgLogo} width={35}  height={35}/>
                    <Image src={YtLogo} width={35}  height={35}/>
                    <Image src={TwitLogo} width={35}  height={35}/>
                  </div>
              </div>
              <div className="w-full">
                <h1 className="font-bold mb-2">Keamanan</h1>
                <div className="flex flex-row items-start justify-start gap-4">
                  <Image src={IonLogo} width={95}  height={35}/>
                  <Image src={MetLogo} width={105}  height={35}/>
                </div>
              </div>
              <div className="w-full">
                <h1 className="font-bold mb-2">Responsible Gaming</h1>
                <div className="flex flex-row items-start justify-start gap-4">
                  <Image src={Logo18} width={35}  height={35}/>
                  <Image src={GamecLogo} width={35}  height={35}/>
                  <Image src={BeLogo} width={35}  height={35}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default index