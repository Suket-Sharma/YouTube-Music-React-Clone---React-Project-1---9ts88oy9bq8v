import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <ul className="list-group">

        <Link to="/" ><li className="list-group-item d-flex justify-content-center">
         <span>Music</span> 
        </li></Link>
        <Link to="/"><li className="list-group-item d-flex justify-content-center">
        <span>Home</span>
        </li></Link>
        <Link to="/"> <li className="list-group-item d-flex justify-content-center">
        <span>Explore</span>
        </li></Link>
        <Link to="/library"> <li className="list-group-item d-flex justify-content-center">
        <span>Library</span> 
        </li></Link>
        <Link to="/"> <li className="list-group-item d-flex justify-content-center">
        <span>Update</span> 
        </li></Link>
      </ul>
    </>
  );
}
export default Sidebar;
