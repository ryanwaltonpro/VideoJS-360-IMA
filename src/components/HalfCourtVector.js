import react from "react";
export const HalfCourtVector = ({ viewBoxWidth, viewBoxHeight, rotate }) => {
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
  const defaultStrokeWidth = 1;
  const defaultStrokeColor = "black";

  //Used to rotate the half court (two half courts equals one full court)
  let final_transform = rotate
    ? `rotate(${rotate}, ${centerX}, ${centerY})`
    : "";
  return (
    <g transform={final_transform}>
      <rect
        width={scaledCourtWidth / 2}
        height={scaledCourtHeight}
        x={xBoundary}
        y={yBoundary}
        stroke={defaultStrokeColor}
        fill={defaultFillColor}
      />
      {/* The court dome curve */}
      <path
        d={`M ${xBoundary + scaledDomeLineLength} ${
          centerY - scaledDomeToCenterDistance
        } 
            C ${centerY - 38} ${centerY - scaledDomeToCenterDistance + 20}, 
            ${centerY - 38} ${centerY + scaledDomeToCenterDistance - 20},
             ${xBoundary + scaledDomeLineLength} ${
          centerY + scaledDomeToCenterDistance
        }`}
        fill={defaultFillColor}
        stroke={defaultStrokeColor}
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
