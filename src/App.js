import { useRef, useState } from "react";
import VideoJS from "./components/VideoJS";
import CameraPicker from "./components/CameraPicker";
export default function App() {
  const playerRef = useRef(null);

  const cameras = [
    {
      id: 1,
      x: 165,
      y: 375,
      src: [
        {
          src: "https://d8d913s460fub.cloudfront.net/krpanocloud/video/airpano/video-1920x960a-fs.mp4",
          type: "video/mp4",
        },
      ],
    },
    {
      id: 2,
      x: 270,
      y: 262.5 + 15 * 15,
      src: [
        {
          src: "",
          type: "video/mp4",
        },
      ],
    },
    {
      id: 3,
      x: 270,
      y: 262.5,
      src: [
        {
          src: "https://d8d913s460fub.cloudfront.net/krpanocloud/video/airpano/video-1920x960a-fs.mp4",
          type: "video/mp4",
        },
      ],
    },
    {
      id: 4,
      x: 480,
      y: 262.5,
      src: [
        {
          src: "https://d8d913s460fub.cloudfront.net/krpanocloud/video/airpano/video-1920x960a-fs.mp4",
          type: "video/mp4",
        },
      ],
    },
    {
      id: 5,
      x: 480,
      y: 262.5 + 15 * 15,
      src: [
        {
          src: "https://d8d913s460fub.cloudfront.net/krpanocloud/video/airpano/video-1920x960a-fs.mp4",
          type: "video/mp4",
        },
      ],
    },
    {
      id: 6,
      x: 28 * 15 + 165,
      y: 375,
      src: [
        {
          src: "https://d8d913s460fub.cloudfront.net/krpanocloud/video/airpano/video-1920x960a-fs.mp4",
          type: "video/mp4",
        },
      ],
    },
  ];

  const [camera, setCamera] = useState(cameras[0]);
  console.log(camera.id);
  const options = {
    autoplay: false,
    controls: true,
    responseive: true,
    fluid: true,
    preload: "auto",
    poster:
      "https://www.fiba.basketball/images.fiba.com/Graphic/3/7/dQMGB5Cfdk6ovOjCGm8dtQ.jpg?v=2014120514385062",
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
        camera={camera}
      />
      <CameraPicker
        cameras={cameras}
        setCamera={setCamera}
        currentCamera={camera}
      />
    </>
  );
}
