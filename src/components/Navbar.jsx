import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaMicrophone } from "react-icons/fa";
import { TbVideoPlus } from "react-icons/tb";
import { LiaBell } from "react-icons/lia";
import { useDispatch } from 'react-redux';
import { togglemenu } from '../Utils/appSlice';
import { FaRegFaceSmile } from "react-icons/fa6";
import Slidemini from './Slidemini';

function Navbar() {
    const dispath = useDispatch()
    function tooglehandle() {
        dispath(togglemenu())
    }
    return (
        <div>
             
            <div className='w-[100%] h-[60px] flex justify-around gap-[160px] relative '>
                <div className='text-[23px] flex items-center gap-16 relative left-11  '>
                    < RxHamburgerMenu onClick={tooglehandle} className='hover:bg-gray-300 rounded-full cursor-pointer bg-contain h-9 w-10 p-2' />
                    <img className='h-[48px] w-[83px] relative right-14 cursor-pointer' src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="" />
                </div>
                <div className='flex items-center justify-center'>
                    <div className='flex items-center justify-center relative left-16'>
                        <input type="text" placeholder='Search' className='h-[38px] w-[490px] border border-gray-500 rounded-full rounded-r xl pl-5 relative left-1 ' />
                        <div className='rounded-full border border-gray-500 h-[38px] w-[48px] rounded-l flex items-center justify-center text-xl text-zinc-700 bg-stone-200 hover:bg-gray-300 cursor-pointer   '>
                            <HiMagnifyingGlass />
                        </div>
                    </div>
                    <div className='text-xl ml-5 bg-stone-200  h-8 w-9 flex items-center justify-center rounded-2xl relative left-14 hover:bg-gray-300 cursor-pointer'>
                        <FaMicrophone />
                    </div>
                </div>
                <div className='flex  items-center text-[20px] gap-2 relative left-44 '>
                    <TbVideoPlus className='h-8 w-8 hover:bg-gray-300 rounded-full p-1 cursor-pointer' />
                    <LiaBell className='h-8 w-8 hover:bg-gray-300 rounded-full p-1 cursor-pointer ' />
                </div>
                <div className='flex justify-center items-center text-[30px] relative right-1 '>
                    <FaRegFaceSmile />
                </div>
            </div>
        </div>
    )
}
export default Navbar