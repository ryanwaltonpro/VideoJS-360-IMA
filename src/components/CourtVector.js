import HalfCourtVector from "./HalfCourtVector";
export const CourtVector = ({ viewBoxHeight, viewBoxWidth }) => {
  return (
    <>
      <HalfCourtVector
        viewBoxHeight={viewBoxHeight}
        viewBoxWidth={viewBoxWidth}
      />
      <HalfCourtVector
        viewBoxHeight={viewBoxHeight}
        viewBoxWidth={viewBoxWidth}
        rotate={180}
      />
    </>
  );
};
export default CourtVector;
