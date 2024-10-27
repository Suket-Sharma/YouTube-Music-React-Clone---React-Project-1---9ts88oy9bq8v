import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useUser } from "../../providers/UserProviders";
import { MusicPlayer } from "../../components/MusicPlayer";

import { useNavigate } from "react-router-dom";

function AlbumsCarousel({ album }) {
  const navigate = useNavigate();
  const artistList = album.artist ? album.artist.map((item) => item.name).join(" & ") : "";

  return (
    <div
      className="container-carousel"
      key={album._id}
      style={{ width: "150px", height: "200px", textAlign: "left", color: "white" }}
    >
      <img
        src={album.image}
        style={{ width: "150px", height: "150px" }}
        alt={album.title}
        onClick={() => navigate(`/album/${album._id}`)}
      />
      <div
        style={{
          fontSize: "16px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontFamily: "roboto, sans-serif",
          fontWeight: "700",
          color: "grey",
        }}
      >
        {album.title}
      </div>
      <div
        style={{
          width: "75%",
          fontSize: "16px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontFamily: "roboto, sans-serif",
          fontWeight: "700",
          color: "#FFFFFFB3",
        }}
      >
        {artistList}
      </div>
    </div>
  );
}

export default AlbumsCarousel;

// // AlbumList.js
// import React, { useEffect, useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';

// function AlbumList() {
//   const [albums, setAlbums] = useState([]);

//   useEffect(() => {
//     fetch('https://academics.newtonschool.co/api/v1/music/song', {
//       headers: {
//         'projectId': 'f104bi07c490'
//       }
//     })
//       .then(response => response.json())
//       .then(data => setAlbums(data.data));
//   }, []);

//   return (
//     <div>
//       <h2>Albums</h2>
//       {albums.map((album, index) => (
//         <div key={index} className='container'>
//           <img src={album.thumbnail} style={{ width: "150px", height: "150px" }} alt={album.title} />
//           <div>{album.title}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default AlbumList;
