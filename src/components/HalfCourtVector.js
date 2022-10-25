import react from "react";
export const HalfCourtVector = ({
  viewBoxWidth,
  viewBoxHeight,
  transform,
  rotate,
}) => {
  let scale = 15;
  let courtWidth = 28.65;
  let courtHeight = 15.24;
  let centerLgRadius = 1.8;
  let centerSmallRadius = 0.6;

  let centerX = viewBoxWidth / 2;
  let centerY = viewBoxHeight / 2;

  let xBoundary = (viewBoxWidth - courtWidth * scale) / 2;
  let yBoundary = (viewBoxHeight - courtHeight * scale) / 2;
  let final_transform = "";
  if (transform) final_transform = transform;
  if (rotate) final_transform += `rotate(${rotate}, ${centerX}, ${centerY})`;
  return (
    <g transform={final_transform}>
      <path stroke="black" fill="transparent" />
      <rect
        width={(courtWidth * scale) / 2}
        height={courtHeight * scale}
        x={xBoundary}
        y={yBoundary}
        stroke="black"
        fill="transparent"
      />
      <path
        d={`M ${xBoundary + 4.26 * scale} ${centerY - 6.71 * scale} 
            C ${centerY - 38} ${centerY - 6.71 * scale + 20}, 
            ${centerY - 38} ${centerY + 6.71 * scale - 20},
             ${xBoundary + 4.26 * scale} ${centerY + 6.71 * scale}`}
        fill={"transparent"}
        stroke={"#000"}
      />
      <ellipse
        fill={"transparent"}
        stroke={"#000"}
        stroke-width="1"
        cx={xBoundary + (courtWidth * scale) / 5}
        cy={centerY}
        rx={centerLgRadius * scale}
        ry={centerLgRadius * scale}
      />
      <rect
        y={centerY - (courtHeight * scale) / 6}
        x={xBoundary}
        width={(courtWidth * scale) / 5}
        height={(courtHeight * scale) / 3}
        fill={"transparent"}
        stroke={"#000"}
        stroke-width="1"
      />
      <rect
        y={centerY - centerLgRadius * scale}
        x={xBoundary}
        width={(courtWidth * scale) / 5}
        height={centerLgRadius * scale * 2}
        fill={"transparent"}
        stroke={"#000"}
        stroke-width="1"
      />
      <line
        y1={centerY + 6.71 * scale}
        x1={xBoundary}
        y2={centerY + 6.71 * scale}
        x2={xBoundary + 4.26 * scale}
        stroke="black"
      />
      <line
        y1={centerY - 6.71 * scale}
        x1={xBoundary}
        y2={centerY - 6.71 * scale}
        x2={xBoundary + 4.26 * scale}
        stroke="black"
      />
      <ellipse
        fill={"transparent"}
        stroke={"#000"}
        stroke-width="1"
        cx={centerX}
        cy={centerY}
        rx={centerLgRadius * scale}
        ry={centerLgRadius * scale}
      />
      <ellipse
        fill={"transparent"}
        stroke={"#000"}
        stroke-width="1"
        cx={centerX}
        cy={centerY}
        rx={centerSmallRadius * scale}
        ry={centerSmallRadius * scale}
      />
      <line
        y1={yBoundary}
        x1={centerX}
        y2={yBoundary + courtHeight * scale}
        x2={centerX}
        stroke="black"
      />
    </g>
  );
};
export default HalfCourtVector;
