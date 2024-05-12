import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../providers/UserProviders";

function AlbumPage() {
  const [album, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAlbums();
  },[] );

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/music/album?limit=100",
        {
          headers: {
            projectID: "f104bi07c490",
          },
        }
      );
  
      // Check if response data is an array and has albums
      if (Array.isArray(response.data) && response.data.length > 0) {
        setAlbums(response.data);
        setOriginalData(response.data);
        setLoading(false);
      } else {
        console.error("Response data is not a valid array or has no albums:", response.data);
        // Optionally handle the case where response data is not as expected
      }
    } catch (err) {
      console.error("Error fetching albums:", err);
      // Optionally handle the error
    }
  };

  return (
    <div>
      <div className="album-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          albums.map((album) => (
            <div key={album._id}>
              <h2 style={{ marginLeft: "30px" }}>{album.title}</h2>
              <div className="">
                <div>
                  <img
                    src={album.image}
                    style={{ width: "150px", height: "150px", marginLeft: "30px" }}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AlbumPage;
