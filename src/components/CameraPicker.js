import react, { useState, useEffect } from "react";
import CourtVector from "./CourtVector";
import CameraVector from "./CameraVector";
import VideoPreview from "./VideoPreview";
export const CameraPicker = ({ setCamera, currentCamera }) => {
  const viewBoxWidth = 500;
  const viewBoxHeight = 350;
  const cameras = [
    {
      id: 1,
      src: [
        {
          src: "https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8",
          type: "application/x-mpegURL",
        },
      ],
    },
    {
      id: 2,
      src: [
        {
          src: "https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8",
          type: "application/x-mpegURL",
        },
      ],
    },
    {
      id: 3,
      src: [
        {
          src: "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",
          type: "application/x-mpegURL",
        },
      ],
    },
    {
      id: 4,
      src: [
        {
          src: "https://d8d913s460fub.cloudfront.net/krpanocloud/video/airpano/video-1920x960a-fs.mp4",
          type: "video/mp4",
        },
      ],
    },
    {
      id: 5,
      src: [
        {
          src: "https://d8d913s460fub.cloudfront.net/krpanocloud/video/airpano/video-1920x960a-fs.mp4",
          type: "video/mp4",
        },
      ],
    },
    {
      id: 6,
      src: [
        {
          src: "https://d8d913s460fub.cloudfront.net/krpanocloud/video/airpano/video-1920x960a-fs.mp4",
          type: "video/mp4",
        },
      ],
    },
  ];
  useEffect(() => {
    setCamera(cameras[0]);
  }, []);
  const [cameraPositions, setCameraPositions] = useState([]);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      Current Camera: {currentCamera.id}
      {showPreview && <VideoPreview />}
      <svg width="100%" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
        <g>
          <CourtVector
            viewBoxHeight={viewBoxHeight}
            viewBoxWidth={viewBoxWidth}
            cameras={cameraPositions}
            setCameraPositions={setCameraPositions}
          />
          {cameraPositions.length > 0 ? (
            cameras.map((camera, i) => (
              <CameraVector
                x={cameraPositions[i].x}
                y={cameraPositions[i].y}
                setCamera={() => setCamera(camera)}
                selected={currentCamera.id == camera.id}
                setShowPreview={setShowPreview}
              />
            ))
          ) : (
            <></>
          )}
        </g>
      </svg>
    </div>
  );
};

export default CameraPicker;
