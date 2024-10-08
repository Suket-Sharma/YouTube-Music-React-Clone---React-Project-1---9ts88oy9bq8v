import Sidebar from "../components/Sidebar";
import MusicCard from "../components/MusicCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { MusicPlayer } from "../components/MusicPlayer";
import Navbar from "../components/Navbar";
import { useUser } from "../providers/UserProviders";
import { Link } from "react-router-dom";
import SongComponent from "../components/SongComponent";
import AlbumPage from "../components/album";
import animal from "../images/animal.jpg";
import OldSongs from "../components/OldSongs";
import SadSongs from "../components/SadSongs/SadSongs";

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

  const onFilterSelection = async (input) => {
    console.log(input);
    let url;
    const queryString = {
      featured: input,
    };
    axios
      .get("https://academics.newtonschool.co/api/v1/music/song", {
        params: {
          filter: JSON.stringify(queryString),
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
              <li className="nav-item dropdown">
                <Link className="dropdown-item  dropdown-button" to="/login">
                  
                    {getName ? getName : "Sign in"}
                  
                </Link>
                <div className="dropdown">
                  {getToken && (
                    <>
                      {/* <button class="dropdown-button signin">
                        {getName ? getName : "Sign in"}
                      </button> */}
                      <div class="dropdown-content">
                        <div class="section1">
                          <div class="item">
                            <i class="fas fa-user"></i>
                            <span>{getName ? getName : "Sign in"}</span>
                            <p>@12356789</p>
                            <i class="fas fa-cog"></i>
                            <a style={{color:"blue"}} href="#">Manage Google Account</a>
                          </div>
                          {/* <!-- <div class="item">
          
        </div> --> */}
                        </div>
                        <div class="section2">
                          <div class="item">
                            <i class="fas fa-tv"></i>
                            <span>Your Channel</span>
                          </div>
                          <div class="item">
                            <i class="fas fa-music"></i>
                            <span>Get Music Premium</span>
                          </div>
                          <div class="item">
                            <i class="fas fa-exchange-alt"></i>
                            <span>Switch Account</span>
                          </div>
                          <div class="item">
                            <i class="fas fa-sign-out-alt"></i>
                            <Link
                              style={{ color: "white" }}
                              onClick={logoutHandler}
                              to="/login"
                            >
                              Sign Out
                            </Link>
                          </div>
                        </div>
                        <div class="section3">
                          <div class="item">
                            <i class="fas fa-upload"></i>
                            <span>Upload Music</span>
                          </div>
                          <div class="item">
                            <i class="fas fa-history"></i>
                            <span>History</span>
                          </div>
                          <div class="item">
                            <i class="fas fa-cog"></i>
                            <span>Settings</span>
                          </div>
                          <div class="item">
                            <i class="fas fa-file-alt"></i>
                            <span>Terms and Privacy Policy</span>
                          </div>
                          <div class="item">
                            <i class="fas fa-question-circle"></i>
                            <span>Help</span>
                          </div>
                          <div class="item">
                            <i class="fas fa-envelope"></i>
                            <span>Send Feedback</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* {!getToken && (
                    <>
                      <Link className="dropdown-item" to="/login">
                        Login
                      </Link>
                      <Link className="dropdown-item" to="/register">
                        Register
                      </Link>{" "}
                    </>
                  )} */}
                </div>
              </li>
            </div>
          </nav>
          

          <div id="download" style={{ width: "100%" }}>
            <section>
              <button onClick={() => onFilterSelection("Trending songs")}>
                Trending
              </button>
              <button onClick={() => onFilterSelection("Top 50 of this month")}>
                Top 50
              </button>
              <button onClick={() => onFilterSelection("Top 20 of this week")}>
                Top 20
              </button>
              <button onClick={() => onFilterSelection("Soul soother")}>
                Soul soother
              </button>
              <button onClick={() => onFilterSelection("Evergreen melodies")}>
                Feel Good
              </button>
              <button onClick={() => onFilterSelection("romantic")}>
                Romance
              </button>
              <button onClick={() => onFilterSelection("sad")}>Podcast</button>
              <button onClick={() => onFilterSelection("excited")}>
                Relax
              </button>
              <button onClick={() => onFilterSelection("happy")}>
                Energize
              </button>
              <button onClick={() => onFilterSelection("podcast")}>
                Party
              </button>
              <button onClick={() => onFilterSelection("Soul soother")}>
                Commute
              </button>
            </section>
          </div>
          {/* <SadSongs/> */}

          <h2 style={{ margin: "30px" }}>New Release</h2>
          <div className="music-container">
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
            
            <AlbumPage />
            <OldSongs />
            
            
          </div>
          
          <SongComponent />
          <h1 style={{height:"100px"}}></h1>
          
          
          
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
