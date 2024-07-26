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
        'https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"romantic"}',
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
      <h2 style={{margin:"30px"}}>Old Songs</h2>
      <div className="album-container d-flex flex-row ">
        
          {OldSongs?.map((songs) => (            
            <div key={songs._id}>             
              
               
                  <img
                    src={songs.thumbnail}
                    style={{ width: "150px", height: "150px", marginLeft: "30px" }}
                  />
                  <p className="artist-name" style={{ marginLeft: "30px" }}>{songs.title}</p>
                  
                
              
            </div>
          ))
}
      </div>
    </div>
  );
}

export default OldSongs;
