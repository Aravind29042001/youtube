import { useSearchParams } from "react-router-dom";
import Watchlistsuggestion from "./Watchlistsuggestion";
import Navbar from "./Navbar";
import { useState } from "react";
import SingleSlimmer from "./SingleSlimmer";

function WatchPage() {
  const [serachParams] = useSearchParams()


  return (
    <div>
      <Navbar />
      <div className="ml-20  flex  my-10 ">
        
          <iframe className="rounded-2xl"
            width="900"
            height="525"
            src={"https://www.youtube.com/embed/" + serachParams.get("v") + "?autoplay=1"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            
          ></iframe>
        
        <Watchlistsuggestion />
      </div>
    </div>
  );
}

export default WatchPage;



// const [shimmer, setShimmer] = useState(true)

// const HandleLoad  = () => {
//   setShimmer(false)
// }
// {shimmer ? (<SingleSlimmer />) :null}
// onLoad={HandleLoad}

