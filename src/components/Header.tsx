import React from 'react'
import { SiReddit } from 'react-icons/si'
import { HiHome } from 'react-icons/hi'
import { RiArrowDropDownLine, RiCoinsLine } from 'react-icons/ri'
import { BsSearch, BsArrowUpRightCircle, BsChatSquareText, BsChatDots,BsBell } from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import { GiDolphin } from 'react-icons/gi'
import Image from 'next/image'
function Header() {
    return (
        <div className='sticky flex top-0 z-50 bg-white px-4 py-2  shadow-sm'>
            {/*logo*/}
            <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
                <Image alt="logo" width={250} height={250} objectFit='contain' src='/img/reddit.png' />
            </div>
            {/*home button*/}
            <div className='mx-7 flex items-center xl:min-w-[300px] hover:bg-neutral-100 cursor-pointer'>
                <HiHome className='h-5 w-5' />
                <p className='ml-2 hidden flex-1 lg:inline'>Home</p>
                <RiArrowDropDownLine className='h-7 w-7' />
            </div>
            {/*search bar*/}
            <form className='flex flex-1 items-center space-x-2 rounded-sm border border-gray-200
            bg-gray-100 px-3 py-1'>
                <BsSearch className='h-5 w-5 text-gray-400' />
                <input type='text' placeholder='Search Reddit' className='flex-1 bg-transparent outline-none' />
                <button type='submit' hidden />
            </form>
            {/*other icons */}
            <div className='mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex'>
                <BsArrowUpRightCircle className='icon' />
                <RiCoinsLine className='icon' />
                <BsChatSquareText className='icon' />
                <GiDolphin className='icon' />
                <BsChatDots className='icon' />
                <BsBell className='icon' />
                <AiOutlinePlus className='icon' />
            </div>
            {/*icons to show in smal screen*/}
            <div className='ml-5 items-center space-x-2 flex text-gray-500 lg:hidden'>
                <BsChatDots className='icon' />
                <BsBell className='icon' />
                <AiOutlinePlus className='icon' />
            </div>
            {/*advertise button*/}
            <div className='flex'>
                <button className='bg-zinc-100 text-black font-semibold px-4 py-1 rounded-full'>Advertise</button>
            </div>
            {/*user profile icon*/}
            <div className='mx-7 flex items-center xl:min-w-[300px] hover:bg-neutral-100 cursor-pointer'>
                <Image alt="logo" width={40} height={40} objectFit='contain' src='/img/user_profile.jpg' />
                <p className='ml-2 hidden flex-1 lg:inline'>Kdee</p>
                <RiArrowDropDownLine className='h-7 w-7' />
            </div>
        </div>

    )
}

export default Header
