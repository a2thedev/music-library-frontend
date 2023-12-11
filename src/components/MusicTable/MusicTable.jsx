import MusictItem from "../MusicItem/MusicItem";

const MusicTable = ({ music = [] }) => {
  const musicItems = music.map((song) => (
    <MusictItem key={song.title} title={song.title} />
  ));
  return (
    <div className="flex-item">
      <h4>My Music</h4>
      <div>{musicItems}</div>
    </div>
  );
};

export default MusicTable;
