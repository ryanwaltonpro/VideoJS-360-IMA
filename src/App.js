import { useRef, useState } from "react";
import VideoJS from "./components/VideoJS";
import CameraPicker from "./components/CameraPicker";
export default function App() {
  const playerRef = useRef(null);

  const [camera, setCamera] = useState({});

  const options2 = {
    autoplay: true,
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

  /*const options = {
    autoplay: false,
    controls: true,
    responseive: true,
    fluid: true,
    preload: "auto",
    poster:
      "https://www.fiba.basketball/images.fiba.com/Graphic/3/7/dQMGB5Cfdk6ovOjCGm8dtQ.jpg?v=2014120514385062",
  };
*/
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
      <div
        style={{
          padding: 15,
          border: "2px solid black",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <h3>Sample Player</h3>

        <div style={{ padding: 15, border: "2px solid black", margin: 15 }}>
          <VideoJS
            options={options2}
            imaOptions={imaOptions}
            onReady={handlePlayerReady}
            camera={camera}
          />
        </div>
        <div
          style={{
            padding: 15,
            border: "2px solid black",
            margin: 15,
            backgroundColor: "#f0d2a3",
          }}
        >
          <CameraPicker setCamera={setCamera} currentCamera={camera} />
        </div>
      </div>
    </>
  );
}
