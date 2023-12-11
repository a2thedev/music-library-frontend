const MusicTable = ({}) => {
  const music = ["Always Knew", "Facts", "Broke", "Blessings"];
  const musicItems = music.map((song) => <div>{song}</div>);
  return (
    <div className="flex-item">
      <h4>My Music</h4>
      <div>{musicItems}</div>
    </div>
  );
};

export default MusicTable;
