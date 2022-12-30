import React from 'react'
import { SiReddit } from 'react-icons/si'
import Image from 'next/image'
function Header() {
    return (
        <div className='relative h-20 w-28 flex-shrink-0 cursor-pointer'>
            <div>
                <Image alt="logo" width={200} height={200} objectFit='contain' src='/img/reddit.png'  />
            </div>
        </div>
    )
}

export default Header
