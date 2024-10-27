import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useUser } from "../providers/UserProviders";
import { MusicPlayer } from "../components/MusicPlayer";

function Library() {
  
  const [getList, setList] = useState([]);
  const { getToken, getName, onTokenHandler, onNameHandler,getMusic,setMusic } = useUser();

  const onMusicHandler = (obj) => {
    // console.log(index);
    // let list = getData[index];
    setMusic(obj);
  };

  useEffect(() => {
    listOfLibrary();
  }, []);

  const deleteHandler = (songId) => {
    axios
      .patch(
        "https://academics.newtonschool.co/api/v1/music/favorites/like",
        { songId: songId },
        {
          headers: {
            projectID: "f104bi07c490",
            Authorization: `Bearer ${getToken}`,
          },
        }
      )
      .then((result) => {
        listOfLibrary();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const listOfLibrary = () => {
    axios
      .get("https://academics.newtonschool.co/api/v1/music/favorites/like", {
        headers: {
          projectID: "f104bi07c490",
          Authorization: `Bearer ${getToken}`,
        },
      })
      .then((result) => {
        console.log(result.data.data.songs);
        setList(result.data.data.songs);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="global-container">
        <div className="left-sidebar">
          <Sidebar />
        </div>
        <div className="right-sidebar">
          <Navbar />
          <div className="music-container-L">
          <div className="user-name" >
    <p>WELCOME {getName}  </p>
    <h3>MUSIC YOU LIKE ❤</h3>
  </div>
            <div className="music-content">
            {getList.map((obj, index) => {
              return (
                <div key={index} className="musicCard"  style={{paddingLeft:"50px"}}>
                    <img
                      src={obj.thumbnail}
                      height={"150"}
                      width={"150"}
                      className="bannerImg"
                      onClick={() => onMusicHandler(obj)}
                    />
                  <div className="music-title">
                    {obj.title}{" "}
                    <i
                      onClick={() => deleteHandler(obj._id)}
                      class="fa-solid fa-trash"
                    ></i>
                  </div>
                </div>
              );
            })}
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default Library;
