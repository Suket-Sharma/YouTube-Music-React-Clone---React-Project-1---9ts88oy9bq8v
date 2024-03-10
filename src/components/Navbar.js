import { Link } from "react-router-dom";
import { useUser} from "../providers/UserProviders";

function Navbar() {
  const {getToken,getName,onTokenHandler,onNameHandler} = useUser();
  const logoutHandler=()=>{
    onTokenHandler(null);
    onNameHandler(null);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('name');
  }

  

  return (
    <>
      <nav className="navbar  navbar-expand-md navbar-light bg-black">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <input
            className="form-control w-25 "
            type="search"
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
              {getName?getName:"profile"}
            </div>
            <div className="dropdown-menu">
              {getToken && <><Link className="dropdown-item" onClick={logoutHandler} to="/login">Logout</Link>
              </>}

              {!getToken && <>
              <Link className="dropdown-item" to="/login">Login</Link>
              <Link className="dropdown-item" to="/register">Register</Link> </>}
              
            </div>
          </li>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
