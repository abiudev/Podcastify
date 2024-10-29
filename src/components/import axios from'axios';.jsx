import axios from "axios";

import React, { useState, useEffect } from "react";
const api_Key = "TYQBYW6KKSSUHGCGGVJE";
const secret_ID = "ANV2hHcFbQ6#MXqQYaJ$qN5R3jyc^vFjwefwh6Cg";

export default function Un() {
  const [pods, setPods] = useState();

  useEffect(() => {
    const fetchTop = async () => {
      const response = await axios.get(
        "https://api.podcastindex.org/api/1.0/podcasts/trending",
        {
          params: {
            max: 10,
            lang: "en",
          },
          headers: {
            "User- Agent": "Podcastify",
            "X- Auth - Date": 1730117514,
            "X - Auth - Key": api_Key,
            Authorization: "ANV2hHcFbQ6#MXqQYaJ$qN5R3jyc^vFjwefwh6Cg",
          },
        }
      );
      setPods(response.data.feeds);
      console.log(response.data.feeds);
    };
    fetchTop();
  }, []);
  return <div></div>;
}
