import React from 'react'

import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { LiaFireAltSolid } from "react-icons/lia";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { PiMusicNoteLight } from "react-icons/pi";
import { PiFilmSlateLight } from "react-icons/pi";
import { TbLivePhoto } from "react-icons/tb";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { GoLightBulb } from "react-icons/go";
import { GiAmpleDress } from "react-icons/gi";
import { MdOutlinePodcasts } from "react-icons/md";
import { GrTrophy } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa6";
import { SiYoutubemusic } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinedFlag } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { TbMessageReport } from "react-icons/tb";
import { useSelector } from 'react-redux';
import Slidemini from './Slidemini';

function Sideslide() {
    const menuopen = useSelector((sk) => sk.app.menuopen)
    return menuopen ? null: (
        <div className='relative left-28 bottom-[367px]'>
            <div className='text-xl flex flex-col  ml-7 my-5'>
                <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6  rounded-[10px] cursor-pointer '>
                    <div><GoHomeFill className='mt-2 w-9 ml-4 ' /></div>
                    <h6 className='text-[14px]  relative bottom-6 left-20 '>Home</h6>
                </div>
                <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                    <SiYoutubeshorts className='mt-2 w-9 ml-4' />
                    <h6 className='text-[14px] relative bottom-6 left-20 '>Shorts</h6>
                </div>
                <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                    <MdOutlineSubscriptions className='mt-2 w-9 ml-4' />
                    <h6 className='text-[14px]  relative bottom-6 left-20 '>Subscripitions</h6>
                </div>
            </div>
            <div>
                <div className='text-xl flex flex-col  ml-7 my-5'>
                    <div className=' h-11 w-[240px] relative right-6  rounded-[10px] cursor-pointer '>

                        <h6 className='text-[14px]  relative  left-6 font-bold  '>You </h6>
                    </div>
                    <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                        <GoHistory className='mt-2 w-9 ml-4' />
                        <h6 className='text-[14px] relative bottom-6 left-20 '>History</h6>
                    </div>
                    <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                        <MdOutlineWatchLater className='mt-2 w-9 ml-4' />
                        <h6 className='text-[14px]  relative bottom-6 left-20 '>watch later</h6>
                    </div>
                    <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                        <BiLike className='mt-2 w-9 ml-4' />
                        <h6 className='text-[14px]  relative bottom-6 left-20 '>Liked videos</h6>
                    </div>
                    <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                        <MdOutlinePlaylistPlay className='mt-2 w-9 ml-4' />
                        <h6 className='text-[14px]  relative bottom-6 left-20 '>More videos</h6>
                    </div>
                </div>
                <div className='text-xl flex flex-col  ml-7 my-5'>
                    <div className='h-11 w-[240px] relative right-6  rounded-[10px] cursor-pointer '>

                        <h6 className='text-[14px]  relative  left-6 font-bold  '>Explore</h6>
                    </div>
                    <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                        < LiaFireAltSolid className='mt-2 w-9 ml-4' />
                        <h6 className='text-[14px] relative bottom-6 left-20 '>Trending</h6>
                    </div>
                    <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                        <LiaShoppingBagSolid className='mt-2 w-9 ml-4' />
                        <h6 className='text-[14px]  relative bottom-6 left-20 '>Shopping</h6>
                    </div>
                    <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                        <PiMusicNoteLight className='mt-2 w-9 ml-4' />
                        <h6 className='text-[14px]  relative bottom-6 left-20 '>Music</h6>
                    </div>
                    <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                        <PiFilmSlateLight className='mt-2 w-9 ml-4' />
                        <h6 className='text-[14px]  relative bottom-6 left-20 '>Movies</h6>
                    </div>
                    <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                        <TbLivePhoto className='mt-2 w-9 ml-4' />
                        <h6 className='text-[14px]  relative bottom-6 left-20 '>Live</h6>
                    </div>
                    <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                        <IoGameControllerOutline className='mt-2 w-9 ml-4' />
                        <h6 className='text-[14px]  relative bottom-6 left-20 '>Gaming</h6>
                    </div>
                    <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                        <IoNewspaperOutline className='mt-2 w-9 ml-4' />
                        <h6 className='text-[14px]  relative bottom-6 left-20 '>News</h6>
                    </div>
                    <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                        < GrTrophy className='mt-2 w-9 ml-4' />
                        <h6 className='text-[14px]  relative bottom-6 left-20 '>Sports</h6>
                    </div>
                    <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                        <GoLightBulb className='mt-2 w-9 ml-4' />
                        <h6 className='text-[14px]  relative bottom-6 left-20 '>Learning</h6>
                    </div>
                    <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                        <GiAmpleDress className='mt-2 w-9 ml-4' />
                        <h6 className='text-[14px]  relative bottom-6 left-20 '>Fashion & Beauty</h6>
                    </div>
                    <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                        <MdOutlinePodcasts className='mt-2 w-9 ml-4' />
                        <h6 className='text-[14px]  relative bottom-6 left-20 '>Podcasts</h6>
                    </div>
                </div>
                <div className='text-xl flex flex-col  ml-7 my-5'>
                    <div className='  h-11 w-[240px] relative right-6  rounded-[10px] cursor-pointer '>

                        <h6 className='text-[14px]  relative  left-6 font-bold  '>More from YouTube</h6>
                    </div>
                    <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                        < FaYoutube className='mt-2 w-9 ml-4' />
                        <h6 className='text-[14px] relative bottom-6 left-20 '>YouTube Premium</h6>
                    </div>
                    <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                        <SiYoutubemusic className='mt-2 w-9 ml-4' />
                        <h6 className='text-[14px]  relative bottom-6 left-20 '>Youtube Muisc</h6>
                    </div>
                    <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                        <TbBrandYoutubeKids className='mt-2 w-9 ml-4' />
                        <h6 className='text-[14px]  relative bottom-6 left-20 '>Youtube Kids</h6>
                    </div>
                </div>
                <div className='text-xl flex flex-col  ml-7 my-5'>
                    <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                        < IoSettingsOutline className='mt-2 w-9 ml-4' />
                        <h6 className='text-[14px] relative bottom-6 left-20 '>Settings</h6>
                    </div>
                    <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                        <MdOutlinedFlag className='mt-2 w-9 ml-4' />
                        <h6 className='text-[14px]  relative bottom-6 left-20 '>Report history</h6>
                    </div>
                    <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                        <BsQuestionCircle className='mt-2 w-9 ml-4' />
                        <h6 className='text-[14px]  relative bottom-6 left-20 '>Help</h6>
                    </div>
                    <div className=' hover:bg-gray-200 h-11 w-[240px] relative right-6 rounded-[10px] cursor-pointer '>
                        <TbMessageReport className='mt-2 w-9 ml-4' />
                        <h6 className='text-[14px]  relative bottom-6 left-20 '>Send feedback</h6>
                    </div>
                </div>
                <div className='text-xl flex flex-col  ml-7 my-5'>
                    <div className='  '>
                        <p className='text-[13px] font-semibold leading-relaxed text-gray-600'>About Press Copyright <br /> Contact us Creators <br /> Advertise Developers</p>
                        <p className='text-[13px] font-semibold leading-relaxed text-gray-600 my-3'>TermsPrivacyPolicy & Safety <br />How YouTube works <br />Test new features</p>
                        <h6 className='text-[12px] font-normal leading-relaxed text-gray-400'>ⓒ 2024 Google LLC</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sideslide