import React from "react";
import axios from "axios";
// import { useState, useEffect } from "react";

const Card = () => {
  // Setting base URL and headers to connect to API
  const twitchApi = axios.create({
    baseURL: "https://api.twitch.tv/helix/",
    headers: {
      "Authorization": "Bearer " + process.env.REACT_APP_ACCESS_TOKEN,
      "Client-Id": process.env.REACT_APP_CLIENT_ID,
    },
  });

  return (
    <div>
      <h1>testing card</h1>
    </div>
  );
};

export default Card;
