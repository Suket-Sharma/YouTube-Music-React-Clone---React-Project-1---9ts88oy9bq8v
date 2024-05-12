import Navbar from "../components/Navbar";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import students from "../images/students.jpg";
import { Link } from "react-router-dom";

function Upgrade() {
  return (
    <>
      <Navbar />
      <div className="upgrade-section1">
        <div className="yt-logo">
          <h1 className="span-ytmusic">
            <PlayCircleOutlineIcon
              className="PlayCircleOutlineIcon"
              style={{
                fill: "white",
                stroke: "white",
                height: "70px",
                width: "70px",
                backgroundColor: "red",
                borderRadius: "50%",
              }}
            />
            YouTube Music
          </h1>
        </div>

        <div className="get-music">
          <p>Get Music Premium to listen to music</p>
          <p>ad-free, offline & with your screen off</p>
        </div>
        <div className="premium">
          <Link to="/premiumplan" >
          <button className="premium-btn">Get Music Premium</button>
          </Link>

        </div>
        <div className="premium-plan">
          <p>Prepaid and subscription plans available. Prices start at</p>
          <p>
            ₹99.00/month. Free trials available with subscription plans only.
          </p>
        </div>
        <div className="learn-more">
          <p>
            Or save money with an <span>annual, family or student plan</span>{" "}
          </p>
          <p>
            <span>Restrictions apply. Learn more here.</span>
          </p>
        </div>
      </div>
      <div className="upgrade-section2">
        <div className="listen">
          <div className="one">
          <HeadphonesIcon
            fontSize="large"            
            style={{              
              fill:"red",
              height:"75px",
              width:"75px",
              borderRadius:"50%",
              border:"6px solid red" ,
              padding:"10px", 
              marginBottom:"10px", 
              marginTop:"10px"                     
            }}
          />
          </div>
          <div className="two">
          <h1 style={{              
              lineHeight:"0.9"              
            }}>Listen in the background</h1>
          </div>
          <div className="three"            
          >
            <p>Don’t worry about your music stopping when you lock your screen or use other apps.</p>
          </div>
        </div>
        <div className="ad-free">
          <div className="one">
          <PlayCircleOutlinedIcon
            style={{              
              fill:"red",
              height: "100px",
              width: "84px"              
            }}
          />
          </div>
          <div className="two">
            <h1>Ad-free music</h1>
            <p>Listen to the world of music without ads.</p>
          </div>
          <div className="three">
          
          </div>
        </div>
        <div className="download">
          <div className="one">
          <DownloadForOfflineOutlinedIcon
            style={{              
              fill:"red",
              height: "100px",
              width: "84px"              
            }}
          />
          </div>
          <div className="two">
            <h1>Download and go</h1>
            <p>Listen to your favorite music on the go.</p>
          </div>
          <div className="three">
          
          </div>
        </div>
      </div>
      <div className="upgrade-section3">
        <img src={students}/>
        <div className="text">
          <h1>background Play</h1>
          <p>Turn off the screen, use other apps, all while your music keeps playing.</p>
        </div>

      </div>
      <div className="upgrade-section6">
        <p>
          Have other questions? Visit the <span>YouTube Help Center</span>
        </p>
      </div>
    </>
  );
}
export default Upgrade;
