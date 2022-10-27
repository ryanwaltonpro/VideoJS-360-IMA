import react, { useEffect } from "react";
export const HalfCourtVector = ({
  viewBoxWidth,
  viewBoxHeight,
  rotate,
  setCameraPoisitons,
}) => {
  const scale = 15;
  const scaleUp = (value) => {
    return scale * value;
  };

  // Standard basketball court dimensions (in metres)
  const courtWidth = 28.65;
  const courtHeight = 15.24;
  const domeToCenterDistance = 6.71;
  const centerLgRadius = 1.8;
  const centerSmallRadius = 0.6;
  const domeLineLength = 4.26;

  // Scaled up versions
  const scaledCourtWidth = scaleUp(courtWidth);
  const scaledCourtHeight = scaleUp(courtHeight);
  const scaledCenterLgRadius = scaleUp(centerLgRadius);
  const scaledCenterSmallRadius = scaleUp(centerSmallRadius);
  const scaledDomeToCenterDistance = scaleUp(domeToCenterDistance);
  const scaledDomeLineLength = scaleUp(domeLineLength);

  // The center coordinates of the SVG viewbox
  const centerX = viewBoxWidth / 2;
  const centerY = viewBoxHeight / 2;

  //The leftmost court boundary
  const xBoundary = (viewBoxWidth - scaledCourtWidth) / 2;
  //The top court boundary
  const yBoundary = (viewBoxHeight - scaledCourtHeight) / 2;

  //Styling values
  const defaultFillColor = "transparent";
  const defaultStrokeWidth = 1.75;
  const defaultStrokeColor = "black";
  useEffect(() => {
    setCameraPoisitons([
      { id: 1, x: xBoundary, y: centerY },
      { id: 2, x: xBoundary + scaledCourtWidth * (1 / 4), y: yBoundary },
      { id: 3, x: xBoundary + scaledCourtWidth * (3 / 4), y: yBoundary },
      { id: 4, x: xBoundary + scaledCourtWidth, y: centerY },
      {
        id: 5,
        x: xBoundary + scaledCourtWidth * (3 / 4),
        y: yBoundary + scaledCourtHeight,
      },
      {
        id: 6,
        x: xBoundary + scaledCourtWidth * (1 / 4),
        y: yBoundary + scaledCourtHeight,
      },
    ]);
  }, [viewBoxWidth, viewBoxHeight]);

  //Used to rotate the half court (two half courts equals one full court)
  let final_transform = rotate
    ? `rotate(${rotate}, ${centerX}, ${centerY})`
    : "";
  return (
    <g transform={final_transform}>
      <button> hi </button>
      <rect
        width={scaledCourtWidth / 2}
        height={scaledCourtHeight}
        x={xBoundary}
        y={yBoundary}
        stroke={defaultStrokeColor}
        stroke-width={defaultStrokeWidth}
        fill={defaultFillColor}
      />

      {/* The court dome curve */}
      <path
        d={`M ${xBoundary + scaledDomeLineLength} ${
          centerY - scaledDomeToCenterDistance
        } 
            C ${centerY} ${centerY - scaledDomeToCenterDistance + 20}, 
            ${centerY} ${centerY + scaledDomeToCenterDistance - 20},
             ${xBoundary + scaledDomeLineLength} ${
          centerY + scaledDomeToCenterDistance
        }`}
        fill={defaultFillColor}
        stroke={defaultStrokeColor}
        stroke-width={defaultStrokeWidth}
      />

      {/* The circle */}
      <ellipse
        fill={defaultFillColor}
        stroke={defaultStrokeColor}
        stroke-width={defaultStrokeWidth}
        cx={xBoundary + scaledCourtWidth / 5}
        cy={centerY}
        rx={centerLgRadius * scale}
        ry={centerLgRadius * scale}
      />

      {/* Outer box */}
      <rect
        y={centerY - scaledCourtHeight / 6}
        x={xBoundary}
        width={scaledCourtWidth / 5}
        height={scaledCourtHeight / 3}
        fill={defaultFillColor}
        stroke={defaultStrokeColor}
        stroke-width={defaultStrokeWidth}
      />

      {/* Inner box */}
      <rect
        y={centerY - scaledCenterLgRadius}
        x={xBoundary}
        width={scaledCourtWidth / 5}
        height={scaledCenterLgRadius * 2}
        fill={defaultFillColor}
        stroke={defaultStrokeColor}
        stroke-width={defaultStrokeWidth}
      />

      {/* First dome line */}
      <line
        y1={centerY + scaledDomeToCenterDistance}
        x1={xBoundary}
        y2={centerY + scaledDomeToCenterDistance}
        x2={xBoundary + scaledDomeLineLength}
        stroke={defaultStrokeColor}
      />

      {/* Second dome line */}
      <line
        y1={centerY - scaledDomeToCenterDistance}
        x1={xBoundary}
        y2={centerY - scaledDomeToCenterDistance}
        x2={xBoundary + scaledDomeLineLength}
        stroke={defaultStrokeColor}
        stroke-width={defaultStrokeWidth}
      />

      {/* Outer center circle */}
      <ellipse
        fill={defaultFillColor}
        stroke={defaultStrokeColor}
        stroke-width={defaultStrokeWidth}
        cx={centerX}
        cy={centerY}
        rx={scaledCenterLgRadius}
        ry={scaledCenterLgRadius}
      />

      {/* Inner center circle */}
      <ellipse
        fill={defaultFillColor}
        stroke={defaultStrokeColor}
        stroke-width={defaultStrokeWidth}
        cx={centerX}
        cy={centerY}
        rx={scaledCenterSmallRadius}
        ry={scaledCenterSmallRadius}
      />
    </g>
  );
};
export default HalfCourtVector;
