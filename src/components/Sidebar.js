import { Link } from "react-router-dom";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import AddIcon from "@mui/icons-material/Add";
import PushPinIcon from "@mui/icons-material/PushPin";
import PlayCircleOutlineSharpIcon from '@mui/icons-material/PlayCircleOutlineSharp';
import "../styles/LeftSidebar.css";
import { useNavigate } from 'react-router-dom';
import { useUser } from "../providers/UserProviders";
import { useState, useEffect } from "react";

function Sidebar() {
  const [showMessage, setShowMessage] = useState(false);
  const { getToken, getName, onTokenHandler, onNameHandler ,getMusic,setMusic} = useUser();
  const navigate = useNavigate();
  const logoutHandler = () => {
    onTokenHandler(null);
    onNameHandler(null);
    localStorage.removeItem("token");
    localStorage.removeItem("name");
  };

   // Function to handle dead clicks
   const handleDeadClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  }; 

  const handleHomeClick = () => {
    navigate('/');   // Navigate to the home page
    window.location.reload(); // Force the page to reload
  };
  return (
    <>
      <Link to="/">
      <MenuIcon
              className="MenuIcon "
              fontSize="medium"
              style={{ fill: "white", stroke: "thin", alignItem: "left" }}
            />
            <PlayCircleOutlineIcon
              className="PlayCircleOutlineIcon"              
              style={{ fill: "white", stroke: "white",height: "25px", width: "25px",backgroundColor: "red",borderRadius: "50%",marginLeft:"18px"}}
            />
            <span className="span-music">Music</span>
      </Link>

      <ul className="list-group">
       
        <Link to="/">        
          <li className="list-group-item ">
            <HomeRoundedIcon
              className="HomeRoundedIcon"
              fontSize="medium"
              
              style={{ fill: "white", stroke: "thin" }}
            />
            <span onClick={handleHomeClick}>Home</span>
          </li>
        </Link>

        <Link to="/">
          <li className="list-group-item ">
            <ExploreOutlinedIcon
              className="ExploreOutlinedIcon"
              fontSize="medium"
              style={{ fill: "white", stroke: "thin" }}
            />
            <span>Explore</span>
          </li>
        </Link>

        <Link to="/library">
          <li className="list-group-item ">
            <LibraryMusicOutlinedIcon
              className="LibraryMusicOutlinedIcon"
              fontSize="medium"
              style={{ fill: "white", stroke: "thin" }}
            />
            <span>Library</span>
          </li>
        </Link>

        <Link to="/upgrade">
          <li className="list-group-item ">
            <PlayCircleOutlineSharpIcon
              className="PlayCircleOutlineSharpIcon"
              fontSize="medium"
              style={{ fill: "white", stroke: "thin" }}
            /> 
            <span>Upgrade</span>
          </li>
        </Link>
      </ul>

      <div className="newPlaylist" onClick={handleDeadClick} style={{ cursor:"pointer" }}>
        <AddIcon fontSize="large" style={{ fill: "white", stroke: "thin" }} />
        <span>New Playlist</span>
      </div>
      <div className="likedMusic" style={{ cursor:"pointer" }} onClick={handleDeadClick} >
        <h5>Liked Music</h5>
        <p>Auto Playlist</p>
      </div>
      <div className="Episodes-for-later" style={{ cursor:"pointer" }} onClick={handleDeadClick}>
        <h5>Episodes for Later</h5>
        <p>
          <PushPinIcon
            fontSize="small"
            style={{ fill: "white", stroke: "thin", fontSize: "12px" }}
          />
          Auto Playlist
        </p>
      </div>

      {/* Side window for "Coming Soon" message */}
      {showMessage && (
        <div className="side-window">
          <p>Feature Coming Soon!</p>
        </div>
      )}
    </>
  );
}
export default Sidebar;
