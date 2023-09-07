"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiBars3, HiXMark } from "react-icons/hi2";
import Button from "../Button"

import Logo from "../../../public/img/1.svg"

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='w-full bg-blue-800 sticky top-0'>
        <div className='flex flex-row items-center justify-center gap-2 text-center p-2'>
          <Link href="https://www.a8x888.com/en-id/register?affid=29210" className='font-base text-xs md:text-xl md:font-bold text-white'>Daftar sekarang dan dapatkan Welcome Bonus Rp.20.000.000!</Link>
        </div>
      </div>
      <nav className={`bg-white p-4 sticky top-0 z-[1]`}>
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className='w-full flex flex-row items-center justify-start md:justify-between gap-4'>
              <Image src={Logo} width={120} height={30} className=''/>
              <Button />
          </Link>
          <div className="hidden sm:flex flex-row items-center justify-between space-x-4 text-black w-6/12">
            <Link href="https://www.bk8idxhoki.com/id-id/sports/bk8-sports" className="block p-2 text-black">Sports</Link>
            <Link href="https://www.bk8idxhoki.com/id-id/casino/evolution-gaming" className="block p-2 text-black">Casino</Link>
            <Link href="https://www.bk8idxhoki.com/id-id/slots/nextspin" className="block p-2 text-black">Slot</Link>
            <Link href="https://www.bk8idxhoki.com/id-id/promotion" className="block p-2 text-black">Promosi</Link>
            <Link href="https://www.bk8idxhoki.com/id-id/vip" className="block p-2 text-black">VIP</Link>
          </div>
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="text-black text-3xl">
              {!isOpen ? <HiBars3/> : <HiXMark />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden absolute top-0 left-0 p-4 bg-white w-full h-screen">
            <div className='w-full relative'>
              <button onClick={toggleMenu} className="text-black absolute right-0 text-3xl">
                {!isOpen ? <HiBars3/> : <HiXMark />}
              </button>
            </div>
            <Link href="https://www.bk8idxhoki.com/id-id/sports/bk8-sports" className="block p-2 text-black">Sports</Link>
            <Link href="https://www.bk8idxhoki.com/id-id/casino/evolution-gaming" className="block p-2 text-black">Casino</Link>
            <Link href="https://www.bk8idxhoki.com/id-id/slots/nextspin" className="block p-2 text-black">Slot</Link>
            <Link href="https://www.bk8idxhoki.com/id-id/promotion" className="block p-2 text-black">Promosi</Link>
            <Link href="https://www.bk8idxhoki.com/id-id/vip" className="block p-2 text-black">VIP</Link>
            <Button />
          </div>
        )}
      </nav>
    </>
  );
}

export default NavBar;
