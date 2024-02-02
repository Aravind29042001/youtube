import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Watchlistsuggestion() {

    const [item, setItem] = useState([])
    useEffect(() => {
        getItems()
    }, []
    )
    async function getItems() {
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyCBXtKnmTjMPov89M0uM51BabN1si3Nmbk&maxResults=50")
        const json = await data.json()
        setItem(json.items)
    }
    return (
        <div>
            {
                item.map((list) => (
                    <div >
                        <div className='h-32 flex flex-row gap-3   ml-10'>
                            <div className='flex flex-col'>
                                <Link to={"?v=" + list.id}>
                                    <img src={list.snippet.thumbnails.medium.url} alt="" className='h-28 w-44 rounded-lg' />
                                </Link>
                            </div>
                            <div className='text-xs h-14 w-52'>
                                <h3 className='font-bold'>{list.snippet.localized.title}</h3>
                                <h1>{list.snippet.channelTitle}</h1>
                                <h3>{list.statistics.viewCount} views</h3>
                            </div>
                        </div>

                    </div>
                )
                )
            }
        </div>
    )
}

export default Watchlistsuggestion