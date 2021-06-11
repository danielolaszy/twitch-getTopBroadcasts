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
  const [users, setUsers] = useState([]);

  const getStreams = async () => {
    const response = await twitchApi.get("streams?first=20");
    const streams = await response.data.data;

    setStreams(streams);
  };
  const getProfilePicture = async (id) => {
    const response = await twitchApi.get("users?id=" + id);
    const users = await response.data.data;
    setUsers(users);
  };
  const ids = streams.map((stream) => {
    return stream.user_id;
  });

  console.log(...ids);

  useEffect(() => {
    getStreams();

    //   return () => {
    //       cleanup
    //   }
  }, []);
  // console.log(streams);

  useEffect(() => {
    getProfilePicture(1);
    // return () => {
    //   cleanup
    // }
  }, []);
  return (
    <>
      {/* {users.map((user) => {
        const {}
      })} */}
      {streams.map((stream) => {
        const { user_id, user_name, viewer_count } = stream;
        return (
          <section className="col">
            <div
              id={user_id}
              key={user_id}
              className="bg-light rounded-3 border py-4"
            >
              {users.map((user) => {
                const { id, profile_image_url, login } = user;
                return (
                  <img
                    key={id}
                    id={id}
                    className="rounded-circle w-25 mx-auto"
                    src={profile_image_url}
                    alt={login}
                  ></img>
                );
              })}

              <h3 className="py-3">{user_name}</h3>
              <h6 className="text-danger">{viewer_count}</h6>
              <p>{user_id}</p>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Card;
