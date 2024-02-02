import React from 'react'

function VideoSlimmer() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
    return (
        <div className='flex flex-wrap gap-32 justify-center '>
            {
                array.map(() => (
                    <div className=' bg-gray-300 h-52 w-[350px] my-10  rounded-2xl'>
                        <div className=' bg-gray-300 h-11 w-11 relative top-[230px]  rounded-full '>
                        </div>
                        <div className=' bg-gray-300 h-6 w-[280px] relative top-[180px] ml-14 rounded-md  '>
                            <div className=' bg-gray-300 h-6 w-[160px] relative top-10 rounded-md  '>
                            </div>
                        </div>
                    </div>
                )
                )
            }
        </div>
    )
}

export default VideoSlimmer

