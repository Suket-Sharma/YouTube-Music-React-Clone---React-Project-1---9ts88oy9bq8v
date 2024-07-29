import Sidebar from "../components/Sidebar";
import MusicCard from "../components/MusicCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { MusicPlayer } from "../components/MusicPlayer";
import Navbar from "../components/Navbar";
import { useUser } from "../providers/UserProviders";
import { Link } from "react-router-dom";
import youtube1 from "../images/youtube1.png";

function PremiumPlan() {
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
        "https://academics.newtonschool.co/api/v1/music/song?limit=100",
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
          <div className="yt-Membership">
            <div className="yt-music-logo">
              <div className="yt-name">
                <h3>
                  
                  Youtube Music</h3>
                <p>Indivisual Membership</p>
              </div>
              <div className="prepaid-plan">
                <h5>Pre-paid plans</h5>
                <p>
                  Pay up front. Top up anytime. We accept many forms of payment,
                  including UPI.
                </p>
              </div>
            </div>
            <div className="monthly-plans">
              <div className="yearly">
                <h5>12-month</h5>
                <p>₹990.00</p>
              </div>
              <div className="three-month">
                <h5>3-month</h5>
                <p>₹309.00</p>
              </div>
              <div className="one-month">
                <h5>1-month</h5>
                <p>₹109.00</p>
              </div>
            </div>
            <div className="subscription-plan">
              <h5>Subscription plan</h5>
              <p>
                Automatic payments such as credit cards are required. Billing
                recurs monthly. Cancel anytime.
              </p>
            </div>
            <div className="free-monthly">
              <div className="free-monthly-left">
                <h5>Monthly subscription</h5>
                <p>1 month free</p>
                <p>₹99/month after trial</p>
              </div>
              <div className="free-monthly-right">
                <button>1 month free</button>
              </div>              
            </div>
            <div className="policy">
                <p>
                  Restrictions apply to certain features and vary by device,
                  geographical location of the user, and others.<span>Learn more</span><br/>
                  Only first-time YouTube Red, YouTube Premium, YouTube Music Premium
                  and Google Play Music subscribers are eligible for trials,
                  introductory offers or promotional pricing. Except for Google
                  Workspace Individual edition accounts, Google Workspace
                  accounts are not eligible for trials unless they are signing
                  up for Student subscriptions. Users can only sign up for one
                  trial per payment method. Learn more <span>here.</span><br/>
                  You’ll be
                  automatically charged the price listed unless you cancel
                  during your trial, and then every month starting on the first
                  billing date until you cancel your subscription. Cancel
                  anytime. No refunds or credits for partial billing periods.
                  <span>Refund policy</span><br/>  Family subscription: Invite up to 5 additional
                  family members to join your Google family group and share your
                  YouTube Music Premium and YouTube Premium subscription. All
                  family members must be age 13 or older, have a Google Account,
                  and reside in the same household as the family manager. Family
                  subscriptions are available in select countries. <span>Learn more</span> <br/>
                  Student subscription: Sign up for either a YouTube Music
                  Premium or YouTube Premium membership as a student and get all
                  the same benefits at a discounted rate. YouTube student
                  memberships are only available to full-time students at higher
                  education institutions in select countries, and eligibility
                  will be verified by a third-party verification service. <span>Learn
                  more</span> <br/>
                  Pre-paid plans: You can make a single-time purchase of a
                  YouTube Premium or YouTube Music Premium individual membership
                  for a fixed time period on a non-recurring basis using the
                  pre-paid plans. Once the time period you purchased ends, the
                  pre-paid plan will automatically terminate and you will lose
                  access to your benefits. To maintain access to your benefits,
                  you will need to make another purchase with options provided
                  by your billing platform or switch to a different plan. You
                  may have up to 24 months of pre-paid access.<br/> You may contact
                  our support team to terminate access to the prepaid plan. Note
                  that once your access is terminated, you will no longer have
                  access to your benefits. No partial refunds are available.
                  <span>Learn more</span> <br/>
                  Pre-paid plans are currently available on Android
                  and Web in select locations. <span>Learn more</span><br/>
                  Pre-paid plans cannot
                  be combined with other YouTube Premium or YouTube Music
                  Premium offers including family or student subscription and
                  free trials. Pre-paid plans can be subject to limited time
                  introductory offers.<br/> Playback: You must have an Internet
                  connection to stream videos or to download them. <span>Supported
                  devices</span><br/>
                  By completing your purchase, you verify that you are
                  at least 18 years old and agree to these <span>terms.</span><br/> Price may vary
                  by user. Google reserves the right to change the price at any
                  time. For accepted payment methods, see <span>here.</span>
                </p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PremiumPlan;
