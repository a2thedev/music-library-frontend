import "./MusicInfo.css";

const MusicInfo = ({ musicobj }) => {
  return (
    musicobj && (
      <div className="flex-item">
        <h4>{musicobj.title}</h4>
        <div>
          <div className="data-item">
            <span>Artist</span>
            <span>{musicobj.artist}</span>
          </div>
          <div className="data-item">
            <span>Album</span>
            <span>{musicobj.album}</span>
          </div>
          <div className="data-item">
            <span>Release Date</span>
            <span>{musicobj.releaseDate}</span>
          </div>
          <div className="data-item">
            <span>Genre</span>
            <span>{musicobj.genre}</span>
          </div>
        </div>
      </div>
    )
  );
};

export default MusicInfo;
