import react from "react";

export const CameraPicker = ({ cameras, setCamera }) => {
  return (
    <>
      {cameras.map((camera) => (
        <button
          onClick={() => setCamera(camera)}
        >{`Camera ${camera.id}`}</button>
      ))}
    </>
  );
};

export default CameraPicker;
