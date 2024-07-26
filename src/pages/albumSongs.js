import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import animal from "../images/animal.jpg"; // Replace with your actual path
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useUser } from "../providers/UserProviders";
import { MusicPlayer } from "../components/MusicPlayer";

function AlbumSongs() {
  const [getList, setList] = useState([]);
  const { _id } = useParams();
  const [album, setAlbum] = useState({});
  const [songs, setSongs] = useState([]);
  const [artist, setArtist] = useState({});
  const [getMusic, setMusic] = useState(null);
  const { getToken, getName, onTokenHandler, onNameHandler } = useUser();

  const logoutHandler = () => {
    onTokenHandler(null);
    onNameHandler(null);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("name");
  };

  const onMusicHandler = (song) => {
    // console.log(index);
    // let list = getData[index];
    setMusic(song);
  };

  useEffect(() => {
    if (!_id) {
      console.error("No album ID provided");
      return;
    }

    console.log("Fetching album with ID:", _id); // Debug log

    // Fetch album details
    fetch(`https://academics.newtonschool.co/api/v1/music/album/${_id}`, {
      headers: {
        projectId: "f104bi07c490",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Album data:", data); // Debug log
        const albumData = data.data; // Assuming album data is in data.data array
        console.log("Album data after processing:", albumData); // Debug log
        setAlbum(albumData);
        setSongs(albumData.songs || []); // Ensure songs is an array

        // Fetch artist details
        if (albumData.artists && albumData.artists[0]) {
          const artistId = albumData.artists[0]._id;
          return fetch(
            `https://academics.newtonschool.co/api/v1/music/artists/${artistId}`,
            {
              headers: {
                projectId: "f104bi07c490",
              },
            }
          );
        } else {
          throw new Error("Artist information is missing");
        }
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((artistData) => {
        console.log("Artist data:", artistData); // Debug log
        setArtist(artistData.data[0] || {}); // Assuming the artist data is in an array
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [_id]);

  const handleFavorite = (songId) => {
    // Add functionality to mark songs as favorites
    // For example, update the state to indicate the song is a favorite
  };

  return (
    <div className="global-container">
      <div className="left-sidebar">
        <Sidebar />
      </div>
      <div className="right-sidebar">
        <Navbar />

        <div className="album-songs-container">
          <div className="album-details">
            <div>
              <img
                src={album.image}
                alt="Album cover"
                style={{ width: "264px", height: "264px" }}
              />
            </div>
            <div className="album-name">
              <h1>{album.title}</h1>
              <p>Album • {album.name}</p>
              <p>
                {songs.length} songs • {album.duration}
              </p>
              <p>{album.description}</p>
              <div className="album-btn">
                <button className="btn-play">Play</button>
                <button className="btn-library">Save to Library</button>
              </div>
            </div>
          </div>
         
            {songs.length > 0 ? (
              songs.map((song, index) => (
                <div className="album-songs" key={song._id}>
                  <p className="song-no">{index + 1}</p>
                  <img
                    src={song.thumbnail}
                    height={"50"}
                    width={"50"}
                    className="bannerImg"
                    onClick={() => onMusicHandler(song)}
                  />
                  {/* <img src={song.thumbnail} style={{width:"50px",height:"50px"}}/> */}
                  <p className="song-name" >
                    {song.title}
                  </p>
                  <p className="song-artist">{song.name}</p>
                  <p className="song-played">{song.plays} Plays</p>
                  <p className="song-time">{song.duration}</p>
                  {/* <button onClick={() => handleFavorite(song._id)}>❤️</button> */}
                </div>
              ))
            ) : (
              <p>Loading songs...</p>
            )}
          
          {getMusic && (
            <MusicPlayer
              title={getMusic.title}
              thumbnail={getMusic.thumbnail}
              artist={getMusic.artist}
              songId={getMusic._id}
              audio_url={getMusic.audio_url}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default AlbumSongs;
