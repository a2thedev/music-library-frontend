const MusicInfo = ({ title }) => {
  return (
    <div>
      <h4>{title}</h4>
      <div>
        <div>
          <span>Artist</span>
          <span>Lecrae</span>
        </div>
        <div>
          <span>Album</span>
          <span>All Things Work Together</span>
        </div>
        <div>
          <span>Release Date</span>
          <span>2017-09-17</span>
        </div>
        <div>
          <span>Genre</span>
          <span>Hip Hop</span>
        </div>
      </div>
    </div>
  );
};

export default MusicInfo;
