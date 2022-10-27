import React from "react";
import Carouset from "./Carouset";

const Highlights = () => {
  return (
    <>
      <div>
        <p>The user has chosen highlights so a carousel of videos renders.</p>
        <p>
          {" "}
          Do we want them to play from the carousel? Do we need search / filter
          functionality?
        </p>
      </div>
      <div>
        <Carouset />
      </div>
    </>
  );
};
export default Highlights;
