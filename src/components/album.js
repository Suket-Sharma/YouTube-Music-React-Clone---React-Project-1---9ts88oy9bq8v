import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../providers/UserProviders";
import { useNavigate } from "react-router-dom";
import MusicCard from "../components/MusicCard";

function AlbumPage() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // const artistList = albums.map((item)=>item.artists.name).join(" & ");

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => 
  {
    try {
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/music/album?limit=5",
        {
          headers: {
            projectID: "f104bi07c490",
          },
        }
      );
      console.log(response.data.data);
      setAlbums(response.data.data);
    } catch (err) {
      console.error("Error fetching albums:", err);
      // Optionally handle the error
    }
  };

  return (
    <div>
      <h2 style={{margin: "30px 0" }}>My albums</h2>
      <div className="album-music-container">
        {albums.map((album) => (
          <div
            className="album-MusicCard"
            onClick={() => navigate(`/album/${album._id}`)}
            key={album._id}
          >
            <img style={{width:"150px",height:"150px",borderRadius:"8px"}}
              src={album.image}
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

export default AlbumPage;
