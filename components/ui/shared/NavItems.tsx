import { headerLinks } from '@/constants'
import  Link from 'next/link'
import React from 'react'

const NavItems = () => {
    
   
  return (
    <ul className='md:flex-between flex w-full flex-col items-start gap-5 md:flex-row'>
      {headerLinks.map((link) => {
      
      return(
        <li>
            <Link href={link.route}>
            {link.label}            
            </Link>          
                
        </li>
        
      )
})}
    </ul>

  )
}

export default NavItems

