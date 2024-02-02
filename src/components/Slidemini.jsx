import React from 'react'

import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";
import { GoHistory } from "react-icons/go";
import Sideslide from './Sideslide';

function Slidemini() {
    return (
        <div className='text-2xl flex flex-col gap-[16px]  ml-7 '>
            <div className=' hover:bg-gray-200 h-14 w-[70px] relative right-6 rounded-[10px] cursor-pointer '>
                <div><GoHomeFill className='mt-2 w-9 ml-4' /></div>
                <h6 className='text-[11px]  relative bottom-2 left-5 '>Home</h6>
            </div>
            <div className=' hover:bg-gray-200 h-14 w-[70px] relative right-6 rounded-[10px] cursor-pointer '>
                <SiYoutubeshorts className='mt-2 w-9 ml-4' />
                <h6 className='text-[11px] relative bottom-2 left-5 '>Shorts</h6>
            </div>
            <div className=' hover:bg-gray-200 h-14 w-[70px] relative right-6 rounded-[10px] cursor-pointer '>
                <MdOutlineSubscriptions className='mt-2 w-9 ml-4' />
                <h6 className='text-[11px] relative bottom-2  '>Subscripitions</h6>
            </div>
            <div className=' hover:bg-gray-200 h-14 w-[70px] relative right-6 rounded-[10px] cursor-pointer '>
                <FaRegPlayCircle className='mt-2 w-9 ml-4' />
                <h6 className='text-[11px] relative left-[24px] bottom-2  '>You</h6>
            </div>
            <div className=' hover:bg-gray-200 h-14 w-[70px] relative right-6 rounded-[10px] cursor-pointer '>
                <GoHistory className='mt-2 w-9 ml-4' />
                <h6 className='text-[11px] relative bottom-2 left-4 '>History</h6>
            </div>
            <Sideslide />
        </div>
    )
}
export default Slidemini