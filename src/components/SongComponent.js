import MusicCard from "../components/MusicCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { MusicPlayer } from "../components/MusicPlayer";
import { useUser } from "../providers/UserProviders";
import { Link } from "react-router-dom";
import SongMusicCard from "./SongMusicCard";


function Home() {
  const [getData, setData] = useState([]);
  const [getMusic, setMusic] = useState(null);
  
 
  const [getOriginalData, setOriginalData] = useState([]);
 

  useEffect(() => {
    musicList();
  }, []);

  const musicList = async () => {
    try {
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/music/song?limit=8",
        {
          headers: {
            projectID: "f104bi07c490",
          },
        }
      );
      console.log(response.data.data);
      setData(response.data.data);
      setOriginalData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  
  const onMusicHandler = (index) => {
  
    console.log(index);
    let list = getData[index];
    setMusic(list);
  };

  return (
    <>
      <div className="song-component-container">
      <div className="user-name">
        <p>MUSIC TO GET YOU STARTED</p>
        <h3>WELCOME, SUKET</h3>
      </div>  
        
          <div className="music-container">
            {getData.map((obj, index) => {
              return (
                <SongMusicCard
                  key={index}
                  title={obj.title}
                  thumbnail={obj.thumbnail}
                  artist={obj.artist}
                  id={index}
                  onMusicHandler={onMusicHandler}
                />
              );
            })}
          </div>
        </div>
      
      {getMusic && (
        <MusicPlayer
          title={getMusic.title}
          thumbnail={getMusic.thumbnail}
          artist={getMusic.artist}
          songId={getMusic._id}
          audio_url={getMusic.audio_url}
        />
      )}
    </>
  );
}
export default Home;
