import react from "react";
import CourtVector from "./CourtVector";
import CameraVector from "./CameraVector";
export const CameraPicker = ({ cameras, setCamera, currentCamera }) => {
  let viewBoxWidth = 750;
  let viewBoxHeight = 750;
  return (
    <>
      Current Camera: {currentCamera.id}
      <svg width="100%" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
        <g>
          <CourtVector
            viewBoxHeight={viewBoxHeight}
            viewBoxWidth={viewBoxWidth}
          />
          {cameras.map((camera) => (
            <CameraVector
              x={camera.x}
              y={camera.y}
              setCamera={setCamera}
              camera={camera}
              selected={currentCamera.id == camera.id}
            />
          ))}
        </g>
      </svg>
    </>
  );
};

export default CameraPicker;
