import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Slidemini from "./Slidemini";
import List from "./List";
import VideoSlimmer from "./VideoSlimmer";

function Video() {
    const [value, setValue] = useState([]);
    useEffect(() => {
        getValue();
    }, []);

    async function getValue() {
        const data = await fetch(
            "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyCBXtKnmTjMPov89M0uM51BabN1si3Nmbk&maxResults=50"
        );
        const json = await data.json();
        setValue(json.items);
    }
    return  (
        <div>
            <Navbar />
            <List />
            <div className="flex">
                <div>
                    <Slidemini />
                </div>
              
                <div className=" flex flex-wrap gap-16  my-10 w-full  justify-center        ">
                    {value.length==0 ? <VideoSlimmer/>:
                    value.map((list, index) => (
                        <div key={index} className="  ">
                            <Link to={"watch?v=" + list.id}>
                                <img
                                    className="  h-52 rounded-xl "
                                    src={list.snippet.thumbnails.medium.url}
                                    alt=""
                                />
                            </Link>
                            <div className="flex">
                                <img
                                    className=" w-10 h-10 rounded-3xl my-7 hover:rounded-none hover:duration-1000 "
                                    src={list.snippet.thumbnails.medium.url}
                                    alt=""
                                />
                                <h1 className="w-56 ml-12 font-bold  ">{list.snippet.title}</h1>
                            </div>
                            <div className="mx-[88px]">
                                <h2>{list.snippet.channelTitle}</h2>
                                <h2>{list.statistics.viewCount} views</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Video;
