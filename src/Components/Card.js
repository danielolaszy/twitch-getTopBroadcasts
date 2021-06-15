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
    const response = await twitchApi.get("streams?first=100");
    const streams = await response.data.data;
    setStreams(streams);
    console.log(streams);
  };
  console.log(streams);
  useEffect(() => {
    getStreams();
  }, []);

  return (
    <>
      {streams.map((stream) => {
        const thumbnail = stream.thumbnail_url.replace("{width}", "854").replace("{height}", "480");

        const title = stream.title.substring(0, 32) + "...";
        const viewers = stream.viewer_count.toLocaleString("en-US");

        return (
          <section className="col">
            <div id={stream.user_id} key={stream.user_id} className="api-card rounded-3 border-dark textColor">
              <a href={"https://twitch.tv/" + stream.user_login}>
                <img className="w-100 rounded-top" src={thumbnail} alt={stream.title}></img>
              </a>
              <h3 className="py-2 m-0">
                <a className="api-link text-decoration-none" href={"https://twitch.tv/" + stream.user_login}>
                  {stream.user_name}
                </a>
              </h3>
              <div className="py-2">
                <p className="m-0">
                  <small>Playing</small>
                  <br />
                </p>
                <h6>
                  <a className="text-decoration-none api-link" href={"https://www.twitch.tv/directory/game/" + stream.game_name.replaceAll(/\s/g, "%20")}>
                    {stream.game_name}
                  </a>
                </h6>
              </div>
              <h6 className="text-danger m-0 pb-3">{viewers}</h6>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Card;
