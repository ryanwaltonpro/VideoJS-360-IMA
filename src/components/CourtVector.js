import HalfCourtVector from "./HalfCourtVector";
export const CourtVector = ({
  viewBoxHeight,
  viewBoxWidth,
  cameras,
  setCameraPositions,
}) => {
  return (
    <>
      <HalfCourtVector
        viewBoxHeight={viewBoxHeight}
        viewBoxWidth={viewBoxWidth}
        cameras={cameras}
        setCameraPoisitons={setCameraPositions}
      />
      <HalfCourtVector
        viewBoxHeight={viewBoxHeight}
        viewBoxWidth={viewBoxWidth}
        setCameraPoisitons={setCameraPositions}
        rotate={180}
        cameras={cameras}
      />
    </>
  );
};
export default CourtVector;
