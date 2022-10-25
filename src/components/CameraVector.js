import react, { useState } from "react";

export const CameraVector = ({ x, y, selected, setCamera, camera }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <ellipse
      onClick={() => setCamera(camera)}
      fill={hovered || selected ? "#fcba03" : "grey"}
      stroke={"#000"}
      stroke-width="8"
      cx={x}
      cy={y}
      id="svg_2"
      rx={hovered || selected ? "12.5" : "12.5"}
      rx={hovered || selected ? "12.5" : "12.5"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
};
export default CameraVector;
