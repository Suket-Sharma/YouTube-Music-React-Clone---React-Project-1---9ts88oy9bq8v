import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../providers/UserProviders";

function OldSongs() {
  const [OldSongs, setOldSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOldSongs();
  },[] );

  const fetchOldSongs = async () => {
    try {
      const response = await axios.get(
        'https://academics.newtonschool.co/api/v1/music/song?filter=%7B%22mood%22%3A%22romantic%22%7D&limit=5',
        {
          headers: {
            projectID: "f104bi07c490",
          },
        }
      );
      console.log(response.data.data);
      setOldSongs(response.data.data);
      // Check if response data is an array and has albums
      // if (Array.isArray(response.data) && response.data.length > 0) {
      //   setAlbums(response.data);
      //   setOriginalData(response.data);
      //   setLoading(false);
      // } else {
      //   console.error("Response data is not a valid array or has no albums:", response.data);
      //   // Optionally handle the case where response data is not as expected
      // }
    } catch (err) {
      console.error("Error fetching albums:", err);
      // Optionally handle the error
    }
  };

  return (
    <div>
      <h2 style={{margin: "30px 0" }}>Romantic</h2>
      <div className="album-music-container">
        {OldSongs.map((album) => (
          <div
            className="album-MusicCard"
          >
            <img style={{width:"150px",height:"150px",borderRadius:"8px"}}
              src={album.thumbnail}
            />
            <div className="album-music-title">{album.title}</div>
            <div className="artist">
              {/* {artistList} */}
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
}

export default OldSongs;
