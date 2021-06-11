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
      <div className="row row-cols-4 g-3 text-center">
        {streams.map((stream) => {
          const { user_id, user_name, viewer_count } = stream;
          return (
            <section className="col">
              <div
                id={user_id}
                key={user_id}
                className="card bg-light rounded-3 border py-4"
              >
                <h1 className="py-3">{user_name}</h1>
                <h6>{viewer_count}</h6>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Card;
