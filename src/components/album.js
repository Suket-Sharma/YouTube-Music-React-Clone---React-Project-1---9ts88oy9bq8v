import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../providers/UserProviders";
import { useNavigate } from "react-router-dom";

function AlbumPage() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAlbums();
  },[] );

  const fetchAlbums = async () => {
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
      <h2 style={{margin:"30px"}}>My albums</h2>
      <div  className="album-container d-flex flex-row ">
        
          {albums?.map((album) => (            
            <div onClick={()=>navigate(`/album/${album._id}`)} key={album._id}>             
                  <img
                    src={album.image}
                    style={{ width: "150px", height: "150px", marginLeft: "30px" }}
                  />
                  <p className="artist-name" style={{ marginLeft: "30px" }}>{album.title}</p>
            </div>
          ))
}
      </div>
    </div>
  );
}

export default AlbumPage;
