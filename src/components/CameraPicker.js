import react from "react";
import HalfCourtVector from "./HalfCourtVector";
import CameraVector from "./CameraVector";
export const CameraPicker = ({ cameras, setCamera, currentCamera }) => {
  let viewBoxWidth = 750;
  let viewBoxHeight = 750;

  return (
    <>
      Current Camera: {currentCamera.id}
      <svg width="100%" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
        <g>
          <HalfCourtVector
            viewBoxHeight={viewBoxHeight}
            viewBoxWidth={viewBoxWidth}
          />
          <HalfCourtVector
            viewBoxHeight={viewBoxHeight}
            viewBoxWidth={viewBoxWidth}
            rotate={180}
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
