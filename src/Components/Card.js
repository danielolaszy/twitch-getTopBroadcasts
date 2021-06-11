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

  useEffect(() => {
    getStreams();
    //   return () => {
    //       cleanup
    //   }
  }, []);

  return (
    <>
      {streams.map((stream) => {
        const { user_id, user_name, viewer_count } = stream;
        return (
          <section className="col-4 test rounded-3" id={user_id} key={user_id}>
            <h1>{user_name}</h1>
            <h4>{viewer_count}</h4>
          </section>
        );
      })}
    </>
  );
};

export default Card;
