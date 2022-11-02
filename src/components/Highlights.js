import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { Card, CardActionArea } from "@mui/material";
import { Grid } from "@mui/material";
import { games } from "./games.js";
import { useState } from "react";
import { useRef } from "react";
import VideoHighlights from "./VideoHighlights.js";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

const Highlights = (props) => {
  const [chosen, setChosen] = useState({
    id: "1",
    name: "Olimpia Milano v Barcelona",
    date: "22 November 2022",
    description: "All the action from this nailbiter!",
    poster: "poster1.jpg",
    src:
      "https://d8d913s460fub.cloudfront.net/krpanocloud/video/airpano/video-1920x960a-fs.mp4"
  });

  const handleClick = (i) => {
    //using i to access correct object in array and set state
    setChosen(games[i]);
    console.log(chosen);
  };
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
    <>
      <div>
        <VideoHighlights
          options={options}
          imaOptions={imaOptions}
          onReady={handlePlayerReady}
          {...chosen}
        />
      </div>
      <div>
        <Carousel navButtonsAlwaysVisible>
          {games.map((item, i) => (
            <>
              {/* adding inline arrow function with synthetic event allowed me to pass i into handleClick */}
              <Card variant="outlined" onClick={(e) => handleClick(i)}>
                <CardActionArea>
                  <Paper>
                    <div style={{ textAlign: "center" }}>
                      <img width="300px" src={item.poster} alt={item.name} />
                      <h4>
                        {item.name} {item.date}
                      </h4>
                    </div>
                  </Paper>
                </CardActionArea>
              </Card>
            </>
          ))}
        </Carousel>
      </div>
      <div>
        <ImageList sx={{ width: 1200, height: 200 }} cols={4}>
          {games.map((item, i) => (
            <ImageListItem key={games.id} cols={1} rows={0.25}>
              <img
                src={`${item.poster}?w=248&fit=crop&auto=format`}
                alt={item.name}
                loading="lazy"
                onClick={(e) => handleClick(i)}
              />
              <ImageListItemBar
                title={item.name}
                subtitle={item.date}
              ></ImageListItemBar>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
};
export default Highlights;
