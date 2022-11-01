import { useRef, useState } from "react";
import VideoJS from "./components/VideoJS";
import Box from "./components/Box";
import CameraPicker from "./components/CameraPicker/CameraPicker";
import Highlights from "./components/Highlights";

export default function App() {
  const playerRef = useRef(null);
  const [vidtype, setVidtype] = useState("");
  function handleLive() {
    setVidtype("Live");
    console.log(vidtype);
  }
  function handleVod() {
    setVidtype("Vod");
    console.log(vidtype);
  }

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
        src:
          "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",
        type: "application/x-mpegURL"
      }
    ]
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;
    player.on("waiting", () => {});

    player.on("dispose", () => {});
  };

  var imaOptions = {
    forceNonLinearFullSlot: true,
    adTagUrl:
      "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/vmap_ad_samples&sz=640x480&cust_params=sample_ar%3Dpreonly&ciu_szs=300x250%2C728x90&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&correlator="
  };

  return (
    <>
      <p>Sky Italia 360 Immersive Basketball</p>
      {!vidtype && (
        <>
          <p>
            This is where the user's journey will start with a simple choice
            between Livestream and VOD options.
          </p>
          <button onClick={handleLive}>Show Me Livestream</button>
          <button onClick={handleVod}>Show Me Highlights</button>
        </>
      )}

      {vidtype === "Live" && (
        <>
          <button onClick={handleVod}>Watch Highlights</button>
          <h3>You are Watching Live</h3>

          <Box
            style={{
              maxWidth: 900,
              margin: "0 auto",
              overflow: "hidden"
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
      )}
      {vidtype === "Vod" && (
        <>
          <button onClick={handleLive}>Watch Livestream</button>
          <h3>
            Basketball Highlights in 360<span>&#176;</span> Immersive Video
          </h3>
          <Highlights />
        </>
      )}
      {!vidtype && <img width="100%" src="poster.png" alt="team" />}
    </>
    //
  );
}
