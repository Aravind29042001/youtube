import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Video from "./components/Video";
import WatchPage from "./components/WatchPage";
import Pagenotfound from "./components/Pagenotfound";
import { Provider } from "react-redux";
import Store from "./Utils/Store";
import VideoSlimmer from "./components/VideoSlimmer";


function App() {
  return (
    <Provider store={Store}>
      <div>
        {/* <VideoSlimmer/> */}
      </div>

      <div>
        

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Video />} />
            <Route path="/watch" element={<WatchPage />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
