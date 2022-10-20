import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "videojs-vr";
import "videojs-contrib-ads";
import "videojs-ima";
import "video.js/dist/video-js.css";
import "videojs-ima/src/css/videojs.ima.css";

export const VideoJS = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { options, onReady } = props;
  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = (playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(player);
      }));

      player.vr({ projection: "360" });
      var imaOptions = {
        forceNonLinearFullSlot: true,
        adTagUrl:
          "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/vmap_ad_samples&sz=640x480&cust_params=sample_ar%3Dpreonly&ciu_szs=300x250%2C728x90&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&correlator="
      };

      player.ima(imaOptions);
    } else {
      const player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
      player.vr({ projection: "360" });
    }
  }, [options, videoRef]);

  useEffect(() => {
    const player = playerRef.current;
    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <>
      <div data-vjs-player>
        <video
          ref={videoRef}
          className="video-js vjs-big-play-centered"
          crossOrigin="anonymous"
        />
      </div>
    </>
  );
};

export default VideoJS;
