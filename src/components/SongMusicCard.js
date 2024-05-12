function SongMusicCard(props) {
  const {title,thumbnail,artist,id,onMusicHandler} = props;

  const artistList = artist.map((item)=>item.name).join(" & ");
  return (
    <>
      <section className="songMusicCard">
        
        <div className="song-img">
          <img 
            src={thumbnail}
            height={"50"}
            width={"50"}
            className="bannerImg"
            onClick={()=>onMusicHandler(id)}
          />
        </div>
        <div className="music-artist">
          <div className="song-music-title">{title}</div>
          <div className="song-artist">
            {artistList}
          </div>
        </div>
      </section>
    </>
  );
}
export default SongMusicCard;




