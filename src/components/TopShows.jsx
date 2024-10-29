import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import ShowCard from "./ShowCard.jsx";
import Loader from "./Loader.jsx";
import PodcastPlayer from "./player.jsx";
import Player from "./player.jsx";

const TrendingPodcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPodcast, setCurrentPodcast] = useState(null);

  useEffect(() => {
    const fetchTrendingPodcasts = async () => {
      const apiKey = "TYQBYW6KKSSUHGCGGVJE";
      const apiSecret = "ANV2hHcFbQ6#MXqQYaJ$qN5R3jyc^vFjwefwh6Cg";

      const authDate = Math.floor(Date.now() / 1000);
      const sinceDate = authDate - 86400;
      const authString = apiKey + apiSecret + authDate;
      const authHeader = CryptoJS.SHA1(authString).toString(CryptoJS.enc.Hex);

      const myHeaders = new Headers();
      myHeaders.append("User-Agent", "Podcastify");
      myHeaders.append("X-Auth-Date", authDate);
      myHeaders.append("X-Auth-Key", apiKey);
      myHeaders.append("Authorization", authHeader);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          `https://api.podcastindex.org/api/1.0/podcasts/trending?max=10&lang=en&since=${sinceDate}&pretty=true`,
          requestOptions
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setPodcasts(result.feeds);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching podcasts:", error);
      }
    };

    fetchTrendingPodcasts();
  }, []);

  const handlePlay = (podcast) => {
    setCurrentPodcast(podcast);
    console.log("Current Podcast:", podcast);
  };

  return (
    <>
      <div>
        {loading ? (
          <Loader NameClass="flex items-center justify-center h-screen" />
        ) : (
          <div>
            <ShowCard shows={podcasts} onPlay={handlePlay} />{" "}
            {currentPodcast && (
              <PodcastPlayer
                url={currentPodcast.url}
                img={currentPodcast.image}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default TrendingPodcasts;
