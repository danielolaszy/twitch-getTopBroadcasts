import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";

const Card = () => {
  // Setting base URL and headers to connect to API
  const twitchApi = axios.create({
    baseURL: "https://api.twitch.tv/helix/",
    headers: {
      "Authorization": "Bearer " + process.env.REACT_APP_ACCESS_TOKEN,
      "Client-Id": process.env.REACT_APP_CLIENT_ID,
    },
  });

  const [streams, setStreams] = useState([]);

  const getStreams = async () => {
    const response = await twitchApi.get("streams?first=20");
    const streams = await response.data.data;
    setStreams(streams);
  };
  console.log(streams);
  useEffect(() => {
    getStreams();
  }, []);

  return (
    <>
      {streams.map((stream) => {
        const thumbnail = stream.thumbnail_url
          .replace("{width}", "1280")
          .replace("{height}", "720");

        const title = stream.title.substring(0, 32) + "...";
        const viewers = stream.viewer_count.toLocaleString("en-US");
        return (
          <section className="col">
            <div
              id={stream.user_id}
              key={stream.user_id}
              className="bg-light rounded-3 border"
            >
              <a href={"https://twitch.tv/" + stream.user_login}>
                <img
                  className="w-100 rounded-top"
                  src={thumbnail}
                  alt={stream.title}
                ></img>
              </a>
              <h3 className="py-2">{stream.user_name}</h3>
              <h6>Playing {stream.game_name}</h6>

              <p className="text-break">
                <small>{title}</small>
              </p>
              <h6 className="text-danger mb-3">{viewers}</h6>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Card;
