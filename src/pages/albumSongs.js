import Sidebar from "../components/Sidebar";
import MusicCard from "../components/MusicCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { MusicPlayer } from "../components/MusicPlayer";
import Navbar from "../components/Navbar";
import { useUser } from "../providers/UserProviders";
import { Link } from "react-router-dom";
import SongComponent from "../components/SongComponent";
import animal from "../images/animal.jpg";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function Home() {
  const [getData, setData] = useState([]);
  const [getMusic, setMusic] = useState(null);
  const { getToken, getName, onTokenHandler, onNameHandler } = useUser();
  const [getSearch, setSearch] = useState("");
  const [getOriginalData, setOriginalData] = useState([]);
  const logoutHandler = () => {
    onTokenHandler(null);
    onNameHandler(null);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("name");
  };

  useEffect(() => {
    musicList();
  }, []);

  const musicList = async () => {
    try {
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/music/song?limit=5",
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

  const onSearchDetails = (event) => {
    const queryString = {
      title: event.target.value,
    };
    axios
      .get("https://academics.newtonschool.co/api/v1/music/song", {
        params: {
          search: JSON.stringify(queryString),
        },
        headers: {
          projectID: "f104bi07c490",
        },
      })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onMusicHandler = (index) => {
    console.log(index);
    let list = getData[index];
    setMusic(list);
  };

  return (
    <>
      <div className="global-container">
        <div className="left-sidebar">
          <Sidebar />
        </div>
        <div className="right-sidebar">
          <nav className="navbar navbar-expand-md navbar-light bg-black">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <input
                className="form-control mr-sm-2 "
                type="search"
                onChange={onSearchDetails}
                placeholder="Search songs, albums, artist, podcasts"
                aria-label="Search"
              />
              <li className="nav-item dropdown my-2 my-lg-0 left-nav">
                <div
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  {getName ? getName : "profile"}
                </div>
                <div className="dropdown-menu">
                  {getToken && (
                    <>
                      <Link
                        className="dropdown-item"
                        onClick={logoutHandler}
                        to="/login"
                      >
                        Logout
                      </Link>
                    </>
                  )}

                  {!getToken && (
                    <>
                      <Link className="dropdown-item" to="/login">
                        Login
                      </Link>
                      <Link className="dropdown-item" to="/register">
                        Register
                      </Link>{" "}
                    </>
                  )}
                </div>
              </li>
            </div>
          </nav>

          <div className="album-songs-container">
            <div className="album-details">
              <div>
                <img src={animal} style={{ width: "264px", height: "264px" }} />
              </div>
              <div className="album-name">
                <h1>ANIMAL - HINDI</h1>
                <p>Album • Various Artists • 2023</p>
                <p>8 songs • 31 minutes</p>
                <div className="album-btn">
                  <button className="btn-play">
                    lay
                  </button>
                  <button className="btn-library">save to library</button>
                </div>
              </div>
            </div>
            <div className="album-songs">
              <p className="song-no">1</p>
              <p className="song-name">Arjan Vailly</p>
              <p className="song-artist">Bhupinder Babbal</p>
              <p className="song-played">266M Plays</p>
              <p className="song-time">2:30</p>
            </div>
          </div>

          {/* <div className="music-container">
            {getData.map((obj, index) => {
              return (
                <MusicCard
                  key={index}
                  title={obj.title}
                  thumbnail={obj.thumbnail}
                  artist={obj.artist}
                  id={index}
                  onMusicHandler={onMusicHandler}
                />
              );
            })}
          </div> */}
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
