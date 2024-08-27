import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className="flex-center wrapper flex-between flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src='/assets/images/logo.svg'
            alt='Logo'
            height={38}
            width={128}
          />
        </Link>

        <p>2024 Evently. All rights reserved &copy;</p>
      </div>

    </footer>
  )
}

export default Footer