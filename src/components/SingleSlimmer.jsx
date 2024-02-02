import React from 'react'

function SingleSlimmer() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]

    return (
        <div className=' flex relative right-'>
            <div className='w-[900px] h-[525px] my-6 ml-28 rounded-2xl bg-gray-300'>
                <div className=' bg-gray-300 h-6 w-[350px] relative top-[550px] ml-7 rounded-md '>
                    <div className='bg-gray-300 h-6 w-[200px] relative top-[40px] ml- rounded-md '>
                        <div className=' bg-gray-300 h-16 w-16 relative top-[60px]  rounded-full '>
                            <div className=' bg-gray-300 h-6 w-[200px]  ml-20 rounded-md '>
                                <div className=' bg-gray-300 h-6 w-[200px] relative top-[40px]  rounded-md '>
                                    <div className=' bg-gray-300 h-6 w-6 relative bottom-[120px] left-[530px]  rounded-full '>
                                        <div className=' bg-gray-300 h-6 w-6 relative left-10  rounded-full '>
                                            <div className=' bg-gray-300 h-6 w-6 relative left-10  rounded-full '>
                                                <div className=' bg-gray-300 h-6 w-6 relative left-10  rounded-full '>
                                                    <div className=' bg-gray-300 h-6 w-6 relative left-10  rounded-full '>
                                                        <div className=' bg-gray-300 h-12 w-[180px] relative top-[60px] right-40 rounded-md '>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-3 justify-end flex-col'>
                {
                    array.map(() => (
                        <div className='bg-gray-300 h-28 w-44 rounded-lg ml-12 relative top-7'>
                            <div className=' bg-gray-300 h-5 w-[210px] relative top-1 ml-48 rounded-md '>
                                <div className=' bg-gray-300 h-5 w-[140px] relative top-10 ml- rounded-md '>
                                </div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default SingleSlimmer