import { useRef, useState } from "react";
import VideoJS from "./components/VideoJS";
import CameraPicker from "./components/CameraPicker";
export default function App() {
  const playerRef = useRef(null);
  const [camera, setCamera] = useState({});

  const cameras = [
    {
      id: 1,
      src: "",
      poster: "",
    },
    { id: 2, src: "", poster: "" },
    { id: 3, src: "", poster: "" },
  ];

  const options = {
    autoplay: false,
    controls: true,
    responseive: true,
    fluid: true,
    preload: "auto",
    poster:
      "https://www.fiba.basketball/images.fiba.com/Graphic/3/7/dQMGB5Cfdk6ovOjCGm8dtQ.jpg?v=2014120514385062",
    sources: [
      {
        src: "https://d8d913s460fub.cloudfront.net/krpanocloud/video/airpano/video-1920x960a-fs.mp4",
        type: "video/mp4",
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
      <h3>Sample Player</h3>
      <VideoJS
        options={options}
        imaOptions={imaOptions}
        onReady={handlePlayerReady}
        currentCamera={camera}
      />
      <CameraPicker cameras={cameras} setCamera={setCamera} />
    </>
  );
}
