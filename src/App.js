import { useRef } from "react";
import VideoJS from "./components/VideoJS";

export default function App() {
  const playerRef = useRef(null);

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
        src:
          "https://d8d913s460fub.cloudfront.net/krpanocloud/video/airpano/video-1920x960a-fs.mp4",
        type: "video/mp4"
      }
    ]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {});

    player.on("dispose", () => {});
  };

  return (
    <>
      <div>Rest of app here</div>
      <VideoJS options={options} onReady={handlePlayerReady} />
      <div>Rest of app here</div>
    </>
  );
}
