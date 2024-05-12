import animal from "../images/animal.jpg";
function OldSongs(){
  return(<div>
    <div className="OldSongs-container">
            <h2 style={{ marginLeft:"30px" }}>OldSongs</h2>
            <div className="OldSongs">
              <div>
                <img src={animal} style={{ width: "150px", height: "150px",marginLeft:"30px" }} />
              </div>
            </div>
    </div>
  </div>)
}
export default OldSongs;