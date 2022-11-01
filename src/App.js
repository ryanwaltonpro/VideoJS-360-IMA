import { useRef, useState } from "react";
import VideoJS from "./components/VideoJS";
import Box from "./components/Box";
import CameraPicker from "./components/CameraPicker/CameraPicker";

export default function App() {
  const playerRef = useRef(null);

  const [currentCamera, setCurrentCamera] = useState({});

  const options2 = {
    autoplay: "play",
    controls: true,
    responseive: true,
    fluid: true,
    preload: "auto",
    livemodeui: true,
    poster:
      "https://thumbs.dreamstime.com/z/live-stream-icon-streaming-video-news-symbol-white-background-social-media-template-broadcasting-online-logo-play-button-178366926.jpg",
    sources: [
      {
        src: "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;
    player.on("waiting", () => {});

    player.on("dispose", () => {});
  };

  var imaOptions = {
    forceNonLinearFullSlot: true,
    adTagUrl:
      "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/vmap_ad_samples&sz=640x480&cust_params=sample_ar%3Dpreonly&ciu_szs=300x250%2C728x90&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&correlator=",
  };

  return (
    <>
      <Box
        style={{
          maxWidth: 900,
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <Box>
          <h3>360 Video Player</h3>
        </Box>

        <Box>
          <VideoJS
            options={options2}
            imaOptions={imaOptions}
            onReady={handlePlayerReady}
            camera={currentCamera}
          />
        </Box>
        <CameraPicker setCamera={setCurrentCamera} camera={currentCamera} />
      </Box>
    </>
  );
}
