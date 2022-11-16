import { useEffect, useRef, useState } from "react";
import VideoJS from "./components/VideoJS";
import Box from "./components/Box";
import CameraPicker from "./components/CameraPicker/CameraPicker";
import Highlights from "./components/Highlights";
import ChosenHighlight from "./components/ChosenHighlight";
import VideoCard from "./components/VideoCard";

import { Typography } from "@mui/material";

import { data } from "./data.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, InputGroup, Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import "./styles.css";

export default function App() {
  const [team, setTeam] = useState();
  const [search, setSearch] = useState("");

  const playerRef = useRef(null);
  const [vidtype, setVidtype] = useState("");

  function handleLive() {
    setVidtype("Live");
    console.log(vidtype);
  }
  function handleVod() {
    setVidtype("Vod");
    console.log(vidtype);
  }
  useEffect(() => {
    console.log(team);
  }, [team]);

  const [currentCamera, setCurrentCamera] = useState({});

  const options2 = {
    autoplay: "play",
    controls: true,
    responseive: true,
    fluid: true,
    preload: "auto",
    livemodeui: true,
    poster:
      "https://thumbs.dreamstime.com/z/live-stream-icon-streaming-video-news-symbol-white-background-social-media-template-broadcasting-online-logo-play-button-178366926.jpg",
    sources: [
      {
        src:
          "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",
        type: "application/x-mpegURL"
      }
    ]
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
      <Typography gutterBottom variant="h4" component="div">
        Sky Italia 360<span>&#176;</span> Immersive Basketball
      </Typography>

      {!vidtype && (
        <>
          <Typography variant="body1" component="div">
            This is where the user's journey will start with a simple choice
            between Livestream and VOD options.
          </Typography>
          <button onClick={handleLive}>Show Me Livestream</button>
          <button onClick={handleVod}>Show Me Highlights</button>
          <br></br> <br></br>
          {/* <VideoCard
            name="videoOverlay1"
            image="https://images.unsplash.com/photo-1587960184060-aa880aabdd04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
            title="Video"
            date="5/11/22"
          />
          <VideoCard
            name="videoOverlay1"
            image="https://images.unsplash.com/photo-1587960184060-aa880aabdd04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
            title="Video"
            date="5/11/22"
          /> */}
          <Container>
            <br></br>
            <h1 className="text-center"> Find highlights </h1>
            <Form>
              <InputGroup>
                <Form.Control
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search Teams"
                />
              </InputGroup>
            </Form>
            <br></br>
            <Table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th>Gameweek</th>
                  <th>Opposition</th>
                  <th>Score</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter((e) => {
                    return search.toLowerCase() === ""
                      ? e
                      : e.Team.toLowerCase().includes(search);
                  })
                  .map((e, index) => (
                    <tr key={index}>
                      <td>{e.Game}</td>
                      <td>{e.Team}</td>
                      <td>{e.Score}</td>
                      <td>
                        {
                          <button
                            onClick={() => {
                              setTeam(e.Team);
                              setVidtype("Search");
                            }}
                          >
                            Watch Highlights
                          </button>
                        }
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Container>
        </>
      )}

      {vidtype === "Live" && (
        <>
          <button onClick={handleVod}>Watch Highlights</button>
          <h3>You are Watching Live</h3>

          <Box
            style={{
              maxWidth: 900,
              margin: "0 auto",
              overflow: "hidden"
            }}
          >
            <Box>
              <h3>360 Video Player</h3>
            </Box>

            <Box>
              <VideoJS
                options={options2}
                imaOptions={imaOptions}
                onReady={handlePlayerReady}
                camera={currentCamera}
              />
            </Box>
            <CameraPicker setCamera={setCurrentCamera} camera={currentCamera} />
          </Box>
        </>
      )}
      {vidtype === "Search" && team && (
        <>
          <button onClick={handleLive}>
            <Typography gutterBottom variant="body1" component="div">
              Switch to Livestream 360<span>&#176;</span>
            </Typography>
          </button>
          <h3>You are Watching highlights from the {team} game</h3>

          <Box
            style={{
              maxWidth: 900,
              margin: "0 auto",
              overflow: "hidden"
            }}
          >
            <ChosenHighlight team={team} />
          </Box>
        </>
      )}

      {vidtype === "Vod" && (
        <>
          <p></p>
          <Typography gutterBottom variant="h5" component="div">
            All the Highlights in 360<span>&#176;</span>{" "}
            <button onClick={handleLive}>
              <Typography gutterBottom variant="body1" component="div">
                Switch to Livestream 360<span>&#176;</span>
              </Typography>
            </button>
          </Typography>

          <Highlights />
        </>
      )}
      {!vidtype && <img width="100%" src="poster.png" alt="team" />}
    </>
  );
}
