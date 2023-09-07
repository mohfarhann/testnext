"use client"

import Link from 'next/link';
import React from 'react'

const Button = () => {
  return (
    <>
    <Link href="http://hokiselalu.us/daftar" className='w-6/12 md:w-1/12 md:mr-4'>
      <button className={"w-full h-[40px] text-white bg-gradient-to-r from-orange-400 to-orange-600 rounded-md hover:bg-trasnparent md:mr-4"}>
        Daftar
      </button>
    </Link>
    </>
  )
}

export default Button;