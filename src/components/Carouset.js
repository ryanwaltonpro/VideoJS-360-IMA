import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { useRef } from "react";
import VideoJS from "./VideoJS";
import VideoCarousel from "./VideoCarousel";

export default function Carouset(props) {
  var items = [
    {
      name: "Olimpia Milano v Barcelona",
      date: "22 November 2022",
      description: "All the action from this nailbiter!",
      src:
        "https://d8d913s460fub.cloudfront.net/krpanocloud/video/airpano/video-1920x960a-fs.mp4"
    },
    {
      name: "Olimpia Milano v Tezenis Verona",
      date: "25 November 2022",
      description: "The most exciting moments",
      src:
        "https://d8d913s460fub.cloudfront.net/krpanocloud/video/airpano/video-1920x960a-fs.mp4"
    }
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const playerRef = useRef(null);
  const options = {
    autoplay: false,
    controls: true,
    responseive: true,
    fluid: true,
    preload: "auto",
    poster:
      "https://www.fiba.basketball/images.fiba.com/Graphic/3/7/dQMGB5Cfdk6ovOjCGm8dtQ.jpg?v=2014120514385062"
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;
    player.on("waiting", () => {});

    player.on("dispose", () => {});
  };

  var imaOptions = {
    forceNonLinearFullSlot: true,
    adTagUrl:
      "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/vmap_ad_samples&sz=640x480&cust_params=sample_ar%3Dpreonly&ciu_szs=300x250%2C728x90&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&correlator="
  };

  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.date}</p>
      <p>{props.item.description}</p>

      {/* <video width="300" controls><source src={props.item.src} type="video/mp4"></source></video> */}
      <h3>Highlights Player</h3>
      <VideoCarousel
        options={options}
        imaOptions={imaOptions}
        onReady={handlePlayerReady}
        camera={props.item}
      />
    </Paper>
  );
}
