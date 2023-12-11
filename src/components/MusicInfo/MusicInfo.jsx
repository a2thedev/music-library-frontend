const MusicInfo = ({ musicobj }) => {
  console.log(musicobj);

  return (
    <div>
      <h4>{musicobj.title}</h4>
      <div>
        <div>
          <span>Artist</span>
          <span>{musicobj.artist}</span>
        </div>
        <div>
          <span>Album</span>
          <span>{musicobj.album}</span>
        </div>
        <div>
          <span>Release Date</span>
          <span>{musicobj.releaseDate}</span>
        </div>
        <div>
          <span>Genre</span>
          <span>{musicobj.genre}</span>
        </div>
      </div>
    </div>
  );
};

export default MusicInfo;
