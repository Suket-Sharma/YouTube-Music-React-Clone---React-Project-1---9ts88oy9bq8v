import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function SadSongCarousel({ album,index }) {
  const artistList = album.artist.map((item)=>item.name).join(" & ");
  return  (
          <div>
            
            {/* {albums.map((album, index) => ( */}
              <div  className='container' key={index} style={{ width: "150px", height: "200px",textAlign:"left" }} >
                <img src={album.thumbnail} style={{ width: "150px", height: "150px" }} alt={album.title} />

                <div style={{ fontSize:"16px",overflow:"hidden",textOverflow:"ellipsis",fontFamily:"roboto,sans",fontWeight:"700",color:"grey"}}>{album.title}</div>
                <div style={{ width: "75%",fontSize:"16px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontFamily:"roboto,sans",fontWeight:"700",color:"FFFFFFB3"}}>{artistList}</div>
              </div>
            {/* ))} */}
          </div>
        );
  
}

export default SadSongCarousel;

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